import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PomocService} from '../pomoc.service'

@Component({
  selector: 'app-strona-glowna',
  templateUrl: './strona-glowna.component.html',
  styleUrls: ['./strona-glowna.component.css']
})
export class StronaGlownaComponent implements OnInit {

  a: any
  constructor(private router: Router, service : PomocService  ) {
      this.a = service
   
    
   }
click(){
  this.a.ClickListaOsob()
}
  

  ngOnInit(): void {
  }
  
  
  

}
