import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  constructor(private http: HttpClient) { }
  getData() : Observable<any> {
    return this.http.get('https://api.github.com/users/rakesh009p/repos');
  }
}


 
