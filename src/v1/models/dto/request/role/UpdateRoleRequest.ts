import {IsEmail, IsOptional, IsString, Length, MaxLength} from 'class-validator';
import {IsNotEmptyString} from "../../../../utils/validation/IsNotEmptyString";

export class UpdateRoleRequest {
    @IsString()
    @Length(1, 50)
    @IsNotEmptyString()
    public name: string
    @IsString({each:true}) 
    public permissions: string[]
}
