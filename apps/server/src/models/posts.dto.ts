import { IsNotEmpty, IsString, IsBoolean, IsOptional } from "class-validator"

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    text: string

    @IsNotEmpty()
    @IsBoolean()
    sensitive: boolean

    @IsString()
    @IsOptional()
    spoiler_text?: string
}

export class GetPostDto extends CreatePostDto {
    uuid: string
    created: Date
}