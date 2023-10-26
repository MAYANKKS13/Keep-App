import { Component } from '@angular/core';
import { Notes } from '../Models/Notes';
import {NgForm} from '@angular/forms'
import { NotesServiceService } from '../services/notes-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  styleObject = {
    'display': 'flex',
    'flex-direction': 'column'
  };

  panelOpenState = false;

  notesobj =new Notes();

  constructor(private svc:NotesServiceService){}

  notes: any;

  OnSubmit(form:NgForm)
  {
    if(form.valid)
    {
      this.svc.addNotes(form.value).subscribe();
    }

  }
}





