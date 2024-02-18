var playing=false;
var score;
var trialsleft;
var step;
var action;
var fruit=['apple','banana','mango','orange'];
$(function(){
    $("#startreset").click(function(){
        if(playing==true)
        {
            location.reload();
        }
        else{
            playing=true;
            $("#gameover").hide();

            score=0;
            $("#scorevalue").html(score);

            trialsleft=3;
            $("#trialsleft").show();
            addHearts();

            $("#startreset").html("Reset Game");

            startAction();

        }



    })

    $("#fruit1").mouseover(function () { 
        score++;
        $("#scorevalue").html(score);
        $("#slicesound")[0].play();
        clearInterval(action);
        $("#fruit1").hide("explode" , 500);
        setTimeout(startAction,500)
        ;
    });


});


function addHearts(){
    $("#trialsleft").empty();
    for(i=0;i<trialsleft;i++){
        $("#trialsleft").append('<img src="Images/heart.png" class="life">');
    }
}

function startAction(){
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({
        'left' : Math.round(600*Math.random()),
        'top'  : -35
    });

    //moving the fruit
    step=1 + Math.round(5*Math.random());
    action = setInterval(function(){
        $("#fruit1").css('top' , $("#fruit1").position().top + step);
        
        if($("#fruit1").position().top > $("#fruitcontainer").height()){
            if(trialsleft > 1){
                $("#fruit1").show();
                chooseFruit();
                $("#fruit1").css({
                    'left' : Math.round(600*Math.random()),
                    'top'  : -35
                });

                //moving the fruit
                step=1 + Math.round(5*Math.random());
                trialsleft--;
                addHearts();
            }
            else{
                playing=false;
                $("#gameover").show();
                $("#gameover").html('<p>Game Over</p><p>your score is '+score +'. </p>');
                $("#startreset").html("Start Game");
                $("#trialsleft").hide();
                clearInterval(action);

            }

        }
    },10)

   
}

function chooseFruit(){
    $("#fruit1").attr('src' , 'Images/'+fruit[Math.round(3*Math.random())]+'.png');
}
