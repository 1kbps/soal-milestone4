    $(document).ready(function() {
var parentId;
var textDisplay;

$("form").submit(function(){
    //fetch the value that is entered in to input fielld


parentId = $("#search").val();
// we will make api request

url = "https://www.googleapis.com/youtube/v3/comments?key=AIzaSyCu811XYMZGB2PFY7PPj_tWrs8njnKQ_CI&parentId="+parentId+"&part=snippet";
$.get(url,function(data){

fetchData(data);

bindData(textDisplay);
}); 


return false;
});

function fetchData(data)
{
    
textDisplay = data.items[0].snippet.textDis;
    } 
    
    function bindData(textDisplay)
{
    
    
    $("#subscribers").html("<h5>subscribers</h5>"+textDisplay);
  //  $("#subscribers").html("<h5>subscribers</h5>"+totalVideos);
   // $("#subscribers").html("<h5>subscribers</h5>"+totalViews);
}


});