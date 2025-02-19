import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [TaskController], // se importa el controlador de tareas para que todo se conecte al sistema
    providers: [TaskService], // se importa el servicio de tareas
    imports: [PrismaModule] // conecta el modulo de prisma para poder usarlo en el modulo de tareas
})
export class TaskModule{

}