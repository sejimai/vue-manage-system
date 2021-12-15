import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/Home',
        },
        {
            path: '/',
            component: () =>
                import ( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: {
                title: '自述文件',
            },
            children: [{
                    path: '/Home',
                    component: () =>
                        import ( /* webpackChunkName: "dashboard" */ '../components/page/Home.vue'),
                    meta: {
                        title: '主页',
                    },
                },
                {
                    path: '/AllDevice',
                    component: () =>
                        import ( /* webpackChunkName: "dashboard" */ '../components/page/AllDevice.vue'),
                    meta: {
                        title: '设备列表',
                    },
                },
                {
                    path: '/AddDevice',
                    component: () =>
                        import ( /* webpackChunkName: "dashboard" */ '../components/page/AddDevice.vue'),
                    meta: {
                        title: '增加设备',
                    },
                },
                {
                    path: '/LocateDevice',
                    component: () =>
                        import ( /* webpackChunkName: "dashboard" */ '../components/page/LocateDevice.vue'),
                    meta: {
                        title: '设备定位查询',
                    },
                },
                {
                    path: '/AllUser',
                    component: () =>
                        import ( /* webpackChunkName: "dashboard" */ '../components/page/AllUser.vue'),
                    meta: {
                        title: '用户列表',
                    },
                },
                {
                    path: '/UserOperationList',
                    component: () =>
                        import ( /* webpackChunkName: "dashboard" */ '../components/page/UserOperationList.vue'),
                    meta: {
                        title: '用户操作记录',
                    },
                },
            ],
        },
        {
            path: '/login',
            component: () =>
                import ( /* webpackChunkName: "dashboard" */ '../components/page/Login.vue'),
            meta: {
                title: '登录',
            },
        },
        {
            path: '*',
            redirect: '/',
        }
    ],
});