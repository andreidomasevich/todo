import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  cardCounter = [];
  title = 'Hello Angular';
  inputValue = '';

  ngOnInit(){
    if(localStorage.getItem('cardCounter')){
      this.cardCounter = JSON.parse(localStorage.getItem('cardCounter'));
    }
  }

  addCard(){
    this.cardCounter.push(this.inputValue);
    this.inputValue = '';
    localStorage.setItem('cardCounter', JSON.stringify(this.cardCounter));
  }
}
