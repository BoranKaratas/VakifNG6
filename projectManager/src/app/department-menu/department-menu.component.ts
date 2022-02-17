import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Department } from '../models/department.model';

import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent implements OnInit {

  constructor(private service: DepartmentService) { }

  departments: Department[];

  ngOnInit(): void {
                   this.service.getDepartments()
                               .subscribe((data:Department[])=> this.departments = data);

  }

}
