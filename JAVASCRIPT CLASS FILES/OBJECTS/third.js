//Declaring Methods inside Objects-

let mydetails={
    fname:"Kapil",
    lname:"Sarkar",
    skills:[], //It is an emplty array
    skillsknown: function(skillname){  //Declaring a method inside object
        this.skills.push(skillname);

    },
    getskills:function(){  //Declaring Multiple Methods inside Objects
        return `${this.fname} ${this.lname} has got skills ${this.skills.length}`;
    },
};
console.log(mydetails);
mydetails.skillsknown("JAVASCRIPT");
console.log(mydetails.getskills());

//skillsknown is a key and then a function is declared with parameter skills name
//Putting values indie object method- Here mydetails is an object  and skillsknown is an method and JAVASCRIPT is  a parameter.
//getskills is a method which contains fname,,lname and skills count. 
//Arrow function is not allowed inside a method.