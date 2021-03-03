<!--
 * @Author: your name
 * @Date: 2021-01-25 23:09:45
 * @LastEditTime: 2021-03-03 13:30:18
 * @LastEditors: dongpx
 * @Description: In User Settings Edit
 * @FilePath: /realworld-nuxtjs/pages/settings/index.vue
-->
<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.image"
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="user.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
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
  import { updateUser, getUserInfo } from '@/api/user'

  export default {
    middleware: 'authenticated',
    name: 'SettingsIndex',
    data() {
      return {
        user: {
          image: '',
          username: '',
          bio: '',
          email: '',
          password: '',
        },
      }
    },
    created() {
      this.getUserInfo()
    },
    methods: {
      async onSubmit() {
        await updateUser(this.user)
      },
      async getUserInfo() {
        const res = await getUserInfo()
        const { user } = res.data

        for (const key in user) {
          this.user[key] = user[key]
        }

        this.$store.commit('setUser', user)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
