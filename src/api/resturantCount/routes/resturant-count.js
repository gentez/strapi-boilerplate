module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/resturantCount',
     handler: 'resturant-count.getCount',
     config: {
       policies: [],
       
       middlewares: [],
     },
    },
  ],
};
