import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const result = await this.usersService.create(createUserDto);
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'success', data: result });
    } catch (error) {
      return res.json({ message: 'error', data: error });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const users = await this.usersService.findAll();
      return res
        .status(HttpStatus.OK)
        .json({ message: 'success', data: users });
    } catch (error) {
      return res.json({ message: 'error', data: error });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.usersService.find(+id);
      return res.status(HttpStatus.OK).json({ message: 'success', data: user });
    } catch (error) {
      return res.json({ message: 'error', data: error });
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ) {
    try {
      const result = await this.usersService.update(+id, updateUserDto);
      return res
        .status(HttpStatus.OK)
        .json({ message: 'success', data: result });
    } catch (error) {
      return res.json({ message: 'error', data: error });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.usersService.remove(+id);
      return res
        .status(HttpStatus.OK)
        .json({ message: 'success', data: result });
    } catch (error) {
      return res.json({ message: 'error', data: error });
    }
  }

  @Get('insights/all')
  async findUsersQuantity(@Res() res: Response) {
    try {
      const result = await this.usersService.findQuantity();
      return res
        .status(HttpStatus.OK)
        .json({ message: 'success', data: result });
    } catch (error) {
      return res.json({ message: 'error', data: error });
    }
  }

  @Get('insights/:month')
  async findUsersPerMonth(@Param('month') month: string, @Res() res: Response) {
    try {
      const result = await this.usersService.findPerMonth(+month);
      return res
        .status(HttpStatus.OK)
        .json({ message: 'success', data: result });
    } catch (error) {
      return res.json({ message: 'error', data: error });
    }
  }
}
