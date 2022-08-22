import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    mobile: number;

}