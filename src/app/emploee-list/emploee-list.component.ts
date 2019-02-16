import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './emploee-list.component.html',
  styleUrls: ['./emploee-list.component.css']
})
export class EmploeeListComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
     .subscribe(data =>this.employees = data);
  }

}
