$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.15}); //vice versa is slideIn()
})

//snippet 18
// $("button").click(function(){
//     $("h1").animate({opacity: 0.2}); //only numeric value accepted
// })

//snippet 17
// $("button").click(function(){
//     $("h1").slideToggle(); 
// })

//snippet 16
// $("button").click(function(){
//     $("h1").slideUp(); //vice versa is slideDown()
// })

//snippet 15
// $("button").click(function(){
//     $("h1").fadeToggle(); 
// })

//snippet 14
// $("button").click(function(){
//     $("h1").fadeOut(); //vice versa is fadeIn()
// })

//snippet 13
// $("button").click(function(){
//     $("h1").toggle();
// })

//snippet 12
// $("button").click(function(){
//     $("h1").hide(); //vice vers is show()
// })

//snippet 11
// $("h1").on("mouseover", function(){
//     $("h1").css("color", "yellow");
// });

// $(document).keypress(function(event) { // first tried with "input"
//     $("h1").text(event.key)
// });

//snippet 10
// $("input").keypress(function(event) {
//     console.log(event.key);
// });

//snippet 9
// $("button").click(function() {
//     $("h1").css("color", "red");
// });
            //snippet 8 vs 9 (js vs jQuery)
//snippet 8
// for(var i = 0; i < document.querySelectorAll("button").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "red";
//     })
// }

//snippet 7
// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

//snippet 6
// $("a").attr("href", "https://www.w3schools.com/");

//snippet 5
// $("h1").html("<big><em>Hellow</em></big>");

//snippet 4
// $("button").text("Ken acho!");

//snippet 3
// $("h1").addClass("big-title margin");

//snippet 2
// $("h1").addClass("big-title");

//snippet 1
// $("h1").css("color", "red");
