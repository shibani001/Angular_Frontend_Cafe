import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url: string = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  getDetails() {
    return this.httpClient.get(this.url+ '/dashboard/details/');
  }
  
}
