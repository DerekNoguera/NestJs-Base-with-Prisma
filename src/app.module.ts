import { Module } from '@nestjs/common';
import {TaskModule} from './task/task.module';


@Module({
  imports: [TaskModule], // conecta el modulo de tareas en el modulo principal para que se pueda usar los datos
  controllers: [],
  providers: [],
})
export class AppModule {}
