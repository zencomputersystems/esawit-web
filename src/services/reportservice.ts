import {Injectable} from'@angular/core';
import {Http, Headers, URLSearchParams,RequestOptions} from '@angular/http';
import {Harvestreport} from '../models/harvestreport';
import {Mandorreport} from '../models/mandorreport';
import {Factoryreport} from '../models/factoryreport';
import {VehicleTransactionReport} from '../models/reportmodel';
import {ReconciliationReport} from '../models/reconciliation';

import * as constants from '../app/config/constants';
import {BaseHttpService} from './base-http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
//import { LoginCmp } from '../pages/login/login';
import { NavController } from 'ionic-angular';


class ServerObj {
	constructor (public resource: any) {
	}
};

@Injectable()
export class ReportService 
{
	baseResourceUrl_VehicleTransaction: string = constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/esawitdb/_table/vehicle_transactionview';
    baseResourceUrl_ReconciliationStatus: string = constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/esawitdb/_table/transact_unloading';

	baseResourceUrl: string = constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/esawitdb/_table/HarvestReport';
	baseResourceUrl_mandor: string = constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/esawitdb/_table/mandorreport';
	baseResourceUrl_factory: string = constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/esawitdb/_table/factoryreport';
	constructor(private httpService: BaseHttpService,private nav: NavController) {

	};


    query (params?:URLSearchParams): Observable<Harvestreport[]> 
	{
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
         //console.log('calling request');    	
		return this.httpService.http
			.get(this.baseResourceUrl, { search: params, headers: queryHeaders})
			.map((response) => {
                //console.log(response);
				var result: any = response.json();
                //console.log(result);
				let harvestreports: Array<Harvestreport> = [];
				result.resource.forEach((harvestreport) => {
					harvestreports.push(Harvestreport.fromJson(harvestreport));
				});
                //console.log(harvestreports);
				return harvestreports;

			}).catch(this.handleError);
	};

	VehicleTranactionquery (params?:URLSearchParams) : Observable<VehicleTransactionReport[]> 
	{
		
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
         console.log('calling request');    	
		return this.httpService.http
			.get(this.baseResourceUrl_VehicleTransaction, { search: params, headers: queryHeaders})
			.map((response) => {
                //console.log(response);
				var result: any = response.json();
                //console.log(result);
				let vehicleTransactionReports: Array<VehicleTransactionReport> = [];
				result.resource.forEach((vehicle_transactionReport) => {
					vehicleTransactionReports.push(VehicleTransactionReport.fromJson(vehicle_transactionReport));
				});
                //console.log(vehicleTransactionReports);
				return vehicleTransactionReports;

			}).catch(this.handleError);
	};

	Reconsilation_Tranactionquery (params?:URLSearchParams) : Observable<ReconciliationReport[]> 
	{
		
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
         console.log('calling request');    	
		return this.httpService.http
			.get(this.baseResourceUrl_VehicleTransaction, { search: params, headers: queryHeaders})
			.map((response) => {
                //console.log(response);
				var result: any = response.json();
                //console.log(result);
				let item_ReconciliationReports: Array<ReconciliationReport> = [];
				result.resource.forEach((item_ReconciliationReport) => {
					item_ReconciliationReports.push(ReconciliationReport.fromJson(item_ReconciliationReport));
				});
                //console.log(vehicleTransactionReports);
				return item_ReconciliationReports;

			}).catch(this.handleError);
	};

	Update_Status(ReconciliationModel: ReconciliationReport) 
	{
		// console.log(localStorage.getItem('session_token'));
		// console.log(driver.toJson(true));
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
    	
    	let options = new RequestOptions({ headers: queryHeaders });

		// if (driver.driver_GUID) 
		// {
			return this.httpService.http.patch(this.baseResourceUrl_ReconciliationStatus , ReconciliationModel.toJson(true),options)
			.map((data) => {
				return data;
			});
		// } 
	}
	































	Mandoryquery (params?:URLSearchParams): Observable<Mandorreport[]> {
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
         console.log('calling request');    	
		return this.httpService.http
			.get(this.baseResourceUrl_mandor, { search: params, headers: queryHeaders})
			.map((response) => {
                console.log(response);
				var result: any = response.json();
                console.log(result);
				let mandorreports: Array<Mandorreport> = [];
				result.resource.forEach((mandorreport) => {
					mandorreports.push(Mandorreport.fromJson(mandorreport));
				});
                console.log(mandorreports);
				return mandorreports;

			}).catch(this.handleError);
	};

	Factoryquery (params?:URLSearchParams): Observable<Factoryreport[]> {
		var queryHeaders = new Headers();
    	queryHeaders.append('Content-Type', 'application/json');
    	queryHeaders.append('X-Dreamfactory-Session-Token', localStorage.getItem('session_token'));
    	queryHeaders.append('X-Dreamfactory-API-Key', constants.DREAMFACTORY_API_KEY);
         console.log('calling request');    	
		return this.httpService.http
			.get(this.baseResourceUrl_factory, { search: params, headers: queryHeaders})
			.map((response) => {
                console.log(response);
				var result: any = response.json();
                console.log(result);
				let factoryreports: Array<Factoryreport> = [];
				result.resource.forEach((factoryreport) => {
					factoryreports.push(Factoryreport.fromJson(factoryreport));
				});
                console.log(factoryreports);
				return factoryreports;

			}).catch(this.handleError);
	};



	private handleError (error: any) {
	   let errMsg = (error.message) ? error.message :
	   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	   console.log(errMsg); // log to console instead
	   localStorage.setItem('session_token', '');       
	  return Observable.throw(errMsg);
	}

}