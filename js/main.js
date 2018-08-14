
$(document).ready(function(){

	console.log('Hello world!');
	//Валидация коммента формы
	(function(){
		var formValidComments = {

			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('#sendComment').on('click', formValidComments._formCommentsCheckMethod );
			},

			_formCommentsCheckMethod: function(e){
					e.preventDefault();
					console.log('Метод разгоняется!');

					var valid = true,
							userWritesSomething = $('#userWrites'),
							userWritesComment = $('#userWrites').val().trim(),
							errorNotification = $('#errorNotification');

					if (userWritesComment.length === 0) {
						errorNotification.fadeIn(2000).addClass('show-error') ; //.slideUp() 
							
							valid = false;
					} else {

							errorNotification.fadeOut(2000).removeClass('show-error');
							
					}
					console.log(userWritesComment);

					//скрыть ошибки
					
					userWritesSomething.on('change' , function () {
						
						errorNotification.fadeOut(2000).removeClass('show-error');
						
						
					});

					userWritesSomething.on('keydown' , function () {
						
						errorNotification.fadeOut(2000).removeClass('show-error');
						
					});
					
					if ( valid === true ) {
						console.log('Ура!');
						userWritesSomething.val(userWritesComment);
						$("#CommentForm").submit();
					}
			}
		};

		formValidComments.init();
		
	}());

	//Валидация формы логина
	
	(function(){
		var formValidLogin = {

			isValid: true,

			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('#sendingLoginParams').on('click', formValidLogin._formLoginCheckMethod );

				var formInputs = $("#entryFormInputs").find('input');
				$.each(formInputs, function(index, val){
					var formInput = $(val);
					// Спрятать ошибки
					
					input.on('keydown', function(){

						$(".show-error").fadeOut(2000).removeClass('show-error');

					});

					input.on('change', function(){

						$(".show-error").fadeOut(2000).removeClass('show-error');

					});	

				});

				

			},

			_formLoginCheckMethod: function(e){
	    		e.preventDefault();
					console.log('Погнали!');
					//Объявление переменных
					var entryPageForm = $("#entryFormInputs"),
							emailVal = $("#emailToEntered").val().trim(),
							passwordVal = $("#passwordToEntered").val().trim(),
							adminEmail = "mail@mail.com",
							adminPassword = "123",
							mailChecker = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
							valid = true;

				//Проверка email
				if ( emailVal.length === 0 ) {

					$("#notEnteredEmail").fadeIn(2000).addClass('show-error');
					
					valid = false;

				} else if ( !mailChecker.test(emailVal) ) {
					
					$("#incorrectEmail").fadeIn(2000).addClass('show-error');
					
					valid = false;
				
				} else {
					
					$(".show-error").fadeOut(2000).removeClass('show-error');

					//Проверка пароля
					if ( passwordVal.length === 0 ) {

						$("#notEnteredPassword").fadeIn(2000).addClass('show-error');

						valid = false;

					} else if ( emailVal !== adminEmail || passwordVal !== adminPassword ) {  

						$(".adminAccessDenied").fadeIn(2000).addClass('show-error');

						valid = false;
					}
		} 
					if ( valid === true ) {
					console.log('Ура!');

					entryPageForm.submit();
					}
			}
		};

		formValidLogin.init();

	}());



});


