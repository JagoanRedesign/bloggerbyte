$(document).ready(function() {

            $(".check-our-blog").delay(8000).fadeIn("slow", function(){
                $(this).addClass("swing");
            });

            $(".close-popup").bind("click", function() {
                $(".check-our-blog").addClass("hinge");
                setTimeout(function() {
                    $(".check-our-blog").fadeOut("slow", function() {
                        $(this).css({
                            "display": "none"
                        });
                    })
                }, 2000);
            });

            $(".close-tips").bind("click", function() {
                $(".mockup-tips").addClass("animated fadeOutRight");
                console.log("Working");
                setTimeout(function() {
                    $(".mockup-tips").fadeOut("slow", function() {
                        $(this).css({
                            "display": "none"
                        });
                    })
                }, 1000);
            });
   
        });
$(document).ready(function() {
// Change iFrame on a Button Click Event
    $(".button").click(function(event){
        $("iframe").attr('src', $( '#url' ).val());
    });
});
$(document).ready(function() {
    var a = 3;
    $('.desktop,.laptop,.tablet,.mobile').draggable({
   start: function(event, ui) { $(this).css("z-index", a++); }
});
    $('.display div').click(function() {
        $(this).addClass('top').removeClass('bottom');
        $(this).siblings().removeClass('top').addClass('bottom');
        $(this).css("z-index", a++);

    });
});
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&amp;]+([^=&amp;]+)=([^&amp;]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var first = getUrlVars()["url"]; 
var first = decodeURIComponent(first);
var first = first.replace(/\#$/, '');

if(first === "undefined") {
  // don't do anything.
}
else {
//  take the url variable and update the iframes and input field
  $("iframe").attr('src',(first));
  $('#url').attr('value',(first));
}
