import { Injectable } from "@nestjs/common";
import { ITaskRepository } from "../interface/tasks.repository.interface";


@Injectable()
export class TaskRepository implements ITaskRepository {

}