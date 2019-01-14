export class Quote {
public showDescription:boolean;
  constructor (public id: number,  public author: string, public quote: string, public completeDate: date,public upvotes: number, public downvotes: number,
      public totalVotes: number){
        this.showDescription=false;
      }
}
