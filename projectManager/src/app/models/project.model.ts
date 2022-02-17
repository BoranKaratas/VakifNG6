import { Task } from "./task.model";

export class Project{
  
    constructor(public id?:number, 
                public name?:string,
                public description?:string,
                public departmentId?:number,
                public completedPercent?:number,
                public startedDate?: Date,
                public tasks?:Task[]) {
      
        
    }
}