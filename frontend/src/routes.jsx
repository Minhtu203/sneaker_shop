import Home from '@/pages/Home';
import DefaultLayout from '@/layout/DefaultLayout';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';

export const publicRoutes = [
  { path: '/login', component: Login, layout: null },
  { path: '/register', component: Register, layout: null },
  { path: '/forgotpassword', component: ForgotPassword, layout: null },
];

export const privateRoutes = [{ path: '/', component: Home, layout: DefaultLayout }];
