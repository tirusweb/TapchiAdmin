import Login from '+/pages/Login';
import AdminPage from '+/pages/Admin';

import NotFoundPage from '+/pages/NotFoundFage';

const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/', component: AdminPage },
    { path: '*', component: NotFoundPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
