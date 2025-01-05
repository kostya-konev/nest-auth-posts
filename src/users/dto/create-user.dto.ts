import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'example@gmail.com', description: 'User email'})
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({example: '12345', description: 'User password'})
  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'Must be from 4 to 16' })
  readonly password: string;
}