//create by zhiwei wang     2016-4-7 23:35:01
var touch = ("createTouch" in document),
  start = touch ? "touchstart" : "mousedown",
  move = touch ? "touchmove" : "mousemove";
  end = touch ? "touchend" : "mouseup";
var rem = $(window).width()/16;
$("html").css("font-size",rem);
$(function() {
  var ajaxData ={};
  ajaxData.XiLie=$('.choose').eq(0).delegate('li','click',function(){
    if (this.className.search('on')<0) {
      $(this).addClass('on').siblings('.on').removeClass('on');
      ajaxData.XiLie=this.innerHTML;
    }
  }).find('.on').text()
  ajaxData.Jiang=$('.choose').eq(1).delegate('li','click',function(){
    if (this.className.search('on')<0) {
      $(this).addClass('on').siblings('.on').removeClass('on');
      ajaxData.Jiang=this.innerHTML;
    }
  }).find('.on').text()
  var InputDom = $('table').find('input[name]').add('textarea'),
    _RegName = new RegExp(/^[\u4e00-\u9fa5 ]{2,10}$|^[a-zA-Z|\s]{2,20}$/), //中英文姓名
    _RegPhone = new RegExp(/^1[3|4|5|7|8]\d{9}$/),
    _RegTextarea = new RegExp(/^[\s\S]{6,50}$/);
  InputDom.each(function(ii, tt) {
    var thisReg , thisData;
    if (ii===0) {
      thisReg = _RegName;
      thisData = 'Name';
    }else if(ii===1){
      thisReg = _RegPhone;
      thisData = 'Phone';
    }else if(ii===2){
      thisReg = _RegTextarea
      thisData = 'MiaoSu';
    }
    $(tt).on('blur', function() {
      ajaxData[thisData] = this.value;
      if (thisReg.test(this.value)) {
        $(this).addClass('cur').removeClass('err')
      } else {
        $(this).removeClass('cur').addClass('err')
      }
    })
  });
  var addImgDom = $('#addImg')
  addImgDom.on('click',function(){
    // 照片上传的方法写在这里
    // 上传后请按要求插入照片缩略图<div class='smallImg' style="background-image: url('linshiimg/baby (1).jpg');"></div>
    console.log('上传照片')
  });
  console.log(addImgDom.parent()[0])
  addImgDom.parent().delegate('.smallImg','click', function() {
    console.log(1)
    $(this).toggleClass('onLook');
  }).delegate('span', 'click', function() {
    $(this).parent().remove()
  });
  $('#bmSub').on('click',function(){
    var errDom = InputDom.not('.cur');
    if(errDom.size()){
      alert('您还有信息未填写')
      return;
    }
    if (!addImgDom.index()) {
      alert('您还未上传照片')
      return;
    }
    console.log(ajaxData)
    $('#layerBM').show('fast',function(){
      var span = $(this).find('span');
      span[0].innerHTML=ajaxData.Name;
      span[1].innerHTML=ajaxData.Jiang;
    })
  })
})