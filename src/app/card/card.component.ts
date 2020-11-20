import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  cardCounter: [string];
  
  @Input()
  id:number;

  @Input()
  name:string;

  
 ngOnInit(){
 }

 deleteCard(){
   this.cardCounter.splice(this.id, 1);
   localStorage.setItem('cardCounter', JSON.stringify(this.cardCounter)); 
 }

}
