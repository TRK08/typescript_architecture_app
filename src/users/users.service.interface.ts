import { UserModel } from '.prisma/client';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegistrDto } from './dto/user-registr.dto';

export interface IUserService {
	createUser: (dto: UserRegistrDto) => Promise<UserModel | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
