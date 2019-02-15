<template>
  <div id="app">
    <!-- 头部组件 -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏组件 -->
        <app-sidebar></app-sidebar>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 列表管理 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入AppHeader.vue组件
import AppHeader from './components/AppHeader.vue';
// 导入 AppSidebar.vue组件
import AppSidebar from './components/AppSidebar.vue';




export default {
  //注册局部组件
  components: {
    AppHeader,
    AppSidebar

  }
};
</script>

<style>

</style>
