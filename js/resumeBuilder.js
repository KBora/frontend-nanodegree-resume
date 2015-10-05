
var work = {
	"jobs": [
		{
			"employer": "Aliens Insurance",
			"title": "Digital Content Analyst",
			"datesWorked": "July 2015 - present",
			"description": "Front end web development for the Aliens Insurance websites, intranet and extranet sites.",
			"location": "Sydney"
		},
		{
			"employer": "IBM",
			"title": "Front End Developer",
			"datesWorked": "May 2012 - Oct 2014",
			"description": "Maintenance and enhancements to the web front end of software provisioning application for a large bank",
			"location": "Sydney"
		},
		{
			"employer": "Freelance",
			"title": "Graphic Designer and Web Developer",
			"datesWorked": "July 2005 - present",
			"description": "Creation of marketing collateral. Customisation and custom development of websites for small to medium sized businesses using Wordpress, Shopify and BigCommerce",
			"location": "Sydney"
		},
		{
			"employer": "Sony Computer Entertainment Europe",
			"title": "Intranet Developer",
			"datesWorked": "February 2000 - May 2005",
			"description": "Development and support of Intranet applications.",
			"location": "London"
		}
	]
};


var bio = {
	"name": "Bora Chan",
	"role": "Front End Developer",
	"contacts" : {
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

var education = {
	"schools": [
		{
			"name": "Central Saint Martins College of Art and Design",
			"location:": "London",
			"degree": "BA",
			"major": ["Graphic Design", "Illustration"],
			"datesAttended": "2001 - 2004",
			"url:": "http://www.arts.ac.uk/csm/"
		},
		{
			"name": "University of Technology, Sydney",
			"location:": "Sydney",
			"degree": "Bachelor of Information Technology",
			"datesAttended": "1998 - 2000",
			"url" : "http://www.uts.edu.au/"
		}
	],
	"onlineCourses": [
		{
			"title": "Human-Computer Interaction",
			"school": "Stanford / Coursera",
			"datesAttended": "2013",
			"url": "http://online.stanford.edu/course/hci"
		}
	]
};

if (bio.skills.length > 0) {
	
	$("#header").append(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLskillsStart);

	for (var i=0; i<bio.skills.length; i+=1) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for (item in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployerName = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
	var formattedEmployerTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
	var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
	var formattedEmployerDates = HTMLworkDates.replace("%data%", work.jobs[item].datesWorked);
	var formattedEmployerDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);

	$(".work-entry:last").append(formattedEmployerName + formattedEmployerTitle);
	$(".work-entry:last").append(formattedEmployerLocation);
	$(".work-entry:last").append(formattedEmployerDates);
	$(".work-entry:last").append(formattedEmployerDescription);

}

