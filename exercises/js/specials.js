var LoadSpecialContentFromJson = function() {
    this.init();
}

LoadSpecialContentFromJson.prototype = {

    init: function() {
        day_select_box = $('#specials select');
        $('.buttons').remove();
        this.insertHtmlElements();
        this.bindChangeEvent();
    },

    insertHtmlElements: function() {
        $('<div id= "json_target"></div>').insertAfter('#specials form');
        target_div = $('div#json_target');
        target_div.append('<h2/>', '<p/>', '<img/>', '<p/>');
    },

    displayJsonData : function(specials_json_data) {
        var structure_array = ['title', 'text', 'image', 'color'];
        var selected_day = day_select_box.val();
        var target_div_children = target_div.children();
        $.each(target_div_children, function(index, value) {
            if(!selected_day)
            {
                $(this).html('');
                if(this.tagName == 'IMG')
                {   
                $(this).removeAttr('src');
                }
            }
            
            else if(this.tagName == 'IMG')
            {   
                $(this).attr('src', specials_json_data[selected_day].image);
            }
            else
            {
                $(this).html(specials_json_data[selected_day][structure_array[index]]);
            }
        })
        
        
    },

    bindChangeEvent: function() {
        //console.log('in bindChangeEvent function ');
        //console.log(day_select_box);
        var class_object = this;
        $(day_select_box).bind('change', function() {
            
           // console.log('in change even binding method');
            $.ajax({
                url: "data/specials.json",
                type: 'get',
                dataType: 'JSON',
                success: function(data){
                    specials_json = data;
                    class_object.displayJsonData(specials_json);
                    //console.log('Success');
                }

            });

        });
    }
}

$(function(){
    new LoadSpecialContentFromJson();
});

