Javascript Code

let gcd = function(a, b) 
{ 
  if (b === 0)
    return a
  return gcd (b, (a % b))

}

console.log(gcd(63, 14))


function gcd(a, b)
{ 
  while (b !== 0)
  {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

console.log(gcd(49, 14))

gcd = (a, b) => 
{ 
  if (b === 0)
    return a
  return gcd (b, (a % b))

}

console.log(gcd(121, 33))

min = (a, b) => 
{ if (a < b) return a;
  return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Your code here.

function countBs(input)
{
	function countBs_iter(count, position)
	{
		if (position === input.length) return count;
  			else if (input[position] === "B") return countBs_iter(count + 1, position + 1);
           	 else return countBs_iter(count, position + 1);
	}
  
  	return countBs_iter(0, 0);
}

function countChar(input, input_char)
{
	function countBs_iter(count, position)
	{
		if (position === input.length) return count;
  			else if (input[position] === input_char) return countBs_iter(count + 1, position + 1);
           	 else return countBs_iter(count, position + 1);
	}
  
  	return countBs_iter(0, 0);
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


function findString(range, domain)
{
	function find_iter(range_pos, domain_pos)
  {
  	if (range[range_pos] !== domain[domain_pos])
      		range_pos = 0;
       else if (range_pos == (range.length - 1))
      		return domain_pos - range.length + 1;
    if (domain_pos === (domain.length - 1))
            return false;
    else if (range[range_pos] === domain[domain_pos])
    	return find_iter(range_pos + 1, domain_pos + 1); 
    	  else return find_iter(range_pos, domain_pos + 1);  
  }
   return find_iter(0, 0);
}


function findString(range, domain)
{
	function find_iter(range_pos, domain_pos)
  {
  	if (range[range_pos] !== domain[domain_pos])
      		range_pos = 0;
       else if (range_pos == (range.length - 1))
      		return domain_pos - range.length + 1;
    if (domain_pos === (domain.length - 1))
            return false;
    else if (range[range_pos] === domain[domain_pos])
    	return find_iter(range_pos + 1, domain_pos + 1); 
    	  else return find_iter(range_pos, domain_pos + 1);  
  }
  if (range.length > domain.length)
    return false;
  if (range.length === 0)
  	return false;
  if (domain.length === 0)
    return false;
  if (range === domain)
    return 0;
  return find_iter(0, 0);
}

console.log(findString("This is very long", "car"));


function findString(range, domain)
{ if (range.length > domain.length)
    return false;
  if (range.length === 0)
  	return false;
  if (domain.length === 0)
    return false;
  if (range === domain)
    return 0;
  let range_pos = 0;
  
  for (let domain_pos = 0; domain_pos < domain.length; domain_pos += 1)
   { if (range[range_pos] !== domain[domain_pos])
      		range_pos = 0;
       else if (range_pos === (range.length - 1))
      		return domain_pos - range.length + 1;
    if (domain_pos === (domain.length - 1))
            return false;
    else if (range[range_pos] === domain[domain_pos])
    	range_pos += 1;}

  return false;}

console.log(findString("excalibur", "This sword is excalibur."));


let myMatrix = {
  			n: 3,
  			array:	[   1, 2, 3, 
                   		4, 0, 6, 
                    	7, 8, 9  ]};

let myMatrix = {
  			n: 3,
  			array:	[   "turtles", "dogs", "cats", 
                   		"rats", "snakes", "beavers", 
                    	"possums", "marmots", "squirrels"  ]};

function index(i, j, n)
{ return i*n + j; }

function print_matrix(myMatrix)
{	let n = myMatrix.n;
  	let row_string = "";	
  	for(let i = 0; i < n; i++) {
      console.log(row_string, "\n");
      row_string = "";
        for(let j = 0; j < n; j++) {
          row_string = row_string + String(myMatrix.array[index(i,j,n)]) + " "; }}
  	console.log(row_string, "\n");}

print_matrix(myMatrix)



let credit_card = { number: "1234-5451-1251-2822",
                    expiration: "12/25",
                    CCV: 111 };
let record = JSON.stringify(credit_card);
console.log(record);

let c_num = JSON.parse(record).number;
console.log(c_num);





let myMatrix = {
  			m: 3,
  			n: 3,
  			array:	[   1, 2, 3, 
                   		4, 0, 6, 
                    	7, 8, 9  ]};

function index(i, j, n)
{ return i*n + j; }

function print_matrix(myMatrix)
{	let n = myMatrix.n;
 	let m = myMatrix.m;
  	let row_string = "";	
  	for(let i = 0; i < m; i++) {
      console.log(row_string, "\n");
      row_string = "";
        for(let j = 0; j < n; j++) {
          row_string = row_string + String(myMatrix.array[index(i,j,n)]) + " "; }}
  	console.log(row_string, "\n");}

function add_columns(myMatrix, c)
{
	let tempArray = [] ;
  	let n = myMatrix.n;
  	for(let i = 0; i < n; i++) 
      for(let j = 0; j < (n + c); j++)
      {
        if (j < n) 
          tempArray.push(myMatrix.array[index(i, j, n)]);
        else tempArray.push(0);
      }
  	return tempArray;
}

function add_rows(myMatrix, c)
{
	let tempArray = myMatrix.array;
  	let n = myMatrix.n;
  	for(let i = 0; i < c; i++)
    	for(let j = 0; j < n; j++)
          tempArray.push(0);
  return tempArray;
}

print_matrix(myMatrix);
myMatrix.array = add_columns(myMatrix, 3);
myMatrix.n = 6;
print_matrix(myMatrix);
myMatrix.array = add_rows(myMatrix, 1);
myMatrix.m = 4;
print_matrix(myMatrix);





let myMatrix = {
  			m: 3,
  			n: 3,
  			array:	[   1, 2, 3, 
                   		4, 0, 6, 
                    	7, 8, 9  ]};

function index(i, j, n)
{ return i*n + j; }

function print_matrix(myMatrix)
{	let n = myMatrix.n;
 	let m = myMatrix.m;
  	let row_string = "";	
  	for(let i = 0; i < m; i++) {
      console.log(row_string, "\n");
      row_string = "";
        for(let j = 0; j < n; j++) {
          row_string = row_string + String(myMatrix.array[index(i,j,n)]) + " "; }}
  	console.log(row_string, "\n");}

function add_columns(myMatrix, c)
{
	let tempArray = [] ;
  	let n = myMatrix.n;
  	for(let i = 0; i < n; i++) 
      for(let j = 0; j < (n + c); j++)
      {
        if (j < n) 
          tempArray.push(myMatrix.array[index(i, j, n)]);
        else tempArray.push(0);
      }
  	myMatrix.n = n + c;
  	myMatrix.array = tempArray;
  	return myMatrix;
}

function add_rows(myMatrix, c)
{
	let tempArray = myMatrix.array;
  	let n = myMatrix.n;
  	for(let i = 0; i < c; i++)
    	for(let j = 0; j < n; j++)
          tempArray.push(0);
  	myMatrix.m = myMatrix.m + c;
  	myMatrix.array = tempArray;
  return myMatrix;
}


function swap_rows(myMatrix, a, b)
{
  	let tempArray = [];
  	let m = myMatrix.m;
  	let n = myMatrix.n;
  	
  if (a === b) return myMatrix;
  
  for(let i = 0; i < m; i++) 
      for(let j = 0; j < n; j++)
      {
        if (i == a) 
          tempArray.push(myMatrix.array[index(b, j, n)]);
        else if (i == b) 
          tempArray.push(myMatrix.array[index(a, j, n)]);
        else tempArray.push(myMatrix.array[index(i, j, n)]);
      }
  	myMatrix.array = tempArray;
  	return myMatrix;
  } 


function row_mult (myMatrix, factor, row)
{
  	let tempArray = [];
  	let m = myMatrix.m;
  	let n = myMatrix.n;
  	for(let i = 0; i < m; i++) 
      for(let j = 0; j < n; j++)
      {
        if (i == row) 
          tempArray.push(factor * myMatrix.array[index(i, j, n)]);
        else tempArray.push(myMatrix.array[index(i, j, n)]);
      }
  	myMatrix.array = tempArray;
  	return myMatrix;
 }

function row_add (myMatrix, from_row, to_row)
{
  	let tempArray = [];
  	let m = myMatrix.m;
  	let n = myMatrix.n;
  	for(let i = 0; i < m; i++) 
      for(let j = 0; j < n; j++)
      {
        if (i == to_row) 
          tempArray.push(myMatrix.array[index(from_row, j, n)] + 
                         myMatrix.array[index(i, j, n)]);
        else tempArray.push(myMatrix.array[index(i, j, n)]);
      }
  	myMatrix.array = tempArray;
  	return myMatrix;
 }

function row_mult_add (myMatrix, factor, from_row, to_row)
{
  	let tempArray = [];
  	let m = myMatrix.m;
  	let n = myMatrix.n;
  	for(let i = 0; i < m; i++) 
      for(let j = 0; j < n; j++)
      {
        if (i == to_row) 
          tempArray.push(factor * myMatrix.array[index(from_row, j, n)] + 
                         myMatrix.array[index(i, j, n)]);
        else tempArray.push(myMatrix.array[index(i, j, n)]);
      }
  	myMatrix.array = tempArray;
  	return myMatrix;
 }


function max_row(myMatrix, k, l) {
	let rows = myMatrix.m;
  	let n = myMatrix.n;
	let max = myMatrix.array[index(k,l,rows)];
	let max_row = k;

	for (let i = k; i < rows; ++i) {
	if (Math.abs(myMatrix.array[index(i,l,n)]) > Math.abs(myMatrix.array[index(k,l,n)]))
 		{ max =  myMatrix.array[index(i,l,n)];
   		max_row = i;}}
	return max_row;
}


function init_rows(myMatrix, k, l) {
	let r_max = max_row(myMatrix, k, l);
	swap_rows(myMatrix, k, r_max);
  	return myMatrix;
}

function reduce_columns(myMatrix, k, l) 

{
    let factor = 0;
  	let n = myMatrix.n;
  	for (let i = k + 1; i < myMatrix.m; ++i) 
    { factor = - myMatrix.array[index(i,l,n)] /
                     myMatrix.array[index(k,l,n)];
      if (factor != 0) myMatrix = row_mult_add(myMatrix, factor, k, i); }
    return myMatrix;
}




function fizzbuzz(n) {

	let fb_string = "";
  
	function gcd(a, b) {
  		if (b===0) then return a;
 		 else return gcd(b, a % b) }
  
	for (let i = 1; i <= n; ++i) 
        {	switch (gcd(15, i) 
            {
        		case 15:
            		fb_string += "FizzBuzz ";
            		break;
        		case 3:    
            		fb_string += "Fizz ";
            		break;
        		case 5:    
            		fb_string += "Buzz ";
            		break;
        		default:
            	fb_string += String(i) + " ";
    		}  					
      
 		}
     
}
console.log(fizzbuzz(100));


function fizz_buzz(n) {
	let fb_string = "";
  
	function gcd(a, b) {
  		if (b===0) return a;
 		 else return gcd(b, a % b) }
  
	for (let i = 1; i <= n; ++i) 
        { switch (gcd(15, i)) 
            {
        		case 15:
            		fb_string += "FizzBuzz ";
            		break;
        		case 3:    
            		fb_string += "Fizz ";
            		break;
        		case 5:    
            		fb_string += "Buzz ";
            		break;
        		default:
            	fb_string += String(i) + " ";
    		}  }
  return fb_string;
}      
     

console.log(fizz_buzz(100));


function arrayToList(array) {

let list = {
  value: array[0],
  rest: null}

for (let i = 1; i < array.length; i++)
	{
	list = {
  	value: array[i], 
  	rest: list}
	} 
  
  return list;
}


console.log(arrayToList([1,2,3,4,5]));


function repeat(n, method) {
  let line = "";
  for (let i = 0; i <= n; ++i) {
    line += String(method(i)) + " "; } 
	return line;}

function square(n) {
  return n * n; }

function double(n) {
  return 2 * n; }

function fibonacci(n) {
  if (n < 2) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2); }

console.log(repeat(10, fibonacci));
console.log(repeat(10, x => {return 2 * x}));
console.log(repeat(10, square));



function divisibleBy(n) {
  return x => ((x % 2) == 0); }

function Not(f) {
  return x => !f(x); }

let isEven = divisibleBy(2);
let isOdd = Not(divisibleBy(2));

console.log(isEven(11));
console.log(isOdd(11));


function isPrime(n) {
  
  function square(n) {
    return n * n;}
  
  function Prime_iter(i) {
    if (square(i) > n) return true;
    else if (n % i == 0) return false;
    	else return Prime_iter(++i) }
  
  if (n == 2) return true;
  else if (n == 3) return true;
  else if (n == 5) return true;
  
  if (n == 1) return false;
  else if (n % 2 == 0) return false;
  else if (n % 3 == 0) return false;
  else if (n % 5 == 0) return false;
  else return Prime_iter(2); }

function repeat(n, predicate) {
  let line = "";
  for (let i = 0; i <= n; ++i) {
    if (predicate(i))
       line += String(i) + " "; } 
	return line;}

console.log(repeat(100, isPrime));

map method:

array = [1, 2, 3, 4];

array2 = array.map(s => s * s);

console.log(array2);


reduce method:

array = [1, 2, 3, 4];

array2 = array.reduce((a,b) => a * b);

console.log(array2);


some method:

array = [1, 3, 5];
array2 = [1, 2, 3, 5];

function isEven(n) {
  return (n % 2 == 0)}

console.log(array.some(isEven));
console.log(array2.some(isEven));


some method with lambda functions:

array = [1, 3, 5];
array2 = [1, 2, 3, 5];

console.log(array.some(n => {return (n % 2 == 0);}));
console.log(array2.some(n => {return (n % 2 == 0);}));



Classes and Prototypes

let man = { 
  			name: "Derek",
  			eat(food) { console.log(`${this.name} eats ${food}`); }
          }; // prototype

let Thinh = Object.create(man);  // create object from prototype
Thinh.name = "Thinh";
Thinh.eat("cake");

function born(name) {   // constructor function
  let person = Object.create(man);  
  person.name = name;
  return person;
}

let Todd = born("Todd");  // uses constructor above
Todd.eat("ice cream");

function person(name) {  // a simplified constructor that only sets attributes
  this.name = name;
}

person.prototype.eat = function(food) {   // a method is added manually
  console.log(`${this.name} eats ${food}`); }

let Renee = new person("Renee");  // the constructor is invoked with the "new" command
Renee.eat("strawberries");

class Human {   // use the class definition to define a constructor and a method
  constructor(name) {
    this.name = name;
  }
  
  eat(food) {
    console.log(`${this.name} eats ${food}`);
  }
}

let Derek = new Human("Derek");  // instantiating the class "Human" with the "new" command
Derek.eat("apple pie");


Map methods

let planets = {
  Mercury: 1,
  Venus: 2,
  Earth: 3,
  Mars: 4,
  Jupiter: 5,
  Saturn: 6,
  Uranus: 7, 
  Neptune: 8,
  Pluto: 9 
};

console.log(`Mars is the #${planets["Mars"]} planet from the Sun.`);
console.log("Is Ceres a planet?", "Ceres" in planets);
console.log("Is Pluto a planet?", planets.hasOwnProperty("Pluto"));


let population = new Map();
population.set("China", 1.4e9);
population.set("India", 1.4e9);
population.set("United States", 3.4e8);
population.set("Mexico", 1.3e8);
population.set("Iran", 8.9e7);
population.set("France", 6.5e7);
population.set("United Kingdom", 6.8e7);
population.set("Brazil", 2.2e8);

console.log(`The population of Brazil is ${population.get("Brazil")}`);
console.log(`The population of France is greater than of the United Kingdom:`, 
               population.get("France") > population.get("United Kingdom"));
console.log(`The population of Alpha Centauri is known?`, population.has("Alpha Centauri"));



class ImprovedString {
  constructor(firstText) {
    this.text = firstText;
    this.length = firstText.length;
    this.position = 0;
  }
  
  nonEmpty(letter) {
    switch(letter) {
      case " " : return false; break;
      case "." : return false; break;
      case "," : return false; break;
      case "\n" : return false; break;
      case "\t" : return false; break;
      default: return true; break; } }  
  
  get nextWord() {
    let store = "";
    while (!(this.nonEmpty(this.text[this.position])) && (this.position < this.length)) {
		this.position++; }
    
    while ((this.nonEmpty(this.text[this.position])) && (this.position < this.length)) {
      store = store + this.text[this.position];
      this.position++; }
    
    if (store == "") return "<end>"
      else return store; }
  
  get Empty() {
    return (this.position == this.length) }
  
  restart() {
    this.position = 0;
  	return true;
  }
  
}


// with symbol.iterator implementation

class ImprovedString {
  constructor(firstText) {
    this.text = firstText;
    this.length = firstText.length;
    this.position = 0;
  }
  
  nonEmpty(letter) {
    switch(letter) {
      case " " : return false; break;
      case "." : return false; break;
      case "," : return false; break;
      case "\n" : return false; break;
      case "\t" : return false; break;
      default: return true; break; } }  
  
  nextWord(inputPOS) {
    let store = "";
    let this.position = inputPOS;
    while (!(this.nonEmpty(this.text[this.position])) && (this.position < this.length)) {
		this.position++; }
    
    while ((this.nonEmpty(this.text[this.position])) && (this.position < this.length)) {
      store = store + this.text[this.position];
      this.position++; }
    
    if (store == "") return "<end>"
      else return store; }
  
  get Empty() {
    return (this.position == this.length) }
  
  restart() {
    this.position = 0;
  	return true;
  }
  
}

class WordIterator {
  constructor(sentenceObject) {
    this.position = 0;
    this.sentence = sentenceObject;
  }
  
  next() {
    let newWord = this.sentence.nextWord(this.position);
    if (newWord == "<end>") return {done: true};
    
    let value = { word: newWord };
    this.position = this.position + newWord.length;
    return {value, done: false};
  }
}


Another try:

class ImprovedString {
  constructor(firstText) {
    this.text = firstText;
    this.length = firstText.length;
    this.position = 0;
  }
  
  nonEmpty(letter) {
    switch(letter) {
      case " " : return false; break;
      case "." : return false; break;
      case "," : return false; break;
      case "\n" : return false; break;
      case "\t" : return false; break;
      default: return true; break; } }  
  
  nextWord(inputPOS) {
    let store = "";
    this.position = inputPOS;
    while (!(this.nonEmpty(this.text[this.position])) && (this.position < this.length)) {
		this.position++; }
    
    while ((this.nonEmpty(this.text[this.position])) && (this.position < this.length)) {
      store = store + this.text[this.position];
      this.position++; }
    
    if (store == "") return "<end>"
      else return store; }
  
  get Empty() {
    return (this.position == this.length) }
  
  restart() {
    this.position = 0;
  	return true;
  }
  
}


 class WordIterator {
  
   constructor(sentenceObject) {
    this.position = 0;
    this.sentence = sentenceObject;
  }
  
  next() {
    let newWord = this.sentence.nextWord(this.position);
    if (newWord == "<end>") return {done: true};
    
    let value = { word: newWord };
    this.position = this.position + newWord.length;
    return {value, done: false};
   }
}

 ImprovedString.prototype[Symbol.iterator] = function() {
   return new WordIterator(this);
 };



String Object with Standard Iterator:

class ImprovedString {
  
  constructor(firstText) {
    this.text = firstText;
   }
  
  nonEmpty(letter) {
    switch(letter)  {
      case " " : return false; break;
      case "." : return false; break;
      case "," : return false; break;
      case "\n" : return false; break;
      case "\t" : return false; break;
      default: return true; break; } 
  }  
  
  nextWord(inputPOS) {
    let store = "";
    let position = inputPOS;
    let length = this.text.length;
    while (!(this.nonEmpty(this.text[position])) && (position < length)) {
		position++; }
    
    while ((this.nonEmpty(this.text[position])) && (position < length)) {
      store = store + this.text[position];
        position++; }
    
    if (store == "") return "<end>"
      else return store; 
  }

}
  
 class WordIterator {
  
   constructor(sentenceObject) {
    this.position = 0;
    this.sentence = sentenceObject;
  }
  
  next() {
    let newWord = this.sentence.nextWord(this.position);
    if (newWord == "<end>") return {done: true};
    
    let value = { word: newWord };
    this.position = this.position + newWord.length + 1;
    return {value, done: false};
   }
}

 ImprovedString.prototype[Symbol.iterator] = function() {
   return new WordIterator(this);
 };


function clean(sentence) {
  let text = new ImprovedString(sentence);
  let badwords = new Map();
  let clean = "";
  badwords.set("shit" , "distasteful");
  badwords.set("bitchy" , "cantankerous");
  badwords.set("fuck" , "hoot");
  
  for (let {word} of text) {
  	if (badwords.has(word)) 
      clean = clean + badwords.get(word) + " ";
    else clean = clean + word + " ";
  }
  
  return clean; }
  
console.log(clean("I don't give a fuck for this shit job or your bitchy manager."));



console.log(parse("This is a <fail attribute = 0> very strange test </fail>"));


test = "<root> some XML stuff </root>";

console.log(/<([^]*)>([^]*)<\/([^]*)>/.exec("<root> this is a test </root>"));


Partial XML Parser

function parse(string) {

  test = string;
  let state = 0;
  let tagname = "";
  let attribute = "";
  let endtag = "";
  let content = "";
  let count = 0;
  let stop = 0;
  
for(let buffer of test) { 

  if ((buffer == ">") && (state == 5))
  	{if (tagname == endtag)
            { state = 10;  // successfully matched end tag
              stop = count;}
  	   else { state = 1;
              endtag = "";
            }  // did not match end tag
  	}
  if ((buffer == ">") && (state == 3))
    state = 1;  // inside text content
  if ((buffer == ">") && (state == 2))
    state = 1;  // inside text content
  if ((buffer == ">") && (state == 4))
    state = 1;  // inside text content
  if ((buffer == "<") && (state == 0))
    state = 2;  // inside start tag
  if ((buffer == " ") && (state == 2))
    state = 3;  // inside tag attribute
  if ((buffer == "<") && (state == 1))
    state = 4;  // inside some tag
  if ((buffer == "/") && (state == 4))
  	state = 5;  // inside end tag

  
  if ((state == 2) && (buffer != "<"))
    tagname = tagname + buffer;
  else if (state == 3)
    attribute = attribute + buffer;
  else if ((state == 5) && (buffer != `/`))
    endtag = endtag + buffer;
  else if (state == 1) 
    content = content + buffer;
  
  if ((state > 3) && (state < 9)) 
     content = content + buffer; 
  ++count;
  }
  
  if (tagname == endtag)
    console.log("The XML was properly formed. State: ", state);
  	else console.log("The XML was malformed. State: ", state);
  console.log(attribute);
  let end = content.length - (endtag.length + 3);
  return content.slice(1,end);
}

console.log(parse("This is a <fail attribute = 0> very </other> strange test </fail> epilogue"));



function parse(string) {

  test = string;
  let state = 0;
  let tagname = "";
  let attribute = "";
  let endtag = "";
  let content = "";
  let count = 0;
  let stop = 0;
  
for(let buffer of test) { 

  if ((buffer == ">") && (state == 5))
  	{if (tagname == endtag)
            { state = 10;  // successfully matched end tag
              stop = count;}
  	   else { state = 1;
              endtag = "";
            }  // did not match end tag
  	}
  if ((buffer == ">") && (state == 3))
    state = 1;  // inside text content
  if ((buffer == ">") && (state == 2))
    state = 1;  // inside text content
  if ((buffer == ">") && (state == 4))
    state = 1;  // inside text content
  if ((buffer == "<") && (state == 0))
    state = 2;  // inside start tag
  if ((buffer == " ") && (state == 2))
    state = 3;  // inside tag attribute
  if ((buffer == "<") && (state == 1))
    state = 4;  // inside some tag
  if ((buffer == "/") && (state == 4))
  	state = 5;  // inside end tag

  
  if ((state == 2) && (buffer != "<"))
    tagname = tagname + buffer;
  else if (state == 3)
    attribute = attribute + buffer;
  else if ((state == 5) && (buffer != `/`))
    endtag = endtag + buffer;
  else if (state == 1) 
    content = content + buffer;
  
  if ((state > 3) && (state < 9)) 
     content = content + buffer; 
  ++count;
  }
  
  if (tagname == endtag)
    console.log("The XML was properly formed. State: ", state);
  	else console.log("The XML was malformed. State: ", state);
  console.log(attribute);
  let end = content.length - (endtag.length + 3);
  content = content.slice(1,end);
  
  let value = { tag : tagname,
                atr : attribute,
                txt : content,
                pos : stop }
  
  return value;
}

test = "This is a <fail attribute = 0> very </other> strange test </fail> epilogue";
let output = parse(test);
console.log(output);




class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

// Example usage:
const myRootNode = new Node(5);
console.log(`I created a new root node with value = ${myRootNode.data}`);
console.log(`This node has ${myRootNode.children.length} children.`);


var roads = [
  {name: "Alice's House-Bob's House", distance: 8, conductivity: 500},   
  {name: "Alice's House-Cabin", distance: 10, conductivity: 200}

];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.name.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

console.log(buildGraph(roads));


let objects = { "RoomA" : {mass: 10, temp: 25, spHeat: 1} };

console.log("Room A has the following properties: ", objects["RoomA"]);
console.log("The temperature of Room A is: ", objects["RoomA"].temp);



function Body(name) {
  this.name = "Empty";
  this.mass = 1;
  this.temp = 25;
  this.spHeat = 1;
}

let table = [];
var Body1 = new Body(1);
var Body2 = new Body(2);

table.push(Body1);
table.push(Body2);
console.log(table[0]);



var connector = [ 
  {from: `A`, to: `B`, length: 10, conductivity: 1},
  {from: `B`, to: `C`, length: 5, conductivity: 2},
  {from: `C`, to: `D`, length: 3, conductivity: 5} ];

let Body = {
  	A: {mass: 1, spHeat: 1, temp: 25},
    B: {mass: 2, spHeat: 2, temp: 30},
    C: {mass: 3, spHeat: 3, temp: 40},
    D: {mass: 4, spHeat: 4, temp: 50} };

console.log(Body);
console.log(Body["A"]);
Body["A"].mass += 1;
console.log(Body["A"]);


class Objects {
  constructor() {
    this.object = {
  	A: {mass: 1, spHeat: 1, temp: 25},
    B: {mass: 2, spHeat: 2, temp: 30},
    C: {mass: 3, spHeat: 3, temp: 40},
    D: {mass: 4, spHeat: 4, temp: 50} };
  }
  
  transferheat(name, heat) {
    this.object[name].temp += heat;
    return this.object[name].temp; }
  
}

let experiment1 = new Objects();
let experiment2 = new Objects();
console.log(experiment1.object["A"].temp);
console.log(experiment1.transferheat("A", 10));
console.log(experiment1.transferheat("A", 10));
console.log(experiment1.transferheat("A", 10));
console.log(experiment2.transferheat("A", 10));


var segment = [ 
  {from: `A`, to: `B`, length: 1, k: 1},
  {from: `B`, to: `C`, length: 1,  k: 2},
  {from: `C`, to: `D`, length: 1,  k: 5} ];

class Objects {
  constructor() {
    this.object = {
  	A: {mass: 1, spHeat: 1, temp: 25},
    B: {mass: 2, spHeat: 2, temp: 30},
    C: {mass: 3, spHeat: 3, temp: 40},
    D: {mass: 4, spHeat: 4, temp: 50} };
  }
  
  transferheat(name, heat) {
    this.object[name].temp += heat;
    return this.object[name].temp; }
  
}




var segment = [ 
  {from: `A`, to: `B`, length: 1, k: 1},
  {from: `B`, to: `C`, length: 1,  k: 2},
  {from: `C`, to: `D`, length: 1,  k: 5} ];

class Objects {
  constructor() {
    this.object = {
  	A: {mass: 1, spHeat: 1, temp: 25},
    B: {mass: 2, spHeat: 2, temp: 30},
    C: {mass: 3, spHeat: 3, temp: 40},
    D: {mass: 4, spHeat: 4, temp: 50} };
  }
  
  transferheat(name, heat) {
    this.object[name].temp += heat;
    return this.object[name].temp; }
  
}

let collection = new Objects();

function update(collection) {
  let newcollection = new Objects();
  let q = 0;
  
  for (let element of segment) {
    q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.object.transferheat(element.from, -q);
    newcollection.object.transferheat(element.to, q); 
  }
  
  return newcollection;
}




var segment = [ 
  {from: `A`, to: `B`, length: 1, k: 2},
  {from: `B`, to: `C`, length: 1,  k: 2},
  {from: `C`, to: `D`, length: 1,  k: 2} ];

class Objects {
  constructor() {
    this.object = {
  	A: {mass: 1, spHeat: 4183, temp: 323},
    B: {mass: 1, spHeat: 4183, temp: 313},
    C: {mass: 1, spHeat: 4183, temp: 303},
    D: {mass: 1, spHeat: 4183, temp: 293} };
  }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; }
  
}

let collection = new Objects();

function update(collection) {
  let newcollection = new Objects();
  let q = 0;
  
  for (let element of segment) {
    q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

console.log(collection.object["A"].temp);
console.log(collection.object["B"].temp);
console.log(collection.object["C"].temp);
console.log(collection.object["D"].temp);

collection = update(collection);
console.log(collection.object["A"].temp);
console.log(collection.object["B"].temp);
console.log(collection.object["C"].temp);
console.log(collection.object["D"].temp);
  
  


var segment = [ 
  {from: `A`, to: `B`, length: 1, k: 2},
  {from: `B`, to: `C`, length: 1,  k: 2},
  {from: `C`, to: `D`, length: 1,  k: 2} ];

class Objects {
  constructor() {
    this.object = {
  	A: {mass: 1, spHeat: 4183, temp: 333},
    B: {mass: 1, spHeat: 4183, temp: 313},
    C: {mass: 1, spHeat: 4183, temp: 303},
    D: {mass: 1, spHeat: 4183, temp: 273} };
  }
  
  transferheat(name, heat) {
    console.log("Object " + name + " starting temp: " + this.object[name].temp);
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    console.log("Object " + name + " end temp: " + this.object[name].temp);
    return this.object[name].temp; 
    }
  
}

let collection = new Objects();
let newcollection = new Objects();

function update(collection) {
  newcollection.object = collection.object;
  let q = 0;
  
  for (let element of segment) {
    q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    console.log("Transfering " + q + " heat from " + element.from + " to " + element.to);
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);
result = update(result);

  


var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

class Objects {
  constructor() {
    this.object = {
  	A: {mass: 1, spHeat: 4183, temp: 373},
    B: {mass: 1, spHeat: 2100, temp: 353},
    C: {mass: 1, spHeat: 1000, temp: 323},
    D: {mass: 1, spHeat: 3000, temp: 273} };
  }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; 
    }
  
}

let collection = new Objects();
let newcollection = new Objects();

function update(collection) {
  newcollection.object = collection.object;
  let q = 0;
  
  for (let element of segment) {
    q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}
  

  

var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

class Objects {
  constructor() {
    this.object = {
  	A: {mass: 1, spHeat: 4183, temp: 373},
    B: {mass: 1, spHeat: 2100, temp: 363},
    C: {mass: 1, spHeat: 1000, temp: 353},
    D: {mass: 1, spHeat: 3000, temp: 273} };
  }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; 
    }
  
}

let collection = new Objects();


function update(collection) {
  let newcollection = new Objects();
  newcollection.object = collection.object;
  let q = 0;

  
  for (let element of segment) {
    q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}
  

  


var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

const initialState = {
  A: { mass: 1, spHeat: 4183, temp: 373 },
  B: { mass: 1, spHeat: 2100, temp: 363 },
  C: { mass: 1, spHeat: 1000, temp: 353 },
  D: { mass: 1, spHeat: 3000, temp: 273 }
};

class Objects {
  constructor(initialState) {
    this.object = initialState; }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; }
}


let collection = new Objects(initialState);

function update(collection) {
  let newcollection = new Objects();
  newcollection.object = collection.object;
  
  for (const element of segment) {
    const q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mandelbrot Set Renderer</title>
  <style>
    canvas {
      border: 1px solid #000;
    }
  </style>
</head>
<body>
  <canvas id="mandelbrotCanvas" width="800" height="800"></canvas>

  <script>
    const canvas = document.getElementById('mandelbrotCanvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    const maxIterations = 100;

    function mandelbrot(c_real, c_imaginary) {
      let z_real = 0;
      let z_imaginary = 0;

      for (let i = 0; i < maxIterations; i++) {
        const temp_real = z_real * z_real - z_imaginary * z_imaginary + c_real;
        const temp_imaginary = 2 * z_real * z_imaginary + c_imaginary;

        z_real = temp_real;
        z_imaginary = temp_imaginary;

        if (z_real * z_real + z_imaginary * z_imaginary > 4) {
          return i / maxIterations;
        }
      }

      return 1;
    }

    function drawMandelbrot() {
      const imageData = ctx.createImageData(width, height);

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const c_real = (x - width / 2) * 4 / width;
          const c_imaginary = (y - height / 2) * 4 / height;

          const intensity = mandelbrot(c_real, c_imaginary);

          const pixelIndex = (y * width + x) * 4;
          const color = getColor(intensity);

          imageData.data[pixelIndex] = color[0];
          imageData.data[pixelIndex + 1] = color[1];
          imageData.data[pixelIndex + 2] = color[2];
          imageData.data[pixelIndex + 3] = 255; // Alpha channel
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    function getColor(intensity) {
      const r = Math.floor(255 * intensity);
      const g = Math.floor(255 * intensity);
      const b = Math.floor(255 * intensity);
      return [r, g, b];
    }

    drawMandelbrot();
  </script>
</body>
</html>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Koch Snowflake Renderer</title>
  <style>
    canvas {
      border: 1px solid #000;
    }
  </style>
</head>
<body>
  <canvas id="kochCanvas" width="600" height="600"></canvas>

  <script>
    const canvas = document.getElementById('kochCanvas');
    const ctx = canvas.getContext('2d');
    const length = 1200; // Adjust as needed

    function drawKochSnowflake(x, y, size, iterations) {
      const angle = (Math.PI * 2) / 3;
      const x2 = x + size * Math.cos(angle * 0);
      const y2 = y + size * Math.sin(angle * 0);
      const x3 = x + size * Math.cos(angle * 1);
      const y3 = y + size * Math.sin(angle * 1);
      const x4 = x + size * Math.cos(angle * 2);
      const y4 = y + size * Math.sin(angle * 2);

      drawKochLine(x, y, x2, y2, iterations);
      drawKochLine(x2, y2, x3, y3, iterations);
      drawKochLine(x3, y3, x4, y4, iterations);
      drawKochLine(x4, y4, x, y, iterations);
    }

    function drawKochLine(x1, y1, x2, y2, iterations) {
      if (iterations === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      } else {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;

        const x3 = x1 + deltaX / 3;
        const y3 = y1 + deltaY / 3;

        const x4 = x1 + deltaX / 2 + (Math.sqrt(3) / 6) * deltaY;
        const y4 = y1 + deltaY / 2 - (Math.sqrt(3) / 6) * deltaX;

        const x5 = x1 + 2 * deltaX / 3;
        const y5 = y1 + 2 * deltaY / 3;

        drawKochLine(x1, y1, x3, y3, iterations - 1);
        drawKochLine(x3, y3, x4, y4, iterations - 1);
        drawKochLine(x4, y4, x5, y5, iterations - 1);
        drawKochLine(x5, y5, x2, y2, iterations - 1);
      }
    }

    const startX = 300;
    const startY = 300;
    drawKochSnowflake(startX, startY, length, 5);
  </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Julia Set Renderer</title>
  <style>
    canvas {
      border: 1px solid #000;
    }
  </style>
</head>
<body>
  <canvas id="juliaCanvas" width="800" height="800"></canvas>

  <script>
    const canvas = document.getElementById('juliaCanvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    const minReal = -2;
    const maxReal = 2;
    const minImaginary = -2;
    const maxImaginary = 2;

    const maxIterations = 100;

    function julia(real, imaginary, c_real, c_imaginary) {
      let z_real = real;
      let z_imaginary = imaginary;

      for (let i = 0; i < maxIterations; i++) {
        const temp_real = z_real * z_real - z_imaginary * z_imaginary + c_real;
        const temp_imaginary = 2 * z_real * z_imaginary + c_imaginary;

        z_real = temp_real;
        z_imaginary = temp_imaginary;

        if (z_real * z_real + z_imaginary * z_imaginary > 4) {
          return i / maxIterations;
        }
      }

      return 1;
    }

    function drawJulia() {
      const imageData = ctx.createImageData(width, height);

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const real = (x / width) * (maxReal - minReal) + minReal;
          const imaginary = (y / height) * (maxImaginary - minImaginary) + minImaginary;

          const c_real = -0.7;
          const c_imaginary = 0.27;

          const intensity = julia(real, imaginary, c_real, c_imaginary);

          const pixelIndex = (y * width + x) * 4;
          const color = getColor(intensity);

          imageData.data[pixelIndex] = color[0];
          imageData.data[pixelIndex + 1] = color[1];
          imageData.data[pixelIndex + 2] = color[2];
          imageData.data[pixelIndex + 3] = 255; // Alpha channel
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    function getColor(intensity) {
      const r = Math.floor(255 * intensity);
      const g = Math.floor(255 * intensity);
      const b = Math.floor(255 * intensity);
      return [r, g, b];
    }

    drawJulia();
  </script>
</body>
</html>


var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

const initialState = {
  A: { mass: 1, spHeat: 4183, temp: 373 },
  B: { mass: 1, spHeat: 2100, temp: 363 },
  C: { mass: 1, spHeat: 1000, temp: 353 },
  D: { mass: 1, spHeat: 3000, temp: 273 }
};

class Objects {
  constructor(initialState) {
    this.object = JSON.parse(JSON.stringify(initialState)); }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; }
}

let collection = new Objects(initialState);

function update(collection) {
  let newcollection = new Objects(collection.object);
  
  for (const element of segment) {
    const q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}




var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

const initialState = {
  A: { mass: 1, spHeat: 4183, temp: 373 },
  B: { mass: 1, spHeat: 2100, temp: 363 },
  C: { mass: 1, spHeat: 1000, temp: 353 },
  D: { mass: 1, spHeat: 3000, temp: 273 }
};

class Objects {
  constructor(initialState) {
    this.object = JSON.parse(JSON.stringify(initialState)); }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; }
}

let collection = new Objects(initialState);

function update(collection) {
  let newcollection = new Objects(collection.object);
  
  for (const element of segment) {
    const q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}




var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

const initialState = {
  A: { mass: 1, spHeat: 4183, temp: 373 },
  B: { mass: 1, spHeat: 2100, temp: 363 },
  C: { mass: 1, spHeat: 1000, temp: 353 },
  D: { mass: 1, spHeat: 3000, temp: 273 }
};

class Objects {
  constructor(initialState) {
    this.object = JSON.parse(JSON.stringify(initialState)); }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; }
}

let collection = new Objects(initialState);

function update(collection) {
  let newcollection = new Objects(collection.object);
  
  for (const element of segment) {
    const q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}



var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

const initialState = {
  A: { mass: 1, spHeat: 4183, temp: 373 },
  B: { mass: 1, spHeat: 2100, temp: 363 },
  C: { mass: 1, spHeat: 1000, temp: 353 },
  D: { mass: 1, spHeat: 3000, temp: 273 }
};

class Objects {
  constructor(initialState) {
    this.object = JSON.parse(JSON.stringify(initialState)); }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; }
}

let collection = new Objects(initialState);

function update(collection) {
  let newcollection = new Objects(collection.object);
  
  for (const element of segment) {
    const q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}




var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

const initialState = {
  A: { mass: 1, spHeat: 4183, temp: 373 },
  B: { mass: 1, spHeat: 2100, temp: 363 },
  C: { mass: 1, spHeat: 1000, temp: 353 },
  D: { mass: 1, spHeat: 3000, temp: 273 }
};

class Objects {
  constructor(initialState) {
    this.object = JSON.parse(JSON.stringify(initialState)); }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; }
}

let collection = new Objects(initialState);

function update(collection) {
  let newcollection = new Objects(collection.object);
  
  for (const element of segment) {
    const q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}



var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

const initialState = {
  A: { mass: 1, spHeat: 4183, temp: 373 },
  B: { mass: 1, spHeat: 2100, temp: 363 },
  C: { mass: 1, spHeat: 1000, temp: 353 },
  D: { mass: 1, spHeat: 3000, temp: 273 }
};

class Objects {
  constructor(initialState) {
    this.object = JSON.parse(JSON.stringify(initialState)); }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; }
}

let collection = new Objects(initialState);

function update(collection) {
  let newcollection = new Objects(collection.object);
  
  for (const element of segment) {
    const q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}




var segment = [ 
  {from: `A`, to: `B`, length: 2, k: 100},
  {from: `B`, to: `C`, length: 3,  k: 50},
  {from: `C`, to: `D`, length: 1,  k: 200} ];

const initialState = {
  A: { mass: 1, spHeat: 4183, temp: 373 },
  B: { mass: 1, spHeat: 2100, temp: 363 },
  C: { mass: 1, spHeat: 1000, temp: 353 },
  D: { mass: 1, spHeat: 3000, temp: 273 }
};

class Objects {
  constructor(initialState) {
    this.object = JSON.parse(JSON.stringify(initialState)); }
  
  transferheat(name, heat) {
    this.object[name].temp += heat / (this.object[name].mass * this.object[name].spHeat);
    return this.object[name].temp; }
}

let collection = new Objects(initialState);

function update(collection) {
  let newcollection = new Objects(collection.object);
  
  for (const element of segment) {
    const q = element.k * (collection.object[element.from].temp - collection.object[element.to].temp) 
                  / element.length;
    newcollection.transferheat(element.from, -q);
    newcollection.transferheat(element.to, q); 
  }
  
  return newcollection;
}

let result = update(collection);

for (let i = 0; i < 500; i++) {
  result = update(result);
  if (i % 20 == 0)
    console.log(Math.round(result.object["A"].temp) + ',' +
                Math.round(result.object["B"].temp) + ',' +
                Math.round(result.object["C"].temp) + ',' +
                Math.round(result.object["D"].temp) )
}



function copyObject(source) {
  let keys = Object.keys(source);
  let copied = {};
  for (let element of keys) {
    copied[element] = source[element]; }
  return copied; }

function copyArray(source) {
  let copied = [];
  for (let element of source) {
    copied.push(element); }
  return copied; }



let initialVector = [ 1, 2, 3, 8 ];
let initialObject = { x: 1, y: 1, z: 1};
let initialValue = 9;


function deepcopy(source) {
  
  function copyObject(source) {
  let keys = Object.keys(source);
  let copied = {};
  for (let element of keys) {
    copied[element] = source[element]; }
  return copied; }
  
  function copyArray(source) {
  let copied = [];
  for (let element of source) {
    copied.push(element); }
  return copied; }
  
  if (Object.getPrototypeOf(source) == Array.prototype) {
    return copyArray(source); }
    else if (Object.getPrototypeOf(source) == Object.prototype) {
      return copyObject(source); }
        else return source; }

let result = deepcopy("hi");
console.log(result);


let initialVector = [ 1, 2, 3, {x: 1, y: 2, z: 3}];
let initialObject = { x: 1, y: 1, z: ["a", "b", "c"]};
let initialValue = 9;


function deepCopy(source) {
  
  function copyObject(source) {
  let keys = Object.keys(source);
  let copied = {};
  for (let element of keys) {
    if (Object.getPrototypeOf(source[element]) == Array.prototype ||
        Object.getPrototypeOf(source[element]) == Object.prototype )
           copied[element] = deepCopy(source[element]);
    else     
           copied[element] = source[element]; 
  	}
  return copied; }
  
  function copyArray(source) {
  let copied = [];
  for (let element of source) {
    if (Object.getPrototypeOf(element) == Array.prototype ||
        Object.getPrototypeOf(element) == Object.prototype )
          copied.push(deepCopy(element));
    else
          copied.push(element); }
  return copied; }
  
  if (Object.getPrototypeOf(source) == Array.prototype) {
    return copyArray(source); }
    else if (Object.getPrototypeOf(source) == Object.prototype) {
      return copyObject(source); }
        else return source; }

let result = deepCopy(initialVector);
console.log("Original: ");
console.log(initialVector);
console.log("Copy: ");
console.log(result);
console.log("Modified Copy: ");
result[3].x = 100;
console.log(result);
console.log("Original: ");
console.log(initialVector);



class DeepCopy {
  static copyObject(source) {
    let keys = Object.keys(source);
    let copied = {};
    for (let element of keys) {
      if (
        Object.getPrototypeOf(source[element]) == Array.prototype ||
        Object.getPrototypeOf(source[element]) == Object.prototype
      )
        copied[element] = DeepCopy.copy(source[element]);
      else copied[element] = source[element];
    }
    return copied;
  }

  static copyArray(source) {
    let copied = [];
    for (let element of source) {
      if (
        Object.getPrototypeOf(element) == Array.prototype ||
        Object.getPrototypeOf(element) == Object.prototype
      )
        copied.push(DeepCopy.copy(element));
      else copied.push(element);
    }
    return copied;
  }

  static copy(source) {
    if (Object.getPrototypeOf(source) == Array.prototype) {
      return DeepCopy.copyArray(source);
    } else if (Object.getPrototypeOf(source) == Object.prototype) {
      return DeepCopy.copyObject(source);
    } else return source;
  }
}

// Example usage:
let initialVector = [1, 2, 3, { x: 1, y: 2, z: 3 }];
let result = DeepCopy.copy(initialVector);

console.log("Original: ");
console.log(initialVector);
console.log("Copy: ");
console.log(result);
console.log("Modified Copy: ");
result[3].x = 100;
console.log(result);
console.log("Original: ");
console.log(initialVector);



  const heat_ice = 2090; // J / (kg K)
  const heat_water = 4180; // J / (kg K)
  const heat_steam = 1996; // J / (kg K)
  const heat_fusion = 333000; // J / kg
  const heat_vapor = 2260000; // J / kg
  const melt_temp = 273;
  const boil_temp = 373;

function heat_content(temp, phase) {
  
  if (temp < melt_temp) 
    return temp * heat_ice;  
  else if (temp === melt_temp)
    return (melt_temp * heat_ice) + (phase * heat_fusion);
  else if (temp < boil_temp) 
    return (melt_temp * heat_ice) + heat_fusion + ((temp - melt_temp) * heat_water);
  else if (temp === boil_temp)
    return (melt_temp * heat_ice) + heat_fusion + ((boil_temp - melt_temp) * heat_water) 
      + (phase * heat_vapor);
  else return (melt_temp * heat_ice) + heat_fusion + ((boil_temp - melt_temp) * heat_water) 
    + heat_vapor + (boil_temp - temp) * heat_steam;
}

function temperature(heat) {

  if (heat < heat_content(melt_temp,0))
    return heat / heat_ice;
  else if (heat < heat_content(melt_temp,1))
    return melt_temp;
  else if (heat < heat_content(boil_temp,0))
    return (heat - heat_content(melt_temp,1)) / heat_water + melt_temp;
  else if (heat < heat_content(boil_temp,1))
    return boil_temp;
  else return (heat - heat_content(boil_temp,1)) / heat_steam + boil_temp;
}

function heat(temp, mass, phase, added_heat) {
  const start_heat = heat_content(temp, phase) * mass;
  const new_heat = start_heat + added_heat;
  return temperature(new_heat / mass); }

let max = heat_content(373, 1) + 100000;

for (let i = 0; i < max; i +=10000) {
  console.log(i + ", " + heat(0, 1, 1, i)); }



  const heat_ice = 2090; // J / (kg K)
  const heat_water = 4180; // J / (kg K)
  const heat_steam = 1996; // J / (kg K)
  const heat_fusion = 333000; // J / kg
  const heat_vapor = 2260000; // J / kg
  const melt_temp = 273;
  const boil_temp = 373;

class water {
  constructor(start_temp, mass, start_phase) {
    this.temp = start_temp;
    this.mass = mass;
    this.phase = start_phase }

 heat_content(temp, phase) {
   
  if (temp < melt_temp) 
    return temp * heat_ice;  
  else if (temp === melt_temp)
    return (melt_temp * heat_ice) + (phase * heat_fusion);
  else if (temp < boil_temp) 
    return (melt_temp * heat_ice) + heat_fusion + ((temp - melt_temp) * heat_water);
  else if (temp === boil_temp)
    return (melt_temp * heat_ice) + heat_fusion + ((boil_temp - melt_temp) * heat_water) 
      + (phase * heat_vapor);
  else return (melt_temp * heat_ice) + heat_fusion + ((boil_temp - melt_temp) * heat_water) 
    + heat_vapor + (boil_temp - temp) * heat_steam;
}

 temperature(heat) {

  if (heat < this.heat_content(melt_temp,0))
    return heat / heat_ice;
  else if (heat < this.heat_content(melt_temp,1))
    return melt_temp;
  else if (heat < this.heat_content(boil_temp,0))
    return (heat - this.heat_content(melt_temp,1)) / heat_water + melt_temp;
  else if (heat < this.heat_content(boil_temp,1))
    return boil_temp;
  else return (heat - this.heat_content(boil_temp,1)) / heat_steam + boil_temp;
}

heat(added_heat) {
  const start_heat = this.heat_content(this.temp, this.phase) * this.mass;
  const new_heat = start_heat + added_heat;
  return this.temperature(new_heat / this.mass); }
  
}

let block = new water(0, 1, 1);
const max = 3680000;

for (let i = 0; i < max; i +=10000) {
  console.log(i + ", " + block.heat(i)); }
 


class OpenTag {
  constructor() {
    this.tag = "";
    this.success = false;
    this.value = false;}
  
  parse(char) {
    if (char === "<") this.value = true;
    if ((this.value === true) && (char === ">"))
      this.success = true;
    
    if (this.success) return {tag: this.tag.slice(1), attribute: this.attribute.slice(1)};
    else if (this.value)
      this.tag += char;
    
    return false;
  }

  reset() {
      this.tag = "";
      this.success = false;
      this.value = false;}
}  
  

class endTag {
  constructor() {
    this.end = false;
    this.tag = "";
  }
  
  parse(tag) {
    if (tag[0] === "/") return tag.slice(1);
    else return false; }
}


class formatTag {
  constructor() {
    this.format = false;
    this.tag = "";
  }
  
  parse(tag) {
    if (tag[0] === "?") return tag.slice(1);
    else return false; }
}

class hasAttribute {
  constructor() {
    this.attribute = false; }
  
  parse(input) {
    let result = input.split(" ", 2);
    if (result.length === 2) return result;
    else return false; } 
}



class Parser {
  constructor() {
    this.tag = "";
    this.success = false;
    this.read = false;
    this.type = "begin"; }
  
  parse(char) {
    
    if (char === "<") this.read = true;
    if ((this.read) && (char === ">"))
      this.success = true;
    
    if (this.success) {
      if (this.tag[1] === "/") {
        this.type = "end";
        this.tag = this.tag.slice(1);
      }
      
      if (this.tag[1] === "?") {
        this.type = "format";
        this.tag = this.tag.slice(1);
      }  
      
      let coreTag = this.tag.split(" ", 2);
      
      return {tag: coreTag[0].slice(1), 
              attribute: this.tag.slice(coreTag[0].length + 1), type: this.type};
    }
    else if (this.read)
      this.tag += char;
    
    return false;
  }

  reset() {
      this.tag = "";
      this.success = false;
      this.read = false;
  	  this.type = "begin"; }
}  
  
let XMLParse = new Parser;
let result;
let testString = "<?xml version='1.0' encoding='UTF-8'?>";

for (let char of testString) {
  if (result = XMLParse.parse(char)) {
    console.log(result);
    XMLParse.reset();
  }
}


class Parser {
  constructor() {
    this.tag = "";
    this.success = false;
    this.read = false;
    this.type = "begin";
  	this.text = ""; }
  
  parse(char) {
    
    if (char === "<") this.read = true;
    if ((this.read) && (char === ">"))
      this.success = true;
    
    if (this.success) {
      if (this.tag[1] === "/") {
        this.type = "end";
        this.tag = this.tag.slice(1);
      }
      
      if (this.tag[1] === "?") {
        this.type = "format";
        this.tag = this.tag.slice(1);
      }  
      
      let coreTag = this.tag.split(" ", 2);
      
      return {tag: coreTag[0].slice(1), 
              attribute: this.tag.slice(coreTag[0].length + 1), type: this.type,
              text: this.text};
    }
    else if (this.read)
      this.tag += char;
    else this.text += char;
    
    return false;
  }

  reset() {
      this.tag = "";
      this.success = false;
      this.read = false;
  	  this.type = "begin"; 
  	  this.text = "";}
}  
  
let XMLParse = new Parser;
let result;
let testString = "<test start = true>this is a test message </test>";

for (let char of testString) {
  if (result = XMLParse.parse(char)) {
    console.log(result);
    XMLParse.reset();
  }
}

let tag = "code";
let test = "/home/documents/code";
let pop = test.slice(test.length - tag.length - 1);
test = test.slice(0, test.length - tag.length - 1);
console.log(pop);
console.log(test);


class StreamParser {
  constructor() {
    this.tag = "";
    this.success = false;
    this.read = false;
    this.type = "begin";
      this.text = ""; }
  
  parse(char) {
    
    if (char === "<") this.read = true;
    if ((this.read) && (char === ">"))
      this.success = true;
    
    if (this.success) {
      if (this.tag[1] === "/") {
        this.type = "end";
        this.tag = this.tag.slice(1);
      }
      
      if (this.tag[1] === "?") {
        this.type = "format";
        this.tag = this.tag.slice(1);
      }  
      
      let coreTag = this.tag.split(" ", 2);
      
      return {tag: coreTag[0].slice(1), 
              attribute: this.tag.slice(coreTag[0].length + 1), type: this.type,
              text: this.text};
    }
    else if (this.read)
      this.tag += char;
    else this.text += char;
    
    return false;
  }

  reset() {
      this.tag = "";
      this.success = false;
      this.read = false;
        this.type = "begin"; 
        this.text = "";}
}  
  
let XMLParse = new StreamParser;
let result;
let path = "/document";
let docMap = new Map();
const testString = "<?xml version='1.0' encoding='UTF-8'?> <test start = true>this is a test message </test>";

for (let char of testString) {
  if (result = XMLParse.parse(char)) {
    if (result.type === "format")
      docMap.set(result.tag, result.attribute);
    if (result.type === "begin") {
      path = path + "/" + result.tag;
     if (result.attribute != "") docMap.set(path + "/attribute", result.attribute);}
    if (result.type === "end") {
      docMap.set(path, result.text);
      path = path.slice(0, path.length - result.tag.length - 1); }
    XMLParse.reset();

  }
}

function logMapElements(value, key, map) {
  console.log(`${key}:   ${value}`);
}

docMap.forEach(logMapElements);


let a = 0, b = 1, f = [];
for (let i = 0; i < 10; ++i) {
  f.push(a);
  [a, b] = [b, a + b];
}

console.log(f);


function root(f, a, b) {
  let average;
  if ((f(a) * f(b)) > 0) throw new Error('f(a) and f(b) must have opposite signs');
  
  while (Math.abs(f(a) - f(b)) > 0.00000000000001) {
    average = (a + b) / 2;
    if (f(a) * f(average) > 0) 
         a = average;
    else b = average; 
  }
  return a; 
}

try {
console.log(root(x => x * x - 2, 0, 10));
} catch (e) {
  console.log(e); }


class StreamParser {
  constructor() {
    this.tag = "";
    this.success = false;
    this.read = false;
    this.type = "begin";
      this.text = ""; }
  
  parse(char) {
    
    if (char === "<") this.read = true;
    if ((this.read) && (char === ">"))
      this.success = true;
    
    if (this.success) {
      if (this.tag[1] === "/") {
        this.type = "end";
        this.tag = this.tag.slice(1);
      }
      
      if (this.tag[1] === "?") {
        this.type = "format";
        this.tag = this.tag.slice(1);
      }  
      
      let coreTag = this.tag.split(" ", 2);
      
      return {tag: coreTag[0].slice(1), 
              attribute: this.tag.slice(coreTag[0].length + 1), type: this.type,
              text: this.text};
    }
    else if (this.read)
      this.tag += char;
    else this.text += char;
    
    return false;
  }

  reset() {
      this.tag = "";
      this.success = false;
      this.read = false;
        this.type = "begin"; 
        this.text = "";}
}  
  
let XMLParse = new StreamParser;
let result;
let path = "/document";
let docMap = new Map();
const testString = "<?xml version='1.0' encoding='UTF-8'?> <test start = true>this is a test message </test>";

for (let char of testString) {
  if (result = XMLParse.parse(char)) {
    if (result.type === "format")
      docMap.set(result.tag, result.attribute);
    if (result.type === "begin") {
      path = path + "/" + result.tag;
    if (result.attribute != "") docMap.set(path + "/attribute", result.attribute);}
    if ((result.type === "end") && (result.tag != path.slice(path.length - result.tag.length)))
      throw new Error("tag mismatch detected");
    if ((result.type === "end") && (result.tag === path.slice(path.length - result.tag.length)))
        {  docMap.set(path, result.text);
           path = path.slice(0, path.length - result.tag.length - 1); 
        }
 
    XMLParse.reset();

  }
}

function logMapElements(value, key, map) {
  console.log(`${key}:   ${value}`);
}

docMap.forEach(logMapElements);


