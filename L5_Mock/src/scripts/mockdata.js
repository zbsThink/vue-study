import Mock from 'mockjs'
var Random = Mock.Random;
// Random.extend({
//     constellation:function(data){
//         var crr = ['白羊座','巨蟹座','水瓶座','天平座','金牛座','双子座'];
//         return this.pick(crr)
//     }
// })
var crr = ['白羊座','巨蟹座','水瓶座','天平座','金牛座','双子座'];
const data = Mock.mock({
    'list|1-10':[{
        'id|+1':1,
        'name|1':crr
    }]
})
export default{
    data
}