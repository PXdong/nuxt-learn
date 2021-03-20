<!--
 * @Author: dongpx
 * @Date: 2021-03-21 00:21:40
 * @LastEditTime: 2021-03-21 00:27:09
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /realworld-nuxtjs/pages/editor/components/tag-input.vue
-->
<template>
  <div>
    <input
      v-model="inputTag"
      type="text"
      class="form-control"
      :disabled="disabled"
      placeholder="Enter tags"
      @keyup.enter="onEnterTag"
    />
  </div>
</template>

<script>
  export default {
    props: {
      tag: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        inputTag: '',
      }
    },
    watch: {
      tag(val) {
        this.inputTag = val
      },
      inputTag(val) {
        this.$emit('tag', val)
      }
    },
    methods: {
      onEnterTag() {
        this.$emit('onEnterTag', this.inputTag)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>