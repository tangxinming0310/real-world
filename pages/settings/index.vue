<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="updateUserInfo">
            <fieldset>
                <fieldset class="form-group">
                  <input v-model="userInfo.image" class="form-control" type="text" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="userInfo.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <textarea v-model="userInfo.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="userInfo.email" class="form-control form-control-lg" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="userInfo.password" class="form-control form-control-lg" type="password" placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { updateUser } from '@/api/user'
  import { mapState } from 'vuex'
  export default {
    middleware: 'authenticated',
    name: 'SettingsIndex',
    data () {
      return {
        userInfo: {}
      }
    },
    computed: {
      ...mapState(['user'])
    },
    watch: {
      user: {
        handler () {
          this.userInfo = {...this.user}
        },
        immediate: true
      }
    },
    methods: {
      async updateUserInfo () {
        const { data } = await updateUser({
          user: {...this.userInfo}
        })
        this.$router.push({
          name: 'profile',
          params: {
            username: data.user.username
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>