<template>
  <div class="header  text-white">
    <div id="desktop-2">桌面232</div>
    <!-- <div><input type="text" v-model="str"></div> -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'MyHeader',
  data() {
    return {
      str: '桌面1'
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  -webkit-app-region: drag;
}
</style>