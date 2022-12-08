import $ from  'jquery' 

//定义jquery入口函数
$(function(){
    $('li:odd').css('background-color','red');
    $('li:even').css('background-color','blue');

})