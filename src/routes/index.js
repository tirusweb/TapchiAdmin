import Post from '+/pages/Post/Post';
import Login from '+/pages/Login';
import Content from '+/pages/Content';
import AdminPage from '+/pages/Admin';

const publicRoutes = [
    { path: '/post', component: Post },
    { path: '/login', component: Login },
    { path: '/content', component: Content, layout: null },
    { path: '/admin', component: AdminPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
