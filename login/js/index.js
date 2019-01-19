$(function(){
	$('#drag').drag();
	/*if($.cookie('user')!=null){
		$.cookie('user', 'admin', { expires: -1,domain:'127.0.0.1',path:'/'});
	}else{
		$.cookie('user', 'admin', { expires: 30,domain:'127.0.0.1',path:'/'});
	}*/
	
	/**node.js测试接口
	*失效*/
	/*$.ajax({
		type:'post',
		datatype:'json',
		data:{"id":"1"},
		url:'/node/deve/login',
		success:function(data){
			console.log(data);
		}
	})*/
	
	var account={
		id:1,
		account:'admin',
		pass:'admin',
		mainstate:1
	}
	
	
	
	$("#login_btn").click(function(){
		if(!$(this).valDragOk()){
			return;
		}
		$(this).button("loading").delay(0).queue(function(){
			console.log("登陆ing");
			//登陆接口
			$.ajax({
				type:'post',
				url:'/api/login',
				data:{account:"18244761742",pass:"admin"},
				datatype:'json',
				success:function(data){
					var json=JSON.parse(data);
					console.log(data);
					$.cookie('token', data.toString(), { expires: 1,domain:'127.0.0.1',path:'/'});
					$.cookie('account', "18244761742", { expires: 1,domain:'127.0.0.1',path:'/'});
				},
				error:function(XML,text,erroText){
					console.log(text+erroText);
				}
			});
		});
	});
});
		