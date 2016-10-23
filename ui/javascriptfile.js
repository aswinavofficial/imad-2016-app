// to find which grade it is and return the corresponding number
	function finding(abc)
	 {
	 var pq;
	 switch(abc) 
		{
    case 'OS':
        pq=10;
        break;
	case 'A+':
        pq=9;
		break;
	case 'A':
        pq=8.5;
		break;
	case 'B+':
        pq=8;
		break;
	case 'B':
        pq=7;
        break;
    case 'C':
        pq=6;
        break;
	case 'P':
		pq=5;
		break;
	case 'F':
        pq=0;
    default:
        pq=0;
		}
		
	return pq;
	 }
	//function is called when the final button is clicked
	function getOption() 
	{

	var gpa;
	var gpa1;	
	
	//credits according the order of the subjects
	var credits_s3 = [4,4,4,4,3,3,1,1];
	var credits_s12_graphics = [4,4,3,3,3,3,1,1,1];
	var credits_s12_mechanics = [4,4,4,3,3,3,1,1,1];

	//total credits in each sem
	var total_credits_s3 =  24;
	var total_credits_s12_graphics =  23;
	var total_credits_s12_mechanics =  24;

	
	var obj = document.getElementById("sem");
    var abc=obj.options[obj.selectedIndex].text;
	
	var obj11 = document.getElementById("gmchoice");
    var abc11=obj11.options[obj11.selectedIndex].text;
	
	//to find out which semester abc[1] gives the number
	switch(abc[1])
	{
	case '1': 
	case '2':
	//check if it is graphics or mechanics
	//tempfile1 is getting the order of credits and tempfile2 to get the sum of credits
	if(abc11 == "Graphics")
	{
	tempfile1=credits_s12_graphics;
	tempfile2=total_credits_s12_graphics;
	}
	else
	{
	if(abc11 =="Mechanics")
	{
	tempfile1=credits_s12_mechanics;
	tempfile2=total_credits_s12_mechanics;
	}}
	break;	
	case '3': 
	tempfile1=credits_s3;
	tempfile2=total_credits_s3;

	break;	
	}
	
	//the variables g1,g2... is used to find the corresponding number of the grade of all 9 subjects
    var obj1 = document.getElementById("grade1");
    var abc1=obj1.options[obj1.selectedIndex].text;
	var g1=finding(abc1);
	 

	 
	var obj2 = document.getElementById("grade2");
    var abc2=obj2.options[obj2.selectedIndex].text;
	var g2=finding(abc2);
	 
	 	 
	 
	var obj3 = document.getElementById("grade3");
    var abc3=obj3.options[obj3.selectedIndex].text;
	var g3=finding(abc3);
	 
	 
		
	var obj4 = document.getElementById("grade4");
    var abc4=obj4.options[obj4.selectedIndex].text;
	var g4=finding(abc4);
	 
	 
		
	var obj5 = document.getElementById("grade5");
    var abc5=obj5.options[obj5.selectedIndex].text;
	var g5=finding(abc5);
	 
	 
	 
	 var obj6 = document.getElementById("grade6");
     var abc6=obj6.options[obj6.selectedIndex].text;
	 var g6=finding(abc6);
	 
	 
	 var obj7 = document.getElementById("grade7");
     var abc7=obj7.options[obj7.selectedIndex].text;
	 var g7=finding(abc7);
	 
	 
	 var obj8 = document.getElementById("grade8");
     var abc8=obj8.options[obj8.selectedIndex].text;
	 var g8=finding(abc8);
	 
	 
	 var obj9 = document.getElementById("grade9");
     var abc9=obj9.options[obj9.selectedIndex].text;
	 var g9=finding(abc9);
	 
	 	
	var obj10 = document.getElementById("sem");
    var abc10=obj10.options[obj10.selectedIndex].text;
	
	//checking which sem it is. s1 and s2 has 9 subjects and all the others only 8
	switch(abc10[1])
	{
	case "1":
	case "2":	
	//s1 and s2
	gpa=(g1*tempfile1[0]+g2*tempfile1[1]+g3*tempfile1[2]+g4*tempfile1[3]+g5*tempfile1[4]+g6*tempfile1[5]+g7*tempfile1[6]+g8*tempfile1[7]+g9*tempfile1[8])/tempfile2;
	gpa1=gpa.toFixed(2);
	document.getElementById("cgpa").innerHTML = gpa1;
	break;
	
	default:
	//all other semesters
	gpa=(g1*tempfile1[0]+g2*tempfile1[1]+g3*tempfile1[2]+g4*tempfile1[3]+g5*tempfile1[4]+g6*tempfile1[5]+g7*tempfile1[6]+g8*tempfile1[7])/tempfile2;
	gpa1=gpa.toFixed(2);
	document.getElementById("cgpa").innerHTML = gpa1;
        
	
	  
	 }
	 }
	 //function is called if any of the value is changed - semester, branch or choice of graphics or mechanics	 
	 function ifchanged()
	 {
	 var obj = document.getElementById("sem");
     var abc=obj.options[obj.selectedIndex].text;
	 changing_subjects(abc[1]);
	 //the integer value of the semester is passes
	 }
	 //changes the subjects according to the changein options	 
	 function changing_subjects(j)
	 {
	 var i;	 
	 //switchfile is the array with the list of subjects 
	var switchfile;	
	
	var obj = document.getElementById("branch");
    var abc=obj.options[obj.selectedIndex].text;
	 
	var obj2 = document.getElementById("gmchoice");
    var abc2=obj2.options[obj2.selectedIndex].text;
	
	//subjects of each sem and branch
	var S3cs= ["Linear Algebra & Complex Analysis", "Discrete Computational Structures" , "Switching Theory and Logic Design","Data Structures ", " Electronics Devices & Circuits" , "Life Skills/Business Economics", "Data Structures Lab ","Electronics Circuits Lab"];
	var S3me=["Linear Algebra & Complex Analysis","Mechanics of Solids","Mechanics of Fluids","Thermodynamics","Metallurgy and Materials Engineering","Business Economics/Life Skills","Computer Aided Machine Drawing Lab","Material Testing Lab"];
	var S3ce=["Linear Algebra & Complex Analysis","Mechanics of Solids","Fluid Mechanics I","Engineering Geology","Surveying","Business Economics/Life Skills","Civil Engineering Drafting Lab","Surveying Lab"];
	var S3eee=["Linear Algebra & Complex Analysis","Circuits and Networks ","Analog Electronic Circuits","DC Machines and Transformers","Computer Programming ","Business Economics/Life Skills","Electronic Circuits Lab ","Programming Lab"];
	var S3ec=["Linear Algebra & Complex Analysis","Network Theory","Solid State Devices","Electronic Circuits","Logic Circuit Design","Business Economics/Life Skills","Electronic Devices & Circuits Lab","Electronic Design Automation Lab"];
	//seperate for s1s2 graphics and mechanics
	var S1_graphics=["Calculus","Engineering Phy/Chem","Engineering Graphics","Introduction to your subject","Basics of X Engineering","Introduction to Sustainable Engineering","Phy/Chem Lab","Basic Engineering Workshop I","Basic Engineering Workshop II"];
	var S1_mechanics=["Calculus","Engineering Phy/Chem","Engineering Mechanics","Introduction to your subject","Basics of X Engineering","Introduction to Sustainable Engineering","Phy/Chem Lab","Basic Engineering Workshop I","Basic Engineering Workshop II"];
	var S2_graphics=["Differential Equations","Engineering Phy/Chem","Engineering Graphics","Basics of X Engineering","Basics of Y Engineering","Design and Engineering","Phy/Chem Lab","Basic Engineering Workshop I","Basic Engineering Workshop II"];
	var S2_mechanics=["Differential Equations","Engineering Phy/Chem","Engineering Mechanics","Basics of X Engineering","Basics of Y Engineering","Design and Engineering","Phy/Chem Lab","Basic Engineering Workshop I","Basic Engineering Workshop II"];	
	
	//ie if it is S1 or S2	
	if(j<3)
	{
		//the 9th subject,choice of graphics mechnaics is visible
		 document.getElementById('grade9').style.visibility = "visible";
		 document.getElementById('sub9').style.visibility = "visible";
		 document.getElementById("gmchoice").disabled=false;
		 document.getElementById("branch").disabled=false;

		 
		
		//if s1
		if(j==1)
		{
			//assigning switchfile according to the choice of mechanics or graphics  N.B the default value is graphics
			if(abc2=="Mechanics")
			{
			switchfile=S1_mechanics;
			}
			else
			{				
			switchfile=S1_graphics;
			}
		}
		//if s2
		if(j==2)
		{
			if(abc2=="Mechanics")
			{
			switchfile=S2_mechanics;
			}
			else
			{
			switchfile=S2_graphics;
			}
		}
		//displaying the subjects in the appropriate places
		for (i=1;i<10;i++)
			{
			document.getElementById("sub"+i).innerHTML = switchfile[i-1];
			}
	}
	//if s3 or higher
	else
	{
	//the 9th subject and the choice of graphics and mechanics is hidden
	document.getElementById('grade9').style.visibility = "hidden";
	document.getElementById('sub9').style.visibility = "hidden";
	document.getElementById("gmchoice").disabled=true;
	document.getElementById("branch").disabled=false;


	//abc has the branch.checking the branch and giving appropriate switchfiles
	switch(abc)
	{	 
	case 'Mechanical': 
		//j has the semester.
		switch(j)
		{
		//s3 mech
		case "3":
		switchfile=S3me;
		break;
		//s4 mech 
		case "4":		
		break;
		//s5 mech
		case "5":
		break;
		}
		for(i=1;i<9;i++)
		{		
		document.getElementById("sub"+i).innerHTML = switchfile[i-1];
		}
	 break;
	 
	 case 'Electronics and Communication':
		switch(j)
		{
		case "3":switchfile=S3ec;
		break;
		
		}
		for (i=1;i<9;i++)
		{
		document.getElementById("sub"+i).innerHTML = switchfile[i-1];
		}
	 break;
	  
	  case 'Civil':		
		switch(j)
		{
		case "3":switchfile=S3ce;
		break;		
		}		
		for (i=1;i<9;i++)
		{
		document.getElementById("sub"+i).innerHTML = switchfile[i-1];
		}	
	  break;
	  
	  case 'Electrical and Electronics':
		switch(j)
		{
		case "3":switchfile=S3eee;
		break;
		}
		for (i=1;i<9;i++)
		{		
		document.getElementById("sub"+i).innerHTML = switchfile[i-1];
		}	
	  break;	 
		 
	 case 'Computer Science':		
		switch(j)
		{
		case "3":switchfile=S3cs;
		break;		
		}		
		for (i=1;i<9;i++)
		{
		document.getElementById("sub"+i).innerHTML = switchfile[i-1];
		}
	 break;	  
	 }
	 }	
	 }	 