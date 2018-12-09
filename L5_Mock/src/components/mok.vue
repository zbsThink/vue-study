<template>
    <div>
        <!-- <p>这是mock的模拟数据：{{getMockData}}</p> -->
        <ul>
            <li v-for="item in ids" :key="item.id">
                <p>{{item.id}}</p>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import mockdata from '@/scripts/mockdata'
export default {
    data(){
        return {
          ids:[]
        }
    },
    computed:{
        getMockData(){
          return mockdata.data
        }
    },
    created(){
       this.ids = mockdata.data.list
       console.log(this.ids)
    }
}
</script>
<style scoped>
  li{
      list-style:none;
  }
</style>


