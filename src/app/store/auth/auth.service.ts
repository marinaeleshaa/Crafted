import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment';

interface ILoginResponse {
  token: string;
  user: { id: string; username: string };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  loginService(email: string, password: string) {
    return this.http.post<ILoginResponse>(`${this.baseUrl}/auth/login`, {
      email,
      password,
    });
  }

  signupService(email: string, password: string, username: string) {
    return this.http.post<ILoginResponse>(`${this.baseUrl}/auth/signup`, {
      email,
      password,
      username,
    });
  }
}
