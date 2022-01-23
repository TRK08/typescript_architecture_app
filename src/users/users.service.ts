import { injectable } from 'inversify';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegistrDto } from './dto/user-registr.dto';
import { User } from './user.entity';
import { IUserService } from './users.service.interface';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, name, password }: UserRegistrDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		// Проверка что он есть?
		// Если есть юзер возвращаем null
		// Если нет - создаем
		return null;
	}

	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
