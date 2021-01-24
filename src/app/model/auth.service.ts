import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';

@Injectable()
export class AuthService {
  constructor(private restService: RestService) {}

  authenticate(username: string, password: string): Observable<boolean> {
    return this.restService.authentication(username, password);
  }

  get authenticated(): boolean {
    if (this.restService.token.length == 0) {
      return false;
    }
    return true;
  }

  clear(): void {
    this.restService.token = null;
  }
}
