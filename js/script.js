function play_intro() {
    var audio = document.getElementById("audio_intro");
    audio.play();
  }

var audio_aoligei = document.getElementById("audio_aoligei");
var audio_ou = document.getElementById("audio_ou");
var audio_ou2 = document.getElementById("audio_ou2");
var audio_ou3 = document.getElementById("audio_ou3");

var timesClicked_left = 0;
var timesClicked_right = 0;

document.getElementById("laoba_left").addEventListener("click", function () {
	timesClicked_left++;
	if(timesClicked_left==1){
		audio_aoligei.play();
		document.getElementById("laoba_left").style.backgroundImage="url('pic/aoligei_left.png')";
	}
	else if(timesClicked_left==2){
		document.getElementById("laoba_left").style.backgroundImage="url('pic/laoba_left.jpg')";
		audio_ou.play();
	}
	else if(timesClicked_left%3==0){
		document.getElementById("laoba_left").style.backgroundImage="url('pic/laoba_left.jpg')";
		audio_ou2.play();
	}
	else if(timesClicked_left%3==1){
		audio_ou3.play();
	}
	else{
		audio_ou.play();
	}
});

document.getElementById("laoba_right").addEventListener("click", function () {
	timesClicked_right++;
	if(timesClicked_right==1){
		document.getElementById("laoba_right").style.backgroundImage="url('pic/aoligei_right.png')";
		audio_aoligei.play();
	}
	else if(timesClicked_right==2){
		document.getElementById("laoba_right").style.backgroundImage="url('pic/laoba_right.jpg')";
		audio_ou.play();
	}
	else if(timesClicked_right%3==0){
		document.getElementById("laoba_right").style.backgroundImage="url('pic/laoba_right.jpg')";
		audio_ou2.play();
	}
	else if(timesClicked_right%3==1){
		audio_ou3.play();
	}
	else{
		audio_ou.play();
	}
});