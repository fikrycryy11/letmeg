//Script by Sebastian Wirajaya
        function showloading(){
            $("#loading").fadeIn("slow"); 
        }
        function hideloading(){
            $("#loading").fadeOut("slow"); 
        }
        function buka(nama) {
$("#konten").html('<div class="portlet-heading"><div class="portlet-title"><center><h4><i class="fa fa-spinner fa-spin"></i> Loading Content...</h4></center</div><div class="clearfix"></div></div><div class="portlet-body"><div class="progress progress-striped active"><div class="progress-bar progress-bar-success" style="width: 100%"></div></div></div>');
	$.ajax({
		url	: nama+'.php',
		type	: 'GET',
		dataType: 'html',
		success	: function(isi){
			$("#konten").html(isi);
		},
	});
}
        function showpage2(nama){
        	$.ajax({
        	type: "GET",
        	url: link,
	        beforeSend: showloading(),
        	success: function(msg){
	        $("#indexmain2").hide();
        	$("#indexmain2").html(msg).show("slow");
	        hideloading();
        	},
        	error: function(msg){
        	$("#indexmain2").html("<center><font color='#ff0000'>Ajax loading error, please try again.</font></center>").show("slow");
        	hideloading();
        	}
        	//, complete: hideloading()
        	});
        }
        function post(){
            $("#loadingresult").fadeIn("slow");
            $("#loading").fadeIn("slow");
            $("input").attr("disabled", "disabled");
            $("select").attr("disabled", "disabled");
            $("button").attr("disabled", "disabled");
            $("textarea").attr("disabled", "disabled");
        }
        function result(){
            $("#loadingresult").fadeOut("slow");
            $("#loading").fadeOut("slow");
            $("input").removeAttr("disabled");
            $("select").removeAttr("disabled");
            $("button").removeAttr("disabled");
            $("textarea").removeAttr("disabled");
        }