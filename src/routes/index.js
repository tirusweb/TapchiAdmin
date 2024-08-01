import { Component } from 'react';
import Post from '+/pages/Post/Post';
import Login from '+/pages/Login';
import Content from '+/pages/Content';

const publicRoutes = [
    { path: '/post', component: Post },
    { path: '/login', component: Login },
    { path: '/content', component: Content, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
