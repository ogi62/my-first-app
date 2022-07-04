import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class AdminModule { }
