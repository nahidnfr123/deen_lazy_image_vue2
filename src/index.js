import DeenLazyImage from "@/components/DeenLazyImage"
import lazyLoadDirective from "@/components/LazyLoadDirective";

const DeenLazyImageInstall = {
    /*
   * install function
   * @param  {Vue} Vue
   * @param  {object} options  lazyload options
   */
    install(Vue, options = {source: ""}) {
        // const isVue2 = Vue.version.split('.')[0] === '2'
        Vue.prototype.$Lazyload = DeenLazyImage

        if (options)
            Vue.component('DeenLazyImage', DeenLazyImage)

        // if (isVue2)
        Vue.directive('lazyload', lazyLoadDirective)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(DeenLazyImageInstall);
}

export default DeenLazyImageInstall
