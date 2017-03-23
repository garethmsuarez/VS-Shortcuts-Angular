import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Shortcut } from './shortcut';

@Injectable()
export class ShortcutService {

  constructor(private http : Http) { }

   getJson(): Observable<Shortcut[]>{
     let shortcuts$ = this.http
     .get('../assets/2017.json',)
     .map(mapShortcuts)
     .catch(handleError);

     return shortcuts$;
   }
}

function mapShortcuts(response:Response): Shortcut[]{
  console.log(response.json());
  return response.json().map(toShortcut);
}

function toShortcut(r:any): Shortcut{
  let shortcut = <Shortcut>({
    shortcut: r.Shortcut,
    name: r.Name
  });
  console.log('Parsed Shortcut', shortcut);
  return shortcut;
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
