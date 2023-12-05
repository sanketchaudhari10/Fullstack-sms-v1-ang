 package in.co.vwits.sms.service.impl;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import in.co.vwits.model.exception.StudentNotFoundException;
import in.co.vwits.sms.model.Student;
import in.co.vwits.sms.repository.StudentRepository;
import in.co.vwits.sms.service.StudentService;

@Service
@Transactional // this anotation instructs spring framework to invoke all methods of this class in transaction
public class StudentServiceImpl implements StudentService {
/**
 * Using reference of interface to communicate with other layer of an application is known as coding to interface.
 * Coding to interface is best practice as it give loose coupling among layers.
 */
	@Autowired // Autowired on top of field
	private StudentRepository repo;
	
	@Autowired // constructor injection 
	public StudentServiceImpl() {
	super();
	// TODO Auto-generated constructor stub
}

//
//	//This is Constructor Injection
//	public StudentServiceImpl(StudentDao dao) {
//		//dao = new StudentJdbcDaoImpl();
//		//dao = new StudentJpaDaoImpl();
//		this.dao=dao;
//		System.out.println("In Constructor");
//	}
//	
//	
//	//This is Single Line Comment
//
//	/*
//	 * This is MultiLine Comment
//	 */
//
//	public StudentDao getDao() {
//		return dao;
//	}
//
////	This is setter injection
////	@Autowired
//	public void setDao(StudentDao dao) {
//		this.dao = dao;
//		System.out.println("In Setter");
//	}
//

	/** 
	 * This is Documentation Comment
	 * Find all the student details who scored more than given percentage
	 * @param percentage
	 * @return java.util.List<Student>
	 */

	@Override
	public List<Student> findAllStudentsScoredMoreThanGivenPercentage(double percentage){
		return repo.findAll().stream()
				.filter(student ->student.getPercentage()> percentage)
				.collect(Collectors.toList());
	}
	@Override
	public List<Student> findAllStudentsScoredMoreThanInLessThanAttempts(double percentage,int attempts)
	{
		return repo.findAll().stream()
				.filter(student -> student.getPercentage()>percentage)
				.filter(student->student.getNumberOfAttempts()<attempts)
				.collect(Collectors.toList());
	}
	@Override
	public long findTotalCountOfStudentsWithNameStarting(char c)
	{
		return repo.findAll().stream()
				.filter(student -> student.getName().charAt(0)==c)
				.count();

	}
	@Override
	public long findCountUniqueSubjects() {
		return repo.findAll().stream()
					.flatMap(student->student.getSubjectsLearning().stream())
					.distinct()
					.count();
							
	}
	@Override
	public List<Student> findAllStudentsWithNameStarting(char c)
	{
		return repo.findAll().stream()
				.filter(student -> student.getName().charAt(0)==c)
				.collect(Collectors.toList());

	}
	@Override
	public List<Student> findAllStudentSortedByPercentage()
	{
		return repo.findAll().stream().sorted().collect(Collectors.toList());
	}

	@Override
	public List<String> findAllStudentNamesWhoScoredMoreThanGivenPercentage(double percentage){
		return repo.findAll().stream()
				.filter(student -> student.getPercentage()>percentage)
				//.map(student->student.getName())
				.map(Student::getName)//method reference
				.toList();


	}
	@Override
	public List<Student>findAllStudentsLearningsSpecificSubject(String Subject){
		return repo.findAll().stream()
				.filter(student -> student.getSubjectsLearning().stream().anyMatch(sub->sub.equals(Subject)))							
				//.collect(Collectors.toList());
				.toList();

	}
	@Override
	public List<Student> findAllStudentBornBeforeSpecificDate(LocalDate SpecificDate){
		return repo.findAll().stream()
				.filter(student->student.getDateOfBirth().isBefore(SpecificDate))
				.collect(Collectors.toList());
	}
	@Override
	public long findStudentsCountBornAfterSpecificDate(LocalDate SpecificDate) {
		return repo.findAll().stream()
				.filter(student->student.getDateOfBirth().isAfter(SpecificDate))
				.count();
	}
	//public List<Student> findAllStudentBornBetweenSpecificDate(LocalDate)
	{

	}

	@Override
	public Map<Boolean, List<Student>> partitionStudentsBasedOnMarks(double mark) {
		return repo.findAll().stream()
				.collect(Collectors.partitioningBy(s -> s.getPercentage() > mark));
	}

//	@Override
//	public List<Student>  findAllStudentsScoredMoreThanGivenPercentage(double percentage) {
//		return dao.findAll().stream()
//				.filter(student -> student.getPercentage() < percentage)
//				.collect(Collectors.toList());
//	}
	@Override
	public List<Student>findAll(){
		return repo.findAll();
	}
	//create a method which insert the method in database
	@Override
	public void save(Student s) {
		repo.save(s);
	}
	//find
	@Override
	public Optional<Student> findByRollNo(int rollno) throws StudentNotFoundException {
		Optional<Student> p = repo.findById(rollno);
		if(p.isPresent())
		{
			return p;
		}
		else
			//Throw user define exception "StudentNotFound"
			throw new StudentNotFoundException();
		//return p;
	}
	@Override
	public void deleteByRollNo(int rollno) {

		repo.deleteById(rollno);
	}
	@Override
	public void updateByRollNo(int rollno, double modifiedMarks)
	{
		
//		repo.updateById(rollno, modifiedMarks);
	}

	@Override
	public List<Student> findAllStudentsScoredLessThanGivenPercentage(double percentage) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateStudent(Student ss) {
		// TODO Auto-generated method stub
		this.repo.save(ss);
	}

	@Override
	public List<Student> findAllWithSubjects() {
		// TODO Auto-generated method stub
		return this.repo.findAllWithSubjects();
	}

	@Override
	public Student findSpecificStudentWithSubjects(int roll) {
		// TODO Auto-generated method stub
		return this.repo.findSpecificStudentWithSubjects(roll);
	}
	

	

}
