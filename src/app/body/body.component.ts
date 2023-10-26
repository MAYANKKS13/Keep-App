import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { NotesServiceService } from '../services/notes-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  styleObject = {
    "padding":"20px",
    "font-family":"monospace"
  };
  cardStyle={
    "background":"#3ac2ef0f",
    "margin": "14px 0px"
  }

  constructor(private svc: NotesServiceService) { }

  notes: any;

  ngOnInit() {
    this.svc.getNotes().subscribe((data: any) => {
      this.notes = data;
    })
  }

  OnSubmit(form:NgForm)
  {
    if(form.valid)
    {
      this.svc.getNotes().subscribe((data: any) => {
        this.notes = data;
      })
    }

  }


}
