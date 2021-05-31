//list of functions
let funcList = [];
//list of functions to give output
let tests = [];

function printFunction(id,theFunction){
  console.log(theFunction.toString());

  document.getElementById(id+'Code').innerHTML = theFunction;
}

function printOutput(id,theFunction){
  console.log(theFunction());

  document.getElementById(id+'Output').innerHTML = theFunction;
}

//Adding Solved Katas to functions array

function iqTest(numbers){
  let numArr = numbers.split(' ');

  let checkStatus = num => (parseInt(num) % 2) ? 'odd' : 'even';

  let findUniqueStatus = array => {
    let numEvens = 0;

    array.forEach(function(value){
      if (checkStatus(value) == 'even') { numEvens++; }
    });

    return (numEvens === 1) ? 'even' : 'odd'
  }

  let statuses = numArr.map(checkStatus),
  uniqueStatus = findUniqueStatus(numArr);

  return statuses.indexOf(uniqueStatus) + 1;
}

//pushing into function list
funcList.push(iqTest);

function testIQ() {
  let num1 = "2 4 7 8 10";
  let num2 = "1 2 1 1";

  console.log(iqTest(num1));
  console.log(iqTest(num2));
};

//pushing into test list
tests.push(testIQ);



function songDecoder(song){
  let start = song.replaceAll("WUB", " ");
  
  let result = start.replace(/\s+/g,' ').trim();
  console.log(result);
  return result;
}

funcList.push(songDecoder);

function testSong() {
  let test1 = "AWUBBWUBC";
  let test2 = "AWUBWUBWUBBWUBWUBWUBC";
  let test3 = "WUBAWUBBWUBCWUB";

  songDecoder(test1);
  songDecoder(test2);
  songDecoder(test3);
}

tests.push(testSong);


function filterList(l) {
  let arrr = l;
  let newArr = [];

  for (i = 0; i < arrr.length; i++){
    if (typeof arrr[i] != "string"){
      newArr.push(arrr[i]);
    }
  }

  console.log(newArr);
  return newArr;
}
funcList.push(filterList);

function testFilter() {
  let arr1 = [1,2,'a','b'];
  let arr2 = [1,2,'aasf','1','123',123];

  filterList(arr1);
  filterList(arr2);
}
tests.push(testFilter);


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
funcList.push(accum);

function testAccum() {
  console.log(accum("abcd"));
  console.log(accum("ZpglnRxqenU"));
}
tests.push(testAccum);


function switcheroo(x){
  let str = x;
  let strSplit = str.split("");
  

  let newArr = [];

  strSplit.forEach(alph => 
    newArr.push(alph == "a" ? 'b': alph == "b" ? 'a': 'c')
  );
  
  let newStr = newArr.join("");
  
  return newStr;
} 
funcList.push(switcheroo);

function testSwitch() {
  console.log(switcheroo("abc"));
}
tests.push(testSwitch);



function setupAndRun(){
  //build the page using the DOM
  let wrapper = document.createElement('div');
  document.body.appendChild(wrapper);

  let code = [
    {name:"IQ Test", desc:"Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number. IMPORTANT: Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)."},
        
    {name:"Dubstep",desc:"Take the Dubstep sound of 'WUB' out of the strings to find the hidden message."},

    {name:"List Filtering",desc:"In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out."},
        
    {name:"Mumbling", desc:"Examples only: 'abcd' becomes ----  A-Bb-Ccc-Dddd ---- and 'ZpglnRxqenU' becomes ----  Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu ----"},

    {name:"Switcheroo", desc:"Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched."}
  ];
  
  let element = document.createElement('p');
  
  element.innerHTML = `<h2 class="title">Kata Portfolio</h2><p class="center">This is a collection of "kata" from the website codewars.com that I have solved along with my solutions and their outputs.</p><br><hr class="dashed">`;
  wrapper.appendChild(element);


  let pElement;

  //Printing to the web page
  for(let i=0;i<code.length;i++){
    pElement = document.createElement('p');
    pElement.classList.add("center")
    pElement.innerHTML = `
    <div class="container-md">
      <div class="row"> 
        <h3>${code[i].name}</h3>
      </div>
      <div class="row">
        ${code[i].desc}
        <hr class="grey">
      </div>
      <div class="row">
        <div class="col">
          <h4>Code</h4>
          <textarea id='${code[i].name}Code' class="form-control" rows="15" cols="40">
          </textarea>
        </div>
        <div class="col">
          <br><br><br><br><br><br><br><br>
          <button id='${code[i].name}Button' class="btn btn-primary btn-lg">Run</button><br>
        </div>
        <div class="col">
          <h4>Output</h4>
          <textarea id = '${code[i].name}Output' class="form-control" rows="15" cols="25"></textarea>
        </div>
      </div>
    <div>
    <br>
    <br>
    <hr class="dashed">`;

    //appending the paragraph to the wrapper container
    wrapper.appendChild(pElement);

    //add event listener
    document.getElementById(`${code[i].name}Button`).addEventListener("click",printFunction(`${code[i].name}`,funcList[i]));

    document.getElementById(`${code[i].name}Button`).addEventListener("click",printOutput(`${code[i].name}`,tests[i]));
  }
}



setupAndRun();