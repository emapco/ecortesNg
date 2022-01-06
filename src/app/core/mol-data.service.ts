import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MolDataService {

  constructor(private http: HttpClient) { }

  async get(folder: string, file: string) {
    return await this._httpGet(folder, file);
  }

  async _httpGet(folder: string, file: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(`../assets/structures/${folder}/${file}.mol2`, {
        responseType: 'text' as 'json'
      }).subscribe(data => {
        resolve(data.toString());
      });
    });
  }
}
