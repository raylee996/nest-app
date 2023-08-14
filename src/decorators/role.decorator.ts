import { SetMetadata } from '@nestjs/common';

export function Role(...roles: string[]) {
  return SetMetadata('roles', roles);
}
