import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get('http://ip172-18-0-13-clihlj0gftqg00c871p0-5432.direct.labs.play-with-docker.com/api/users');
  }
}
