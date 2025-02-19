import {Injectable} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {Task} from '@prisma/client' // importa la tabla desde prisma client para retornarlo como lista de tareas en el getAllTask
@Injectable()
export class TaskService{
    
    constructor(private Prisma: PrismaService){}// constructor para acceder a prisma y podes usar las tablas
    async getAllTasks(): Promise<Task[]>{// La funcion retorna una lista de tareas
        return this.Prisma.task.findMany();  // se comunica con prisma para realizar la consulta
    }

    async getAllTaskById(id: number | undefined): Promise<Task | null> {// le pasamos undefinded para la validacion y le decimos que va a retornar una tarea
        // que es la tarea encontrada x el id
        if (id === undefined) {
            throw new Error("El ID no puede ser undefined"); // valida que no sea indefinido el id, sin esta funciona da error el codigo
        }
    
        return this.Prisma.task.findUnique({ where: { id } });// se comunica con prisma para realizar la consulta
    }

    createTask(data: Task): Promise<Task>{ // retorna una tarea
        return this.Prisma.task.create({ // crea una tarea accediento a prisma
            data // envia la data de la tarea
        })
    }

    updateTask(id: number | undefined, data:Task): Promise<Task>{ // retorna una tarea
        return this.Prisma.task.update({ // actualiza la tarea
            where: { id }, // actualiza la tarea por el id
            data // envia la data de la tarea
        })
    }

    deleteTask(id: number): Promise<Task> { // retorna una tarea
        return this.Prisma.task.delete({ // elimina la tarea
            where:{id} // elimina la tarea por el id
        })
    }
}