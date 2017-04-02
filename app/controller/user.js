'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * login(ctx) {
        const body = ctx.request.body;
        const user = yield this.ctx.service.user.login(body);
        if(user){
            this.locals = {
                userName:user.userName
            };
            console.log(user)
            yield this.ctx.render('hello.tpl',this.locals);
        }else{
            console.log("not login")
            yield this.ctx.render('index.tpl',{});
        }
    }
    * register(ctx){
        const body = ctx.request.body;
        yield this.ctx.service.user.register(body);
        this.locals = {
            loginSuccess:true
        };
        ctx.response.redirect('/',this.locals)
    }
}
  return HomeController;
};
