// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import useI18n from './i18n'

//使用i18n国际化
useI18n(Vue);

/* eslint-disable no-new */
const app = new Vue({
	el: '#app',
	render: h => h(App)
}) 

console.log(app);