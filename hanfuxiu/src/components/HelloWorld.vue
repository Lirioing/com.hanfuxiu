<template>
  <div class="hello">
    <a target="_blank" @click="send">模拟从商品详情页点立即购买按钮</a>
    <router-link to="/comfirmorder?2,3" target="_blank">模拟购物车结算按钮</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods: {
      send: function () {
        window.sessionStorage.setItem("goods_info",JSON.stringify([{
          main_img: "https://pic.hanfugou.com/web/2019/3/3/12/aa3c0154fe3a44ec9627990c10a62054.jpg_250x250.jpg/format/webp",
          name: "仑灵:玫儿 池夏原创设计改良汉服渐变色齐胸襦裙套装玫瑰刺绣春",
          goods_size: "S",
          quantity: "1",
          price: '168',
        }]));
        this.$router.push({path: "/comfirmorder"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
