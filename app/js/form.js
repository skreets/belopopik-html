// function ajax() {
// 	var msg = $("#form").serialize();
// 	$.ajax({
// 		type: "POST",
// 		url: "send.php",
// 		data: msg,
// 		success: function(data) {
// 			$("#results").html(data);
// 		},
// 		error:  function(xhr, str){
// 			alert("Возникла ошибка!");
// 		}
// 	});
// }

// jQuery.fn.notExists = function() {
// 	return $(this).length == 0;
// }

$(document).ready(function(){

	$('.form').validate({

		// Правила
		rules: {

			name:{
				required: true,
				minlength: 2
			},

			email: {
				email: true,
				minlength: 6,
				required: true
			},

			theme: {
				required: true
			},

			message: {
				required: true
			}
		},

		// Предупреждение
		messages:{

			name: {
				required: 'Введите имя',
				minlength: 'Минимальное кол-во символов 2'
			},

			email: {
				email: 'Введите коректный адрес почты',
				minlength: 'Минимальное кол-во символов 6',
				required: 'Введите почту'
			},

			theme: {
				required:  'Введите номер телефона'
			},

			message: {
				required:  'Введите сообщение'
			}
		}
	});
});