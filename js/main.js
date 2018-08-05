
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

});


