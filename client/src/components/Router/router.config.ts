import LoadableComponent from "../Loadable";
import AppLayout from "../Layout/AppLayout";

export const appRouters: any = [
  {
    path: "/",
    exact: true,
    name: "home",
    title: "",
    icon: "",
    color: "primary",
    component: AppLayout,
    isLayout: true,
    showInMenu: false
  },
  {
    path: "/anasayfa",
    title: "Ana Sayfa",
    name: "user",
    icon: "fa fa-home",
    color: "primary",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Dashboard"))
  },
  {
    path: "/bildirimler",
    title: "Bildirimler",
    name: "bildirimler",
    icon: "far fa-bell",
    color: "primary",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Dashboard"))
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
    showInMenu: true,
    component: LoadableComponent(() => import("../ProfileCard"))
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
    showInMenu: true
    /* component: LoadableComponent(() => import('../../components/Logout')) */
  }
];

export const routers = [...appRouters];
