import { Get, Module } from "@nestjs/common";

@Module({})
export class TaskController {

    @Get('/tasks')
    getAllTasks() {
        return 'Obteniendo todas las tareas'
    }
}