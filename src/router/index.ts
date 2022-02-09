import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
    meta: {
      title: '登录'
    }
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/pages/Home.vue"),
    redirect: "/index",
    children: [
      { path: "/index", name: "content", component: () => import("@/components/LayoutContent.vue") },
      { path: "/article", name: "article", component: () => import("@/pages/Article.vue") },
      { path: "/article/:articleId", name: "articleDetial", component: () => import("@/pages/ArticleDetail.vue") }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Login.vue")
  },
  // 配置404页面
  {
    path: '/:pathMatch(.*)',
    component: () => import("@/pages/NotFound.vue")
  },
]
const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
router.beforeEach((to, from, next) => {
  // 登录放行
  if (to.path == '/' || to.path == '/login') {
    next()
  } else {
    // 判断是否有token
    const token = localStorage.getItem('token')
    if (!token) {
      window.$message.error('未登录，请先登录')
      next('/login')
    } else {
      next()
    }

  }
})
export default router