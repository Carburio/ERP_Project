import { Icon } from '@chakra-ui/react';
import {
  // MdBarChart,
  MdPerson,
  MdHome,
  // MdLock,
  MdOutlineShoppingCart,
  MdPayments,
  MdTrackChanges,
  MdDocumentScanner
} from 'react-icons/md';

// Admin Imports
// import MainDashboard from './pages/admin/default';
// import NFTMarketplace from './pages/admin/nft-marketplace';
// import Profile from './pages/admin/profile';
// import DataTables from './pages/admin/data-tables';
// import RTL from './pages/rtl/rtl-default';

// Auth Imports
// import SignInCentered from './pages/auth/sign-in';
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Clienti',
    layout: '/admin',
    path: '/clients',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  },
  {
    name: 'Fornitori',
    layout: '/admin',
    path: '/fornitori',
    icon: (
      <Icon
        as={MdTrackChanges}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  }, 
   {
    name: 'Fatture',
    layout: '/admin',
    path: '/fatture',
    icon: <Icon as={MdPayments} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Distinta Base',
    layout: '/admin',
    path: '/distinta',
    icon: <Icon as={MdDocumentScanner} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Profilo',
    layout: '/admin',
    path: '/profilo',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  // },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  // },
];

export default routes;
