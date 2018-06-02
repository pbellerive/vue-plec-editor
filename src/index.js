import VuePlecEditor from './vue-plec-editor'

if (window) {
    window.VuePlecEditor = VuePlecEditor

    if (window.Vue) {
        window.Vue.use(VuePlecEditor)
    }
}
