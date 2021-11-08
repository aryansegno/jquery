$(document).ready(function(){
    // var arr_local = []
    if (localStorage.getItem('arr_local')){
        var returnhead = JSON.parse(localStorage.getItem('arr_local'));
        $(returnhead).each(function (key, val) {
            var key = key + 1;
            $("main").append("<section><h1>"+ val['inputs'] +"</h1></section>");
            $(".head").append("<option value="+key+">"+val['images']+"</option>");
            // localFunction()
            $(val['sub_arr']).each(function (key1, val1) {
                $('main section:nth-child(' + key + ')').append('<div><h2>' + val1['subinput'] + '</h2></div>');
                $(".subhead").append("<option value="+key1+">"+ val1[subimages]+"</option>");
                $(val1['form']).each(function (key2, value2) {
                    var input_value = value2['input_value']
                    var clas = value2['clas']
                    var label = value2['label']
                    var placeholder = value2['placeholder']
                    var value = value2['value']
                    var other = value2['other']
                    var keysub = parseInt(key1) + 1;
                    if (input_value == "Radio") {
                        var arr = value2['other']
                        var y = $("<p style='padding:10px'><label>"+label+"</label><br></p>")
                        console.log(arr )
                        $.each(arr , function(i) {
                            console.log("x",arr[i],"zebra")
                            y.append("<input type= " + input_value +">"+" " +value+ " "+arr[i]+" ")                
                        });            
                        $("main section:nth-child("+key+") div:nth-child("+ parseInt(keysub + 1) +") ").append(y)
                    }
                    else if (input_value == "Select") {
                        var arr1 = value2['other']
                        var y1 = $("<select >"+"<option>Select Value</option>"+"</select>");
                        console.log(arr1 )
                        $.each(arr1 , function(i) {
                            console.log("x",arr1[i],"zebra")
                            y1.append("<option > "+ arr1[i] +"</option>");
                        });
                        $("main section:nth-child("+key+") div:nth-child("+ parseInt(keysub + 1) +") ").append("<p style='padding:10px'><label>" + label + "</label></p>").append(y1)
                    }
                    else if (input_value == "Checkbox") {
                        var arr2 = value2['other']
                        var y2 = $("<p style='padding:10px'><label>"+label+"</label><br></p>")
                        console.log(arr2)
                        $.each(arr2 , function(i) {
                            console.log("x",arr2[i],"zebra")
                            y2.append("<input type= " + input_value + " " +value+ " "+arr2[i]+" ><br/></p>")
                        });
                        $("main section:nth-child("+key+") div:nth-child("+ parseInt(keysub + 1) +") ").append(y2)
                    }
                    else if (input_value == "Textarea"){
                        $("main section:nth-child("+head1+") div:nth-child("+ parseInt(keysub + 1)  +") ").append("<p><label>" + label + ":" + " </label> " + " <textarea type=  " + input_value + " " + " class = " + clas + " " + " placeholder=  " + placeholder + "  " + "></textarea></p>")
                    }
                    else {
                        $("main section:nth-child("+head1+") div:nth-child("+ parseInt(keysub + 1) +") ").append("<p>"+"value="+value+"<br>"+"class= "+clas+"<br>"+"label= "+label+"<br>"+"placeholder="+placeholder+"</p>");        
                    }
                })
            })
        })
    };


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
        });
        $('.heading_1')
        // arr_local.push({ 'heading': heading1, 'sub_arr': [] })
        localFunction()
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
        $('.heading_2')     
        // arr_local[heading_index - 1].sub_arr.push({ 'subheading': sub_heading, 'form': [] }) 
        localFunction()
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
        if (input_value == "radio") {
            var arr = $('.other').val().split(",");
            var y = $("<p style='padding:10px'><label>"+label+"</label><br></p>")
            console.log(arr )
            $.each(arr , function(i) {
                console.log("x",arr[i],"zebra")
                y.append("<input type= " + input_value +" value="+arr[i]+">"+" " +arr[i]+ " ")                
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
        else if (input_value == "checkbox") {
            var arr2 = $('.other').val().split(",");
            var y2 = $("<p style='padding:10px'><label>"+label+"</label><br></p>")
            console.log(arr2)
            $.each(arr2 , function(i) {
                console.log("x",arr2[i],"arr2")
                y2.append("<input type= checkbox " + input_value + "value= " +arr2[i]+ ">"+" "+arr2[i]+" <br/></p>")
            });
            $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append(y2)
        }
        else if (input_value == "Textarea"){
            $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append("<p><label>" + label + ":" + " </label> " + " <textarea type=  " + input_value + " " + " class = " + clas + " " + " placeholder=  " + placeholder + "  " + "></textarea></p>")
        }
        else {
            $("main section:nth-child("+head1+") div:nth-child("+subhead1+") ").append("<p>"+"value="+value+"<br>"+"class= "+clas+"<br>"+"label= "+label+"<br>"+"placeholder="+placeholder+"</p>");        
        }
        $('.heading_3')
        // arr_local[key - 1].sub_arr[key - 1].form.push({ 'label': label, 'input_value': input_value, 'class': clas, 'placeholder': placeholder, 'value': value })
        localFunction()  
    });

    // function localFunction() {
    //     window.localStorage.setItem('arr_local', JSON.stringify(arr_local));
    // }
});

function localFunction() {
    var arr_local = []
    $('main section h1').each(function (key, val) {
        var heading1 = $(this).text()
        var key = key + 1
        arr_local.push({ 'heading': heading1, 'sub_arr': [] })
        $('main section:nth-child(' + key + ') h2').each(function (key1, value1) {
            var this_value = $(this).text();
            arr_local[key - 1].sub_arr.push({ 'subheading': this_value, 'form': [] }) 
            $('main section:nth-child(' + key + ') div:nth-child(' + parseInt(key + 1) + ') p').each(function (key2, value2) {
                var input_value = $('.input_class').val();
                var value = $('.value').val();
                var clas = $('.clas').val();
                var label = $('.label').val();
                var placeholder = $('.place').val();
                var other = $('.other').val();
                arr_local[key - 1].sub_arr[key - 1].form.push({ 'label': label, 'input_value': input_value, 'class': clas, 'placeholder': placeholder, 'value': value , 'other' : other })
            })
        })
    })
    window.localStorage.setItem('arr_local', JSON.stringify(arr_local));
}

    

 