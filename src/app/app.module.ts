import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item-component/add-item.component';
import { ListItemComponent , ConfirmRemoveModal} from './list-item-component/list-item.component';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { ItemService } from './item.service';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ListItemComponent,
    AddItemModalComponent,
    ConfirmRemoveModal
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  entryComponents:[AddItemModalComponent, ConfirmRemoveModal],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
