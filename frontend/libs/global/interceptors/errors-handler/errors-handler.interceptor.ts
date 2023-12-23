import { HttpInterceptorFn } from '@angular/common/http';

export const errorsHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
