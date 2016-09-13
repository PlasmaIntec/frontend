$(document).ready(function(){
  $('#maskSearchQuery').keypress(function (e) {
    if (e.which == 13) {
      if(e.currentTarget.value){
        maskSearch();
        return false;
      }
    }
  });
});

function maskSearch()  {
  var query = $("#maskSearchQuery").val();
  window.location = "https:aswwu.com/#/search/" + query;
}