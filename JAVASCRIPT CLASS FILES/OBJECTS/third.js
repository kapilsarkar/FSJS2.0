//Declaring Methods inside Objects-

let mydetails={
    fname:"Kapil",
    lname:"Sarkar",
    skills:[],
    skillsknown: function(skillname){
        this.skills.push(skillname);

    },
    getskills:function(){
        return `${this.fname} ${this.lname} has got skills ${this.skills.length}`;
    },
};
console.log(mydetails);
mydetails.skillsknown("JAVASCRIPT");
console.log(mydetails.getskills());