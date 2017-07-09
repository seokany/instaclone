// var weaponsList = ["knife", "kkong", "love"];

// var soldier = {
// 	name: "h",
// 	gender: "gay",
// 	korean: true,
// 	weapons: weaponsList[2]
// }

// function add(dal, song){
// 	return dal/song;
// }

// function substract(dal1, song1) {
// 	return dal1+song1;
// }

// var age = prompt("how was your first love?");

// if(age < 18){
// 	console.log("fuck ass");
// } else if (age >= 18 && age <= 40){
// 	console.log("magician");
// } else if (age >= 41 && age <= 60) {
// 	console.log("grand magician");
// } else {
// 	console.log("god");
// }
$(document).ready(function(){

	var $heart = $('.heart'),
		$addComment = $('.photo__add-comment'),
		$ellipsis = $('.fa-ellipsis-h'),
		$popUp = $('.popUp'),
		$closePopup = $('fa-times'),
		$closePopUpBtn = $('.closePopUpBtn');

	$heart.click(function(){
		// if($(this).hasClass('fa-heart-o')){
		// 	console.log("+1")
		// } else {
		// 	console.log("-1")
		// }
		// $(this).toggleClass('fa-heart-o fa-heart');
		var likes = $(this).parent().parent().children('.photo__likes').children('.photo__likes-number'),
			likesNumber = parseInt(likes.html()),
			newValue
			if($(this).hasClass('fa-heart-o')){
				newValue = likesNumber + 1;
			} else{
				newValue = likesNumber - 1;
			}
			likes.html(newValue)
			$(this).toggleClass('fa-heart-o fa-heart');
	});

	$addComment.keydown(function(event){
		// Detect if the key is enter
		if(event.keyCode == 13){
			// save the textarea;s value
			// console.log('pressed enter', event.target.value)
			var newComment = event.target.value;
			// select the comment list above textarea
			// console.log($(this).parent().parent().children('.photo__comments'))
			var commentList = $(this).parent().parent().children('.photo__comments');
			commentList.append('<p>hello</p>')
			// Empty the value of textarea
			$(this).val('').blur();
			// Append a <li> to photo__comments.
			commentList.append("<li class='photo__comment'><span class='photo__comment-author'>serranoarevalo</span>" + newComment + "</li>");
		}
	})
	$ellipsis.click(function(){
		$popUp.fadeIn();
	})

	$closePopup.click(closePopup);
	$closePopUpBtn.click(closePopup);

	function closePopup(event) {
		event.preventDefault()
		$popUp.fadeOut();
	}

})