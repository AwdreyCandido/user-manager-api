import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Connection } from 'mysql2/promise';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DatabaseService) {}

  async find(id: number) {
    const connection = this.dbService.getConnection();
    const [result] = await connection.execute(
      `SELECT * FROM users WHERE users.id = ${id}`,
    );
    return result;
  }

  async findAll() {
    const connection = this.dbService.getConnection();
    const [rows] = await connection.execute('SELECT * FROM users');
    return rows;
  }

  async create(createUserDto: CreateUserDto) {
    const connection = this.dbService.getConnection();
    const [result] = await connection.execute(
      `INSERT INTO Users (
          name, 
          email, 
          gender, 
          birthDate, 
          createdAt, 
          updatedAt
        ) VALUES (
          "${createUserDto.name}", 
          "${createUserDto.email}", 
          "${createUserDto.gender}", 
          "${createUserDto.birthDate}", 
          NOW(), 
          NOW()
        )`,
    );
    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const connection = this.dbService.getConnection();
    const [result] = await connection.execute(`
    UPDATE users SET 
      name="${updateUserDto.name}", 
      email="${updateUserDto.email}", 
      gender="${updateUserDto.gender}", 
      birthDate="${updateUserDto.birthDate}", 
      updatedAt=NOW()
    WHERE id = ${id}
    `);

    return result;
  }

  async remove(id: number) {
    const connection = this.dbService.getConnection();
    const [result] = await connection.execute(`
      DELETE FROM users WHERE id = "${id}"
    `);
    return result;
  }
}
