// 'The Shopping List' programming
$(document).ready(function () {

//hit enter to add list items
	$('#entry').keyup(function(e) {
		if(e.which == 13) {
			e.preventDefault();
			$('#submit').click();
		};
	})
//add items to the list
	$('#submit').click(function(e) {
		var txtbox = document.getElementById('entry');
		var txtval = txtbox.value;
		e.preventDefault();
		//sends an alert if no text is in the text box
		if(!$.trim($('#entry').val())) {
			alert('Please enter an item.');
		} else {
			$('<li class="item"></li>').appendTo('#list').html('<p>'+txtval+'</p>');

			document.getElementById('entry').value = '';
		};

	})
//strikethrough list item when clicked
	$('#list').on('click', 'li', function () {
		$(this).toggleClass('done');
		})
//clicking "clear all" clears all list entries
	$('#clear').click(function () {
		$('#list').children().remove()
	});
	
});