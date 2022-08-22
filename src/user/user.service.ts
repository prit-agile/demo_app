import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { CreateUserDto } from './dto/user.controller.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = await this.userModel.create(createUserDto);
    console.log(createUser);

    return createUser;
  }

  async findAll() {
    console.log();
    return this.userModel.find();
  }

  async findOne(id: string) {
    console.log();
    return this.userModel.findOne();
  }

  async delete(id: string) {
    const deletedUser = await this.userModel.findByIdAndRemove(id).exec();
    console.log(deletedUser);
    return deletedUser;
  }

  async update(id: string, userControllerDto: CreateUserDto) {
    const userDetails = await this.userModel.findOne({ _id: id });
    const updateObj = {
      name: userControllerDto.name ? userControllerDto.name : userDetails.name,
      age: userControllerDto.age ? userControllerDto.age : userDetails.age,
      number: userControllerDto.number
        ? userControllerDto.number
        : userDetails.number,
    };
    console.log(userDetails);
    return await this.userModel.findByIdAndUpdate(id, updateObj, { new: true });
  }
}
