var search=document.querySelector(".hotel_search_form form"),toggle=document.querySelector(".switch"),check_in=search.querySelector("[name=check_in]"),check_out=search.querySelector("[name=check_out]"),adults=search.querySelector("[name=adults]"),childrens=search.querySelector("[name=children]"),search_wrap=document.querySelector(".hotel_search_form"),adults_plus=document.querySelector(".js_adults_plus"),adults_minus=document.querySelector(".js_adults_minus"),children_plus=document.querySelector(".js_children_plus"),children_minus=document.querySelector(".js_children_minus");search.classList.remove("js_search_on"),search.classList.add("js_search_off"),toggle.addEventListener("click",function(a){a.preventDefault(),search.classList.contains("js_search_off")?(search.classList.remove("js_search_off"),search.classList.add("js_search_on"),check_in.focus()):(search.classList.remove("js_search_on"),search.classList.add("js_search_off"))}),search.addEventListener("submit",function(a){check_in.value&&adults.value||(a.preventDefault(),search_wrap.classList.remove("js_search_error"),search_wrap.offsetWidth=search_wrap.offsetWidth,search_wrap.classList.add("js_search_error"),check_in.focus())}),adults_plus.addEventListener("click",function(){adults.value?adults.value>=0&&(adults.value=parseInt(adults.value)+1):(adults.value=1,adults.value=parseInt(adults.value))}),adults_minus.addEventListener("click",function(){adults.value>0&&(adults.value=parseInt(adults.value)-1)}),children_plus.addEventListener("click",function(){childrens.value?childrens.value>=0&&(childrens.value=parseInt(childrens.value)+1):(childrens.value=1,childrens.value=parseInt(childrens.value))}),children_minus.addEventListener("click",function(){childrens.value>0&&(childrens.value=parseInt(childrens.value)-1)});