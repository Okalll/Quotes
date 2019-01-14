import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  quotes = []

  addNewQuote(quote) {
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit() {
  }
  // submitQuote(){
  //   this.addQuote.emit(this.newQuote);
  // }

}
