<!--
 * @Author: dongpx
 * @Date: 2021-01-25 23:12:26
 * @LastEditTime: 2021-03-21 00:42:43
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /realworld-nuxtjs/pages/editor/index.vue
-->
<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <div @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  :disabled="disabled"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  :disabled="disabled"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  :disabled="disabled"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="inputTag"
                  type="text"
                  class="form-control"
                  :disabled="disabled"
                  placeholder="Enter tags"
                  @keyup.enter.prevent.stop="onEnterTag"
                />
                 <div v-if="article.tagList.length" class="tag-list">
                  <span
                    v-for="(tag, index) in article.tagList"
                    :key="index"
                    class="tag-default tag-pill"
                  >
                    <i
                      class="ion-close-round"
                      @click="removeTag(index)"
                    />
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" :disabled="disabled" @click="onSubmit">
                Publish Article
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { createArticle, getArticle, updateArticle } from '@/api/article'
  

  // 在路由匹配组件渲染之前会先执行中间件处理
  export default {
    middleware: 'authenticated',
    name: 'EditorIndex',
    data() {
      return {
        disabled: false,
        article: {
          title: '',
          description: '',
          body: '',
          tagList: [],
        },
        slug: '',
        inputTag: ''
      }
    },
    async created() {
      this.slug = this.$route.query.slug
      if (this.slug) {
        const res = await getArticle(this.slug)
        this.article = res.data.article
        // const { title, description, body, tagList } = res.data.article
        // this.article.title = title
        // this.article.description = description
        // this.article.body = body
        // this.article.tagList = tagList
      }
    },
    methods: {
      async onSubmit() {
        this.disabled = true
        if (this.slug) {
          await updateArticle(this.slug, this.article)
        } else {
          await createArticle(this.article)
        }
        this.$router.go(-1)
      },
      onEnterTag() {
        this.article.tagList.push(this.inputTag)
        this.inputTag = ''
      },
      removeTag(index) {
        this.article.tagList = this.article.tagList.filter((_, i) => i !== index)
      }
    },
  }
</script>

<style lang="scss" scoped></style>
