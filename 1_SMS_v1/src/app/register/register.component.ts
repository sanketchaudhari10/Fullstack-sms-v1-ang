import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Student from '../../model/Student';
import { FormsModule } from '@angular/forms';
import { StudentRestService } from '../service/student-rest.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  createdStudent: Student = new Student(0, '', 0, 0, []);
  constructor(private service: StudentRestService) {}

  performRegister() {
    console.log(this.createdStudent);
    this.service
      .saveStudent(this.createdStudent)
      .subscribe((response) => console.log(response));
  }
}
