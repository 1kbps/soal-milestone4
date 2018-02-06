$(document).ready(function () {
    var videoId;
    var textdisplay;
    var list;

    $("form").submit(function () {
        //fetch the value that is entered in to input fielld


        videoId = $("#search").val();
        // we will make api request

        url = "https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCu811XYMZGB2PFY7PPj_tWrs8njnKQ_CI&videoId=" + videoId + "&part=snippet,replies";

        $.get(url, function (data) {

            fetchData(data);

          
        });


        return false;
    });

    function fetchData(data) {
        // /*
        
        var dataList = [];
        for (var i = 0; i < data.items.length; i++) {
            dataList.push(data.items[i].snippet.topLevelComment.snippet.textDisplay);
            console.log('[', i, "]:", dataList[i] );
                list=dataList[i];
               


       
        
    }
    console.log(list);
        
    
    }
    function bindData(list) {


        $("#comments").html("<h5>comments</h5>"+list);
    }

    


});