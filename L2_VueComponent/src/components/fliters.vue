<template>
    <div>
        <!-- 自定义指令 -->
        <input type="text" v-focus>
        <p v-mycss>哈哈哈</p>
        <!-- //过滤 -->
        {{price|moneyChange}}<br>
        {{info|contextData}}
    </div>
</template>
<script>
export default {
    name:"hello",
    data(){
        return {
           price:20,
           info:"我是一个文本信息"
        }
        
    },
    // 自定义指令
    directives:{
            focus:{
                inserted:function(el){
                    el.focus();
                }
            },
            mycss:{
                inserted:function(el){
                    el.style.color = "red";
                }
            }
        },
        // 过滤：
        filters:{
            moneyChange(value){
                if(typeof value ==="number"){
                    return "￥"+value
                }
                return value;
            },
            contextData(value){
                return value +"——来自黑人jj"
            }
        }
}
</script>
<style scoped>

</style>

