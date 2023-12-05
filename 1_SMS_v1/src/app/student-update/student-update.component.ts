import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import Student from '../../model/Student';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css',
})
export class StudentUpdateComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public toUpdatedStudent: Student) {}
  @Input()
  updatedStudent = new Student(0, '', 0, 0, []);
  //to send data from child to parent we need to use @Output decorator
  @Output()
  studentEmitter = new EventEmitter<Student>(); // step 1
  performUpdate() {
    this.studentEmitter.emit(this.updatedStudent); // step 2
  }
}
