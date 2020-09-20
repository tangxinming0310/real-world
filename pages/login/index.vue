<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up'}}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="!isLogin" to="/login">Have an account?</nuxt-link>
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li
                v-for="(msg, index) in messages"
                :key="index"
              >{{ field }} {{msg}}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input class="form-control form-control-lg" required v-model="user.username" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" required v-model="user.email" type="email" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" required v-model="user.password" type="password" placeholder="Password" minlength="8">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? 'Sign in' : 'Sign up'}}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { login, register } from '@/api/user'
  const Cookie = process.client ? require('js-cookie') : undefined

  export default {
    middleware: 'notAuthenticated',
    name: 'LoginIndex',
    computed: {
      isLogin() {
        return this.$route.name === 'login'
      }
    },
    data () {
      return {
        user: {
          username: '',
          email: '',
          password: ''
        },
        errors: {}
      }
    },
    methods: {
      async onSubmit () {
        try {
          const sendData = this.isLogin ? login: register
          const { data } = await sendData({
            user: this.user
          })
          this.$store.commit('setUser', data.user)
          Cookie.set('user', data.user)
          this.$router.push('/')
        } catch (error) {
          this.errors = error.response.data.errors
        }
      }
    }
  }
</script>

<style scoped>

</style>