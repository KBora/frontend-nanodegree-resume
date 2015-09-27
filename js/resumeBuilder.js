/*
This is empty on purpose! Your code to build the resume will go here.
 */
 	var bio = {
		"name": "Bora Chan",
		"role": "Front End Developer",
		"contactInfo" : {
			"email": "bora.chanello@gmail.com",
			"mobile": "0421 432 543",
			"github": "KBora",
			"twitter": "JianHu9",
			"location" : "Sydney"
		},
		"pictureURL" : "images/me.jpg",
		"welcomeMessage" : "Welcome la la la",
		"skills" : ["Javscript", "HTML", "CSS", "Photoshop"]
};


	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio['contact info'].email);

	$("#topContacts").append(formattedEmail);
