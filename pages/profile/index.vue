<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button 
              @click="handleFollow(profile)"
              class="btn btn-sm btn-outline-secondary action-btn" 
              :class="{active: profile.following}"
              :disabled="profile.followDisabled">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{ profile.following ? 'unFollow' : 'Follow'}} {{ profile.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link" 
                  :class="{active: tab === 'my_articles'}"
                  @click="queryArticle('my_articles')"
                >My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" 
                  :class="{active: tab === 'favorited_articles'}"
                  @click="queryArticle('favorited_articles')"
                >Favorited Articles</a>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
              <div class="info">
                <a href="" class="author">{{ article.author.username }}</a>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY')}}</span>
              </div>
              <button 
                class="btn btn-outline-primary btn-sm pull-xs-right" 
                :class="{active: article.favorited}"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li 
                  class="tag-default tag-pill tag-outline" 
                  v-for="item in article.tagList" 
                  :key="item">{{ item }}</li>
              </ul>
            </a>
          </div>


        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import { getProfile, followUser, unfollowUser } from '@/api/profile'
  import { getArticles, addFavorite, deleteFavorite } from '@/api/article'

  export default {
    middleware: 'authenticated',
    name: 'ProfileIndex',
    data () {
      return {
        profile: {},
        articles: [],
        tab: 'my_articles'
      }
    },
    async mounted () {
      const [profileRes, articleRes] = await Promise.all([
        getProfile(this.$route.params.username),
        getArticles({
          author: this.$route.params.username
        })
      ])
      this.profile = {...profileRes.data.profile, followDisabled: false}
      this.articles = articleRes.data.articles
      this.articles.forEach(article => article.favoriteDisabled = false)
    },
    watchQuery: ['tab'],
    methods: {
      async onFavorite (article) {
        article.favoriteDisabled = true
        if (article.favorited) {
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount -= 1
        } else {
          await addFavorite(article.slug)
          article.favorited = true
          article.favoritesCount += 1
        }
        article.favoriteDisabled = false
      },
      async handleFollow (profile) {
        profile.followDisabled = true
        if (profile.following) {
          await unfollowUser(profile.username)
          profile.following = false
        } else {
          await followUser(profile.username)
          profile.following = true
        }
        profile.followDisabled = false
      },
      async queryArticle (tab) {
        this.tab = tab
        let payload = this.tab === 'my_articles' 
        ? { author: this.$route.params.username }
        : { favorited: this.$route.params.username }
        const { data } = await getArticles({
          ...payload
        })
        this.articles = data.articles
        this.articles.forEach(article => article.favoriteDisabled = false)
      }
    }
  }
</script>

<style scoped>

</style>