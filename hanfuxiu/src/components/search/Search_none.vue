<template>
  <div class="error">{{goods.status_text}}</div>
</template>

<script>
    export default {
        name: "Search_none",
      data(){
        return{
          textTip:this.goods
        }
      },
      props:['goods'],
    }
</script>

<style scoped>
  .error{
    height: 400px;
    width: 100%;
    font-size: 2em;
    color:#FD6B66 ;
    text-align: center;
    line-height: 400px;
  }
</style>
