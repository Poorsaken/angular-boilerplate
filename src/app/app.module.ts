import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import { TechstackComponent } from './techstack/techstack.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContentComponent,
    TechstackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
