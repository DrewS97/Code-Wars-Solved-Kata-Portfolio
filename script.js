let functions = [];

function printOutput(id,theFunction){
  document.getElementById(id).innerHTML = theFunction();
}

//Adding Solved Katas to functions array
functions.push( () =>{
  function iqTest(numbers){
  const numArr = numbers.split(' ');

  const checkStatus = num => (parseInt(num) % 2) ? 'odd' : 'even';

  const findUniqueStatus = array => {
    let numEvens = 0;

    array.forEach(function(value){
      if (checkStatus(value) == 'even') { numEvens++; }
    });

    return (numEvens === 1) ? 'even' : 'odd'
  }

  let statuses = numArr.map(checkStatus),
  uniqueStatus = findUniqueStatus(numArr);

  console.log(statuses.indexOf(uniqueStatus) + 1);
  return statuses.indexOf(uniqueStatus) + 1;
  }

  let num1 = "2 4 7 8 10";
  let num2 = "1 2 1 1";

  iqTest(num1);
  iqTest(num2);
});

functions.push( () =>{
  function songDecoder(song){
  let start = song.replaceAll("WUB", " ");
  
  let result = start.replace(/\s+/g,' ').trim();
  console.log(result);
  }

  let test1 = "AWUBBWUBC";
  let test2 = "AWUBWUBWUBBWUBWUBWUBC";
  let test3 = "WUBAWUBBWUBCWUB";

  console.log(songDecoder(test1));
  console.log(songDecoder(test2));
  console.log(songDecoder(test3));
});


functions.push( () =>{
  function filter_list(l) {
    let arrr = l;
    let newArr = [];

    for (i = 0; i < arrr.length; i++){
      if (typeof arrr[i] != "string"){
        newArr.push(arrr[i]);
      }
    }

    console.log(newArr);
  }


  let arr1 = [1,2,'a','b'];
  let arr2 = [1,2,'aasf','1','123',123];

  filter_list(arr1);
  filter_list(arr2);
});

functions.push( () =>{
  function accum(s) {
    let str = s;
    let num = -1;
    let arr = str.split("");

    let newArr = [];

    arr.forEach(alph => {
      newArr.push(alph.toUpperCase());

      for (let i = 0; i <= num; i++) {
        newArr.push(alph.toLowerCase());
      }

      newArr.push("-");
      num++;
    });
    
    let newStr = newArr.join("");
    lastStr = newStr.substring(0, newStr.length - 1);
    //console.log(newArr);
    
    return lastStr;
  }

  console.log(accum("abcd"));
  console.log(accum("ZpglnRxqenU"));
});

functions.push( () =>{
  function switcheroo(x){
    let str = x;
    let strSplit = str.split("");
    console.log(strSplit)

    let newArr = [];

    strSplit.forEach(alph => 
      newArr.push(alph == "a" ? 'b': alph == "b" ? 'a': 'c')
    );

    console.log(newArr);
    
    let newStr = newArr.join("");
    
    return newStr;
  } 

  console.log(switcheroo("abc"));
});

function setupAndRun(){
  //build the page using the DOM
  let wrapper = document.createElement('div');
  document.body.appendChild(wrapper);

  let code = [
    {name:"IQ Test",desc:"Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number."},
        
    {name:"Dubstep",desc:"Take the Dubstep sound of 'WUB' out of the strings to find the hidden message."},

    {name:"List Filtering",desc:"In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out."},
        
    {name:"Mumbling", desc:"Examples only: 'abcd' becomes ----  A-Bb-Ccc-Dddd ---- and 'ZpglnRxqenU' becomes ----  Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu ----"},

    {name:"Switcheroo", desc:"Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched."}
  ]

  let pElement;
  //Printing to the web page
  for(let i=0;i<code.length;i++){
    pElement = document.createElement('p');
    pElement.innerHTML = `<h3>${code[i].name}</h3>${code[i].desc}<br><button id='${code[i].name}Button'>Run</button><br><textarea id='${code[i].name}Output'></textarea><hr>`;
    wrapper.appendChild(pElement);
    //add event listener
    document.getElementById(`${code[i].name}Button`).addEventListener("click",printOutput(`${code[i].name}Output`,functions[i]));
  }
}



setupAndRun();