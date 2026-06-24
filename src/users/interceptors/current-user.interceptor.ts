import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { UsersService } from '../users.service';
@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private readonly usersService: UsersService) {}

  async intercept(context: ExecutionContext, handler: CallHandler) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const req = context.switchToHttp().getRequest();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const { userId } = req.session || {};
    if (userId) {
      const user = await this.usersService.findOne(userId);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      req.currentUser = user;
    }
    return handler.handle();
  }
}
