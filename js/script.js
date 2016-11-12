var search = document.querySelector('.hotel_search_form form');
var toggle = document.querySelector('.switch');
var check_in = search.querySelector('[name=check_in]');
var check_out = search.querySelector('[name=check_out]');
var adults = search.querySelector('[name=adults]');
var childrens = search.querySelector('[name=children]');
var search_wrap = document.querySelector('.hotel_search_form');
var adults_plus = document.querySelector('.js_adults_plus');
var adults_minus = document.querySelector('.js_adults_minus');
var children_plus = document.querySelector('.js_children_plus');
var children_minus = document.querySelector('.js_children_minus');
        
search.classList.remove("js_search_on");
search.classList.add("js_search_off");
        
toggle.addEventListener('click', function(event){
    event.preventDefault();
    if(search.classList.contains("js_search_off")){
        search.classList.remove("js_search_off");
        search.classList.add("js_search_on");
        check_in.focus();
     }else{
         search.classList.remove("js_search_on");
         search.classList.add("js_search_off");
     }
 })
        
search.addEventListener('submit', function(event){
    if(!check_in.value || !adults.value){
        event.preventDefault();
        search_wrap.classList.remove("js_search_error");
        search_wrap.offsetWidth = search_wrap.offsetWidth;
        search_wrap.classList.add("js_search_error");
        check_in.focus();
    }
})
        
adults_plus.addEventListener('click', function(){
    if(!adults.value){
        adults.value = 1;
        adults.value = parseInt(adults.value);
    }else if(adults.value >= 0){
        adults.value = parseInt(adults.value) + 1;
    }
})
        
adults_minus.addEventListener('click', function(){
    if(adults.value > 0){
        adults.value = parseInt(adults.value) - 1;
    }
})
        
children_plus.addEventListener('click', function(){
    if(!childrens.value){
        childrens.value = 1;
        childrens.value = parseInt(childrens.value);
    }else if(childrens.value >= 0){
        childrens.value = parseInt(childrens.value) + 1;
    }
})
        
children_minus.addEventListener('click', function(){
    if(childrens.value > 0){
        childrens.value = parseInt(childrens.value) - 1;
    }
})