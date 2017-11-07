// $(document).ready(function(){
// 	$('#authlink').click(function(){
// 		$('#auth').css('display', 'block');
// 		$('#reg').css('display', 'none');
// 	});
// 	$('#reglink').click(function(){
// 		$('#reg').css('display', 'block');
// 		$('#auth').css('display', 'none');
// 	});

// 	//закрытие модального окна
// 	$('.close').click(function(){
// 		$("#auth").css('display', 'none');
// 		$("#reg").css('display', 'none');
// 	});

// 	// валидация формы авторизации
// 	function validateAuth(){
// 		let regexp = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
// 		let loginVal = document.getElementById('authLogin').value;
// 		if(loginVal.match(regexp)){
// 			// email.classList.add('noErrEmail');
// 			// email.classList.remove('errEmail');
// 			// label.classList.add('blue');
// 			// label.classList.remove('red');
// 			//начала торопиться поэтому использовала jquery
// 			// $('.close-blue-first').show();
// 			// $('.close-red-first').hide();
// 			// $('.error-first').hide();

// 		}
// 		else{
// 			// email.classList.add('errEmail');
// 			// email.classList.remove('noErrEmail');
// 			// label.classList.add('red');
// 			// label.classList.remove('blue');
// 			// $('.close-red-first').show();
// 			// $('.close-blue-first').hide();
// 			// $('.error-first').show().append('<span>Enter correct Email</span>');
// 		}
// 	}


// 	document.querySelector('#authButton').onclick = function(e){
// 		e.preventDefault();
// 		validateAuth();

// 	};
// });

$(document).ready(function(){
$('.menu_close').click(function(){
    $('.big_menu').toggleClass('opened', 'closed');
    $('a').addClass('opened_a')
    })
});