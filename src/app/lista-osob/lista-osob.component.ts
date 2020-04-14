import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UpperCasePipe, TitleCasePipe } from '@angular/common';
import {PomocService} from '../pomoc.service'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-lista-osob',
  templateUrl: './lista-osob.component.html',
  styleUrls: ['./lista-osob.component.css']
})
export class ListaOsobComponent implements OnInit  {
  
  
 


  listaOsob: any;
  
  lista: any;

 
  strona: any

  constructor(private router: Router,public db: AngularFireDatabase, service: PomocService) { 
    this.listaOsob =  db.list('/ListaOsob').snapshotChanges();
    this.lista = this.listaOsob.subscribe(listaOsob=>{this.lista=listaOsob})
    this.strona= service
   console.log(this.lista);
  }



  ngOnInit(): void {
  }
  ClickGlowna()
  {
    this.strona.ClickStronaGlowna()
  }
  ClickDetale(key)
  {
    this.strona.Detale(key)
  }



  DodajOsobe(imie: NgModel ,nazwisko : NgModel, wiek :  NgModel): void {
  
    this.db.list('/ListaOsob/').push({Imie: TitleCasePipe.prototype.transform(imie.value),
      Nazwisko: TitleCasePipe.prototype.transform(nazwisko.value),
      Wiek: wiek.value});
      console.log('Imie:' + imie.value)
      console.log('Nazwisko:' + nazwisko.value)
      console.log('Wiek:' + wiek.value)
      imie.reset()
      nazwisko.reset()
      wiek.reset()
    
  }
  Usun(o){
    this.db.object('/ListaOsob/' + o).remove()
   console.log(o);
  }
  UaktualnijImie(key,payload, zmienionawrtosc: any){
    this.db.list('/ListaOsob/' + key).update(payload,{Imie:  TitleCasePipe.prototype.transform(zmienionawrtosc.value)})
    console.log('aaaaaaaaaaaaaaaa' + zmienionawrtosc.toString)
    zmienionawrtosc.reset()
    
  }

  UaktualnijNazwisko(key,payload, zmienionawrtosc: any){
    this.db.list('/ListaOsob/' + key).update(payload,{Nazwisko:  TitleCasePipe.prototype.transform(zmienionawrtosc.value)})
    console.log('aaaaaaaaaaaaaaaa' + zmienionawrtosc.toString)
    zmienionawrtosc.reset()
    
  }

  UaktualnijWiek(key,payload, zmienionawrtosc: any){
    this.db.list('/ListaOsob/' + key).update(payload,{Wiek:  zmienionawrtosc.value})
    console.log('aaaaaaaaaaaaaaaa' + zmienionawrtosc.toString)
    zmienionawrtosc.reset()
    
  }

  UaktualnijWszystko(key,payload, imie: any, nazwisko:any, wiek: any){
    this.db.list('/ListaOsob/' + key).update(payload,{Imie:  TitleCasePipe.prototype.transform(imie.value),
    Nazwisko: TitleCasePipe.prototype.transform(nazwisko.value),
  Wiek: wiek.value})
    
    imie.reset()
    nazwisko.reset()
    wiek.reset()
    
  }
  czyUkryc: boolean


  Ukryj(o)
  {

  o.is_hidden = !o.is_hidden 
    
    
   } 
  
  
  

  
}
