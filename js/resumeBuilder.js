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
		"pictureURL" : "images/fry.jpg",
		"welcomeMessage" : "Welcome la la la",
		"skills" : ["Javascript", "HTML", "CSS", "Photoshop"]
};


	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(HTMLbioPic.replace("%data%", bio.pictureURL));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	
/*
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
*/

	$("#topContacts").append(HTMLemail.replace("%data%", bio['contactInfo'].email));
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contactInfo.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contactInfo.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contactInfo.location));

	var formattedSkills = HTMLskillsStart;
	for (var i=0; i<bio.skills.length; i+=1) {
		formattedSkills = formattedSkills + HTMLskills.replace("%data%", bio.skills[i]);
	}
	$("#topContacts").append(formattedSkills);

