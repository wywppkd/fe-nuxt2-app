<template>
  <div>
    <div>动态路由</div>
    <nuxt-link to="/">回首页</nuxt-link>
    <nuxt-link to="/article/123">回首页</nuxt-link>
    <nuxt-link to="/article/333">回首页</nuxt-link>
  </div>
</template>
<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id) // 必须是数字
  },
  asyncData({ params }) {
    console.log('🚀 ~ file: _id.vue:9 ~ asyncData ~ params:', params)
  },
  mounted() {
    const params = this.$route.params
    console.log('🚀 ~ file: _id.vue:13 ~ mounted ~ params:', params)
  },
}
</script>
