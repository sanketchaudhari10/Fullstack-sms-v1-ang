import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Student from '../../model/Student';
import { StudentServiceService } from '../service/student-service.service';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { StudentRestService } from '../service/student-rest.service';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    CommonModule,
    StudentUpdateComponent,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  students: Student[] = [];
  message: string = '';
  colorClass: string = '';
  selectedStudent!: Student;
  updateClick: Boolean;

  constructor(private service: StudentRestService, private dialog: MatDialog) {
    this.showStudents();
    this.updateClick = false;
  }
  showStudents() {
    this.service
      .findAllStudents()
      .subscribe((response) => (this.students = response));
  }

  sortByPercent() {
    this.students.sort((a, b) => b.percentage - a.percentage);
  }
  sortByAttempts() {
    this.students.sort((a, b) => a.numberOfAttempts - b.numberOfAttempts);
  }
  sortByNoOfSubjects() {
    this.students.sort(
      (a, b) => a.subjectsLearning.length - b.subjectsLearning.length
    );
  }

  showMessage(message: string) {
    return message;
  }
  delete(rollno: number) {
    const result = confirm('Want to delete Student  with roll no: ' + rollno);
    if (result) {
      this.service.deleteByRollNo(rollno).subscribe((response) => {
        this.students = this.students.filter((s) => s.rollno != rollno);
        this.message = 'Record Deleted';
        this.colorClass = 'success';
      });
    } else {
      this.message = 'Deletion cancelled';
      this.colorClass = 'error';
    }
  }
  update(s: Student) {
    this.updateClick = true;
    // console.log(s);
    let dref = this.dialog.open(StudentUpdateComponent, { data: s });
    dref.afterClosed().subscribe((s) => {
      // console.log(s);
      this.service
        .updateStudent(s)
        .subscribe((response) => console.log(response));
    });
    this.updateClick = false;
    this.selectedStudent = s;
  }
  doUpdate(updateStudent: Student) {
    let modifiedStudents = this.students.map((s) => {
      //map is a builtin fn of js that transforms every element of an array
      if (s.rollno == updateStudent.rollno) {
        // following lne makes use of spread operator, keep all of s same just change noOfAttwmpts.
        // spread operator was added in ES6
        return {
          ...s,
          numberOfAttempts: updateStudent.numberOfAttempts,
          // subjectsLearning: updateStudent.subjectsLearning,
          // percentage: updateStudent,
        };
        // return { updatedStudent };
      } else {
        return s;
      }
    });
    this.students = modifiedStudents;
    this.updateClick = false;
  }
}
