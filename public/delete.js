$(".delete").on("click", function () {
    var songId = $(this).attr("value");
    
    $.ajax({
        url: "/playlist/" + songId,
        type: "DELETE",
        dataType: "json",
        success: function (data) {
            //id.delete();
                
        }
    });
    location.reload()
    //alert("Deleted successfully");
    erfgrgnfghtgfnregdfergdewtrhhtytrrggrhfngd
});
//click function
$(".overlay").on('click', function(){
    var x=event.target.getAttribute('data1');
    var y = event.target.getAttribute('data');
    var z=event.target.getAttribute('data2');
    player=document.getElementById("audio0");
    player.setAttribute('src',y);
    player.setAttribute('data1',x);
    player.setAttribute('data2',z)
    player.play();
 });
   
 // delete function

$(".delete").on("click", function () {
    var songId = $(this).attr("value");
    
    $.ajax({
        url: "/playlist/recent/" + songId,
        type: "DELETE",
        dataType: "json",
        success: function (data) {
            //id.delete();
                
        }
    });
    // alert to delete
    location.reload()
   // alert("Deleted successfully");
});
