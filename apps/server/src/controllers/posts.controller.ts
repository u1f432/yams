import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { GetPostDto, CreatePostDto } from "../models/posts.dto"

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): GetPostDto[] {
    return this.postsService.findAll()
  }

  @Post("create")
  createPost(@Body() data: CreatePostDto): GetPostDto {
    return this.postsService.create(data)
  }
}
