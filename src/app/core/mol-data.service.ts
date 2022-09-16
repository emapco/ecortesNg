import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MolDataService {

  constructor(private http: HttpClient) { }

  async get(folder: string, file: string): Promise<string> {
    return new Promise((resolve) => {
      this.http.get(`../assets/structures/${folder}/${file}.mol2`, {
        responseType: 'text' as 'json'
      }).subscribe(data => {
        resolve(data.toString());
      });
    });
  }
}
