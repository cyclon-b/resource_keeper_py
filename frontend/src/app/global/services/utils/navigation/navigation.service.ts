import { environment } from '../../../../../environments/environment';

export class NavigationService {

    public static getRoutePaths(): typeof environment.baseRoutes {
        return environment.baseRoutes;
    }


}
