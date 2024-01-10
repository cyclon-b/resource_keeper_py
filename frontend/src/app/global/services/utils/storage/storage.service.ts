import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _doc = inject(DOCUMENT);
  private _storage = this._doc.defaultView?.localStorage;

}
