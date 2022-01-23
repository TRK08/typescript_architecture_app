import { IsEmail, IsString } from 'class-validator';

export class UserRegistrDto {
	@IsEmail({}, { message: 'Неверно указан Email' })
	email: string;

	@IsString({ message: 'Не указан пароль' })
	password: string;

	@IsString({ message: 'Не указано имя' })
	name: string;
}
