import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.storage = storage;
  }
  public setObj(key: string, value: any) {
    //this._storage?.set(key, value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  public setString(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public setBool(key: string, value: boolean) {
    localStorage.setItem(key, value.toString());
  }

  public getObj(key: string) {
    const object = JSON.parse(localStorage.getItem(key));
    return object;
  }

  public getString(key: string) {
    return localStorage.getItem(key);
  }

  public getBool(key: string) {
    return localStorage.getItem(key);
  }
  // removes any
  public removeItem(key: string) {
    return localStorage.removeItem(key);
  }

  public clearStorage() {
    return localStorage.clear();
  }
}
