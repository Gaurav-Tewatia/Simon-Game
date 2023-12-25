var gamePattern=[];
var userClickedPattern=[];
var buttonColor=["red","blue","green","yellow"];

 var level=0;
 var started=false;

 $(document).keypress(function(event){
    if(!started){
        $("#level-title").text("LEVEL"+level);
        nextSequence();
        started=true;
    }else{
        keysound(event.key);
    }
});

var initial=false;
$(document).click(function(){
    if(!initial){
        $("#level-title").text("LEVEL"+level);
        nextSequence();
        initial=true;
    }
})
function keysound(button){
    switch(button){
        case "g":   userClickedPattern.push("green");
                    playsound("green");
                    animatePress("green");
                    checkAnswer(userClickedPattern.length-1);
                    break;
        case "r":   userClickedPattern.push("red");
                    playsound("red");
                    animatePress("red");
                    checkAnswer(userClickedPattern.length-1);
                    break;
        case "y":   userClickedPattern.push("yellow");
                    playsound("yellow");
                    animatePress("yellow");
                    checkAnswer(userClickedPattern.length-1);
                    break;
        case "b":   userClickedPattern.push("blue");
                    playsound("blue");
                    animatePress("blue");
                    checkAnswer(userClickedPattern.length-1);
                    break;
        default:    playsound("wrong");
                    startOver();
                    break;
    }
}

//sdfwef
$(".btn").click(function(){
   
        var userChosenColour=$(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playsound(userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length-1);
    
});

function checkAnswer(currentLevel){
    
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },400);
        }
    }
    else{
        playsound("wrong");
        
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game over Press A Key to Start");
        startOver();
    }
    
}

function startOver(){
    gamePattern=[];
    level=0;
    started=false;
    setTimeout(function(){
        initial=false;
    },200);
    
}

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("LEVEL"+level);

    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColor[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
    
}


function playsound(name){
    var audio1 = new Audio("sounds/" + name + ".mp3");
    audio1.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}











