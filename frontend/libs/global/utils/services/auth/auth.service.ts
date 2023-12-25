import { inject, Injectable } from '@angular/core';
import { RootStore } from '../../../store/root-store/root-store';
import { AuthStore } from '../../../store';
import { AuthResponse, LoginModel, RegisterModel } from '../../../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _rootStore = inject(RootStore);
  private readonly _authStore = inject(AuthStore);
  private _http = inject(HttpClient);

  public register(registerData: RegisterModel): Observable<AuthResponse> {

    return this._http.post<AuthResponse>(`${this._rootStore.selectedEnvConfigData()?.baseApi}/auth/register`, registerData);

  }

  public login(loginData: LoginModel): Observable<AuthResponse> {

    return this._http.post<AuthResponse>(`${this._rootStore.selectedEnvConfigData()?.baseApi}/auth/login`, loginData);

  }

  public logout(): Observable<unknown> {

    return this._http.get<any>(`${this._rootStore.selectedEnvConfigData()?.baseApi}/auth/logout`);

  }
}
