import { inject, Injectable } from '@angular/core';
import { RootStore } from '../../../store/root-store/root-store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
private readonly rootStore = inject(RootStore)

}
