import LoadableComponent from "../Loadable";

export const appRouters: any = [
  {
    path: "/",
    exact: true,
    name: "home",
    title: "AnaSayfa",
    icon: "fa fa-home",
    color: "primary",
    component: LoadableComponent(() => import("../../components/Layout/index")),
    isLayout: true,
    showInMenu: false
  },
  {
    path: "/users",
    title: "Bildirimler",
    name: "user",
    icon: "far fa-bell",
    color: "primary",
    showInMenu: true
    /* component: LoadableComponent(() => import('../../scenes/Users')),*/
  },
  {
    path: "/roles",
    title: "Mesajlar",
    name: "role",
    icon: "far fa-envelope",
    color: "primary",
    showInMenu: true
    /* component: LoadableComponent(() => import('../../scenes/Roles')),*/
  },
  {
    path: "/tenants",
    title: "Profil",
    name: "tenant",
    icon: "far fa-user",
    color: "primary",
    showInMenu: true
    /* component: LoadableComponent(() => import('../../scenes/Tenants')),
     */
  },
  {
    path: "/about",
    title: "Ayarlar",
    name: "about",
    icon: "fas fa-cog",
    showInMenu: true,
    color: "primary"
    /* component: LoadableComponent(() => import('../../scenes/About'))*/
  },
  {
    path: "/logout",
    title: "Çıkış Yap",
    name: "logout",
    icon: "fas fa-sign-out-alt",
    showInMenu: false
    /* component: LoadableComponent(() => import('../../components/Logout')) */
  }
];

export const routers = [...appRouters];
