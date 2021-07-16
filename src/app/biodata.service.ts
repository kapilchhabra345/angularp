import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibiodata } from './biodatas';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {
 private url='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }
  
  
  biodata():Observable<Ibiodata[]>{
    return this.http.get<Ibiodata[]>(this.url);

  }
    
      
  //  createPost(input:HTMLInputElement):Observable<Ibiodata>
  //  {
  //    let post={title:input.value};
  //    return this.http.post<Ibiodata>(this.url,JSON.stringify(post));
  //  }

  //createPost(book:Ibiodata):Observable<Ibiodata>
  //{
   // alert(book);
  //  return this.http.post<Ibiodata>(this.url,book);
  //}

   

}
