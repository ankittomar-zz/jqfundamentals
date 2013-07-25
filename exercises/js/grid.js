var ProductGrid = function (){
    this.init();     
    this.class_object;    
}

ProductGrid.prototype = {
    
    init: function() {
        this.makeAjaxRequest();
        this.bindEvent();
    },

    makeAjaxRequest: function() {
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
        $.each(grid_json_data, function(index, value) {
            debugger;
            $('#parent').append('<div><img data-key="url" class="spacing '+this.color.toLowerCase()+' '+this.brand.replace(/\s/,'_').toLowerCase"></img>');
            var element = $('img.spacing');
            var json_key = $(element).data().key;
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

        class_object.generateFilterList(brand, brand_key);
        class_object.generateFilterList(color, color_key);
    },

    generateFilterList: function(element_array, key) {
        element = $('#parent_left');
        $.each(element_array, function(index, val) {
            $(element).append('<input type="checkbox" class="checkbox" value='+val+' data-key='+key+'>'+val+'</input>'+'</br>');            
        })
        $(element).append('<div class="td_left"/>');
        class_object.bindEvent();
    },

    bindEvent: function() {
        class_object = this;
        console.log("hiloio =");
        $('.checkbox').bind('change', function(){
             
            class_object.showSelectedItems($(this));

        })
    },

    showSelectedItems: function(element) {
        
        element.addClass('checked'); 
    },

    generateClassList: function(element){
        $('checked')
    }
} 


$(function(){
    new ProductGrid();
})