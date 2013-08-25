var ProductGrid = function() {
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
            class_object.filterData();
        })
    },

    findFilterWithMaxSelection: function() {
        var checked_count_arr = [];
        return $('.filter').each(function(i,e){ 
                checked_count_arr.push($(e).find('input:checked').length) 
        })[checked_count_arr.indexOf(Math.max.apply(Math,checked_count_arr))]
    },

    filterData: function() {
        var $filter_with_max_selection = $(this.findFilterWithMaxSelection()); 
        var arr1 = [];
        //generate search string with max selectors
        $.each($filter_with_max_selection.children('input:checked'), function(index, value) {
            var search_block = "";
            var key_value = $(value).data('key'); 
            search_block = "img[data-"+key_value+"='"+$(value).data(key_value)+"']";
            arr1.push(search_block); //push each checked element of selector with max selection in array
        })
        //Iterate over all the sibling of selector with max selections
        $.each($filter_with_max_selection.siblings(), function(index, value){
            var arr2 =[];           
            //Iterate over every child of Siblings of selector with max selection
            $.each($(value).children('input:checked'), function(i,v) {
                //Iterate over the max selector array to progressively generate the selector
                $.each(arr1, function(index, value) {
                    var key_value = $(v).data('key');
                    var data = value+"[data-"+key_value+"='" + $(v).data(key_value) + "']";
                    arr2.push(data);// one complete selector pushed to Array2
                })  
            })
            if(!!arr2.length)
            {   
                arr1 = arr2;
            }
        })
        
     
        var search_string = arr1.join(',')
        if (!!arr1.length)
        {
            $('img.spacing').hide().filter(search_string).show();
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