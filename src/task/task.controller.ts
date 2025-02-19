import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "@prisma/client";

@Controller('tasks')
export class TaskController{

    constructor(private taskService: TaskService){} // contructor para llamar los metodos de el Servicio

    @Get()
    async getAllTask(){ // retorn todas las tareas 
        return this.taskService.getAllTasks(); // accede el ametodo que tiene TaskService
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string){ // retorna una tarea por el id
        const taskFound = await this.taskService.getAllTaskById(Number(id)); // accede el metodo que tiene TaskService por medio del id
        if (!taskFound) throw new NotFoundException('Task does not exist'); // valida en el caso que la tarea no exista envia un 404
        return taskFound;
    }

    @Post()
    async createTask(@Body() data: Task){ // se usa body para enviarle los datos que se envian 
        return this.taskService.createTask(data); // crea una tarea
    }

    @Delete(':id') // elimina una tarea por el id
    async deleteTask(@Param('id') id: string){ // se usa el id para eliminar la tarea
        try {
            return await this.taskService.deleteTask(Number(id)); // accede el metodo que tiene TaskService por medio del id y la elimina
        } catch (error) {
            throw new NotFoundException('Task does not exist'); // en caso de que la tarea no exista entonces tira un 404 not found
        }// try and catch para manejar los errores
    }

    @Put(':id') 
    async updateTask(@Param('id') id: string, @Body()Task: Task){ // @param para agarra el id de la url y @body para enviar los datos
        try {
            return this.taskService.updateTask(Number(id), Task); // accede el metodo que tiene TaskService por medio del id y actualiza la tarea
        } catch (error) {
            throw new NotFoundException('Task does not exist'); // en caso de que la tarea no exista entonces tira un 404 not found
        } // try and catch para manejar los errores
    }

    // tambien podrias conectarlos con DTO para que sea mas facil de manejar los datos
}