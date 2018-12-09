<template>
    <div>
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide><img src="https://www.vanke.com/upload/img/2018-08-02/d9717b1b-ddb1-430c-bc01-a9a45c95b703.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.vanke.com/upload/img/2018-04-11/dc484c3e-b4db-40a0-bfc6-658535cff6a4.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.vanke.com/upload/img/2018-03-26/ace14a23-b859-4195-9fd5-57583bf45a75.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.vanke.com/upload/img/2018-03-26/b5d7f3e4-46a8-49fd-9ccd-6082320844b2.jpg" alt=""></swiper-slide>
    <!-- <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide> -->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
    </div>
</template>
<script>
export default {
    data(){
        return {
           swiperOption: {
             loop: true,
             slidesPerView: 1,
             spaceBetween: 3,
             pagination:{
                 el:'.swiper-pagination',
                 clickable: true
             },
             autoplay:{
             disableOnInteraction:false
            },
             navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
        }
        }
    }
}
</script>
<style scoped>

</style>


