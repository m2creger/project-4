import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiKeyService } from '../apikey.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  wolframResults = <any>{}
  constructor(

  	private http: Http,
  	private apiKeyService: ApiKeyService
  ) { }

  ngOnInit() {
  }

}
