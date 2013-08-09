var LoadSpecialContentFromJson = function() {
    this.specials_json = {};
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
        target_div.append('<h2 data-key="title"/>', '<p/ data-key="text">', '<img/ data-key="image">', '<p/ data-key="color">');
    },

    displayJsonData : function(that) {
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
                $(this).attr('src', that.specials_json[selected_day].image);
            }
            else
            {   var key = $(this).data().key;
                $(this).html(that.specials_json[selected_day][key]);
            }
        })
    },

    bindChangeEvent: function() {
        var class_object = this;
        $(day_select_box).bind('change', function() {
            
            if(!!class_object.specials_json)
            {
               class_object.getJsonData(class_object);
            }
            else {class_object.displayJsonData(class_object);}
        });
    },

    getJsonData: function(that) {
        $.ajax({
            url: "data/specials.json",
            type: 'get',
            dataType: 'JSON',
            success: function(data){
                that.specials_json = data;
                that.displayJsonData(that);
            }
        });
    }
}

$(function(){
    new LoadSpecialContentFromJson();
});

