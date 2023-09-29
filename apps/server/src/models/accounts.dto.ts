import { IsNotEmpty, IsString, IsBoolean, IsOptional, isString, Length } from "class-validator"

export class BaseAccountDto {
    @IsNotEmpty()
    @IsString()
    @Length(1, 32)
    username: string

    @IsOptional()
    @IsString()
    @Length(1, 64)
    display_name?: string

    @IsOptional()
    @IsString()
    @Length(1, 2048)
    bio?: string
}

export class CreateAccountDto extends BaseAccountDto {

}
export class GetAccountDto extends CreateAccountDto {
    uuid: string
    created: Date
}