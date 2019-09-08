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
    path: "/notes",
    title: "Ders Notları",
    name: "notes",
    icon: "far fa-paper-plane",
    color: "primary",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Dashboard"))
  },
  {
    path: "/staj-bul",
    title: "Staj Bul",
    name: "internships",
    icon: "far fa-address-card",
    color: "primary",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Dashboard"))
  },
  {
    path: "/kulüpler",
    title: "Kulüpler",
    name: "role",
    icon: "fas fa-users",
    color: "primary",
    showInMenu: true
    /* component: LoadableComponent(() => import('../../scenes/Roles')),*/
  },
  {
    path: "/unıversiteler",
    title: "Üniversiteler",
    name: "colleges",
    icon: "fas fa-university",
    color: "primary",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Colleges"))
  },
  {
    path: "/makaleler",
    title: "Makaleler",
    name: "articles",
    icon: "far fa-newspaper",
    showInMenu: true,
    color: "primary",
    component: LoadableComponent(() => import("../../scenes/Articles"))
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

export const primaryRouters: any = [
  {
    path: "/anasayfa",
    title: "Ana Sayfa",
    name: "notes",
    icon: "fas fa-home",
    color: "primary",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Dashboard"))
  },
  {
    path: "/bildirimler",
    title: "Bildirimler",
    name: "notifications",
    icon: "far fa-bell",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Notifications"))
  },
  {
    path: "/mesajlar",
    title: "Mesajlar",
    name: "messages",
    icon: "far fa-envelope",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Dashboard"))
  },
  {
    path: "/profil",
    title: "Profil",
    name: "profile",
    icon: "far fa-paper-plane",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Dashboard"))
  }
];

export const routers = [...appRouters, ...primaryRouters];
