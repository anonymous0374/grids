import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Grid } from '../grids/grid';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GridsConfigurationService {
	private url = './src/app/data/grids.json';

	constructor(private http: Http) {

	}

	getGrids(): Observable<Grid[]> { 
        return this.http.get(this.url)
            .map(this.extractGrids)
            .catch(this.errorHandler);
	}

	extractGrids(httpResponse: Response): Grid[] {
		var data = httpResponse.json();

		return data && data.grids || [];
	} 

	errorHandler(error: Response | any) {
		let errMsg: string;
        if (error instanceof Response) { // there's error response
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
			errMsg = error.message ? error.message : error.toString();
        }        

		console.log(errMsg);
		return Observable.throw(errMsg);
	}
}