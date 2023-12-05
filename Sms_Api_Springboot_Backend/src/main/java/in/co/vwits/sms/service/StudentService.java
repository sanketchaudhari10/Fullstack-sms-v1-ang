package in.co.vwits.sms.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import in.co.vwits.model.exception.StudentNotFoundException;
import in.co.vwits.sms.model.Student;

public interface StudentService {

	/** 
	 * This is Documentation Comment
	 * Find all the student details who scored more than given percentage
	 * @param percentage
	 * @return java.util.List<Student>
	 */

	List<Student> findAllStudentsScoredMoreThanGivenPercentage(double percentage);

	List<Student> findAllStudentsScoredMoreThanInLessThanAttempts(double percentage, int attempts);

	long findTotalCountOfStudentsWithNameStarting(char c);

	long findCountUniqueSubjects();

	List<Student> findAllStudentsWithNameStarting(char c);

	List<Student> findAllStudentSortedByPercentage();

	List<String> findAllStudentNamesWhoScoredMoreThanGivenPercentage(double percentage);

	List<Student> findAllStudentsLearningsSpecificSubject(String Subject);

	List<Student> findAllStudentBornBeforeSpecificDate(LocalDate SpecificDate);

	long findStudentsCountBornAfterSpecificDate(LocalDate SpecificDate);

	Map<Boolean, List<Student>> partitionStudentsBasedOnMarks(double mark);

	List<Student> findAllStudentsScoredLessThanGivenPercentage(double percentage);

	List<Student> findAll();

	//create a method which insert the method in database
	void save(Student s);

	//find
	Optional<Student> findByRollNo(int rollno) throws StudentNotFoundException;

	void deleteByRollNo(int rollno);

	void updateByRollNo(int rollno, double modifiedMarks);

	void updateStudent(Student ss);
	
	List<Student> findAllWithSubjects();

	Student findSpecificStudentWithSubjects(int roll);

}