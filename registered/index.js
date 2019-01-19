$(function(){
	var Vm=new Vue({
		el:"#app",
		data:{
			name:"",  //用户昵称
			phone:"",  //手机号
			code:"",  //验证码
			codeBox:false,  //是否显示验证码盒子
			pass:"",  //密码	
			codeBtnText:"获取手机验证码" //按钮文本
		},
		methods:{
			phoneText:function(){
				this.codeBox=true;
			},
			
			codeBtn:function(){
				if(codeBtnVal!==true) {return};
				codeBtnVal=false;
				countTime();
			}
		}
	});
	
	var codeTime=4;  //隔多久可以获取手机验证码(实际时间减少一秒)
	var codeBtnVal=true;  //是否可以点击获取手机验证码按钮
	function countTime(){
		let myCode=setInterval(function(){
			Vm.codeBtnText="重新发送("+codeTime+")";
			codeTime-=1;
			console.log("运行ing");
			if(codeTime===-1){  //停止计时器
				codeTime=4;
				clearInterval(myCode);
				Vm.codeBtnText="获取手机验证码";
				codeBtnVal=true;
			}
		},1000);
		
	}
});

