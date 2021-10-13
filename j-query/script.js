$(document).ready(function(){

    $('.heading_1').on('click', '.submit',function() {
        var inputs = $('.given').val();
        $("main").append("<section><h1>"+inputs+"</h1></section>");
        
        // $("option").append("<div><h1>"+inputs+"</h1></div>");
        $(".head option").remove();
        $("main section h1 ").each(function(index) {
            index=index+1;
            var images = $(this).text();
            console.log(images, '........',index)
            $(".head").append("<option value="+index+">"+images+"</option>");
            // $(".head").append("<option value="+inputs+">"+inputs+"</option>");
        });
    });

    $('.heading_2').on('click', '.submit',function() {
        var subinput = $('.subgiven').val();
        var headings = $(".head option:selected" ).val();
        // $(".subhead").append("<option value="+subinputs+">"+subinputs+"</option>");

        // console.log(headings, '........')
        $(".subhead option").remove();
        $("main section:nth-child("+headings+") ").append("<div><h2>"+subinput+"</h2></div>");
        $("main section div h2 ").each(function(subkey) {
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
        $("main section:nth-child("+newheadings+") h2 ").each(function(subkey) {
            subkey=subkey+1;
            var subimages = $(this).text();
            console.log( newheadings,'....subheadig....',subkey)
            $(".subhead").append("<option value="  +subkey+  ">"  +subimages+ "</option>");
        });     
    });

    $('.heading_3').on('click', '.submit',function() { 
        var name = $('.name').val();
        var value = $('.value').val();
        var clas = $('.clas').val();
        var label = $('.label').val();
        var placeholder = $('.place').val();
        var head1 = $(".heading_3 .head option:selected" ).val();
        var subhead1 = $(".heading_3 .subhead option:selected" ).val();
        // var head = parseInt(head)+1;
        var subhead1 = parseInt(subhead1)+1;
        console.log(head1,'....abcde....',name,value,clas,label,placeholder,"...",subhead1)
        $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append("<p>"+name+value+clas+label+placeholder+"</p>");
        
    });

})