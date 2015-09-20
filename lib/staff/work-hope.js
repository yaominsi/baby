var workHope={
	workHopeM : {
		place:null,
		salary:null,
		workType:null
		//open,close,preOrder
	},
	save : function(baseM){
		console.info(baseM.name);
		return {success:true};
	},
	demo : {
		data:{
			place:'place',
			salary:'salary',
			workType:'worktype'
		}
	},
	get : function(){
		return demo;
	}
	

};
module.exports = workHope;