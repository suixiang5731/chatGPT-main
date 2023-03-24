import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css' //样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import VueMarkdown from "vue-markdown";
// import 'github-markdown-css/github-markdown.css'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';



// highlightjs
// import hljs from 'highlight.js';




const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//创建v-highlight全局指令
app.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})


VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

app.use(router)
app.use(ElementPlus)
// app.use(VueMarkdown)
app.mount('#app')
app.use(VMdPreview);