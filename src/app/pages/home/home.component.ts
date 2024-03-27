import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  employees: Employees[] = [];
  employeesGeneral: Employees[] = [];

  constructor (private employeeservice: EmployeeService) {}

  ngOnInit(): void {

    this.employeeservice.GetEmploees().subscribe(data => {
      const stats = data.status;

      stats.map((item) => {
        item.createDate = new Date(item.createDate!).toLocaleString('pt-BR')
        item.updateDate = new Date(item.updateDate!).toLocaleString('pt-BR')

      })
      //console.log(stats)
      this.employees = data.status;
      this.employeesGeneral = data.status;
    });

  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    
    this.employees = this.employeesGeneral.filter(employees => {
      return employees.name.toLowerCase().includes(value);
    })

  }


}
