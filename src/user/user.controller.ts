import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user.controller.dto';
import { UserService } from './user.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user APIs')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createuser')
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const data = await this.userService.create(createUserDto);
    res.send({
      statuscode: HttpStatus.OK,
      message: 'User added sucessfully',
      data: data,
    });
  }

  @Get('findall')
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const data = await this.userService;
    res.send({
      statusCode: HttpStatus.OK,
      message: 'User_Deleted_sucess',
      data: data,
    });
    return this.userService.delete(id);
  }
  createUserDto;

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() userControllerDto: CreateUserDto,
  ) {
    return this.userService.update(id, userControllerDto);
  }
}
