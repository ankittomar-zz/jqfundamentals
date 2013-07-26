var ProductGrid = function (){
    class_object = this;
    this.grid_json_data = [];    
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
            success: function(data){
                grid_json_data = data;
                class_object.generateGrid();
                class_object.attributeList();
            }
        })
    },

    generateGrid: function() {
        $.each(grid_json_data, function(index, value) {
            $('#parent').append('<img data-name='+this.name+' data-url='+this.url+' data-color='+this.color+' data-sold_out='+this.sold_out+' data-brand="'+this.brand+'" class="spacing"></img>');
            var element = $('img.spacing');
            var json_key = $(element).data().url;
            var image_url = "data/product_data/images/" + this.url;
            $(element[index]).attr('src', image_url);
        })
    },

    attributeList: function() {
        var brand = [];
        var color = [];
        var sold_out = [];
        var brand_key = "brand";
        var color_key = "color";
        var sold_out_key = "sold_out";
        $.each(grid_json_data, function(index, value) {
            var color_element = '<input type="checkbox" class="checkbox" value="'+this[color_key]+'" data-color='+this[color_key]+' data-key='+color_key+'>'+this[color_key]+'</input>'+'</br>';
            var brand_element = '<input type="checkbox" class="checkbox" value="'+this[brand_key]+'" data-brand="'+this[brand_key]+'" data-key='+brand_key+'>'+this[brand_key]+'</input>'+'</br>';
            var sold_out_element = '<input type="checkbox" class="checkbox" value="'+this[sold_out]+'" data-sold_out ="'+this[sold_out_key]+'" data-key='+sold_out_key+'>'+this[sold_out_key]+'</input>'+'</br>';
            if($.inArray(brand_element, brand) == -1)
            {
                brand.push(brand_element);
            }
            if($.inArray(color_element, color) == -1)
            {
                color.push(color_element);
            }
            if($.inArray(sold_out_element, sold_out) == -1)
            {
                sold_out.push(sold_out_element);
            }
        })
        color.sort();
        brand.sort();

        class_object.generateFilterList(brand, brand_key);
        class_object.generateFilterList(color, color_key);
        class_object.generateFilterList(sold_out, sold_out_key);
        class_object.bindEvent();
    },
    

    generateFilterList: function(element_array, key) {
        element = $('#parent_left');
        $(element).append('<div class="td_left filter '+ key+'"/>');
        var item_class = '.'+key;
        $.each(element_array, function(index, val) {
            $(item_class).append(val)            
        })
    },
    
    bindEvent: function() {
        
        $('.checkbox').bind('change', function(){
            class_object.showSelectedItems($(this));
        })
    },

    showSelectedItems: function(element) {
        
        var selector = element.data().key;
        var filter_div = $('.filter');
        var filter_with_max_selection = class_object.findFilterWithMaxSelection(filter_div);
        class_object.generateSearchString($(filter_with_max_selection));
    },

    findFilterWithMaxSelection: function(filter_div) {
        var filter_with_max_selection = "";
        var count, max_count =0;
        $.each(filter_div, function(ind, val) {
            var children = $(val).children('input');
            count = 0;
            $.each(children, function(index, value) {
                if(value.checked) {
                    count++;
                    if (count > max_count) {
                        max_count = count;
                        filter_with_max_selection = $(value).parent();
                    }
                    else {
                        //do nothing
                    }
                }
            })
        })
        return filter_with_max_selection;    
    },

    generateSearchString: function(filter_with_max_selection) {
        var max_selector_siblings = $(filter_with_max_selection).siblings();
        var max_selection_check_box = $(filter_with_max_selection).children('input');
        var search_block,key_value, search_string, data = "";
        var search_array = [];
        var  arr1 = [];
        var arr2 = []; 
        $.each(max_selection_check_box, function(index, value) {
            if(value.checked)
            {   key_value = $(value).data().key;
                search_block = "[data-"+key_value+"='"+$(value).data()[key_value]+"']";
                arr1.push(search_block);
                search_block = "";
                console.log(arr1);     
                $.each(max_selector_siblings, function(ind, val){
                    var max_selection_sibling_child_box = $(val).children('input');
                    $.each(max_selection_sibling_child_box, function(i,v) {
                        if(v.checked)
                        {   console.log(v);
                            $.each(arr1, function(inde, valu) {
                                key_value = $(v).data().key;
                                data = valu+"[data-"+key_value+"='" + $(v).data()[key_value] + "']";
                                arr2.push(data)
                                data = "";
                                console.log('arr2 temp arr');
                                console.log(arr2);
                            })  
                        }
                    })
                    if(arr2.length > 0)
                    {   
                        arr1 = [];
                        arr1 = arr2;
                        arr2 = [];
                    }
                })
                search_array.push(arr1);
                arr1 = [];
            }
        }) 
        console.log(search_array);
        search_string = search_array.join(',');
        if (search_string)
        {
            $('img.spacing').hide();
            $(search_string).show();
        }
        else
        {
            $('img.spacing').show();
        }
    }
} 

$(function(){
    new ProductGrid();
})

//==============================Scrap Code==============================//

// generateSearchString: function(filter_with_max_selection) {
//         var max_selector_siblings = $(filter_with_max_selection).siblings();
//         var max_selection_check_box = $(filter_with_max_selection).children('input');
//         var search_block,key_value, search_string = "";
//         var flag = 0;
//         var search_array = []; 
//         $.each(max_selection_check_box, function(index, value) {
//             if(value.checked)
//             {   //flag = 0;
//                 key_value = $(value).data().key;
//                 search_block,search_block_max = "[data-"+key_value+"='"+$(value).data()[key_value]+"']";
//                 $.each(max_selector_siblings, function(ind, val){
//                     var mxa_selection_sibling_child_box = $(val).children('input');
//                     $.each(max_selection_sibling_child_box, function(i,v) {
//                         if(v.checked)
//                         {   
//                             flag = 1;
//                             key_value = $(v).data().key;
//                             search_block = search_block + "[data-"+key_value+"='" + $(v).data()[key_value] + "']";                            
//                             //console.log(search_block);
//                             //search_array.push(search_block);
//                             //console.log(search_array);
//                             //search_block = "";
//                         }
//                         if(!flag && !!search_block_max) {
//                             //console.log(search_block_max);
//                             search_array.push(search_block_max);
//                             //console.log(search_array);
//                             search_block_max = "";
//                         }
//                     })
//                 })

//             }
//             search_string = search_array.join(',');
//             //console.log(search_string);
//             search_string = "img"+search_string;
//             console.log(search_string);
//             $('img.spacing').hide();
//             $(search_string).show();
//             search_array, search_string = "" 

//         })            
//     }