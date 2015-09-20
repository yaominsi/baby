var auth={
	loginM : {
		name:null,
		pwd:null
	},
	login : function(loginM){
		console.info(loginM.name);
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