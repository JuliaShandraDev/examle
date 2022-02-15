import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ExampleTwoModule} from "./example-two/example-two.module";
import {ExampleOneModule} from "./example-one/example-one.module";
import {ExampleThreeModule} from "./example-three/example-three.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment} from "../environments/environment";
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleTwoModule,
    ExampleOneModule,
    HttpClientModule,
    ExampleThreeModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
