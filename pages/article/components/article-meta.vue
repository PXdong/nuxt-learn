<!--
 * @Author: dongpx
 * @Date: 2021-02-26 20:56:45
 * @LastEditTime: 2021-03-21 00:47:48
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /realworld-nuxtjs/pages/article/components/article-meta.vue
-->
<template>
  <div>
    <div class="article-meta">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: article.author.username,
          },
        }"
        ><img :src="article.author.image"
      /></nuxt-link>
      <div class="info">
        <nuxt-link
          class="author"
          :to="{
            name: 'profile',
            params: {
              username: article.author.username,
            },
          }"
          >{{ article.author.username }}</nuxt-link
        >
        <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
      </div>


      <span v-if="isMyArticle">
        <nuxt-link
          :to="`/editor?slug=${article.slug}`"
          class="btn btn-outline-secondary btn-sm"
        >
          <i class="ion-edit" /> Edit Article
        </nuxt-link>
        <button
          class="btn btn-outline-danger btn-sm"
          @click="$emit('on-delete-article')"
        >
          <i class="ion-trash-a" /> Delete Article
        </button>
      </span>

      <span v-else>
      <button
        class="btn btn-sm"
        :class="{
          'btn-outline-secondary': !article.author.following,
          'btn-secondary': article.author.following,
        }"
        @click="$emit('on-toggle-follow-user')"
      >
        <template v-if="article.author.following">
          <i class="ion-minus-round" />
          Unfollow
        </template>

        <template v-else>
          <i class="ion-plus-round" />
          Follow
        </template>
      </button>

      <button
        class="btn btn-sm"
        :class="{
          'btn-outline-primary': !article.favorited,
          'btn-primary': article.favorited,
        }"
        @click="$emit('on-toggle-favorite-article')"
      >
        <i class="ion-heart" />
        <span>{{ article.favorited ? 'Unfavorite' : 'Favorite' }}</span>
        <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </span>

     
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArticleMeta',
    props: {
      article: {
        type: Object,
        required: true,
      },
      isMyArticle: {
        type: Boolean,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped></style>
