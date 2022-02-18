import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { Department } from '../models/department.model';

import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent implements OnInit, OnDestroy {

  constructor(private service: DepartmentService) { }


  departments: Department[];
  subscribe:Subscription

  ngOnInit(): void {
             this.subscribe =   this.service.getDepartments()
                               .subscribe((data:Department[])=> this.setData(data));

  }
//! Angular View Engine bu bileşeni dispose ettiğinde, abonelikten
  ngOnDestroy(): void {
      this.service.getDepartments().subscribe(x=>this.departments=[]);
      
  }


  
  setData(data:Department[]){
    this.departments = data;
  }

}
