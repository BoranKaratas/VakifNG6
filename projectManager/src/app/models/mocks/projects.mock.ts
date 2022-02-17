import { Project } from "../project.model";
import { Task } from "../task.model";

export const projects: Project[] = [
    new Project(1,'PROJECT X','Description X',1,0.30,new Date(2022,1,17),[
      new Task(1,'Task A Project X', new Date(2022,1,28),1,false),
      new Task(2,'Task B Project X', new Date(2022,1,21),1, false), 
      new Task(3,'Task C Project X', new Date(2022,2,12),1,false)


    ]),
    
    new Project(2,'project Y','Description X',2,0.30,new Date(2022,1,17),[
        new Task(1,'Task A Project y', new Date(2022,1,28),1,false),
        new Task(2,'Task B Project y', new Date(2022,1,21),1, false), 
        new Task(3,'Task C Project y', new Date(2022,2,12),1,false)
  
  
      ]),

    new Project(3,'project z','Description X',3,0.30,new Date(2022,1,17),[
        new Task(1,'Task A Project z', new Date(2022,1,28),1,false),
        new Task(2,'Task B Project z', new Date(2022,1,21),1, false), 
        new Task(3,'Task C Project z', new Date(2022,2,12),1,false)
  
  
      ])


]