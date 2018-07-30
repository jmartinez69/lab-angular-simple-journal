import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryList } from '../services/entryList.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entry: Object = {};
  entryID: string = "";

  constructor(private aRoute: ActivatedRoute, public service: EntryList) {
    this.aRoute.params.subscribe((params) => {
      this.entryID =(params['id'])
    });
    service.getEntryById(this.entryID).subscribe((item)  => this.entry = item)

  }

  ngOnInit() {
  }

}
