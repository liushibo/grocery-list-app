import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ItemService } from '../item.service';
import { MdSnackBar } from '@angular/material';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-list-item-component',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  itemsList : FirebaseListObservable<any[]>; 
  isloading = false;
  isEmptyChecker;
  isEmpty = null;

  constructor(private itemService : ItemService, public snackBar: MdSnackBar, public modal: MdDialog) { 

  }

  ngOnInit() {
    this.itemsList = this.itemService.getList();
    this.isEmptyChecker = this.itemService.isDataEmpty();
    this.isEmptyChecker.subscribe(obj => {
      if(obj.$value !== null) this.isEmpty = false;
      else this.isEmpty = true;
    });
  }

  toggleComplete(item){
    this.isloading = true;
    this.itemService.toggleItemComplete(item.$key, item.completed).then(
     ()=>{ this.isloading = false;}
    );
  }

  updateItem(item, name, note){
    this.isloading = true;
    this.itemService.updateItem(item.$key, name, note).then(
     ()=>{ 
       this.isloading = false;
       this.snackBar.open("Saved Successfully!", "OK", {
          duration: 3000,
       });
     }
    );
  }

  removeItem(item){
    this.isloading = true;
    this.itemService.removeItem(item.$key).then(
     ()=>{ this.isloading = false;}
    );
  }

  toggleExpand(item){
    //This does not save to the database, but easily changeable 
    item.expand = !item.expand ;
  }

  revert(item, nameField : HTMLInputElement, noteField : HTMLInputElement){
    nameField.value = item.name;
    noteField.value = item.note;
    this.toggleExpand(item);
  }

  confirmRemove(item) {
    let modalRef = this.modal.open(ConfirmRemoveModal);
    modalRef.afterClosed().subscribe(result => {
      if(result == "yes"){
        this.removeItem(item);
      }
    });
  }
}


//Confirm Remove Modal
@Component({
  selector: 'confirm-remove-modal',
  templateUrl: 'confirm-remove-modal.html',
})
export class ConfirmRemoveModal {
  constructor(public dialogRef: MdDialogRef<ConfirmRemoveModal>) {}
}

