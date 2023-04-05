const myName ='Kapil'

const userName1 = ''
const userName2 = ''

const user1 = {
  firstName : 'Kapil'
}

const myWrestler = 'Brock Lesnar'
const user2 = {
    firstName :'Piku',
    'last-Name' :'Sarkar',
    address :{
        city: 'Asansol',
        town :'Burnpur',
        pin: 713325,
      moreDetails :{
        hobbies :'Cricket'
      }  
    }

  }

console.log(user1===user2)
console.log(user2)
console.log(user2.firstName) //Dot Notation
console.log(user2["last-Name"]) //String Notation
console.log(user2[myWrestler]) //Square Notation

//For Adding New Values to Object
user2.age = 32
user2.address.moreDetails.superstar='Virat Kohli'
user2['is-student'] = true
//For Accessing Values
console.log(user2)
console.log(user2.address.city)
console.log(user2.address.moreDetails.hobbies)
console.log(user2.address.moreDetails.superstar)