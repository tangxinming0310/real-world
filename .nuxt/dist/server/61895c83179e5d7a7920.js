exports.ids=[5],exports.modules={28:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return l}));var o=r(6);const n=data=>Object(o.b)({method:"POST",url:"/api/users/login",data:data}),d=data=>Object(o.b)({method:"POST",url:"/api/users",data:data}),l=data=>Object(o.b)({method:"PUT",url:"/api/user",data:data})},33:function(e,t,r){"use strict";r.r(t);var o=r(28);const n=void 0;var d={middleware:"notAuthenticated",name:"LoginIndex",computed:{isLogin(){return"login"===this.$route.name}},data:()=>({user:{username:"",email:"",password:""},errors:{}}),methods:{async onSubmit(){try{const e=this.isLogin?o.a:o.b,{data:data}=await e({user:this.user});this.$store.commit("setUser",data.user),n.set("user",data.user),this.$router.push("/")}catch(e){this.errors=e.response.data.errors}}}},l=r(1);var component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[e._ssrNode('<div class="container page" data-v-fe84bf48>',"</div>",[e._ssrNode('<div class="row" data-v-fe84bf48>',"</div>",[e._ssrNode('<div class="col-md-6 offset-md-3 col-xs-12" data-v-fe84bf48>',"</div>",[e._ssrNode('<h1 class="text-xs-center" data-v-fe84bf48>'+e._ssrEscape(e._s(e.isLogin?"Sign in":"Sign up"))+"</h1> "),e._ssrNode('<p class="text-xs-center" data-v-fe84bf48>',"</p>",[e.isLogin?e._e():r("nuxt-link",{attrs:{to:"/login"}},[e._v("Have an account?")]),e._ssrNode(" "),e.isLogin?r("nuxt-link",{attrs:{to:"/register"}},[e._v("Need an account?")]):e._e()],2),e._ssrNode(' <ul class="error-messages" data-v-fe84bf48>'+e._ssrList(e.errors,(function(t,r){return e._ssrList(t,(function(t,o){return"<li data-v-fe84bf48>"+e._ssrEscape(e._s(r)+" "+e._s(t))+"</li>"}))}))+"</ul> <form data-v-fe84bf48>"+(e.isLogin?"\x3c!----\x3e":'<fieldset class="form-group" data-v-fe84bf48><input required="required" type="text" placeholder="Your Name"'+e._ssrAttr("value",e.user.username)+' class="form-control form-control-lg" data-v-fe84bf48></fieldset>')+' <fieldset class="form-group" data-v-fe84bf48><input required="required" type="email" placeholder="Email"'+e._ssrAttr("value",e.user.email)+' class="form-control form-control-lg" data-v-fe84bf48></fieldset> <fieldset class="form-group" data-v-fe84bf48><input required="required" type="password" placeholder="Password" minlength="8"'+e._ssrAttr("value",e.user.password)+' class="form-control form-control-lg" data-v-fe84bf48></fieldset> <button class="btn btn-lg btn-primary pull-xs-right" data-v-fe84bf48>'+e._ssrEscape("\n            "+e._s(e.isLogin?"Sign in":"Sign up")+"\n          ")+"</button></form>")],2)])])])}),[],!1,(function(e){}),"fe84bf48","5bfa1a2a");t.default=component.exports}};