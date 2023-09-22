import { Injectable } from '@nestjs/common';
import { CreatePostDto, GetPostDto } from '../models/posts.dto';
import { v4 as uuidv4 } from "uuid"

let posts: GetPostDto[] = [{
  text: "Hello World!",
  sensitive: false,
  uuid: uuidv4(),
  created: new Date()
}]

@Injectable()
export class PostsService {
  findAll(): GetPostDto[] {
    return posts
  }
  
  create(data: CreatePostDto): GetPostDto {
    const uuid = uuidv4()
    const created = new Date()
    const createdPost: GetPostDto = {...data, ...{
      uuid, created
    }}

    posts.push(createdPost)
    return createdPost
  }
}
