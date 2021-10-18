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
        var input_value = $('.input_class').val();
        var value = $('.value').val();
        var clas = $('.clas').val();
        var label = $('.label').val();
        var placeholder = $('.place').val();
        var other = $('.other').val();
        var head1 = $(".heading_3 .head option:selected" ).val();
        var subhead1 = $(".heading_3 .subhead option:selected" ).val();
        // var head = parseInt(head)+1;
        var subhead1 = parseInt(subhead1)+1;
        console.log(head1,'....abcde....',value,clas,label,placeholder,other,"...",subhead1)
        // $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append("<div><p><label>" + label + ":" + " </label> " + " <textarea type=  " + input_value + " " + " class = " + clas + " " + " placeholder=  " + placeholder + "  " + "></textarea></p></div>")
        // $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append("<div><p style='padding:10px'><form class='form'> "+" <label class = 'label'> "+label + ":" + " </label> " + "  " + input_value + " " + " class = " + clas + " " + " placeholder=  " + placeholder + "  " + " value=  " + value + " " + "></form></p></div>")       
        // $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append("<div><p><label>" + label + ":" + " </label> " + " <input type> "+input_value+" 
        if (input_value == "Radio") {
            var arr = $('.other').val().split(",");
            var y = $("<p style='padding:10px'><label>"+label+"</label><br></p>")
            console.log(arr )
            $.each(arr , function(i) {
                console.log("x",arr[i],"zebra")
                y.append("<input type= " + input_value +">"+" " +value+ " "+arr[i]+" ")                
            });            
            $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append(y)
        }
        else if (input_value == "Select") {
            var arr1 = $('.other').val().split(",");
            var y1 = $("<select >"+"<option>Select Value</option>"+"</select>");
            console.log(arr1 )
            $.each(arr1 , function(i) {
                console.log("x",arr1[i],"zebra")
                y1.append("<option > "+ arr1[i] +"</option>");
            });
            $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append("<p style='padding:10px'><label>" + label + "</label></p>").append(y1)
        }
        else if (input_value == "Checkbox") {
            var arr2 = $('.other').val().split(",");
            var y2 = $("<p style='padding:10px'><label>"+label+"</label><br></p>")
            console.log(arr2)
            $.each(arr2 , function(i) {
                console.log("x",arr2[i],"zebra")
                y2.append("<input type= " + input_value + " " +value+ " "+arr2[i]+" ><br/></p>")
            });
            $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ")
        }
        else if (input_value == "Textarea"){
            $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append("<p><label>" + label + ":" + " </label> " + " <textarea type=  " + input_value + " " + " class = " + clas + " " + " placeholder=  " + placeholder + "  " + "></textarea></p>")
        }
        else {
            $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append("<p>"+"value="+value+"<br>"+"class= "+clas+"<br>"+"label= "+label+"<br>"+"placeholder="+placeholder+"</p>");        
        }
    });

}) 