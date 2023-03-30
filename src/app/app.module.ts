import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  SidebarModule,
  GridModule,
  HeaderModule,
  NavModule,
  TableModule,
  AvatarModule,
  CardModule,
  FooterModule,
  ModalModule,
  FormModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GroupsComponent } from './components/groups/groups.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistorialComponent } from './components/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    IconModule,
    SidebarModule,
    GridModule,
    HeaderModule,
    NavModule,
    TableModule,
    AvatarModule,
    CardModule,
    FooterModule,
    ModalModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
