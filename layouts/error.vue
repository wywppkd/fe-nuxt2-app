<template>
  <div class="container">
    <div>错误页面, 不是layout</div>

    <h1 v-if="error?.statusCode === 404">404 页面不存在</h1>
    <h1 v-else>未知的错误异常...</h1>

    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
