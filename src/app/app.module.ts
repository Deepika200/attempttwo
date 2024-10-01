import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { provideHttpClient} from '@angular/common/http';
import { withInterceptorsFromDi } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
// import 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescriptionComponent,
    CategoriesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    // provideHttpClient(withInterceptorsFromDi),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
{provideHttpClient}