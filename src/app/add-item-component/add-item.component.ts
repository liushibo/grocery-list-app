import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-add-item-component',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  selectedOption: string;
  
  constructor(public modal: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let modalRef = this.modal.open(AddItemModalComponent);
  }

}


