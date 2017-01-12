import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-default/icon.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'

Vue.use(ElementUI, {locale})

new Vue({
    el: 'body',
    components: {App},
    render: h => h(App)
})