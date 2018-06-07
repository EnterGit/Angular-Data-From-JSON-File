import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit {

  quotes: any;

  constructor(private http: HttpClient) {
    this.http.get('../../assets/quotes.json').subscribe(data => {
      this.quotes = data;
    });
  }


  ngOnInit() { }

}
