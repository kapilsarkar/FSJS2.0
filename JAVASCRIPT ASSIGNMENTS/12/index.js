// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date=new Date();

let year=date.getFullYear();
let month=date.getMonth();
let date1=date.getDate();
let hour=date.getHours();
let min=date.getMinutes();

function dateFormat()
{
    let tmf1= year + '-' + month + '-' + date1 + '-' + hour + ':' + min ;
    console.log(`Time Format1 :${tmf1}`);
    let tmf2= date1 + '-' + month + '-' + year + '-' + hour + ':' + min ;
    console.log(`Time Format2 :${tmf2}`);
    let tmf3= date1 + '/' + month + '/' + year + '/' + hour + ':' + min ;
    console.log(`Time Format3 :${tmf3}`);
}
dateFormat();