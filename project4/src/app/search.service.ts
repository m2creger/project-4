import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from  'rxjs';
import { Http } from '@angular/http';
import { ApiKeyService } from './apikey.service';

@Injectable()

export class SearchService {
	wolframResults = [];
	searchResults;
	searchResultTitle;
	searchResultId;
	searchResultSubPodResults;
	builtSearchResultObject = <any>{}
	noDataReturned = null;
	subPodSearchResultImage;
	subPodSearchResultImageArray = [];
	wolframSearchResultsChanged = new Subject<any[]>();


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
  			this.searchResults = response.json().queryresult.pods;
  			console.log(this.searchResults);
  			if (!this.searchResults) {
  				console.log("No data returned");
  			} else {
  				for (var i = 0; i < this.searchResults.length; i++) {
		  			this.searchResultTitle = this.searchResults[i].title;
		  			console.log(this.searchResultTitle);
		  			this.searchResultId = this.searchResults[i].id;
		  			console.log(this.searchResultId);
		  			this.searchResultSubPodResults = this.searchResults[i].subpods;
		  			this.subPodSearchResultImageArray.push(this.searchResultSubPodResults);
		  			console.log(this.subPodSearchResultImageArray);

  				}
  				this.wolframSearchResultsChanged.next(this.subPodSearchResultImageArray);
  				this.wolframConfiguredSearchResults()

  			
  			}
  			
  		})
  		


	}

	wolframConfiguredSearchResults(): Observable<any> {
		console.log('final search results');
		return this.wolframSearchResultsChanged.asObservable()
	}

	
}