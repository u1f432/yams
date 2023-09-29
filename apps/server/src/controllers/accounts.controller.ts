import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountsService } from '../services/accounts.service';
import { GetAccountDto, CreateAccountDto } from "../models/accounts.dto"

@Controller("accounts")
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  findAll(): GetAccountDto[] {
    return this.accountsService.findAll()
  }

  @Post()
  createPost(@Body() data: CreateAccountDto): GetAccountDto {
    return this.accountsService.create(data)
  }
}
