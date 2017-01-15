"use strict";

let Vue = require('vue'),
    ElementUI = require('element-ui'),
    locale = require('element-ui/lib/locale/lang/en'),
    App = require('./App.vue'),
    VueRouter = require('vue-router');

require('element-ui/lib/theme-default/index.css')
require('element-ui/lib/theme-default/icon.css')

const GetStarted = resolve => require(['./components/Get-Started.vue'], resolve)
const BeforeConfig = resolve => require(['./components/Before-Config.vue'], resolve)
const Config = resolve => require(['./components/Config.vue'], resolve)
const RunTheInstall = resolve => require(['./components/Run-The-Install.vue'], resolve)
const FillInformation = resolve => require(['./components/Fill-Information.vue'], resolve)
const Installation = resolve => require(['./components/Installation.vue'], resolve)
const NotFound = resolve => require(['./components/NotFound.vue'], resolve)

const router = new VueRouter({
    root: '/',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {path: '/', component: GetStarted},
        {path: '/setup-config', component: BeforeConfig},
        {
            path: '/config', component: Config,
            beforeEnter: (to, from, next) => {
                if (from.path === "/setup-config" && to.path === "/config") {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/install', component: RunTheInstall,
            beforeEnter: (to, from, next) => {
                if (from.path === "/config" && to.path === "/install") {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/fill-information', component: FillInformation,
            beforeEnter: (to, from, next) => {
                if (from.path === "/install" && to.path === "/fill-information") {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {path: '/installation', component: Installation},
        {path: '*', component: NotFound}
    ]
})

Vue.use(VueRouter)

Vue.use(ElementUI, {locale})

new Vue({
    el: 'body',
    render: h => h(App),
    router
})
