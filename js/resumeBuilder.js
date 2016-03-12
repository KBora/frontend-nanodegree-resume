$(function(){ // this function is passed into jquery and run onload of the document 

	var model = {

		bio: {
			"name": "Jian Hu",
			"role": "Graphic Designer",
			"contacts" : {
				"email": "akp@evenfeatures.com",
				"mobile": "0421 432 XXX",
				"github": "KBora",
				"twitter": "JianHu9",
				"location": "Sydney, Australia"
			},
			"biopic" : "images/jian-hu-profile.png",
			"welcomeMessage" : "Welcome to my resume",
			"skills" : ["Photoshop", "Illustrator", "InDesign", "HTML", "CSS", "Javascript"]
		},

		jobs: [
			{
				"employer": "Aliens Insurance",
				"title": "Digital Content Analyst",
				"dates": "July 2015 - present",
				"description": "Front end web development for the Aliens Insurance websites, intranet and extranet sites.",
				"location": "Sydney"
			},
			{
				"employer": "Freelance",
				"title": "Graphic Designer and Web Developer",
				"dates": "July 2005 - present",
				"description": "Creation of marketing collateral. Customisation of websites for small to medium sized businesses using Wordpress, Shopify and BigCommerce.",
				"location": "Sydney"
			},
			{
				"employer": "Sony Computer Entertainment Europe",
				"title": "Tea boy",
				"dates": "February 2000 - May 2005",
				"description": "Made tea.",
				"location": "London"
			}
		],

		schools: [
			{
				"name": "Central Saint Martins College of Art and Design",
				"location": "London",
				"degree": "BA",
				"major": ["Graphic Design", "Illustration"],
				"date": "2004",
				"url": "http://www.arts.ac.uk/csm/"
			},
		],

		onlineCourses: [
			{
					"title": "Human-Computer Interaction",
					"school": "Stanford / Coursera",
					"date": "2013",
					"url": "http://online.stanford.edu/course/hci"
			}
		],

		"projectList": [
			{
				"title": "Sideralia",
				"dates": "Aug 2015 - present",
				"description": "Logo creation, product photography, editorial photography.",
				"images": ["images/sideralia.png"]
			}
		]

	};


	var octopus = {

		init: function() {
			view.init()
		},

		getBio: function() {
			return model.bio;
		},

		getJobs: function() {
			return model.jobs;
		},

		getSchools: function() {
			return model.schools;
		}

	};


	var view = {

		init: function() {
			// TO DO: Display  schools, online courses
			view.displayBio();
			view.displayJobs();
			view.displaySchools();
		},

		displayBio: function() {
			var bioData = octopus.getBio();
			var formattedName = HTMLheaderName.replace("%data%", bioData.name);		
			var formattedRole = HTMLheaderRole.replace("%data%", bioData.role);
			$("#header").prepend(formattedRole);
			$("#header").prepend(formattedName);

			for (var contact in bioData.contacts) {
				var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bioData.contacts[contact]).replace("%contact%", contact);
				$("#topContacts").append(formattedContactGeneric);
				$("#footerContacts").append(formattedContactGeneric);
			}

			var formattedBioPic = HTMLbioPic.replace("%data%", bioData.biopic );
			var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bioData.welcomeMessage);
			$("#header").append(formattedBioPic);
			$("#header").append(formattedWelcome);
			

			if (bioData.skills.length > 0) {
				$("#header").append(HTMLskillsStart);
				for (var i=0; i<bioData.skills.length; i+=1) {
					$("#skills").append(HTMLskills.replace("%data%", bioData.skills[i]));
				}
			}
		},

		displayJobs: function() {
			var workData = octopus.getJobs();
			for (var item in workData) {
				$("#workExperience").append(HTMLworkStart);

				var formattedEmployerName = HTMLworkEmployer.replace("%data%", workData[item].employer);
				var formattedEmployerTitle = HTMLworkTitle.replace("%data%", workData[item].title);
				var formattedEmployerLocation = HTMLworkLocation.replace("%data%", workData[item].location);
				var formattedEmployerDates = HTMLworkDates.replace("%data%", workData[item].dates);
				var formattedEmployerDescription = HTMLworkDescription.replace("%data%", workData[item].description);

				$(".work-entry:last").append(formattedEmployerName + formattedEmployerTitle);
				$(".work-entry:last").append(formattedEmployerLocation);
				$(".work-entry:last").append(formattedEmployerDates);
				$(".work-entry:last").append(formattedEmployerDescription);	
			}
		},

		displaySchools: function() {

			var schoolsData = octopus.getSchools();
			for (var school in schoolsData) {
				$("#education").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", schoolsData[school].name);
				formattedSchoolName = formattedSchoolName.replace("#", schoolsData[school].url);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schoolsData[school].degree);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", schoolsData[school].date);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schoolsData[school].location);
				$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
				$(".education-entry:last").append(formattedSchoolDates);
				$(".education-entry:last").append(formattedSchoolLocation);
				for (var major in schoolsData[school].major) {
					var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolsData[school].major[major]);
					$(".education-entry:last").append(formattedSchoolMajor);
				}

		}

		},

		displayOnlineCourses: function() {

		},

		displayProjects: function() {

		}


	};


	octopus.init();

});




var education = {

	display: function() {


		$("#education").append(HTMLonlineClasses);
		for (var onlineCourse in this.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);
			
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

var projects = {
	"projectList": [
		{
			"title": "Sideralia",
			"dates": "Aug 2015 - present",
			"description": "Logo creation, product photography, editorial photography.",
			"images": ["images/sideralia.png"]
		}
	],
	display: function() {
		for (var project in this.projectList) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projectList[project].title);
			var formattedProjectDate = HTMLprojectDates.replace("%data%", this.projectList[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projectList[project].description);
			
			var formattedProjectImages = "";
			for (var image in this.projectList[project].images) {
				formattedProjectImages = formattedProjectImages + HTMLprojectImage.replace("%data%", this.projectList[project].images[image]);

			}
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDate);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImages);
		}		
	}
};


function inName(nameString) {
	var nameArray = nameString.split(" ");
	return nameArray[0]  + " " + nameArray[1].toUpperCase();
}

/* $("#main").append(internationalizeButton); */

//bio.display();
//work.display();
projects.display();
//education.display();

$("#mapDiv").append(googleMap);

