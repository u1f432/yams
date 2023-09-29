import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto, GetPostDto } from '../models/posts.dto';
import { v4 as uuidv4 } from "uuid"
import { accounts } from './accounts.service';

export let posts: GetPostDto[] = [{
  text: "Hello World!",
  sensitive: false,
  uuid: uuidv4(),
  created: new Date(),
  account: accounts[1]
}]

@Injectable()
export class PostsService {
  findAll(): GetPostDto[] {
    return posts
  }
  
  create(data: CreatePostDto): GetPostDto {
    const account = accounts.filter(a => a.uuid === data.account_uuid)[0]
    if (!account) {
      throw new BadRequestException(`Account with uuid '${data.account_uuid}' does not exist`)
    }

    const uuid = uuidv4()
    const created = new Date()
    const createdPost: GetPostDto = {...data, ...{
      uuid, created, account
    }}

    posts.push(createdPost)
    return createdPost
  }
}
