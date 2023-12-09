// OPEN MAIN MENU FUNCTION

function openMenu(){
    document.getElementById('MenuNavigation').classList.toggle('active')
}

function openCard(){
    document.getElementById('accordioncard').classList.toggle('active')
}

// BANNER TEXT ANIMATION

const words = ["Possibilities", "Cencorship","Possibilities"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('animation-word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 500);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('animation-word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();


// GO TO TOP

$('#gototop').click(function(){
	$('html ,body').animate({scrollTop : 0},800);
});


// PASSWORD SHOW AND HIDE

// $(".toggle-password").click(function() {
// 	$(this).toggleClass("toggle-activeeee");
// 	var input = $($(this).attr("toggle"));
// 	if (input.attr("type") == "password") {
// 	  input.attr("type", "text");
// 	} else {
// 	  input.attr("type", "password");
// 	}
// });

function showPassword() {
	document.getElementById('toggle-pass').classList.toggle('active')
	var x = document.getElementById("password-field");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
  }

  function showPassword2() {
	document.getElementById('toggle-pass2').classList.toggle('active')
	var x = document.getElementById("password-field2");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
  }