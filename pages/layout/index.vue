<!--
 * @Author: your name
 * @Date: 2021-01-25 22:32:22
 * @LastEditTime: 2021-03-03 13:50:36
 * @LastEditors: dongpx
 * @Description: In User Settings Edit
 * @FilePath: /realworld-nuxtjs/pages/layout/index.vue
-->
<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">Home</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link to="/" exact class="nav-link">Home</nuxt-link>
          </li>

          <template v-if="user">
            <li class="nav-item">
              <nuxt-link to="/editor" class="nav-link">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/settings" class="nav-link">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="`/profile/${user.username}`">
                <img class="user-pic" :src="user.image" />
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>

          <template v-else>
            <li class="nav-item">
              <nuxt-link to="/login" class="nav-link">Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/register" class="nav-link">Sign up</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <nuxt-child />

    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'LayoutIndex',
    computed: {
      ...mapState(['user']),
    },
  }
</script>

<style lang="scss" scoped></style>
