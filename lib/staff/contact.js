var contact={
	contactM : {
		wechat:null,
		qq:null,
		cellPhone:null,
		openType:null
		//open,close,preOrder
	},
	save : function(loginM){
		console.info(loginM.name);
		return {success:true};
	},
	demo : {
		data:{
			wechat:'wechat',
			qq:'qq',
			cellPhone:'cellPhone',
			openType:'openType'
		}
	}
	

};
module.exports = contact;