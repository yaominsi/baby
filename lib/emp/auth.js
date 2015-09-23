var auth={
	loginM : {
		name:null,
		pwd:null
	},
	logoutM:{
		userId:null
	},
	login : function(loginM){
		console.info(loginM.name);
		return {success:true,name:loginM.name};
	},
	logout:function(logoutM){
		console.info(logoutM.userId);
		return {success:true};
	},
	demo : {
		data:{
			name:'baby',
			pwd:'pwd'
		}
	}
	

};
module.exports = auth;