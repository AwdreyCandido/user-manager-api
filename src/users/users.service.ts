import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Connection } from 'mysql2/promise';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DatabaseService) {
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  async findAll() {
    const connection = this.dbService.getConnection();
    const [rows] = await connection.execute('SELECT * FROM users');
    return rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
