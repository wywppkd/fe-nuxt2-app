<template>
  <div>使用环境变量</div>
</template>
<script>
console.log('process.env.NUXT_ENV_APP_ENV:', process.env.NUXT_ENV_APP_ENV)
export default {
  asyncData(context) {
    console.log('context.env.NUXT_ENV_APP_ENV:', context.env.NUXT_ENV_APP_ENV)
  },
}
</script>
