package in.co.vwits.sms.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import in.co.vwits.sms.model.User;
import in.co.vwits.sms.repository.UserRepository;
import in.co.vwits.sms.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repo;
	
	@Autowired // constructor injection 
	public UserServiceImpl() {
	super();
	// TODO Auto-generated constructor stub
}
	@Override
	public User authenticate(User u) {
//		Optional<User> foundUser = Optional.of(repo.findOne(u.getUsername()));
		
		Optional<User> foundUser = repo.findById(u.getUsername());
		if(foundUser.isPresent())
		{
			System.out.println("user logging in is: "+u);
			System.out.println("Found user is: "+foundUser.get());
			
			
			if(foundUser.get().getPassword()==u.getPassword())
				return foundUser.get();
			return new User();
		}
//		else
//			//Throw user define exception "UserNotFound"
//			throw new UserNotFoundException();
		System.out.println("User Not found");
		return new User();
		
	}
	
}
