var emptyTime={
	emptyTimeM : {
		beginTime:null,
		endTime:null,
		staffId:null,
		empId:null,
		status:null
		//open,close,preOrder
	},
	save : function(emptyTime){
		console.info(emptyTimeM.beginTime);
		return {success:true};
	},
	demo : {
		data:{
			beginTime:'beginTime',
			endTime:'endTime',
			staffId:'staffId',
			empId:'empId',
			status:'status'
		}
	},
	get : function(param){
		data:[
			{
				beginTime:'beginTime',
				endTime:'endTime',
				staffId:'staffId',
				empId:'empId',
				status:'status'
			}
		]
	}
	

};
module.exports = emptyTime;