import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();
    if (!request.currentUser) {
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return request.currentUser?.admin;
  }
}
