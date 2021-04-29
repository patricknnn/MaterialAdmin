import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './modules/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { DynamicFormControlComponent } from './components/dynamic-forms/dynamic-form-control/dynamic-form-control.component';
import { DynamicFormComponent } from './components/dynamic-forms/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SidenavComponent,
    PageTitleComponent,
    ToolbarComponent,
    FooterComponent,
    CardStatsComponent,
    DynamicFormComponent,
    DynamicFormControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
