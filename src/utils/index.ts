import { Utils } from '../types/utils';
import * as errors from './errors';



interface AppUtils extends Utils {
    'errors': typeof errors
}

let utils: AppUtils = {
    'errors': errors
}

export default {
    get(name: keyof AppUtils) {
        return utils[name]
    }
}