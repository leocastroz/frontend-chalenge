const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/peoples', component: () => import('pages/GetPeoples.vue') },
      { path: '/planets', component: () => import('pages/GetPlanets.vue') },
      { path: '/films', component: () => import('pages/GetFilms.vue') },
      { path: '/species', component: () => import('pages/GetSpecies.vue') },
      { path: '/vehicles', component: () => import('pages/GetVehicles.vue') },
      { path: '/starships', component: () => import('pages/GetStarships.vue') },
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
