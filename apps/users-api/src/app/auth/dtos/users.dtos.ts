import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { usersModelsI } from '@users-api/definitions';

export class CreateUsersDto implements usersModelsI {
  @ApiProperty({
    type: String,
    example: 'pedro',
    description: 'user name',
  })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    type: String,
    example: 'pedro@gmail.com',
    description: 'user email address',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({
    type: String,
    example: 'supersecretpassword',
    minimum: 8,
    description: 'user password',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: String,
    example: '+2645551111',
    description: 'user phone number',
  })
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({
    type: String,
    example: 'calle ejemplo oeste',
    description: 'street address',
  })
  street_addres: string;

  @ApiProperty({
    type: String,
    example: '153',
    description: 'street number',
  })
  street_number: string;

  @ApiProperty({
    type: Number,
    description: 'city id',
  })
  @IsNotEmpty()
  city_id: number;
  @ApiProperty({
    type: Number,
    description: 'state id',
  })
  @IsNotEmpty()
  state_id: number;
}

export class LoginUserDto {
  @ApiProperty({
    type: String,
    example: 'example@email',
    description: 'user email address',
  })
  email: string;
  @ApiProperty({
    type: String,
    example: 'supersecretpassword',
    description: 'user email password',
  })
  password: string;
}

export class RefreshDto {
  @ApiProperty({
    type: String,
    example: 'Cognito refresh token',
    description: 'cognito refresh token',
  })
  refreshToken: string;
}
