import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/shell/header/header.component';
import { FooterComponent } from './shared/shell/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { NgToastModule } from 'ng-angular-popup';
import { LoginComponent } from './shared/shell/login/login.component';
import { RegisterComponent } from './shared/shell/register/register.component';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { AuthenticationService } from './services/authentication.service';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EditProductComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp( () => initializeApp(environment.firebaseConfig)),
    provideAuth(()=> getAuth()),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],

})
export class AppModule { }
