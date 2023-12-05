package in.co.vwits.sms.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.co.vwits.sms.model.User;
import in.co.vwits.sms.service.UserService;

@RestController
@RequestMapping(value="/api/login")
public class UserRestController {
	
		
		@Autowired
		private UserService service;
		
		
		
		@PostMapping()
		public User authenticateUser(@RequestBody User u){
			return service.authenticate(u);
		}
}







	


