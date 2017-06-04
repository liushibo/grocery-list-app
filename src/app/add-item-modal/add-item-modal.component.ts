import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent implements OnInit {
  
  private itemName;
  private itemNote;
  
  constructor(public dialogRef: MdDialogRef<AddItemModalComponent>, private itemService : ItemService) {}

  ngOnInit() {
    this.itemName = "";
  }

  addItem(){
    this.itemService.addItem(this.itemName.trim(), this.itemNote);
  }

}
