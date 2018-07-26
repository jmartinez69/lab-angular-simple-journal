import { Component, OnInit, Input} from '@angular/core';
import { EntryList } from '../services/entryList.service';

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css']
})
export class EntryFormComponentComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;

  constructor(public service: EntryList) { }

  submitForm(myForm){
    console.log(myForm);
    this.service.addEntry(this.title, this.content).subscribe();
  }
  ngOnInit() {
  }

}
