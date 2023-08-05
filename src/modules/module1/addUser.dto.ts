import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @IsNotEmpty()
  readonly username: string;

  readonly avatar?: string;

  readonly role?: string;
}
