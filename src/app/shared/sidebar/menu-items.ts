import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Agents and Offices',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/account/5ced2266eadf9c6df7e51a8b/view',
    title: 'Account',
    icon: 'fas fa-shield-alt',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '/offices',
    title: 'Offices',
    icon: 'fas fa-hospital',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '/agent',
    title: 'Agents',
    icon: 'fas fa-users',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '/brokers',
    title: 'Brokers',
    icon: 'fas fa-handshake',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '',
    title: 'Mandates',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/mandate',
    title: 'My Mandates',
    icon: 'fas fa-clipboard-list',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Available Stock',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/office-stock',
    title: 'Office Listings',
    icon: 'fas fa-map',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/',
    title: 'Network Listings',
    icon: 'fas fa-sitemap',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Contacts',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/contacts',
    title: 'My Contacts',
    icon: 'fas fa-address-book',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/leads',
    title: 'Leads',
    icon: 'fas fa-address-card',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Brand & Marketing',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/brand-marketing',
    title: 'Brand & Marketing',
    icon: 'fas fa-images',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Ref',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/starter',
    title: 'Starter Page',
    icon: 'icon-Files',
    class: '',
    extralink: false,
    submenu: []
  }
];
