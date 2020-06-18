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



//crud
var app = new function() {

this.el = document.getElementById('times');

this.times = ['皮哥：11:00 - 11:15', '迪生：11:15 - 11:45', '帆哥：12:00 - 12:30',
 '鹏哥：13:00 - 13:20', '皮哥：13:30 - 14:05', 'Charlie：15:00 - 15:15', 
 'TA：15:15 - 11:35', '帆哥：17:00 - 17:35', '迪生：18:20 - 18:25'];

this.Count = function(data) {
	var el = document.getElementById('counter');
	var schedule = 'time';

	if (data) {
		if (data > 1) {
			schedule = '人次';
		}
		el.innerHTML = data + ' ' + schedule;
	} else {
		el.innerHTML = 'No ' + schedule;
	}
};

this.FetchAll = function() {
	var data = '';

	if (this.times.length > 0) {
		for (let i = 0; i < this.times.length; i++) {
			data += '<tr>';
			data += '<td class="crud_td" style="text-align:center">' + this.times[i] + '</td>';
			data += '<td class="crud_button" style="width:7.5%"><button onclick="app.Edit(' + i + ')" style="width:100%">Edit</button></td>';
			data += '<td class="crud_button" style="width:7.5%"><button onclick="app.Delete(' + i + ')" style="width:100%">Delete</button></td>';
			data += '</tr>';
		}
	}

	this.Count(this.times.length);
	return this.el.innerHTML = data;
};

this.Add = function() {
	var el = document.getElementById('add-schedule');
	// Get the value
	var time = el.value;

	if (time) {
		// Add the new value
		this.times.push(time.trim());
		// Reset input value
		el.value = '';
		// Dislay the new list
		this.FetchAll();
	}
};

this.Edit = function(item) {
	var el = document.getElementById('edit-schedule');
	// Display value in the field
	el.value = this.times[item];
	// Display fields
	document.getElementById('spoiler').style.display = 'block';
	self = this;

	document.getElementById('saveEdit').onsubmit = function() {
		// Get value
		var time = el.value;

		if (time) {
			// Edit value
			self.times.splice(item, 1, time.trim());
			// Display the new list
			self.FetchAll();
			// Hide fields
			CloseInput();
		}
	}
};

this.Delete = function(item) {
	// Delete the current row
	this.times.splice(item, 1);
	// Display the new list
	this.FetchAll();
};

}

app.FetchAll();

function CloseInput() {
document.getElementById('spoiler').style.display = 'none';
}