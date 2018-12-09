<template>
  <div class="hello">
    <div>
      <ul>
        <li v-for="(news,index) in newsData" :key="index">
          <img :src="news.img">
          <p>{{news.title}}</p>
          <p :class="[{active:isActive}]">{{news.content}}</p>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        newsData:[],
        isActive:true
    }
  },
  created(){
    //第一种参数直接从url地址的末尾添加参数
    // this.$axios("http://www.wwtliu.com/sxtstu/news/newsdetails.php?type=junshi&count=30")
    // .then(res=>{
    //   console.log(res.data);
    // })
    // .catch(error=>{
    //   console.log(error);
    // })
    //第二种在url后面添加一个对象
    //  this.$axios("http://www.wwtliu.com/sxtstu/news/newsdetails.php",{
    //    params:{
    //      type:"junshi",
    //      count:30
    //    }
    //  })
    // .then(res=>{
    //   console.log(res.data);
    // })
    // .catch(error=>{
    //   console.log(error);
    // })
    this.$axios("/sxtstu/blueberrypai/getIndexBanner.php")
    .then(res=>{
      // this.newsData = JSON.parse(res.data)
      console.log(res)
      this.newsData = res.data.banner
      // console.log(res.data.banner);
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
</script>

<style scoped>
   .active{
     color:#f40;
     font-size:18px;
     background:#0f0;
   }
</style>
