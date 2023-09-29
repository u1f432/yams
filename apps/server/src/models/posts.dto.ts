import { IsNotEmpty, IsString, IsBoolean, ValidateIf, IsOptional, Length } from "class-validator"
import { GetAccountDto } from "./accounts.dto"

export class BasePostDto {
    @IsNotEmpty()
    @IsString()
    @Length(1, 2048)
    text: string

    @IsNotEmpty()
    @IsBoolean()
    sensitive: boolean

    @IsString()
    @ValidateIf(o => o.sensitive)
    @IsOptional()
    @Length(1, 128)
    spoiler_text?: string
}

export class CreatePostDto extends BasePostDto {
    @IsString()
    account_uuid?: string
}

export class GetPostDto extends BasePostDto {
    uuid: string
    created: Date
    account: GetAccountDto
}