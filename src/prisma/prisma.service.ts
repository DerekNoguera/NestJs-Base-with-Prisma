import { OnModuleInit, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{

    async onModuleInit() {
        await this.$connect();// para establecer una conexión con la base de datos.
    } 
}