const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Home', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'Peoples', path: '/peoples', component: () => import('pages/GetPeoples.vue') },
      { name: 'Planets', path: '/planets', component: () => import('pages/GetPlanets.vue') },
      { name: 'Films', path: '/films', component: () => import('pages/GetFilms.vue') },
      { name: 'Species', path: '/species', component: () => import('pages/GetSpecies.vue') },
      { name: 'Vehicles', path: '/vehicles', component: () => import('pages/GetVehicles.vue') },
      { name: 'Starships', path: '/starships', component: () => import('pages/GetStarships.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
