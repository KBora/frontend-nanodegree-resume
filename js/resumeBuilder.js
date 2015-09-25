/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var bio = {
  "name" : "Donatello Ninja Turtle",
  "role" : "Front End Developer",
	"contact info" : {
			"email" : "donatello.turtle@gmail.com",
			"mobile" : "0421 432 543",
			"location" : "Sydney"
	},
	"picture URL" : "images/me.jpg",
	"welcome message" : "Welcome la la la",
	"skills" : ["Javscript", "HTML", "CSS", "Photoshop"]
};


	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio['contact info'].email);

	$("#topContacts").append(formattedEmail);
