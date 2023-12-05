package in.co.vwits.sms.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.co.vwits.sms.model.Student;
import in.co.vwits.sms.service.StudentService;

@RestController
@RequestMapping(value="/api/student")
public class StudentRestController {
	
	@Autowired
	private StudentService service;
	
	@GetMapping(value="")
	public List<Student> findAll(){
		return service.findAllWithSubjects();
	}
	
	@GetMapping(value="/{rollNo}")
	public Student findByRollNo(@PathVariable int rollNo){
		return service.findSpecificStudentWithSubjects(rollNo);
	}
	@PostMapping
	public ResponseEntity<Student> createNewStudent(@RequestBody Student s) {
		service.save(s);
		ResponseEntity<Student> entity = new ResponseEntity<>(s,HttpStatus.CREATED);
		return entity;
	}
	
	@PutMapping
	public Student updateStudent(@RequestBody Student s) {
		service.updateStudent(s);
		return s;
		
	}
	@DeleteMapping(value="/{rollNo}")
	public void deleteStudentByRollNo(@PathVariable int rollNo) {
		service.deleteByRollNo(rollNo);
		
	}
}
