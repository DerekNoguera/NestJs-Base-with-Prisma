import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Module({
    providers: [PrismaService], // se importa el servicio de prisma
    exports: [PrismaService] // conecta el servicio de prisma para poder usarlo en otros modulos
})
export class PrismaModule{



}