import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/schema/admin.schema';
import { CreateAdminDto } from './dto/admin.controller.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly AdminModel: Model<AdminDocument>,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const createAdmin = await this.AdminModel.create(createAdminDto);
    console.log(createAdmin);
    return createAdmin;
  }

  async findAll() {
    return this.AdminModel.find();
  }

  async findOne() {
    return this.AdminModel.findOne();
  }
}
