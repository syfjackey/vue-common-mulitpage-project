
import IndexContainer from '../container/indexContainer'
import ErrorContainer from '../errorPage/container/indexContainer'
import Build from '../errorPage/build'
import Error404 from './../errorPage/404'
import Error500 from '../errorPage/500'
import Index from '../index'
// 默认路由表
const baseRoutes = [{
    path: '/manageSystem/',
    name: 'manageSystem',
    component: IndexContainer,
    redirect: '/manageSystem/index',
    children: [
        {
            path: '/manageSystem/index',
            name: 'manageIndex',
            component: Index,
        }
    ]
},
{
    path: '/manageSystem/error',
    name: '错误',
    component: ErrorContainer,
    children: [{
        path: 'build',
        name: '建设中',
        component: Build,
    },
    {
        path: '404',
        name: '404',
        component: Error404
    },
    {
        path: '500',
        name: '500',
        component: Error500
    }
    ]
}
]

export default baseRoutes
