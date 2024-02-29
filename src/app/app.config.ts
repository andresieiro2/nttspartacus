import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from "@angular/core";
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideStore,provideState } from "@ngrx/store";
import {userReducer} from './store/user.reducer'
import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import {UserEffects } from './store/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideStore(),
    provideState('user', userReducer),
    provideEffects(UserEffects )
  ]
};
