import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'My Mandates',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/residential',
    title: 'Residential',
    icon: 'fas fa-home',
    class: '',
    extralink: false,
    submenu: []
  }
];
