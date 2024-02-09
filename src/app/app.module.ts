import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import { TechstackComponent } from './techstack/techstack.component';
import { ServicesComponent } from './services/services.component';
import { SmoothScrollDirective } from './smooth-scroll.directive';

import {RouterModule, Routes} from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

const appRoute: Routes =[

    {path:'', component: ParentComponentComponent },
    {path:'showcase', component: ShowcaseComponent },

  
  

]


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContentComponent,
    ServicesComponent,
    TechstackComponent,
    SmoothScrollDirective,
    ShowcaseComponent,
    ParentComponentComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
