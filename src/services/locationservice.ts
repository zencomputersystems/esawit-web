import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions, URLSearchParams} from '@angular/http';

import {LocationModel} from '../models/location';
import {GETLOCATION} from '../models/location';
import {GETLOCATION_CHART} from '../models/location';

import {GET_VEHICLE_LOCATION} from '../models/vehicle';
import {LOCATION_VEHICLE_MODEL} from '../models/location';

import * as constants from '../app/config/constants';
import {BaseHttpService} from './base-http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';


import { NavController } from 'ionic-angular';

class ServerResponse {
	constructor(public resource: any) {
	}
};

@Injectable()
export class LocationService 
{
	baseResourceUrl: string = constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/eSawitdb/_table/master_location';
	baseResource_Url: string = constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/eSawitdb/_table/';

	baseResourceUrl_mastervehicle: string = constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/eSawitdb/_table/master_vehicle';
	baseResourceUrl_vehicle_location: string = constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/eSawitdb/_table/vehicle_location';

	constructor(private httpService: BaseHttpService, private nav: NavController) {};


	
    private handleError (error: any) {
	   let errMsg = (error.message) ? error.message :
	   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	   console.log(errMsg); // log to console instead
	   localStorage.setItem('session_token', '');       
	  return Observable.throw(errMsg);
	}
	
	Update (location: LocationModel) 
	{
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
    	
    	let options = new RequestOptions({ headers: queryHeaders });

		// if (driver.driver_GUID) 
		// {
			return this.httpService.http.patch(this.baseResourceUrl , location.toJson(true),options)
			.map((data) => {
				return data;
			});
		// } 
	}

	save_location (master_location: LocationModel): Observable<any> 
	{
		//console.log(localStorage.getItem('session_token'));
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
    	let options = new RequestOptions({ headers: queryHeaders });		
			return this.httpService.http.post(this.baseResourceUrl, master_location.toJson(true),options)
				.map((response) => {
					return response;
				});
		
	}
	
	GetLocation_Chart (params?:URLSearchParams): Observable<GETLOCATION_CHART[]> {
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);    	
		return this.httpService.http
			.get(this.baseResource_Url+'totaldriver_view', { search: params, headers: queryHeaders})
			.map((response) => {
				var result: any = response.json();
				let locationcharts: Array<GETLOCATION_CHART> = [];
				result.resource.forEach((locationchart) => {
					locationcharts.push(GETLOCATION_CHART.fromJson(locationchart));
				});
				
				return locationcharts;
			}).catch(this.handleError);
	};

	get_locationss (params?: URLSearchParams): Observable<LocationModel[]> 
	{
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
		
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
		return this.httpService.http
			.get(this.baseResourceUrl, { search: params ,headers: queryHeaders})
			.map((response) => 
			{
				var result: any = response.json();
				let locations: Array<LocationModel> = [];
				result.resource.forEach((location) => {
					locations.push(LocationModel.fromJson(location));
				});
				console.log(locations);
				return locations;

			}).catch(this.handleError);
	};
	
	

	get (id: string, params?: URLSearchParams): Observable<LocationModel> {
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
		return this.httpService.http
			.get(this.baseResourceUrl + '/' + id, { search: params ,headers: queryHeaders})
			.map((response) => {
				var result: any = response.json();
				let location: LocationModel = LocationModel.fromJson(result);
				return location;
			}).catch(this.handleError);
	};
	
	
	getVehicles_bylocation (id:string,params?: URLSearchParams): Observable<GETLOCATION[]> 
	{
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
		
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
		return this.httpService.http
			.get(this.baseResource_Url+'getlocationbyguid_view?filter=vehicle_GUID='+id, { search: params ,headers: queryHeaders})
			.map((response) => 
			{
				var result: any = response.json();
				//console.log(result);
				let get_selectvehicles: Array<GETLOCATION> = [];
				result.resource.forEach((get_selectvehicle) => {
					get_selectvehicles.push(GETLOCATION.fromJson(get_selectvehicle));
				});
				//console.log(getVehicles);
				return get_selectvehicles;

			}).catch(this.handleError);
	};
	
	getVehicles_bylocation2 (id:string,params?: URLSearchParams): Observable<GETLOCATION[]> 
	{
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
		
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
		return this.httpService.http
			.get(this.baseResource_Url+'getlocationbyguid2_view?filter=location_GUID='+id, { search: params ,headers: queryHeaders})
			.map((response) => 
			{
				var result: any = response.json();
				//console.log(result);
				let get_selectvehicles: Array<GETLOCATION> = [];
				result.resource.forEach((get_selectvehicle) => {
					get_selectvehicles.push(GETLOCATION.fromJson(get_selectvehicle));
				});
				//console.log(getVehicles);
				return get_selectvehicles;

			}).catch(this.handleError);
	};

	
	/*	Location Vehicel */
	save_LocationVehicle (vehicel_location: LOCATION_VEHICLE_MODEL): Observable<any> 
	{
		//console.log(localStorage.getItem('session_token'));
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
    	let options = new RequestOptions({ headers: queryHeaders });
		
			return this.httpService.http.post(this.baseResourceUrl_vehicle_location, vehicel_location.toJson(true),options)
				.map((response) => {
					console.log(response);
					return response;
				});
		
	}

	getVehicles (params?: URLSearchParams): Observable<GETLOCATION[]> 
	{
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
		
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
		return this.httpService.http
			.get(this.baseResourceUrl_mastervehicle, { search: params ,headers: queryHeaders})
			.map((response) => 
			{
				var result: any = response.json();
				let getvehicles: Array<GETLOCATION> = [];
				result.resource.forEach((getVehicle) => {
					getvehicles.push(GETLOCATION.fromJson(getVehicle));
				});
				//console.log(getvehicles);
				return getvehicles;

			}).catch(this.handleError);
	};
	
	Deactive_Location (locationmodel: LocationModel) 
	{
		console.log(locationmodel);
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
    	
    	let options = new RequestOptions({ headers: queryHeaders });

		if (locationmodel.ID) 
		{
			return this.httpService.http.patch(this.baseResourceUrl, locationmodel.toJson(true),options)
			.map((data) => {
				return data;
			});
		} 
	}
	
	getLocation (id: string, params?: URLSearchParams): Observable<LocationModel> {
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
		return this.httpService.http
			.get(this.baseResourceUrl + '/' + id, { search: params ,headers: queryHeaders})
			.map((response) => {
				var result: any = response.json();
				let location: LocationModel = LocationModel.fromJson(result);
				return location;
			}).catch(this.handleError);
	};

}
