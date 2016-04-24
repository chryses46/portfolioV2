
$(document).ready(function() {
	runText();
	
	$(".ryu").mouseenter(function() {
		$('.ryu-go').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-go').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		//play hadouken sound
		playHadouken();
		//show ryu's throwing stance
		$('.ryu-go').hide();
		$('.ryu-throwing').show();
		//show hadouken and animate it to the right of the screen
		$('.hadouken').finish().show().animate(
			{'left': '1720px'},
			700,
			function() {
				$(this).hide();
				$(this).css('left', '626px');
			}
		);
	})
	.mouseup(function() {
		//ryu goes back to his ready position
		$('.ryu-go').hide();
		$('.ryu-ready').show();
	})

	$(document).keydown(function(e) {
		//while pressing "x", ryu strikes a pose!
		if (e.keyCode == 88) {
			$('.ryu-go').hide();
			$('.ryu-cool').show();
		}
	})
		.keyup(function(e) {
			if (e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			}
		});	
});

function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function runText () {
	$('.intro').fadeIn(3500, function (){
		$(this).fadeOut(1000, function () {
			$('.made').fadeIn(1500, function () {
				$(this).fadeOut(1000, function (){
					$('.jquery').fadeIn(1500, function () {
						$(this).fadeOut(1500, function () {
							$('.instruct').fadeIn(1500);
						})
					})
				})
			})
		})
	})
}