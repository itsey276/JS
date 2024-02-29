function significant(num, digits) {
  let non_sig = 0, start = 0, decimal = 0, count = 0, zeros = 0;
  let numstring = num.toString();
  let char = '', whitespace = "0.";
  
  for (let i = 0; i < numstring.length; ++i) {
    char = numstring[i];
    if (whitespace.includes(char) && start == 0) 
      ++non_sig;
    else start = non_sig;
    if (char == '.')
      decimal = 1;
    else ++count;
    if (count > digits && decimal == 0)
      ++zeros;}
    
    if (digits == 0)
      return 0;
    if (zeros > 0)
      return parseFloat(numstring.slice(0, digits)) * 10**zeros;
    if (num > 1)
      return parseFloat(numstring.slice(0, digits + decimal));
    else
      return parseFloat(numstring.slice(0, start + digits));
}

for (let i = 0; i < 10; ++i) 
  console.log(i + ": " + significant(12.0345, i));

