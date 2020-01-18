import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SecondFormComponent } from './second-form/second-form.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { FormsModule }   from '@angular/forms';
import { MinuteSecondsPipePipe } from './minute-seconds-pipe.pipe';

const appRoutes: Routes = [
  { path: 'create_task_first', component: FirstFormComponent},
  { path: 'create_task_second', component: SecondFormComponent },
  { path: '',
    redirectTo: '/create_task_first',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SecondFormComponent,
    FirstFormComponent,
    MinuteSecondsPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
