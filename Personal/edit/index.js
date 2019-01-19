// JavaScript Document
$(function(){
		console.log("内联js加载");
	
			//加载头部
		$(".topNav-warpper").load('/head/index.html',function(){
			console.log('topNav加载完毕');
		});
		
		/*显示用户名盒子和修改用户名盒子之间切换*/
		function nameBtnBox(i){
			if(i===1){
				Vm.nameBox=true;
				Vm.nameUpBox=false;
			}
			else if(i===2){
				Vm.nameBox=false;
				Vm.nameUpBox=true;
			}
		}
	
		/*在显示性别和修改性别之间切换*/
		function genderBtnBox(i){
			if(i===1) //显示性别盒子
				{
					Vm.genderBox=true;
					Vm.genderUpBox=false;
				}
			else if(i===2)  //显示修改性别盒子
				{
					Vm.genderBox=false;
					Vm.genderUpBox=true;
				}
		}
	
		/*在个性签名盒子和修改个性签名盒子之间切换*/
		function signBtnBox(i){
			if(i===1) //显示个性签名盒子
				{
					Vm.signBox=true;
					Vm.signUpBox=false;
				}
			else if(i===2)
				{
					Vm.signBox=false;
					Vm.signUpBox=true;
				}
		}
	
		/*居住地盒子和修改居住地盒子之间切换*/
		function liveBtnBox(i){
			if(i===1)
				{
					Vm.liveBox=true;
					Vm.liveUpBox=false;
				}
			else if(i===2)
				{
					Vm.liveBox=false;
					Vm.liveUpBox=true;
				}
		}
	
		/*行业显示盒子和修改盒子之间切换*/
		function stryBtnBox(i){
			if(i===1)
				{
					Vm.stryBox=true;
					Vm.stryUpBox=false;
				}
			else if(i===2)
				{
					Vm.stryBox=false;
					Vm.stryUpBox=true;
				}
		}
	
		/*职业经历盒子切换*/
		function profBtnBox(i){
			if(i===1)
				{
					Vm.profBox=true;
					Vm.profUpBox=false;
				}
			else if(i===2)
				{
					Vm.profBox=false;
					Vm.profUpBox=true;
				}
		}
	
		/*教育经历盒子切换*/
		function eduBtnBox(i){
			if(i===1)
				{
					Vm.eduBox=true;
					Vm.eduUpBox=false;
				}
			else if(i===2)
				{
					Vm.eduBox=false;
					Vm.eduUpBox=true;
				}
		}
	
		/*个人简介切换*/
		function roduBtnBox(i){
			if(i===1)
				{
					Vm.roduBox=true;
					Vm.roduUpBox=false;
				}
			else if(i===2)
				{
					Vm.roduBox=false;
					Vm.roduUpBox=true;
				}
		}
	
		/*判断输入的数据是否为空*/
		function ValStr(str){
			if(str===""||str===null){
				return true;
			}else{
				return false;
			}
		}
		
		var Vm=new Vue({
			el:'#app',
			data:{
				topImgWidth:$('#app').width(),
				topImgUrl:'/images/topImg.jpg', /*顶部图片地址*/
				userImgUrl:'', /*头像地址*/
				userName:'', /*用户名*/
				nameBox:true,  /*用户名盒子是否显示*/
				userNameBtn:true,  /*是否显示编辑用户名按钮*/
				userNameUpdata:'', /*用户名修改框显示的用户名*/
				gender:'', /*性别设置*/
				nameUpBox:false, /*修改用户名盒子是否显示*/
				genderBox:true, /*性别盒子是否显示*/
				genderUpBox:false, /*修改性别盒子是否显示*/
				sign:'', /*个性签名*/
				signBox:true, /*个性签名盒子是否显示*/
				signUpBox:false, /*修改个性签名盒子是否显示*/
				signUpText:'', /*个性签名修改框显示的签名*/
				live:'',  /*居住地*/
				liveBox:true,  /*居住地盒子是否显示*/
				liveUpText:'', /*居住地修改框显示的地址*/
				liveUpBox:false, /*是否显示修改行业盒子*/
				stry:'', /*行业*/
				stryBox:true, /*是否显示行业盒子*/
				stryUpBox:false, /*是否显示修改行业盒子*/
				sites:'', /*行业选择数据*/
				prof:'', /*职业经历*/
				profBox:true, /*是否显示职业经历盒子*/
				profUpBox:false, /*是否显示修改职业经历盒子*/
				edu:'', /*教育经历*/
				eduBox:true,  /*是否显示教育经历盒子*/
				eduUpBox:false,  /*是否显示修改教育经历盒子*/
				rodu:'', /*个人简介*/
				roduBox:true,  /*个人简介盒子*/
				roduUpBox:false, /*修改个人简介*/
				roduUpText  /*个人简介修改框*/
			},
			methods: {
				/*当鼠标悬浮在用户名处时显示编辑用户名按钮
				离开时隐藏*/
				userNameM:function(){
					//console.log("显示编辑用户名按钮");
					//this.userNameBtn=true;
				},
				userNameO:function(){
					//this.userNameBtn=false;
				},
				
				
				/*点击编辑用户名时
				显示修改用户名盒子
				隐藏显示用户名盒子*/
				nameUpBtnS:function(){
					Vm.userNameUpdata=Vm.userName; //加载用户名
					nameBtnBox(2);
				},
				
				/*当修改用户名盒子确定或取消时*/
				nameBtnSave:function(){
					let name=$("#nameText").val();
					if(ValStr(name)){
						return;
					}
					Vm.userName=name;
					nameBtnBox(1);
				},
				nameBtnCancel:function(){
					nameBtnBox(1);
				},
				
				/*点击性别编辑按钮时*/
				genderUpBtn:function(){
					
					genderBtnBox(2);
					/*console.log(this.gender);
					$("#genderSelect").attr("value",this.gender);
					$("#genderSelect").val(this.gender);*/
					$("#genderSelect option").removeAttr("selected");
					$("#genderSelect option[value='女']").attr("selected","selected");
				},
				
				
				/*修改性别时点击取消或确定按钮*/
				genderBtnSave:function()
				{
					let gender=$("#genderSelect").val();
					if(ValStr(gender)){
						return;
					}
					this.gender=gender;
					genderBtnBox(1);
				},
				genderBtnCancel:function()
				{
					genderBtnBox(1);
				},
				
				/*点击修改个性签名按钮*/
				signUpBtn:function(){
					Vm.signUpText=Vm.sign;  //加载个性签名
					signBtnBox(2);
				},
				
				/*修改个性签名是点击取消或确定按钮*/
				signBtnSave:function(){
					let sign=$("#signText").val();
					if(ValStr(sign)){
						return;
					}
					Vm.sign=sign;
					signBtnBox(1);
				},
				signBtnCancel:function(){
					signBtnBox(1);
				},
				
				/*点击修改居住地按钮*/
				liveUpBtn:function(){
					Vm.liveUpText=Vm.live;
					liveBtnBox(2);
				},
				
				/*修改居住地时点击取消或确定按钮*/
				liveBtnSave:function(){
					let live=$("#liveText").val();
					if(live===""||live===null){
						return;
					}
					Vm.live=live;
					liveBtnBox(1);
				},
				liveBtnCancel:function(){
					liveBtnBox(1);
				},
				
				/*点击修改行业*/
				stryUpBtn:function(){
					stryBtnBox(2);
					$.ajax({
						type:'get',
						url:'/demo/stry.json',
						datatype:'json',
						success:function(data){
							//var titlegroup=[];
							//console.log(data.name[0]);
							/*for(let i=0;i<data.name.length;i++)
							{
								titlegroup[i]=data.name[i];
								//console.log(data.title[i]);
								//Vm.sites=data.title[i];
							}*/
							Vm.sites=data.name;
						},
						error:function(XHR,text,errorText)
						{
							console.log(text+errorText);
						}
					});
				},
				
				/*修改行业时点击确定或取消按钮*/
				stryBtnSave:function(){
					this.stry=$("#strySelect").val();
					console.log($("#strySelect").val());
					stryBtnBox(1);
				},
				stryBtnCancel:function(){
					stryBtnBox(1);
				},
				
				/*点击修改职业经历按钮*/
				profUpBtn:function(){
					profBtnBox(2);
				},
				
				/*修改完职业经历时点击按钮*/
				profBtnSave:function(){
					profBtnBox(1);
				},
				profBtnCancel:function(){
					profBtnBox(1);
				},
				
				/*教育经历*/
				eduUpBtn:function(){
					eduBtnBox(2);
				},
				
				/*修改教育经历*/
				eduBtnSave:function(){
					eduBtnBox(1);
				},
				eduBtnCancel:function(){
					eduBtnBox(1);
				},
				
				/*个人简介*/
				roduUpBtn:function(){
					this.roduUpText=this.rodu;
					roduBtnBox(2);
				},
				
				/*修改个人简介*/
				roduBtnSave:function(){
					let rodu=$("#roduUpText").val();
					if(ValStr(rodu)){
						return;
					}
					Vm.rodu=rodu;
					roduBtnBox(1);
				},
				roduBtnCancel:function(){
					roduBtnBox(1);
				}
			}
		});
	
	$.ajax({
		type:'get',
		url:'/demo/checklogin.json',
		success:function(data){
			Vm.userImgUrl=data.imgurl; //头像
			Vm.sign=data.sign;  //个性签名
			Vm.userName=data.name;		//用户名
			Vm.gender=data.gender;		//性别
			Vm.live=data.live;		//居住地
			Vm.stry=data.stry;		//行业
			Vm.rodu=data.rodu;		//个人简介
		}
	});
});