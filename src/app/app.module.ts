import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/products/users.module';
import { RegistrarComponent } from './pages/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
