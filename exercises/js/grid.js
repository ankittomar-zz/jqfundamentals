var ProductGrid = function (){
    this.init();         
}

ProductGrid.prototype = {
    
    init: function() {
        this.makeAjaxRequest();
    },

    makeAjaxRequest: function() {
       // console.log('in makeAjaxRequest');
        class_object = this;
        $.ajax({
            url: "http://dl.dropboxusercontent.com/u/628209/exercises/javascript/product.json",
            type: 'get',
            dataType: 'JSON',
            success: function(data){
                class_object.generateGrid(data);
                class_object.attributeList(data);

            }
        })
    },

    generateGrid: function(grid_json_data) {
        //console.log('in generateGrid');
        $.each(grid_json_data, function(index, value) {
            $('#parent').append('<img data-key="url" class="spacing"></img>');
            var element = $('img');
            var json_key = $(element).data().key;
           // console.log(this[json_key]);
            var image_url = "data/product_data/images/" + this[json_key];
            $(element[index]).attr('src', image_url);
        })
    },

    attributeList: function(grid_json_data) {
        var brand = [];
        var color = [];
        var brand_key = "brand";
        var color_key = "color";
        $.each(grid_json_data, function(index, value) {
            if($.inArray(this[brand_key], brand) == -1)
            {
                brand.push(this[brand_key]);
            }
            if($.inArray(this[color_key], color) == -1)
            {
                color.push(this[color_key]);
            }
        })
        class_object.generateFilterList(brand);
        class_object.generateFilterList(color);
    },

    generateFilterList: function(element_array) {
        element = $('#parent_left');
        $.each(element_array, function(index, val) {
            $(element).append('<input type="checkbox" value=val>'+ val +'</input>' + '</br>');            
        })
        $(element).append('<div class="td_left"/>');
    },

    bindEvent: function() {
        

    } 
}

$(function(){
    new ProductGrid();
})