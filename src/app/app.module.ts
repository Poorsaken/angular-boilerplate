import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import { TechstackComponent } from './techstack/techstack.component';
import { ServicesComponent } from './services/services.component';
import { SmoothScrollDirective } from './smooth-scroll.directive';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContentComponent,
    ServicesComponent,
    TechstackComponent,
    SmoothScrollDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
