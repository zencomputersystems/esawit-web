export class Driver {
	constructor(
		public tenant_GUID: string = null,
		public driver_GUID: string = null,
		public fullname: string = null,
		public identification_no: string = null,
		public identification_type: number = null,
		public address1: string = null,
		public address2: string = null,
		public address3: string = null,
		public phone_no: string = null,
		public email: string = null,
		public license_no: string = null,
		public start_year: string = null,
		public description: string = null,
		public employment_type: number = null,
		public active: number = null,
		public createdby_GUID:string=null,
		public updatedby_GUID:string=null,
		public created_ts:Date=null,
		public updated_ts:Date=null
	) { }


	static fromJson(json: any) {
		if (!json) return;

		return new Driver(
			json.tenant_GUID,
		    json.driver_GUID,
			json.fullname,
			json.identification_no,
			json.identification_type,
			json.address1,
			json.address2,
			json.address3,
			json.phone_no,
			json.email,
			json.license_no,
			json.start_year,
			json.description,
			json.employment_type,
			json.active,json.createdby_GUID,json.updatedby_GUID,json.created_ts,json.updated_ts
		);
	}


	toJson(stringify?: boolean): any {
		var doc = {
			tenant_GUID:this.tenant_GUID,
			driver_GUID:this.driver_GUID,
            fullname:this.fullname,
			identification_no:this.identification_no,
			identification_type:this.identification_type,
			address1:this.address1,
			address2:this.address2,
			address3:this.address3,
			phone_no:this.phone_no,
			email:this.email,
			license_no:this.license_no,
			start_year:this.start_year,
			description:this.description,
			employment_type:this.employment_type,
			active:this.active,
			createdby_GUID:this.createdby_GUID,
			created_ts:this.created_ts,
			updatedby_GUID:this.updatedby_GUID,
			updated_ts:this.updated_ts
		};

		return stringify ? JSON.stringify({ resource: [doc] }) : doc;
	}

}

///////////////////

export class GETVEHICLE {
	constructor(

		public ID: number = null,
		public vehicle_Gid: string = null,
		public registration_no: string = null,
		public driver_GUID: string = null,
		public is_checked: boolean = null,
	) { }


	static fromJson(json: any) {
		if (!json) return;

		return new GETVEHICLE(
			json.ID,
			json.vehicle_Gid,
		    json.registration_no,
			json.driver_GUID,
			json.is_checked
		);
	}


	toJson(stringify?: boolean): any {
		var doc = {
			ID:this.ID,
			vehicle_Gid:this.vehicle_Gid,
			registration_no:this.registration_no,
			driver_GUID:this.driver_GUID,is_checked:this.is_checked
		};

		return stringify ? JSON.stringify({ resource: [doc] }) : doc;
	}

}

/////////////////

export class GETVEHICLE2 
{
	constructor(
		//public ID: number = null,
		public vehicle_GUID: string = null,
		public registration_no: string = null,
		public driver_GUID: string = null,
		public is_checked: boolean = null,
	) { }


	static fromJson(json: any) {
		if (!json) return;

		return new GETVEHICLE2(
			//json.ID,
			json.vehicle_GUID,
		    json.registration_no,
			json.driver_GUID,
			json.is_checked
		);
	}


	toJson(stringify?: boolean): any {
		var doc = {
			//ID:this.ID,
			vehicle_Gid:this.vehicle_GUID,
			registration_no:this.registration_no,
			driver_GUID:this.driver_GUID,is_checked:this.is_checked
		};

		return stringify ? JSON.stringify({ resource: [doc] }) : doc;
	}

}

export class GETDRIVER_CHART
{
	constructor(
		public Employment: string = null,
		public TOTAL: number = null
	) { }


	static fromJson(json: any) {
		if (!json) return;

		return new GETDRIVER_CHART(
			json.Employment,
		    json.TOTAL
		);
	}


	toJson(stringify?: boolean): any {
		var doc = {
			Employment:this.Employment,
			TOTAL:this.TOTAL
		};

		return stringify ? JSON.stringify({ resource: [doc] }) : doc;
	}

}