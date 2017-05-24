乔巴：
1.
BufferHelper和iconv-lite模块处理乱码问题

res.on('data', function(char){
      bufferHelper.concat(char);
    });
    res.on('end', function(){
      var html = iconv.decode(bufferHelper.toBuffer(),'GBK');

2.es6字符串拼接${变量}
let content=title=whole='';
whole += `${title}\r\n\r\n${content}\r\n\r\n\r\n`;

3.换行用\r\n ?  --- 乔巴

4.TODO
	bufferhelper 详解
	js buffer ->string ? 乔巴
	http .on('data',function(){}) --- 草帽

弗洛修
1,箭头函数--- 菠萝
res.on('end',()=> {
//.... this;
}

菠萝：
1.涉及到的关键npm包
	var request = require('request')  ---  弗洛修
	var rp = require('request-promise') 异步请求    
	var async = require('async');(类似 lodash _.debounce())控制同时并发数
2.箭头函数劫持this->定义者

3.async.mapLimit ? --- async 菠萝

黑白：
1、robots.txt详解 ---  黑白

vueloader


history


下周任务
vue-cli 
vue + webpack --- 草帽
slide --- 菠萝
tab --- 黑白
vue-router ---黑白
网页浏览进度条 --- 乔巴
进度条 loading --- 弗洛修
面包屑 --- 草帽
模拟 input radio checkbox select  --- 西瓜

下拉菜单
scrollbar
分页
图片放大

vuex 
饿了么 项目代码

https://github.com/sxyengene/ThousandSunny


