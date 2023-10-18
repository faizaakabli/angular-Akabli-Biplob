import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
    private apiUrl = 'URL_DE_VOTRE_API';
  
    constructor(private http: HttpClient) {}
  
    getCategories(): Observable<any> {
      return this.http.get(${this.apiUrl}/categories);
    }
  }