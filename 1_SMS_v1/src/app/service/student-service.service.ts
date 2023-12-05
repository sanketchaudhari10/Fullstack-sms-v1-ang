import { Injectable } from '@angular/core';
import Student from '../../model/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  students: Student[] = [];
  constructor() {
    let s1 = new Student(1, 'Arnav', 2, 90, ['HTML', 'Css', 'Java']);
    let s2 = new Student(2, 'Priya', 3, 78, ['Python', 'Css', 'Java,c#']);
    let s3 = new Student(3, 'Arnav', 5, 95, ['HTML', 'Sass', 'Java']);
    let s4 = new Student(4, 'Charan', 1, 93, ['HTML', 'Css', 'C++']);
    let s5 = new Student(5, 'Satish', 2, 80, ['Angular', 'Go']);
    this.students.push(s1);
    this.students.push(s2);
    this.students.push(s3);
    this.students.push(s4);
    this.students.push(s5);
  }
  findAllStudents() {
    return this.students;
  }
}
