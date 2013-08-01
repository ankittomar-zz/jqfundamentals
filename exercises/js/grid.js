var ProductGrid = function (){
    this.init();     
}

ProductGrid.prototype = {
    
    init: function() {
        this.makeAjaxRequest();
    },

    makeAjaxRequest: function() {
        $.ajax({
            url: "http://dl.dropboxusercontent.com/u/628209/exercises/javascript/product.json",
            type: 'get',
            dataType: 'JSON',
            context: this,            
            success: function(data){
                this.generateGrid(data);
            }
        })
    },

    generateGrid: function(grid_json_data) {
        $.each(grid_json_data, function(index, value) {
            var image_url = "data/product_data/images/" + this.url;
            $('#parent').append('<img data-name='+this.name+' src = '+image_url+' data-color='+this.color+' data-sold_out='+this.sold_out+' data-brand="'+this.brand+'" class="spacing"></img>');
        })
        this.bindEvent();
    },

    bindEvent: function() {
        var class_object = this;
        $('.checkbox').bind('change', function(){
            class_object.showSelectedItems($(this));
        })
    },

    showSelectedItems: function(element) {
        
        var selector = element.data('key'), filter_div = $('.filter');
        var filter_with_max_selection = this.findFilterWithMaxSelection(filter_div);
        this.generateSearchString($(filter_with_max_selection));
    },

    findFilterWithMaxSelection: function(filter_div) {
        var checked_count_arr = [];
        return $(filter_div).each(function(i,e){ 
                checked_count_arr.push($(e).find('input:checked').length) 
            })[checked_count_arr.indexOf(Math.max.apply(Math,checked_count_arr))]
    },

    generateSearchString: function(filter_with_max_selection) {
        var max_selector_siblings = $(filter_with_max_selection).siblings();
        var max_selection_check_box = $(filter_with_max_selection).children('input:checked');
        var search_block,key_value, search_string, data = "";
        var search_array = [], arr1 = [], arr2 = []; 
        $.each(max_selection_check_box, function(index, value) {
            key_value = $(value).data('key'); 
            search_block = "[data-"+key_value+"='"+$(value).data(key_value)+"']";
            arr1.push(search_block); //push each checked element of selector with max selection in array
            search_block = "";
            //Iterate over all the sibling of selector with max selections
            $.each(max_selector_siblings, function(index, value){
                var max_selection_sibling_child_box = $(value).children('input:checked');
                //Iterate over every child of Siblings of selector with max selection
                $.each(max_selection_sibling_child_box, function(i,v) {
                    //Iterate over the array to progressively generate the selector
                    $.each(arr1, function(index, value) {
                            key_value = $(v).data('key');
                            data = value+"[data-"+key_value+"='" + $(v).data(key_value) + "']";
                            arr2.push(data);// one complete selector pushed to Array3
                            data = "";
                        })  
                })
                if(arr2.length > 0)
                {   
                    arr1 = arr2;
                    arr2 = [];
                }
            })
            search_array.push(arr1);
            arr1 = [];
        }) 
        search_string = 'img' + search_array.join(',');

        if (search_string)
        {
            $('img.spacing').hide();
            $(search_string).show();
        }
        else
        {
            $('img.spacing').show();
        }
        console.log(search_string);
    }

} 

$(function(){
    new ProductGrid();
})