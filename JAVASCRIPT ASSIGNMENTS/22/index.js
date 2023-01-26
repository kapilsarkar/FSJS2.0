// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort the array and find the min and max age

ages.sort((a,b) => {
    if(a>b)
    {
        return 1;
    }
    else if (a<b)
    {
        return -1;
    }
    else
    {
        return 0;
    }
}
)
const minage=ages[0];
const maxage=ages[ages.length-1];
console.log(`The Minimum Age is : ${minage} and the Maximim Age is : ${maxage}`);

//Find the median age(one middle item or two middle items divided by two)

const medianage=(ages[ages.length/2] + ages[(ages.length/2)-1]) /2;
console.log(`The Median Age is :${medianage}`);


//Find the average age(all items divided by number of items)
