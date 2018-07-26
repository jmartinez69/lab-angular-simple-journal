import { Injectable } from '@angular/core';
//import {sampleMovies} from "../../sample-movies"
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'

interface Entry {
    title: string,
    content: string,
    date: Date
}


@Injectable()
export class EntryList {
    entryList: Array<Entry> 
    
    constructor(private http: Http) {}

    getEntries() {
      return this.http.get('http://localhost:3000/api/journal-entries').pipe(
      map((entries) => entries.json()));
    }
    getEntryById(id: string ) {
      return this.http.get('http://localhost:3000/api/journal-entries'+"/"+id).pipe(
        map((entry) => entry.json()));
      }
      
    addEntry(title:string, content:string):Observable<object>{
      const postData = {
        title: title,
        content: content
      };
      return this.http.post('http://localhost:3000/api/journal-entries', postData).pipe(
        map( (res:Response) => {
          const listas = res.json();
          console.log(listas);
          return listas;
        })
      )
    }

}


