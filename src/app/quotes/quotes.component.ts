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
  addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength++;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}

  count=0;
  upVote(){this.count=this.count +1;
  }
  sum=0;
  downVote(){this.sum=this.sum +1;
  }

  constructor() { }

  ngOnInit() { }
}
