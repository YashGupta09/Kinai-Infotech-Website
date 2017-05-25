$(document).ready(function(){
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;			//detecting safari browser
	if (isSafari)
		$('.line, .service-subheading').css("font-family", "TimesNewRomanPS-ItalicMT");			//change font for safari browser

	$('body').scrollspy({target: ".navbar", offset: 60});

	$('.navbar a').click(function() {		//animation for in-page navigation 
	    if (this.hash !== "") {
		    event.preventDefault();
		    var hash = this.hash;
		    $('html, body').animate({
        		scrollTop: $(hash).offset().top
      		}, 500, function(){window.location.hash = hash;});
    	}
  	});

  	$('a.btn').click(function() {			//animation for in-page navigation
	    if (this.hash !== "") {
		    event.preventDefault();
		    var hash = this.hash;
		    $('html, body').animate({
        		scrollTop: $(hash).offset().top
      		}, 500, function(){window.location.hash = hash;});
    	}
  	});

	$('input.btn').on('click', function() {		//send message button
		var name = $('#name').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var message = $('#message').val();

		var nameErr = "";
		var emailErr = "";
		var messageErr = "";

		if ((name == ""))			//condition for empty name field
			nameErr = "* Name Required";
		else if (!(/^[a-zA-Z ]+$/.test(name)))			//condition for name validation
			nameErr = "Only Alphabets !";

		if ((email == ""))			//condition for empty email field
			emailErr = "* Email Required";
		else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))			//condition for email validation
			emailErr = "Invalid Email !";

		if ((message == ""))			//condition for empty message field
			messageErr = "* Message Required";

		if (nameErr == "" && emailErr == "" && messageErr == "") {
			jQuery.ajax({
				url: "email.php",
				data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message,
				type: "POST",
				success: function() {
							$('#form').trigger('reset');
							document.getElementById("#nameErr").innerHTML = "";
							document.getElementById("#emailErr").innerHTML = "";
							document.getElementById("#messageErr").innerHTML = "";
							alert("Message Sent.");
						},
				error: function() {
							$('#form').trigger('reset');
							document.getElementById("#nameErr").innerHTML = "";
							document.getElementById("#emailErr").innerHTML = "";
							document.getElementById("#messageErr").innerHTML = "";
							alert("Message Not Sent!\nPlease Try Again.");
						}
			});
		} else {
			document.getElementById("#nameErr").innerHTML = nameErr;
			document.getElementById("#emailErr").innerHTML = emailErr;
			document.getElementById("#messageErr").innerHTML = messageErr;
		}
	});
});