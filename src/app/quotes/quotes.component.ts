import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quoted = [
    new Quote(1, `The grass is greener where you water it`, `Neil`, new Date(0, 0, 0)),
    new Quote(2, `Where life plants you bloom it with grace`, `Okall`, new Date(0, 0, 0)),
    new Quote(3, `Little by little,day by day,what is meant for you will find you`, new Date(0, 0, 0)),
  ];

  toggleDetails(index) {
    this.quoted[index].showDescription = !this.quoted[index].showDescription;
  }
  addNewQuote(quote) {
    const quoteLength = this.quoted.length;
    quote.id = quoteLength + 1;
    this.quoted.push(quote);
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quoted[index].name}`)

      if (toDelete) {
        this.quoted.splice(index, 1)
      }
    }
  }

  upVote(index) {
    this.quoted[index].upvotes += 1;
  }
  downVote(index) {
    this.quoted[index].downvotes += 1;
  }

  constructor() { }

  ngOnInit() { }
}
