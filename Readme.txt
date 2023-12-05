FullStack App
 
FullStack app consists of following two independent application-
 
	1-SMS_API - This is backend application developed using Springboot.
		    This is independent developed by backend developers and REST endpoints are exposed.
 
	2-SMS_App- This is frontend application developed using Angular
		   This is responsible for using GUI and consuming endpoints developed by backend application.
 
Both the applications are independently developed and deployed.

------------------CORS-----------------------
Cross Origin Resource Sharing
- Our client application is running on different ports than server, Hence client request for resource,
we have been shown an error CORS policy issue.
-This is security policy to make sure our resources are safe & not accessed outside the domain
-In order to fix this, server must give access to client domain, It is done by writing some
configuration on server side


Assignment 5--
-When user is going to login using Angular application 
Username and Password must be checked with the Database on the backend
-Show appropriate error message if credenetial are not matched
-Also implement register user and update profile usecases
share github link