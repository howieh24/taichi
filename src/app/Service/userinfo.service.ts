import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserInfoService {
  private url = 'http://localhost:8080/howie/account';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':  'http://localhost:8080'
    })
  };
  
  constructor(private http: HttpClient) {
    
   }

  find(){
    return this.http.get(this.url, this.httpOptions).pipe(
      map(response => {return response})
    );
  }

  view(regUrl: string){
    return this.http.get(this.url + regUrl, this.httpOptions).pipe(
      map(response => {return response})
    );
  }

  post(regUrl: string, value : any){
    return this.http.post<any>(this.url + regUrl, value).pipe(
      map(response => {
        return response
      })
    )
  }

  put(regUrl: string, value : any){
    return this.http.put<any>(this.url + regUrl, value).pipe(
      map(response => {
          return response
      })
    )
  }
}
