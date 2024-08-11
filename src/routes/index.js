import Login from '+/pages/Login';
import AdminPage from '+/pages/Admin';
import NotFoundPage from '+/pages/NotFoundFage';
import ForgotPassword from '+/pages/ForgotPassword';
import VerifyOTP from '+/pages/verifyOTP';

const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/verify-otp', component: VerifyOTP },
    { path: '/', component: AdminPage },
    { path: '*', component: NotFoundPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
