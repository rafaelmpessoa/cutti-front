import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}



const Widgets = Loadable({
  loader: () => import('./views/Widgets/Widgets'),
  loading: Loading,
});

const Pacientes = Loadable({
  loader: () => import('./views/Pacientes/Pacientes'),
  loading: Loading,
});

const Paciente = Loadable({
  loader: () => import('./views/Pacientes/Paciente'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/pacientes', exact: true,  name: 'Pacientes', component: Pacientes },
  { path: '/pacientes/:id', exact: true, name: 'Paciente Details', component: Paciente },
];

export default routes;
