import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthBearer = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    return req.headers[data];
  },
);
