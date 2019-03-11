<template>
  <!--这里是优选配饰-->
  <div class="row interval-row" id="section-ornament-recommend">         <!--interval间隔-->
    <p class="col-xs-12 col-sm-12 col-md-12 goods-recommend-p">优选配饰</p>
    <div class="col-xs-12 col-sm-6 col-md-3 goods-recommend" v-for="g in recommend_goods">
      <!--recommend推荐-->
      <div class="goods-recommend-div">
        <img :src="g.src" alt="">
        <p class="goods-price"><i>￥</i><span>{{g.price}}</span></p>
        <p class="goods-title">
          <a href="" target="_blank">{{g.title}}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexPush",
    data: function () {
      return {
        recommend_goods: [
          {
            'src': 'https://pic.hanfugou.com/web/2019/1/17/12/a308d7d8ce0941f88f02430f7f7bf6bd.jpg_250x250.jpg/format/webp',
            'price': 78,
            'title': '溯风手作 古风汉饰腰带配饰 '
          },
          {
            'src': 'https://pic.hanfugou.com/web/2019/1/17/12/4c504969c4c848149d2200606fbdbbe6.jpg_250x250.jpg/format/webp',
            'price': 128,
            'title': '溯风手作 古风汉服配饰耳饰耳夹绿海美人鱼'
          },
          {
            'src': 'https://pic.hanfugou.com/web/2019/1/17/12/3c566ef3e1144c97a920a9a29368063b.jpg_250x250.jpg/format/webp',
            'price': 78,
            'title': '如梦霓裳发钗手工原创'
          },
          {
            'src': 'https://pic.hanfugou.com/web/2019/1/17/12/ad386a04fc9d44ad854d51171e334b40.jpg_250x250.jpg/format/webp',
            'price': 56,
            'title': '汉服绣带发饰'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  /*热卖推荐*/
  .interval-row {
    max-width: 1180px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .goods-recommend-p {
    text-align: center;
    font-size: 28px;
    font-weight: lighter;
    color: #8b8b8b;
    margin-bottom: 30px;
  }

  .goods-recommend {
    text-align: center;
    padding: 0;
  }

  .goods-recommend-div {
    width: 250px;
    height: 358px;
    overflow: hidden;
    margin: auto;
    display: inline-block;
    background-color: #fff;
    margin-bottom: 20px;
  }

  .goods-recommend .goods-price {
    color: #ff4466;
    font-size: 34px;
    font-weight: 100;
  }

  .goods-recommend .goods-price i {
    font-size: 14px;
    font-style: normal;
    line-height: 14px;
  }

  .goods-title a:hover {
    color: #ff4466;
  }

  .IMG {
    width: 250px;
    height: 250px;
  }

</style>
