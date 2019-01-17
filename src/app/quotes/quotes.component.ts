import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = []


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete quote')

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  // addNewQuote(quote){
  // let quoteLength = this.quotes.length;
  // quote.id=quoteLength+1;
  // // quote.completeDate = new Date(quote.completeDate)
  // this.quotes.push(quote)

// }

  count=0;
  upVote(){this.count=this.count +1;
  }
  sum=0;
  downVote(){this.sum=this.sum +1;
  }

  constructor() { }

  ngOnInit() { }
}
