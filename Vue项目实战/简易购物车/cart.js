var app = new Vue({
    el:"#app",
    data:{
        checkall:false,
        displayMoney:false,       
        list:[
            {
                checked:false,
                id:1,
                name:'iphone 7',
                price:6188,
                img:'img/img1.jpg',
                count:1
            },
            {
                checked:false,
                id:2,
                name:'iPad Pro',
                price:5888,
                img:'img/img2.jpg',
                count:1
            },
            {
                checked:false,
                id:3,
                name:'Macbook Pro',
                price:21488,
                img:'img/img3.jpg',
                count:1
            }
        ]
    },
    computed:{
        totalPrice:function(){
            var total = 0;
            for(var i = 0; i<this.list.length;i++){
                var item = this.list[i];
                if(item.checked){
                    total += item.price * item.count
                }
            }
            return total.toString().replace(/B(?=(\d{3})+$)/g,',')
        },
        getCount:function(){
            var count = 0;
            for(var i = 0;i<this.list.length;i++){
                var item = this.list[i];
                if(item.checked){
                    count += item.count
                    if(count == this.list.length){
                        this.checkall = true;
                    }else{
                        this.checkall = false;
                    }
                }
            }
            return count;
        }
    },
    methods:{
        handleReduce:function(index){
            if(this.list[index].count ===1) return;
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        },
        checkAll:function(){
            if(!this.checkall){
                for(var i = 0;i<this.list.length;i++){
                    var item = this.list[i];
                    item.checked = true;
                }
            }else{
                for(var i = 0;i<this.list.length;i++){
                    var item = this.list[i];
                    item.checked = false;
                }
            }
            this.checkall = !this.checkAll;
        }
    }
})