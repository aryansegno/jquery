$(document).ready(function(){

    $('#exampleModal').on('click', '.submit',function() {
        var inputs = $('.given').val();
        $("main").append("<div><h1>"+inputs+"</h1></div>");
        
        // $("option").append("<div><h1>"+inputs+"</h1></div>");
        $(".head option").remove();
        $("main div h1 ").each(function(index) {
            index=index+1;
            var images = $(this).text();
            console.log(images, '........',index)
            $(".head").append("<option value="+index+">"+images+"</option>");
            // $(".head").append("<option value="+inputs+">"+inputs+"</option>");
        });
        
    });

    $('#exampleModal1').on('click', '.submit',function() {
        var subinput = $('.subgiven').val();
        var headings = $(".head option:selected" ).val();
        // $(".subhead").append("<option value="+subinputs+">"+subinputs+"</option>");

        // console.log(headings, '........')
        $(".subhead option").remove();
        $("main div:nth-child("+headings+")").append("<h2>"+subinput+"</h2>");
        $("main div h2 ").each(function(subkey) {
            subkey=subkey+1;
            var subimages = $(this).text();
            console.log(subimages, '....subheadig....',subkey)
            $(".subhead").append("<option value="+subkey+">"+subimages+"</option>");
        });    
    });

    $(".head").change(function () {
        var newheadings = $(this).val();
        // console.log(subimages, '....subheadig....',)
        $(".subhead option").remove();
        $("main div:nth-child("+newheadings+") h2 ").each(function(subkey) {
            subkey=subkey+1;
            var subimages = $(this).text();
            console.log('....subheadig....',subkey)
            $(".subhead").append("<option value="+subkey+">"+subimages+"</option>");
        });     
    });

    $('#exampleModal2').on('click', '.submit',function() { 
        var headings = $(".head option:selected" ).val();
        var subheadings = $(".subhead option:selected" ).val();
        var text = $(select).val();
        console.log(text,'abc')
        $("main div:nth-child("+headings+subheadings+")").append("<h3>"+text+"</h3>");
        var name = $('.given').val();
        var clas = $('.given').val();
        var label = $('.given').val();
        var placeholder = $('.given').val();
        $("main div").append("<h3>"+name+"</h3>");
        $("main div").append("<h4>"+clas+"</h4>");
        $("main div").append("<h5>"+label+"</h5>");
        $("main div").append("<h6>"+placeholder+"</h6>");
        

    });

})