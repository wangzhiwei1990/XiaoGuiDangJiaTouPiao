//create by zhiwei wang     2016-4-7 23:35:01
var touch = ("createTouch" in document),
	start = touch ? "touchstart" : "mousedown",
	move = touch ? "touchmove" : "mousemove";
	end = touch ? "touchend" : "mouseup";

var rem = $(window).width()/16;
$("html").css("font-size",rem);
window.onload
$(function(){
  var page = 0;
  var maxPage;

  var rows = document.getElementById('memberlist').children;
  //瀑布流调整方法
  function puBuJiSuan(){
    var biger = rows[0].offsetHeight>rows[1].offsetHeight?0:1;
    var smallRow = rows[1-biger];
    var bigerChilds = rows[biger].children;
    var bigerLastChild = bigerChilds[bigerChilds.length-1];
    if(bigerLastChild.offsetTop>smallRow.offsetHeight){
      if(biger){
        smallRow.appendChild(bigerLastChild);
      }else{
        var prevDom = smallRow.children;
        prevDom = prevDom[prevDom.length-2];
        smallRow.replaceChild(bigerLastChild,prevDom)
        puBuJiSuan();
      }
    }
  }
  window.onload=function(){
    puBuJiSuan()
  };
  /*var pageDom = document.getElementById('page');
  maxPage = pageDom.getAttribute('data');
  pageDom = pageDom.children;
  function setPage(){
    if (maxPage<6) {
      $(pageDom).filter('.on').removeClass('on');
      pageDom
    }
    var star = page
  }*/
  // 投票按钮
  $(rows).delegate('a', 'click', function(event) {
    var id = this.getAttribute('data')
    if (id) {

      // $.get()
      $('#layerVote').show('fast', function() {

      })
    }else{
      $('#layerVoteCant').show();
    }
  });
  $('.layer').find('ul').find('.no').on('click',function(){
    $(this).closest('.layer').hide('fast', function() {

    });
  })
})