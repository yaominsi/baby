var exp={
	expM : {
		beginDate:null,
		endDate:null,
		company:null,
		place:null,
		salary:null,
		ensureManName:null,
		ensureManPhone:null,
		desc:null
		//open,close,preOrder
	},
	save : function(expM){
		console.info(expM.name);
		return {success:true};
	},
	demo : {
		data:[
			{
				beginDate:'beginDate',
				endDate:'endDate',
				company:'company',
				place:'place',
				salary:'salary',
				ensureManName:'ensureManName',
				ensureManPhone:'ensureManPhone',
				desc:'desc'
			},
			{
				beginDate:'beginDate',
				endDate:'endDate',
				company:'company',
				place:'place',
				salary:'salary',
				ensureManName:'ensureManName',
				ensureManPhone:'ensureManPhone',
				desc:'desc'
			},
			{
				beginDate:'beginDate',
				endDate:'endDate',
				company:'company',
				place:'place',
				salary:'salary',
				ensureManName:'ensureManName',
				ensureManPhone:'ensureManPhone',
				desc:'desc'
			}
		]
		
	}
	

};
module.exports = exp;