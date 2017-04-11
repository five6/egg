'use strict';

module.exports = app => {
  app.get('/','index.index');
  app.get('/view/index','index.index');
  app.get('/view/login','index.login');
  app.get('/view/register','index.register');
  app.post('/api/login','user.login');
  app.post('/api/logout','user.logout');
  app.post('/api/register','user.register');
  app.get('/api/books','user.books');
  app.put('/api/user/update','user.update');
};
