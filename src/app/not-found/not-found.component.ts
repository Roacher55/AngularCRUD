import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  
  constructor() { }

  data:any[] = [
    {
       item: "banana"
    },
    {
       item: "apple"
    },
    {
       item: "lemon"
    }
 ]
   

  ngOnInit(): void {
  }

}
