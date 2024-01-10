import { HttpInterceptorFn } from '@angular/common/http';

export const httpErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
