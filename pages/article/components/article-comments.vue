<!--
 * @Author: dongpx
 * @Date: 2021-02-27 10:38:23
 * @LastEditTime: 2021-03-21 00:56:19
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /realworld-nuxtjs/pages/article/components/article-comments.vue
-->
<template>
  <div>
    <form class="card comment-form" @submit.prevent="onSubmitComment">
      <div class="card-block">
        <textarea
          v-model="comment.body"
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click.prevent="onSubmitComment">
          Post Comment
        </button>
      </div>
    </form>

    <div v-for="comment in comments" :key="comment.id" class="card">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{
          comment.createdAt | date('MMM DD, YYYY')
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { getComments, addComments } from '@/api/article'

  export default {
    name: 'ArticleComments',
    props: {
      article: {
        type: Object,
        required: true,
      },
      user: {
        type: Object,
        require: true
      }
    },
    data() {
      return {
        comments: [], // 文章列表
        comment: {
          body: ''
        }
      }
    },
    async created() {
      this.getComments()
    },
    methods: {
      async getComments() {
        const { data } = await getComments(this.article.slug)
        this.comments = data.comments
      },
      async onSubmitComment() {
        const res = await addComments(this.article.slug, this.comment)
        this.comments.push(res.data.comment)
        this.comment.body = ''
      }
    }
  }
</script>

<style lang="scss" scoped></style>
