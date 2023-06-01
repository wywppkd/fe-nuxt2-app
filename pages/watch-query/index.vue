<template>
  <div>
    <div>查询参数变化, 重新执行组件相关钩子</div>
    <nuxt-link :to="`/watch-query?page=${Math.random()}`">跳转</nuxt-link>
    <nuxt-link :to="`/watch-query?page=${Math.random()}`">跳转</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData({ query }) {
    console.log('query:', query)
  },
  watchQuery: ['page'],
}
</script>
