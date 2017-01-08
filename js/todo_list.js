//check off todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropogation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input values
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>")
  }
});

$(".fa-check-square-o").click(function(){
  $("input[type='text']").fadeToggle("slow");
})
