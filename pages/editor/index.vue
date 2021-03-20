<!--
 * @Author: dongpx
 * @Date: 2021-01-25 23:12:26
<<<<<<< HEAD
 * @LastEditTime: 2021-03-04 12:52:51
=======
 * @LastEditTime: 2021-02-06 21:33:40
>>>>>>> ea504b820e36bea107da94fdfd40c015e3bd3a4c
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /realworld-nuxtjs/pages/editor/index.vue
-->
<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
<<<<<<< HEAD
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
=======
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
>>>>>>> ea504b820e36bea107da94fdfd40c015e3bd3a4c
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
<<<<<<< HEAD
                  v-model="article.description"
=======
>>>>>>> ea504b820e36bea107da94fdfd40c015e3bd3a4c
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
<<<<<<< HEAD
                  v-model="article.body"
=======
>>>>>>> ea504b820e36bea107da94fdfd40c015e3bd3a4c
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { createArticle } from '@/api/article'

  // 在路由匹配组件渲染之前会先执行中间件处理
  export default {
    middleware: 'authenticated',
    name: 'EditorIndex',
    data() {
      return {
        article: {
          title: '',
          description: '',
          body: '',
          tagList: [],
        },
      }
    },
    methods: {
      async onSubmit() {
        console.log('this.article', this.article)
        await createArticle(this.article)
        this.$router.go(-1)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
