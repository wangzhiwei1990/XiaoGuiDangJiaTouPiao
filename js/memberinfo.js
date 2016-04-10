var rem = $(window).width()/16;
$("html").css("font-size",rem);
$(function(){
  // 投票按钮
  $('#voteSub').on('click', function(event) {
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