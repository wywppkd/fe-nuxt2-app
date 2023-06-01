<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$axios
      .get('/api/user/info')
      .then((res) => {
        console.log('🚀 ~ file: index.vue:9 ~ this.$axios.get ~ res:', res)
      })
      .catch((err) => {
        console.log('🚀 ~ file: index.vue:11 ~ this.$axios.get ~ err:', err)
      })
  },
}
</script>
