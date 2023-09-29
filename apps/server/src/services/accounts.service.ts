import { Injectable } from "@nestjs/common"
import { CreateAccountDto, GetAccountDto } from "src/models/accounts.dto"
import { v4 as uuidv4 } from "uuid"

export let accounts: GetAccountDto[] = [
    {
        username: "Test",
        bio: "This is a test account",
        created: new Date(),
        uuid: uuidv4()
    },
    {
        username: "hello",
        uuid: uuidv4(),
        created: new Date(),
        display_name: "Hello World!"
    }
]

@Injectable()
export class AccountsService {
    findAll(): GetAccountDto[] {
        return accounts
    }

    create(data: CreateAccountDto) {
        const uuid = uuidv4()
        const created = new Date()
        const createdAccount = {...data, ...{
            uuid, created
        }}

        accounts.push(createdAccount)
        return createdAccount
    }
}
