import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import {
  Connection,
  FieldPacket,
  QueryResult,
  ResultSetHeader,
  RowDataPacket,
} from 'mysql2/promise';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DatabaseService) {}

  // FIND USER BY ID
  async find(id: number) {
    const connection = this.dbService.getConnection();
    try {
      const [result]: [RowDataPacket[], any] = await connection.execute(
        `SELECT * FROM users WHERE users.id = ${id}`,
      );

      if (result.length === 0) {
        throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
      }

      return result[0];
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocorreu um erro ao buscar o usuário',
      );
    }
  }

  // GET ALL USERS
  async findAll() {
    const connection = this.dbService.getConnection();
    try {
      const [rows] = await connection.execute('SELECT * FROM users');
      return rows;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocorreu um erro ao buscar os usuários',
      );
    }
  }

  async create(createUserDto: CreateUserDto) {
    const connection = this.dbService.getConnection();

    try {
      const [result] = await connection.execute<ResultSetHeader>(
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
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocorreu um erro ao criar novo usuário',
      );
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const connection = this.dbService.getConnection();
    try {
      const [result] = await connection.execute<ResultSetHeader>(`
        UPDATE users SET 
          name="${updateUserDto.name}", 
          email="${updateUserDto.email}", 
          gender="${updateUserDto.gender}", 
          birthDate="${updateUserDto.birthDate}", 
          updatedAt=NOW()
        WHERE id = ${id}
        `);

      if (result.affectedRows === 0) {
        throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
      }

      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocorreu um erro ao atualizar usuário',
      );
    }
  }

  async remove(id: number) {
    const connection = this.dbService.getConnection();
    try {
      const [result]: [QueryResult, any] =
        await connection.execute<ResultSetHeader>(`
           DELETE FROM users WHERE id = "${id}"
      `);

      if (result.affectedRows === 0) {
        throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
      }

      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocorreu um erro ao deletar usuário',
      );
    }
  }
}
