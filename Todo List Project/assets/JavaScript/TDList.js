$("ul").on("click", "li" ,function(){
	$(this).toggleClass("strike");
})

$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut(700, function(){
		$(this).remove();
	});
	event.stopPropagation();

})

$("input[type='text']").on("keypress" , function(event){
	if(event.which===13){
		var TodoItem = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + TodoItem + "</li>");
		// alert("Key is Pressed");
	}
	// alert("Key is Pressed");
})
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle(500);
})

