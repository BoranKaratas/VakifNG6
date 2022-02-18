import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../models/mocks/projects.mock';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{

  constructor(private activeRoute: ActivatedRoute) { }


  key:string;

  projects: Project[] = projects;

  ngOnInit(): void {
     this.activeRoute.params.subscribe(data => {
       data["id"] != undefined ?
       //! Dikkat!! Doğru olan, API üzerinden (db) üzerinden filtreleme yapmaktır.
       this.projects = projects.filter(p=>p.departmentId == data["id"])
       :
       this.projects = projects;
     });
  }

 


}
