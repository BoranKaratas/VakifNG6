import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../models/department.model';
import { Project } from '../models/project.model';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private builder: FormBuilder, private departmentService: DepartmentService) { }

  addProjectForm : FormGroup;
  project: Project;
  departments: Department[];

  /**
   *  public description?:string,
                public departmentId?:number,
                public completedPercent?:number,
                public startedDate?: Date,
   */

  ngOnInit(): void {
    this.addProjectForm = this.builder.group({
      name:['',Validators.required],
      description:['',[Validators.required, Validators.minLength(3)]],
      departmentId:['',Validators.required]      
    });

    this.departmentService.getDepartments().subscribe((data:Department[])=>this.departments = data);
  }

  checkName(){
    return this.addProjectForm.get("name")?.hasError('required') &&
           this.addProjectForm.get("name")?.dirty;
  }
  checkDescriptionRequired(){
    return this.addProjectForm.get("description")?.hasError('required') &&
           this.addProjectForm.get("description")?.dirty;   
  }

  checkDescriptionLength(){
    this.addProjectForm.get("description")?.hasError('minlength') &&
    this.addProjectForm.get("description")?.dirty
  }

  checkDeprtmentRequired(){
    return this.addProjectForm.get("departmentId")?.hasError('required') &&
           this.addProjectForm.get("departmentId")?.untouched;
  }

  addProject(){
    if (this.addProjectForm.valid) {
       console.log('proje uygundur',this.addProjectForm.value);
    }
  }





}
