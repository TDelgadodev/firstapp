import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private Users: any[] = [
        {
            id: 1,
            name: 'John Doe',
            phone: 123456789
        },
        {
            id: 2,
            name: 'John Doe Jr',
            phone: 987654321
        },
        {
            id: 3,
            name: 'Name example',
            phone: 1011121314
        }
    ]
    getUsers() {
        this.Users
    }
    createUser(user: CreateUserDto) {
        this.Users.push(user)
        return {
            ...user,
            id: this.Users.length + 1,
        };
    }
}
