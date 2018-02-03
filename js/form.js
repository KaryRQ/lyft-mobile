$( "input:radio" ).on("click",function(){
    $("input[type=submit]").removeAttr("disabled"); 
    });

    var next = $('.next');
    next.on("click", function (event) {
        event.preventDefault();
        
        window.location.href = 'check.html';
    });