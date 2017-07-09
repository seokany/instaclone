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
	var $heart = $('.heart');

	$heart.click(function() {
		$(this).toggleClass('fa-heart-o fa-heart')
	})
})

