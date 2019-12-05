
    //create array[14]
    var diceFace=[ "images/sword.png", "images/shield.png", "images/bomb.png","gif/swordWinReverse.gif", "gif/shieldWin.gif","gif/bombWinReverse.gif","gif/swordLoseReverse.gif", "gif/shieldLose2.gif", "gif/bombLoseReverse.gif", "gif/swordWin.gif", "gif/shieldWin.gif", "gif/bombWin.gif", "gif/swordLose.gif", "gif/shieldLose2Reverse.gif","gif/bombLose.gif"]; 
    var diceFace2=[ "images/sword.png", "images/shield.png", "images/bomb.png","gif/swordWinReverse.gif", "gif/shieldWinReverse.gif","gif/bombWinReverse.gif","gif/swordLoseReverse.gif", "gif/shieldLose2.gif", "gif/bombLoseReverse.gif", "gif/swordWin.gif", "gif/shieldWin.gif", "gif/bombWin.gif", "gif/swordLose.gif", "gif/shieldLose2Reverse.gif","gif/bombLose.gif"];

    //reference the image
    var imageName=document.querySelector("#player");
    var imageName2=document.querySelector("#computer");
    var playerBlood =3;
    var computerBlood =3;

    function throwdice1(){
    document.getElementById("note").innerHTML = "Let's fight!";
    document.body.style.backgroundColor = "white";
    //create a random integer between 0 and 5
    var randomdice = 0;
    var randomdice2 = Math.floor(Math.random()*3);
    //There are a few ways to reference the images. Use the one you think works best
    //imageName.src=diceFace[randomdice];
    //imageName2.src=diceFace2[randomdice2];
    
    if(randomdice2==0){
        imageName.src=diceFace[0];
        imageName2.src=diceFace2[0];
        document.getElementById("note").innerHTML = "TIE!";
        document.body.style.backgroundColor = "ivory";
    }else if (randomdice2 == 1 ){
        imageName.src=diceFace[6];
        imageName2.src=diceFace2[10];
        document.getElementById("note").innerHTML = "Oh no, you have been attacked!";
        document.body.style.backgroundColor = "pink";
        //document.getElementById("container2").id = ("firstAttack3"); here is how to change the blood chart.
        playerBlood = playerBlood -1;
        if(playerBlood ==2){
            document.getElementById("container").id = ("firstAttack4");
        }
         if(playerBlood ==1){
            document.getElementById("firstAttack4").id = ("secondAttack4");
        }
         if(playerBlood ==0){
            document.getElementById("secondAttack4").id = ("lastAttack4");
            document.getElementById("note").innerHTML = "Sorry, you lose! Press the button below to play again. ";
            document.body.style.backgroundColor = "red";
        }

        }
        else if(randomdice2 ==2){
        imageName.src=diceFace[3];
        imageName2.src=diceFace2[14];
        document.getElementById("note").innerHTML = "Awesome, your enemy is injured.";
        document.body.style.backgroundColor = "skyblue";
        computerBlood = computerBlood -1;
        if(computerBlood ==2){
            document.getElementById("container2").id = ("firstAttack3");
        }
         if(computerBlood ==1){
            document.getElementById("firstAttack3").id = ("secondAttack3");
        }
         if(computerBlood ==0){
            document.getElementById("secondAttack3").id = ("lastAttack3");
            document.getElementById("note").innerHTML = "Good job! Your enemy has been slain! Press the button below to play again.";
            document.body.style.backgroundColor = "lightsalmon";
        }
        }
    
    }

    function throwdice2(){
    document.getElementById("note").innerHTML = "Let's fight!";
    document.body.style.backgroundColor = "white";
    //create a random integer between 0 and 5
    var randomdice = 1;
    var randomdice2 = Math.floor(Math.random()*3);
    //There are a few ways to reference the images. Use the one you think works best

    if(randomdice2==1){
        imageName.src=diceFace[1];
        imageName2.src=diceFace2[1];
        document.getElementById("note").innerHTML = "TIE!";
        document.body.style.backgroundColor = "ivory";
    }else if (randomdice2 == 2 ){
        imageName.src=diceFace[7];
        imageName2.src=diceFace2[11];
        document.getElementById("note").innerHTML = "Oh no, watch out! ";
        document.body.style.backgroundColor = "pink";
        playerBlood = playerBlood -1;
        if(playerBlood ==2){
            document.getElementById("container").id = ("firstAttack4");
        }
         if(playerBlood ==1){
            document.getElementById("firstAttack4").id = ("secondAttack4");
        }
         if(playerBlood ==0){
            document.getElementById("secondAttack4").id = ("lastAttack4");
            document.getElementById("note").innerHTML = "Sorry, you lose! Press the button below to play again.";
            document.body.style.backgroundColor = "red";
        }
        if(playerBlood <0 || computerBlood <0){
            document.getElementById("note").innerHTML = "Press the button below to play again!";
        }
        
        }else if(randomdice2 ==0){
        imageName.src=diceFace[4];
        imageName2.src=diceFace2[12];
        document.getElementById("note").innerHTML = "Nice attack!";
        document.body.style.backgroundColor = "skyblue";
        computerBlood = computerBlood -1;
        if(computerBlood ==2){
            document.getElementById("container2").id = ("firstAttack3");
        }
         if(computerBlood ==1){
            document.getElementById("firstAttack3").id = ("secondAttack3");
        }
         if(computerBlood ==0){
            document.getElementById("secondAttack3").id = ("lastAttack3");
            document.getElementById("note").innerHTML = "Good job! Your enemy has been slain! Press the button below to play again.";
            document.body.style.backgroundColor = "lightsalmon";
        }
        }
    
    }

    function throwdice3(){
    document.getElementById("note").innerHTML = "Let's fight!";
    document.body.style.backgroundColor = "white";
    //create a random integer between 0 and 5
    var randomdice = 2;
    var randomdice2 = Math.floor(Math.random()*3);
    //There are a few ways to reference the images. Use the one you think works best
    

    if(randomdice2 == 2){
        imageName.src=diceFace[2];
        imageName2.src=diceFace2[2];
        document.getElementById("note").innerHTML = "TIE!";
        document.body.style.backgroundColor = "ivory";
        
    }else if (randomdice2 == 0 ){
        imageName.src=diceFace[8];
        imageName2.src=diceFace2[9];
        document.getElementById("note").innerHTML = "Oh no, be careful";
        document.body.style.backgroundColor = "pink";
        playerBlood = playerBlood -1;
        if(playerBlood ==2){
            document.getElementById("container").id = ("firstAttack4");
        }
         if(playerBlood ==1){
            document.getElementById("firstAttack4").id = ("secondAttack4");
        }
         if(playerBlood ==0){
            document.getElementById("secondAttack4").id = ("lastAttack4");
            document.getElementById("note").innerHTML = "Sorry, you lose! Press the button below to play again. ";
            document.body.style.backgroundColor = "red";
        }
        
        }else if(randomdice2 ==1){
        imageName.src=diceFace[5];
        imageName2.src=diceFace2[13];
        document.getElementById("note").innerHTML = "Keep going, almost win!";
        document.body.style.backgroundColor = "skyblue";
        computerBlood = computerBlood -1;
        if(computerBlood ==2){
            document.getElementById("container2").id = ("firstAttack3");
        }
         if(computerBlood ==1){
            document.getElementById("firstAttack3").id = ("secondAttack3");
        }
         if(computerBlood ==0){
            document.getElementById("secondAttack3").id = ("lastAttack3");
            document.getElementById("note").innerHTML = "Good job! Your enemy has been slain! Press the button below to play again.";
            document.body.style.backgroundColor = "lightsalmon";
        }
        }
    
    }

    //----------the start page-----------

    var btnBackToStartPageButton = document.getElementById("backToStartPageButton");
    var btnStartGamePageButton = document.getElementById("startGamePageButton");
    var gamePage = document.getElementById("gamePage");
    var startPage = document.getElementById("startPage");


    var backToStartPageFunction = function (){
        startPage.style.display ="block";
        gamePage.style.display="none";
    }

    var startGamePageFunction = function (){
        startPage.style.display ="none";
        gamePage.style.display="block";
    }

    btnBackToStartPageButton.onclick = backToStartPageFunction;
	btnStartGamePageButton.onclick = startGamePageFunction;

    //-----------------------------------------------

