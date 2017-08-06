$(document).ready(function(){
	set_obj_wb();
	$('.user_name').bind({
		focus:function(){
		if (this.value == this.defaultValue){ 
			this.value=""; 
			} 
		}, 
		blur:function(){ 
		if (this.value == ""){ 
			this.value = this.defaultValue; 
			} 
		}
	});
	$(".password").bind({
		focus:function() {
			if(this.value == this.defaultValue){
				this.value = "";
			}
		},
		blur:function() {
			if(this.value == ""){
				this.value = this.defaultValue;
			}
		},
	});
});
window.onresize=set_obj_wb;
function set_obj_wb(){
	var body_w = $(window).width();
	var body_h = $(window).height();
	$(".container").width(body_w);
	$(".container").height(body_h);
	$(".header").width(body_w);
	$(".middle").width(body_w);
	$(".middle").height(body_h-92-25);
	$(".middle_left").height(body_h-92-25);
	$(".middle_right").height(body_h-92-25);
	$(".footer").width(body_w);
}