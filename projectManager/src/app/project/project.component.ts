import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, AfterContentChecked {

  constructor() { }


 @Input('active') project: Project;

  taskFound : boolean;
  incompletedTasksCount?: number;
  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.incompletedTasksCount = this.project.tasks?.filter(t=>!t.isDone).length;
    this.taskFound = this.incompletedTasksCount != undefined &&  this.incompletedTasksCount > 0;
  }

}
