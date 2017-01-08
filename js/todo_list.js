//check off todos by clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("span").click(function(event){
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
    $("ul").append("<li>" + todoText + "</li>")
  }
});
