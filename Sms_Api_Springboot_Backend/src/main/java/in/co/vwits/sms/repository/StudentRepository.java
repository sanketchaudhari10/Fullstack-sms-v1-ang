package in.co.vwits.sms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import in.co.vwits.sms.model.Student;

// jpa repository gives us a lot of built-in methods for CRUD operations which we dont have to implement at all
public interface StudentRepository extends JpaRepository<Student, Integer>{

//  but we also have freedom of writing our custom methods
//	we just have to declare custom methods and not have to define them
//	but for custom methods we have to write jpql on top of respective custom methods.
//	this is done using @Query annotation
	
	@Query("FROM Student AS s LEFT JOIN FETCH s.subjectsLearning WHERE s.rollno=:rno")
	Student findSpecificStudentWithSubjects(@Param(value = "rno") int rollno);
	
	@Query("SELECT DISTINCT s FROM Student AS s LEFT JOIN FETCH s.subjectsLearning")
	List<Student> findAllWithSubjects();
	
}
