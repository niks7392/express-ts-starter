
import { Services } from '../types/services';
import * as prisma from './prisma'



interface AppServices extends Services {
    'prisma': typeof prisma,
}

let utils: AppServices = {
    'prisma': prisma,
}

export default {
    get(name: keyof AppServices) {
        return utils[name]
    }
}