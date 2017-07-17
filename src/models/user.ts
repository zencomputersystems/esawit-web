export class User {
	constructor(
		public tenant_GUID: string = null,
		public user_GUID: string = null,
		public fullname: string = null,
		public userID: string = null,
		public email: string = null,
		public address1: string = null,
		public address2: string = null,
		public password: string = null,
		public role_GUID: string = null,
		public active: number = null,
		public createdby_GUID: string = null,
		public created_ts: string = null,
		public updatedby_GUID: string = null,
		public updated_ts: string = null
	) { }


	static fromJson(json: any) {
		if (!json) return;

		return new User(
			json.tenant_GUID,json.user_GUID,json.fullname,json.userID,json.email,
			json.address1,json.address2,json.password,json.role_GUID,json.active,
			json.createdby_GUID,json.created_ts,json.updatedby_GUID,json.updated_ts
		);
	}


	toJson(stringify?: boolean): any {
		var doc = {
			tenant_GUID:this.tenant_GUID,user_GUID:this.user_GUID,fullname:this.fullname,userID:this.userID,
			email:this.email,address1:this.address1,address2:this.address2,password:this.password,role_GUID:this.role_GUID,
			active:this.active,
			createdby_GUID:this.createdby_GUID,
			created_ts:this.created_ts,
			updatedby_GUID:this.updatedby_GUID,
			updated_ts:this.updated_ts
		};

		return stringify ? JSON.stringify({ resource: [doc] }) : doc;
	}

}
