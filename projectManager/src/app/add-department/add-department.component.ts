import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
 
  department: Department = new Department();
  constructor() { }

  ngOnInit(): void {
  }

  addData(){
    console.log(this.department.name,' eklendi');
  }

  submitProject(form: NgForm){
    if (form.valid) {
       console.log('veri post edilebilir');
       console.log('Her şey yolunda:',form.value);
    }
  }

}
