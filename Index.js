//The first question
const testString = "a32AbbBB22bbbbbbccc";
//expecting 4


const checkRepeat = (str)=>{

    //this converts the string to lowercase to enable case insensitivity
    const stringValue = str.toLowerCase()


    // the counter for how many repeated numbers there are
    let count = 0;


    // the array makes sure counted numbers are not recounted
    let countedArr = [];


 for(let i = 0; i < stringValue.length; i++){
    for(let j = i + 1; j < stringValue.length; j++){
        if(stringValue[i] === stringValue[j] && !countedArr.includes(stringValue[j])){
            count+=1
            countedArr.push(stringValue[i]);
        }
    }
 }


 return count;
}


const howManyRepeat = checkRepeat(testString);

// console.log("the number is this",howManyRepeat);





// the second question
const checkString = (str1,str2)=>{
    if(str1[str1.length -1] == str2[str2.length -1]){
        return true;
    }
    else return false;
}

const res = checkString('abc','adc');
// console.log("the response",res);


// the third question

const leftRightEquals = (arr)=>{
    const visited = [];
    let leftAggregate = 0;
    let rightAggregate = 0;


    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            rightAggregate+=arr[j]
        }
        if(arr[0] == rightAggregate){
            return 0;
        } 

        visited.push(arr[i])


         leftAggregate = visited.reduce((acc,currentValue)=> acc + currentValue,0)


        if(leftAggregate - arr[i] == rightAggregate){
            return i 
        }

        rightAggregate = 0;
    }
}

const result = leftRightEquals([20,10,-80,10,10,15,35]);
console.log("the response is this",result)