import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from  'rxjs';
import { Http } from '@angular/http';
import { ApiKeyService } from './apikey.service';

@Injectable()

export class SearchService {
	wolframResults = <any>{}

	constructor(
		private http: Http,
		private apiKeyService: ApiKeyService
	){}

	searchWolfram(searchTerm) {
		console.log(searchTerm);
		var encodedSearchTerm = encodeURIComponent(searchTerm);
		var searchUrl = 'https://thingproxy.freeboard.io/fetch/http://api.wolframalpha.com/v2/query?input=' + encodedSearchTerm + '&appid=' + this.apiKeyService.wolframApiKey + '&output=json'
		this.http.get(searchUrl)
  		.subscribe(response => { 
  			console.log(response.json());
  			var results = response.json().queryresult
  			console.log(results);
  		})
	}
}