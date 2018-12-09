<template>
    <div>
     <el-carousel>
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <!-- <h3>{{ item }}</h3> -->
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
    </div>
</template>
<script>
export default {
    name:'lunbo',
    data(){
        return {
        //    imgs:{
        //       img1:'../assets/003.jpg',
        //       img2:'../assets/004.jpeg',
        //       img3:'../assets/004.jpg',
        //       img4:'../assets/005.jpg'
        //    }
        // imgs:[
        //     {
        //         img:'../assets/003.jpg'
        //     },
        //     {
        //         img:'../assets/004.jpeg'
        //     },
        //     {
        //         img:'../assets/004.jpg'
        //     },
        //     {
        //         img:'../assets/005.jpg'
        //     }
        // ]
        imgs:[
            "https://www.vanke.com/upload/img/2018-08-02/d9717b1b-ddb1-430c-bc01-a9a45c95b703.jpg",
            "https://www.vanke.com/upload/img/2018-04-11/dc484c3e-b4db-40a0-bfc6-658535cff6a4.jpg",
            "https://www.vanke.com/upload/img/2018-03-26/ace14a23-b859-4195-9fd5-57583bf45a75.jpg",
            "https://www.vanke.com/upload/img/2018-03-26/b5d7f3e4-46a8-49fd-9ccd-6082320844b2.jpg"
            ]
        }
    }
}

</script>
<style scoped>
 .el-carousel{
     width:100%;
 }
 .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>


