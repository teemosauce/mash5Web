import VueI18n from 'vue-i18n'
import zhCN from './zh-cn'
import en from './en'

export default function(Vue) {
	Vue.use(VueI18n);
	Vue.config.lang = 'zh-cn';
	Vue.locale('zh-cn', zhCN);
	Vue.locale('en', en);
}