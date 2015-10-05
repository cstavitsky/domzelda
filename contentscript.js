// alert("code executed!");
function scrollTop() {
	window.scrollTo(0, 0);
};


if (!document.getElementById("zelda_chrome_character")){
	scrollTop();

	var character = document.createElement("img")
	// set image to link_walking_forward_1 image
	character.setAttribute("src", "http://i.imgur.com/D65y8lL.png");
	character.setAttribute("id", "zelda_chrome_character");
	bod = document.querySelector("body");
    bod.insertBefore(character, bod.firstChild);

    $("body").attr("id", "zelda_tiled_bg");
}


// function moveLeft(element) {
// 	$(element).css("margin-left","-=10")
// }

// function moveRight(element) {
// 	$(element).css("margin-left","+=10")
// }

// function moveUp(element) {
// 	$(element).css("margin-top","-=10")
// }

// function moveDown(element) {
// 	$(element).css("margin-top","+=10")
// }


function checkCollision(element) {
	// var positionTop = parseInt($(element).css("top").slice(0,-2));
	// var positionLeft = parseInt($(element).css("left").slice(0,-2));
	var sprite = $(element)[0].getBoundingClientRect();
	$('a').each(function(){ 
		var rectangle = this.getBoundingClientRect();
		// var pTop = $(this).offset().top
		// var pTopLowerBound = pTop - 20;
		// var pTopUpperBound = pTop + 20;
		// var pLeft = $(this).offset().left;
		// var pLeftLowerBound = pLeft - 20;
		// var pLeftUpperBound = pLeft + 20;
		// if (positionTop > pTopLowerBound && positionTop < pTopUpperBound && positionLeft > pLeftLowerBound && positionLeft < pLeftUpperBound) {
		// 	$(this).css("background-color", "blue");
		// }

		if (sprite.bottom > rectangle.top && sprite.left > rectangle.left && sprite.right < rectangle.right) {
			$(this).css("background-color", "blue");
		}
	});	
	// $("p").each(function(){
	// 	console.log(this.style)
	// 	// if (parseInt(pPosition).between((positionTop-20),positionTop) || parseInt(this.css("top").slice(0,-2)).between(positionTop,(positionTop+20))) {
	// 	// 	$("body").css("background-color", blue);
	// 	// }
	// });
}

var up = 1;
var down = 1;
var left = 1;
var right = 1;

$(document).keydown(function(event) {
checkCollision("#zelda_chrome_character");
	var key = event.which;
	var offset = 10;
	var pos = $("#zelda_chrome_character").position();
	if (key==37) {
		event.preventDefault();
		// moveLeft("#zelda_chrome_character")
		$("#zelda_chrome_character").css("left", pos.left - offset)
		if (left == 1) {
			$("#zelda_chrome_character").attr("src", "http://i.imgur.com/d6ER0Yt.png");
			left = 2;
		} else {
			$("#zelda_chrome_character").attr("src", "http://i.imgur.com/eBigz81.png");
			left = 1;
		}
	} else if (key==38) {
		event.preventDefault();
		// moveUp("#zelda_chrome_character");
		$("#zelda_chrome_character").css("top", pos.top - offset)
		if (up == 1) {
			$("#zelda_chrome_character").attr("src", "http://i.imgur.com/UiinRFE.png");
			up = 2;
		} else {
			$("#zelda_chrome_character").attr("src", "http://i.imgur.com/BTQ0VPX.png");
			up = 1;
		}
	} else if (key==39) {
		event.preventDefault();
		// moveRight("#zelda_chrome_character");
		$("#zelda_chrome_character").css("left", pos.left + offset)
		if (right == 1) {
			$("#zelda_chrome_character").attr("src", "http://i.imgur.com/EC9DpSy.png");
			right = 2;
		} else {
			$("#zelda_chrome_character").attr("src", "http://i.imgur.com/KyNGrrv.png");
			right = 1;
		}
	} else if (key==40) {
		event.preventDefault();
		// moveDown("#zelda_chrome_character")
		$("#zelda_chrome_character").css("top", pos.top + offset)
		if (down == 1) {
			$("#zelda_chrome_character").attr("src", "http://i.imgur.com/aRw0NLJ.png");
			down = 2;
		} else {
			$("#zelda_chrome_character").attr("src", "http://i.imgur.com/D65y8lL.png");
			down = 1;
		}
	} else {
	console.log("another key pressed");
	return null
	}
});
