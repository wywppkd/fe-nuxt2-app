<template>
  <div>
    <div>引入图片</div>
    <img src="~assets/img/123.jpeg" alt="" width="100" />
    <div class="bg"></div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
.bg {
  background-image: url('~assets/img/123.jpeg');
  background-size: contain;
  width: 100px;
  height: 100px;
}
</style>
