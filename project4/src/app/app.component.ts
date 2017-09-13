import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { ApiKeyService } from './apikey.service';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(
  	meta: Meta, title: Title,
  	private apiKeyService: ApiKeyService,

  ) { 
  	title.setTitle('Forge Construction Professional');
  	meta.addTags([
	  { name: 'author',   content: 'YOURNAMEHERE'},
	  { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
	  { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
	]);
  }

  ngOnInit() {
		
	}
}
