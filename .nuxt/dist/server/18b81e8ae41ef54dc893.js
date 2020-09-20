exports.ids=[4],exports.modules={27:function(t,e,r){"use strict";r.d(e,"e",(function(){return l})),r.d(e,"g",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return n})),r.d(e,"d",(function(){return f})),r.d(e,"f",(function(){return v})),r.d(e,"b",(function(){return m}));var d=r(6);const l=data=>Object(d.b)({method:"GET",url:"/api/articles",data:data}),o=data=>Object(d.b)({method:"GET",url:"/api/articles/feed",data:data}),c=t=>Object(d.b)({method:"POST",url:`/api/articles/${t}/favorite`}),n=t=>Object(d.b)({method:"DELETE",url:`/api/articles/${t}/favorite`}),f=t=>Object(d.b)({method:"GET",url:"/api/articles/"+t}),v=t=>Object(d.b)({method:"GET",url:`/api/articles/${t}/comments`}),m=data=>Object(d.b)({method:"POST",url:"/api/articles",data:data})},31:function(t,e,r){"use strict";r.r(e);var d=r(6);var l=r(27),o={middleware:"authenticated",name:"ProfileIndex",data:()=>({profile:{},articles:[],tab:"my_articles"}),async mounted(){const[t,e]=await Promise.all([(r=this.$route.params.username,Object(d.b)({method:"GET",url:"/api/profiles/"+r})),Object(l.e)({author:this.$route.params.username})]);var r;this.profile={...t.data.profile,followDisabled:!1},this.articles=e.data.articles,this.articles.forEach(article=>article.favoriteDisabled=!1)},watchQuery:["tab"],methods:{async onFavorite(article){article.favoriteDisabled=!0,article.favorited?(await Object(l.c)(article.slug),article.favorited=!1,article.favoritesCount-=1):(await Object(l.a)(article.slug),article.favorited=!0,article.favoritesCount+=1),article.favoriteDisabled=!1},async handleFollow(t){var e;t.followDisabled=!0,t.following?(await(e=t.username,Object(d.b)({method:"DELETE",url:`/api/profiles/${e}/follow`})),t.following=!1):(await(t=>Object(d.b)({method:"POST",url:`/api/profiles/${t}/follow`}))(t.username),t.following=!0),t.followDisabled=!1},async queryArticle(t){this.tab=t;let e="my_articles"===this.tab?{author:this.$route.params.username}:{favorited:this.$route.params.username};const{data:data}=await Object(l.e)({...e});this.articles=data.articles,this.articles.forEach(article=>article.favoriteDisabled=!1)}}},c=r(1);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"profile-page"},[t._ssrNode('<div class="user-info" data-v-3b076d4f><div class="container" data-v-3b076d4f><div class="row" data-v-3b076d4f><div class="col-xs-12 col-md-10 offset-md-1" data-v-3b076d4f><img'+t._ssrAttr("src",t.profile.image)+' class="user-img" data-v-3b076d4f> <h4 data-v-3b076d4f>'+t._ssrEscape(t._s(t.profile.username))+"</h4> <p data-v-3b076d4f>"+t._ssrEscape("\n            "+t._s(t.profile.bio)+"\n          ")+"</p> <button"+t._ssrAttr("disabled",t.profile.followDisabled)+t._ssrClass("btn btn-sm btn-outline-secondary action-btn",{active:t.profile.following})+' data-v-3b076d4f><i class="ion-plus-round" data-v-3b076d4f></i>'+t._ssrEscape("\n             \n            "+t._s(t.profile.following?"unFollow":"Follow")+" "+t._s(t.profile.username)+"\n          ")+'</button></div></div></div></div> <div class="container" data-v-3b076d4f><div class="row" data-v-3b076d4f><div class="col-xs-12 col-md-10 offset-md-1" data-v-3b076d4f><div class="articles-toggle" data-v-3b076d4f><ul class="nav nav-pills outline-active" data-v-3b076d4f><li class="nav-item" data-v-3b076d4f><a'+t._ssrClass("nav-link",{active:"my_articles"===t.tab})+' data-v-3b076d4f>My Articles</a></li> <li class="nav-item" data-v-3b076d4f><a'+t._ssrClass("nav-link",{active:"favorited_articles"===t.tab})+" data-v-3b076d4f>Favorited Articles</a></li></ul></div> "+t._ssrList(t.articles,(function(article){return'<div class="article-preview" data-v-3b076d4f><div class="article-meta" data-v-3b076d4f><a href data-v-3b076d4f><img src="http://i.imgur.com/N4VcUeJ.jpg" data-v-3b076d4f></a> <div class="info" data-v-3b076d4f><a href class="author" data-v-3b076d4f>'+t._ssrEscape(t._s(article.author.username))+'</a> <span class="date" data-v-3b076d4f>'+t._ssrEscape(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))+"</span></div> <button"+t._ssrAttr("disabled",article.favoriteDisabled)+t._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active:article.favorited})+' data-v-3b076d4f><i class="ion-heart" data-v-3b076d4f></i>'+t._ssrEscape(" "+t._s(article.favoritesCount)+"\n            ")+'</button></div> <a href class="preview-link" data-v-3b076d4f><h1 data-v-3b076d4f>'+t._ssrEscape(t._s(article.title))+"</h1> <p data-v-3b076d4f>"+t._ssrEscape(t._s(article.description))+'</p> <span data-v-3b076d4f>Read more...</span> <ul class="tag-list" data-v-3b076d4f>'+t._ssrList(article.tagList,(function(e){return'<li class="tag-default tag-pill tag-outline" data-v-3b076d4f>'+t._ssrEscape(t._s(e))+"</li>"}))+"</ul></a></div>"}))+"</div></div></div>")])}),[],!1,(function(t){}),"3b076d4f","f0cb7faa");e.default=component.exports}};