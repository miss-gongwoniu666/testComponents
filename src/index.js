import * as components from './components'
import {Button} from './components'
var VuePlugin = {}
VuePlugin.install = function(Vue, options) {
    for(let component in components) {
        Vue.component('test'+component, components[component]);
    }
};
export default VuePlugin