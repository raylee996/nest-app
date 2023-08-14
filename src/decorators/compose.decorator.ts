import { applyDecorators } from '@nestjs/common';
import { AuthBearer } from './createParam.decorator';
import { Role } from './role.decorator';

export const Compose = (roles, key?: any) => {
  return applyDecorators(Role(...roles));
};
