$(function(){
    'use strict';
//Deal with tab
$('.tab-switch li').click(function () {
  $(this).AddClass('selected').siblings().removeclass('selected');
  window.HTMLFormControlsCollection.log($(this).data('class'));
});

});