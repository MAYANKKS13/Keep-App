import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Notes } from '../Models/Notes';


@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private httpsvc:HttpClient) { }

  addNotes(notesobj:Notes)
  {
    return this.httpsvc.post("http://localhost:3000/notes",notesobj);
  }

  getNotes()
  {
    return this.httpsvc.get("http://localhost:3000/notes");
  }
}


