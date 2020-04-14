import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PomocService {

  ClickStronaGlowna()
   {

    this.router.navigateByUrl('');
  }

  Detale(o:string){
    this.router.navigateByUrl('Detale/' +o);
  }

  ClickListaOsob() {
    this.router.navigateByUrl('/ListaOsob');
};

  constructor(protected router: Router) { }
}
