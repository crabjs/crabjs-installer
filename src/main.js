const Vue = require('vue');
const ElementUI = require('element-ui');
require('element-ui/lib/theme-default/index.css')
require('element-ui/lib/theme-default/icon.css')
const locale = require('element-ui/lib/locale/lang/en')
const App = require('./App.vue')

Vue.use(ElementUI, {locale})

new Vue({
    el: 'body',
    components: {App},
    render: h => h(App)
})