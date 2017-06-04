import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService{
  
  constructor(private db: AngularFireDatabase) {

  }

  isDataEmpty(){
    return this.db.object('/items');
  }

  getList(){
    return this.db.list('/items', {
      query :{
        orderByChild : "timeStamp"
      }
    });
  }

  addItem(name, note){
    this.db.list('/items').push({
        name: name,
        note: note,
        expand :0,
        completed :0,
        timeStamp : -Date.now()
      }
    );
  }

  removeItem(key){
    return this.db.object('/items/' + key).remove();
  }

  toggleItemComplete(key, completed){
    return this.db.object('/items/' + key).update({completed:!completed});
  }

  updateItem(key, name, note){
    return this.db.object('/items/' + key).update({ name: name , note : note });
  }



}
