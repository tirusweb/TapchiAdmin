import Login from '+/pages/Login';
import AdminPage from '+/pages/Admin';

const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/', component: AdminPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
