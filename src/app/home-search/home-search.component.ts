import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $;

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
            // var csarr = [
            //     {
            //         category: "Business",
            //         label: "Introduction to Business"
            //     },
            //     {
            //         category: "Business",
            //         label: "Principles of Management"
            //     },
            //     {
            //         category: "Business",
            //         label: "Economics I"
            //     },
            //     {
            //         category: "Business",
            //         label: "Business Law I"
            //     },
            //     {
            //         category: "Business",
            //         label: "Business Law II"
            //     },
            //     {
            //         category: "Business",
            //         label: "Supply Chain Management"
            //     },
            //     {
            //         category: "Business",
            //         label: "Merchandise Planning and Buying"
            //     },
            //     {
            //         category: "Business",
            //         label: "Legal Environment of Business"
            //     },
            //     {
            //         category: "Business",
            //         label: "Organizational Behavior"
            //     },
            //     {
            //         category: "Business",
            //         label: "Supervision and Leadership"
            //     },
            //     {
            //         category: "Business",
            //         label: "Business Ethics"
            //     },
            //     {
            //         category: "Business",
            //         label: "Business Research Methods"
            //     },
            //     {
            //         category: "Business",
            //         label: "Strategic Business Management"
            //     },
            //     {
            //         category: "Business",
            //         label: "International Business"
            //     },
            //     {
            //         category: "Business",
            //         label: "Computer Applications"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Introduction to Criminal Justice"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Ethics in Criminal Justice"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Police Studies"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Courts"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Police Management"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Introduction to Private Security"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Criminal Procedures"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Crime Scene Investigation Basics"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Terrorism"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Organized Crime"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Criminal Law"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Computer-Based Crime"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Victimology"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Criminology"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Administration of Justice"
            //     },
            //     {
            //         category: "Criminal Justice",
            //         label: "Evidence"
            //     },
            //     {
            //         category: "Education",
            //         label: "Play in the Lives of Young Children"
            //     },
            //     {
            //         category: "Education",
            //         label: "Fundamentals of Early Childhood Education"
            //     },
            //     {
            //         category: "Education",
            //         label: "Infant and Toddler Care"
            //     },
            //     {
            //         category: "Education",
            //         label: "Health, Safety and Nutrition for the Young Child"
            //     },
            //     {
            //         category: "Education",
            //         label: "Cultural Diversity in the Early Childhood Program"
            //     },
            //     {
            //         category: "Education",
            //         label: "Working with Children with Special Needs"
            //     },
            //     {
            //         category: "Education",
            //         label: "Child, Family and Community"
            //     },
            //     {
            //         category: "Education",
            //         label: "Guidance in Early Childhood Education"
            //     },
            //     {
            //         category: "Education",
            //         label: "Art, Music and Movement"
            //     },
            //     {
            //         category: "Education",
            //         label: "Curriculum for Early Childhood Education"
            //     },
            //     {
            //         category: "Education",
            //         label: "Language and Literacy Development in Young Children"
            //     },
            //     {
            //         category: "Education",
            //         label: "Developing Math and Science Skills in Young Children"
            //     },
            //     {
            //         category: "Education",
            //         label: "Child Growth and Development"
            //     },
            //     {
            //         category: "Education",
            //         label: "Administration of an Early Childhood Education Center"
            //     },
            //     {
            //         category: "Education",
            //         label: "Working with Preschoolers"
            //     },
            //     {
            //         category: "Education",
            //         label: "Family Child Care"
            //     },
            //     {
            //         category: "Education",
            //         label: "Assessment in Early Childhood Education"
            //     },
            //     {
            //         category: "English",
            //         label: "English Composition"
            //     },            
            //     {
            //         category: "English",
            //         label: "Information Literacy"
            //     },
            //     {
            //         category: "English",
            //         label: "Introduction to Literature"
            //     },
            //     {
            //         category: "English",
            //         label: "Business & Technical Writing"
            //     },
            //     {
            //         category: "English",
            //         label: "Speech"
            //     },
            //     {
            //         category: "English",
            //         label: "Advanced Composition"
            //     },
            //     {
            //         category: "Finance & Accounting",
            //         label: "Financial Accounting"
            //     },
            //     {
            //         category: "Finance & Accounting",
            //         label: "Managerial Accounting"
            //     },
            //     {
            //         category: "Finance & Accounting",
            //         label: "Intermediate Accounting I"
            //     },
            //     {
            //         category: "Finance & Accounting",
            //         label: "Intermediate Accounting II"
            //     },
            //     {
            //         category: "Finance & Accounting",
            //         label: "Cost Accounting"
            //     },
            //     {
            //         category: "Finance & Accounting",
            //         label: "Computer Applications in Accounting"
            //     },
            //     {
            //         category: "Finance & Accounting",
            //         label: "Financial Management"
            //     },
            //     {
            //         category: "Finance & Accounting",
            //         label: "Personal Financial Management"
            //     },
            //     {
            //         category: "Finance & Accounting",
            //         label: "Corporate Finance"
            //     },
            //     {
            //         category: "Human Resources",
            //         label: "Human Resources Management"
            //     },            
            //     {
            //         category: "Human Resources",
            //         label: "Compensation Management"
            //     },
            //     {
            //         category: "Human Resources",
            //         label: "Employee Benefits"
            //     },
            //     {
            //         category: "Human Resources",
            //         label: "Labor Relations"
            //     },
            //     {
            //         category: "Human Resources",
            //         label: "Training Concepts"
            //     },
            //     {
            //         category: "Marketing",
            //         label: "Marketing Research"
            //     },            
            //     {
            //         category: "Marketing",
            //         label: "Marketing"
            //     },
            //     {
            //         category: "Marketing",
            //         label: "Consumer Behavior"
            //     },
            //     {
            //         category: "Marketing",
            //         label: "Retail Management"
            //     },
            //     {
            //         category: "Math & Science",
            //         label: "Foundation Skills in Math"
            //     },
            //     {
            //         category: "Math & Science",
            //         label: "Intermediate Algebra"
            //     },
            //     {
            //         category: "Math & Science",
            //         label: "Business Statistics"
            //     },
            //     {
            //         category: "Math & Science",
            //         label: "Precalculus"
            //     },
            //     {
            //         category: "Math & Science",
            //         label: "Earth Science"
            //     },
            //     {
            //         category: "Math & Science",
            //         label: "Introduction to Biology"
            //     },
            //     {
            //         category: "Math & Science",
            //         label: "Nutrition"
            //     },
            //     {
            //         category: "Social",
            //         label: "World Civilizations"
            //     },
            //     {
            //         category: "Social",
            //         label: "Introduction to Sociology"
            //     },
            //     {
            //         category: "Social",
            //         label: "Essentials of Psychology"
            //     },
            //     {
            //         category: "Social",
            //         label: "Art Appreciation"
            //     },
            //     {
            //         category: "Social",
            //         label: "Interpersonal Communication"
            //     }
            // ];
            // //var csstr = JSON.stringify(csarr);
            // $("#cs").autocomplete({
            //     minLength: 0,
            //     delay: 200,
            //     autoFocus: true,
            //     select: function(event, ui) {
            //         var initurl = "";
            //         if(location.hash != ""){
            //            initurl = window.location.href.slice(0, window.location.href.indexOf("#"));
            //         }else{
            //            initurl = window.location.href;
            //         }
                    
            //         var urly = initurl + "/" + ui.item.category.replace(/[ ]/g, "-").replace("&", "and").toLowerCase() + "#" + ui.item.label.replace(/[ ,]/g, "").toLowerCase();
                    
            //         window.location = urly;
            //     },
            //     source: csarr
            //     /*source: function( request, response ) {
            //         var matches = $.map( csarr, function(csItem) {
            //             if (csItem.label.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
            //                 return csItem.label;
            //             }
            //         });
            //         response(matches);
            //     }*/
            // });

        // });
  }

}
