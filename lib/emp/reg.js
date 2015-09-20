var reg={
	regM : {
		name:null,
		pwd:null,
		cellPhone:null,
		headImgUrl:null
	},
	save : function(regM){
		console.info(regM.name);
		return {success:true};
	},
	get : function(cellPhone){
		return {
			name:'name',
			pwd:'pwd',
			cellPhone:'cellPhone',
			headImgUrl:'headImgUrl'
		}
	},
	demo : {
		data:{
			name:'name',
			pwd:'pwd',
			cellPhone:'cellPhone',
			headImgUrl:'headImgUrl'
		}
	}
	

};
module.exports = reg;