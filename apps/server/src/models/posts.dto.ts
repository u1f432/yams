import { IsNotEmpty, IsString, IsBoolean, ValidateIf, IsOptional, Length } from "class-validator"

export class CreatePostDto {
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

export class GetPostDto extends CreatePostDto {
    uuid: string
    created: Date
}