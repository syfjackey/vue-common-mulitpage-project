import EventBus from '@/utils/eventbus';
import store from '@/views/manageSystem/store'
import { baseRoutes, addRoutes } from '@/views/manageSystem/router/index';
const systemName = '/manageSystem'
const routerConfig = {
    roleMeta: 'role',
    unRoleMeta: 'urole',
    loginMeta: 'requiresAuth',
    loginPath: `${systemName}/login`,
    unLoginRedirect: `${systemName}/login`,
    loginRedirect: `${systemName}/admin`,
}
const ajaxConfig = {
    baseURL: process.env.NODE_ENV === 'production' ? '' : '',
    listenerConfig: {
        key: 'resultCode',
        message: 'message',
        listener: {
            '404'() {
                console.log('网页不存在');
            },
            '500'() {
                console.log('服务器故障');
            },
        }
    }
}
const storageConfig = {
    prefix: 'ty',
    storageType: 'sessionStorage',
    callback(keys, vals, type, Storage) {
        const index = keys.includes('userToken')
        index && type === 'clear' && EventBus.emit('logout')
        index && type === 'set' && EventBus.emit('login')
    }
}
const openMock = process.env.NODE_ENV === 'development'
export {openMock, storageConfig, ajaxConfig,store,baseRoutes, addRoutes,routerConfig,systemName}