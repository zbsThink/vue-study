Vue使用rem和less方法
1.在启动项目之前下载好less，less-loader,css-loader,style-loader
2.在index.html中添加一些js
  <script type="text/javascript">
       (function(doc,win){
         var docEl = doc.documentElement,
             resizeEvt = 'orientationchange' in window ? 'orientationchange':'resize',
             recalc = function(){
               var clientWidth = docEl.clientWidth;
               if(!clientWidth) return ;
               if(clientWidth>=750){
                 docEl.style.fontSize = '100px'; 
               }else{
                 docEl.style.fontSize = 100*(clientWidth/750)+'px';
               }
             }
             if(!doc.addEventListener) return;
             win.addEventListener(resizeEvt,recalc,false);
             doc.addEventListener('DOMContentLoaded',recalc,false);
       }(document,window))
    </script>
2.在配置文件webpack.base.conf.js中添加
  {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          "less-loader"
        ]
  }
3.在要使用的文件中的style中添加lang="less",然后将其中的px换为rem