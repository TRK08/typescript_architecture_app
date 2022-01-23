import { UserLoginDto } from './dto/user-login.dto';
import { UserRegistrDto } from './dto/user-registr.dto';
import { User } from './user.entity';

export interface IUserService {
	createUser: (dto: UserRegistrDto) => Promise<User | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
