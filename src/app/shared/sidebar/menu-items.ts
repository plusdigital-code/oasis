import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
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
    path: '/commercial',
    title: 'Commercial',
    icon: 'icon-Office',
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
    path: '/stock',
    title: 'Office Listings',
    icon: 'fas fa-map',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/commercial',
    title: 'Commercial Stock',
    icon: 'icon-Office',
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
    path: '/companies',
    title: 'Companies',
    icon: 'fas fa-briefcase',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Agents and Offices',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
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
    title: 'Agents & Brokers',
    icon: 'fas fa-users',
    class: '',
    extralink: false,
    submenu: [
    ]
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
  }
];
