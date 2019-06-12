// import App from './App';
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App'
import Main from './main/main'


// 核心概念

const routes = [
  {
    path: '/',
    component: App,
    // breadcrumbName:"home",
    // indexRoute: { component: Home }, 
    // childRoutes: [
    //   { path: 'advanced', breadcrumbName:"advanced", component: Advanced},
    //   { path: 'todoList', breadcrumbName:"todoList", component: TodoList },
    // ]
  },{
    path: '/main',
    component: Main
  }
]



export default routes