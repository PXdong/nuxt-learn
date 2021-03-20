<!--
 * @Author: dongpx
 * @Date: 2021-01-25 23:13:58
 * @LastEditTime: 2021-03-21 01:04:05
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /realworld-nuxtjs/pages/article/index.vue
-->
<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <article-meta 
          :article="article"
           :isMyArticle="isMyArticle" 
           @on-delete-article="deleteArticle"
           @on-toggle-follow-user="followUser"
           @on-toggle-favorite-article="favoriteArticle"
          />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta 
          :article="article" 
          :isMyArticle="isMyArticle" 
          @on-delete-article="deleteArticle"
           @on-toggle-follow-user="followUser"
           @on-toggle-favorite-article="favoriteArticle"
         />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <article-comments :article="article" :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getArticle, deleteArticle, addFavorite, deleteFavorite } from '@/api/article'
  import { unfollowUser, followUser } from '@/api/user'
  import MarkdownIt from 'markdown-it'
  import ArticleMeta from './components/article-meta'
  import ArticleComments from './components/article-comments'

  export default {
    name: 'ArticleIndex',
    components: {
      ArticleMeta,
      ArticleComments,
    },
    async asyncData({ params, store }) {
      const { data } = await getArticle(params.slug)
      const { article } = data
      const md = new MarkdownIt()
      article.body = md.render(article.body)
      const user = store.state.user
      const isMyArticle = article.author.username == user.username

      return {
        article,
        user,
        isMyArticle
      }
    },
    head() {
      return {
        title: `${this.article.title} - RealWorld`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.article.description,
          },
        ],
      }
    },
    methods: {
      async deleteArticle() {
        await deleteArticle(this.article.slug)
        this.$router.go(-1)
      },
      async followUser() {
      console.log(this.article)
      if (this.article.author.following) {
        await unfollowUser(this.article.author.username)
      } else {
        await followUser(this.article.author.username)
      }

       const res = await getArticle(this.article.slug)
       this.article = res.data.article
      },
      async favoriteArticle() {
        if (this.article.favorited) {
        await deleteFavorite(this.article.slug)
      } else {
        await addFavorite(this.article.slug)
      }

       const res = await getArticle(this.article.slug)
       this.article = res.data.article
      }
    }
  }
</script>

<style lang="scss" scoped></style>
