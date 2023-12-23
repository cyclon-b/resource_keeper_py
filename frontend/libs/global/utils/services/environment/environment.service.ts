import { Injectable } from '@angular/core';
import { environment } from '../../../../../apps/shell/src/environments/environment';
import { EnvironmentModel } from '../../../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {

  public getEnvironment(): Observable<EnvironmentModel> {
    return of(environment);
  }

}
