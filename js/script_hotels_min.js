var separator_min=document.querySelector(".range_toggle_min"),separator_max=document.querySelector(".range_toggle_max"),scale=document.querySelector(".scale"),bar=document.querySelector(".bar"),range_controls=document.querySelector(".prise_and_result"),flag_min=!1,flag_max=!1,min_price=document.querySelector("[name=min_price]"),max_price=document.querySelector("[name=max_price]");separator_min.addEventListener("mousedown",function(a){a.preventDefault(),flag_min=!0},!1),separator_max.addEventListener("mousedown",function(a){a.preventDefault(),flag_max=!0},!1),document.addEventListener("mouseup",function(a){flag_min=!1,flag_max=!1},!1),range_controls.addEventListener("mousemove",function(a){var b=a.pageX-this.offsetLeft-20,c=a.pageX-this.offsetLeft-20,d=separator_min.style.left,e=separator_max.style.left;flag_min&&b>0&&b<separator_max.offsetLeft?(separator_min.style.left=b+"px",min_price.value=50*parseInt(d),bar.style.width=separator_max.offsetLeft-b+"px",bar.style.marginLeft=b+"px"):flag_max&&c>separator_min.offsetLeft&&c<scale.offsetWidth&&(separator_max.style.left=c+"px",max_price.value=50*parseInt(e),bar.style.width=separator_max.offsetLeft-separator_min.offsetLeft+"px",bar.style.marginRight=330-c+"px")},!1);