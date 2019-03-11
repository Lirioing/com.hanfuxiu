<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <header class="col-md-12">
        <!--导航组建-->
        <nav-header></nav-header>
      </header>
    </div>
    <section class="row">
      <div class="col-md-12">
        <router-view/>
      </div>
    </section>
    <div class="row">
      <footer class="col-md-12">
        <nav-footer></nav-footer>
        <!--页脚组件-->
      </footer>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  padding: 0;
}
</style>
