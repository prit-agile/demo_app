import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Response } from 'express';
import { CreateAdminDto } from './dto/admin.controller.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('createadmin')
  async create(@Body() createAdminDto: CreateAdminDto, @Res() res: Response) {
    const data = await this.adminService.create(createAdminDto);
    res.send({
      statuscode: HttpStatus.OK,
      message: 'Admin added sucessfully',
      data: data,
    });
  }

  @Get('findall')
  async findAll() {
    return this.adminService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: String) {
  //     return this.adminService.findOne(id);
  // }

  // @Patch('update/:id')
  // async update(@Param('id') id: string,@Body() UserControllerDto: CreateUserDto {
  //     return this.adminService.update(id, UserControllerDto);
  // })
}
