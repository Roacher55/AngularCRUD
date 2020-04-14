import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {PomocService} from '../pomoc.service'





@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent implements OnInit {
  osoba: any
  id:any
  strona:any
 
  

  constructor(private routerA: ActivatedRoute, public db : AngularFireDatabase, service : PomocService ) {
    this.id = this.routerA.snapshot.paramMap.get('id');
    this.osoba =  db.list('/ListaOsob').snapshotChanges()
   this.strona = service
   
  }
  ClickGlowna()
  {
    this.strona.ClickStronaGlowna()
  }
  ClickLista()
  {
    this.strona.ClickListaOsob()
  }

  ngOnInit(): void {
  }
  klucz(k)
  {
    console.log('Tutaj' + k);
    if(k===this.id)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
