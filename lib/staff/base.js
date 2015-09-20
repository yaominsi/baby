var base={
	baseM : {
		birthday:null,
		homeCity:null,
		workYears:null,
		skills:null
		//open,close,preOrder
	},
	save : function(loginM){
		console.info(loginM.name);
		return {success:true};
	},
	demo : {
		data:{
			birthday:'birthday',
			homeCity:'homeCity',
			workYears:'workYears',
			skills:'skills'
		}
	}
	

};
module.exports = base;