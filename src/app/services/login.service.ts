import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class LoginService {

  public url = "http://127.0.0.1:8000"

  entrar(usuario:Array<any>){

    let datos = {
      'grant_type': 'pass',
      'client_id':'2',
      'client_secret':''
    };

  }

  constructor() { }
}
