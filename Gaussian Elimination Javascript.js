let Matrix = {
  			m: 3, // rows
  			n: 3, // columns
            s: 1, // parity
  			array:	[   7, 8, 9, 
                   		1, 2, 3,
                    	4, 5, 6  ]};

function print_matrix(Matrix)
{	let n = Matrix.n;
 	let m = Matrix.m;
  	let row_string = "";	
  	for(let i = 0; i < m; i++) {
      console.log(row_string, "\n");
      row_string = "";
        for(let j = 0; j < n; j++) {
          row_string = row_string + String(Matrix.array[index(i,j,n)]) + " "; }}
  	console.log(row_string, "\n");}

function index(i, j, n)
	{ return i*n + j; }

  function row_mult (Matrix, factor, row) {
  	let tempArray = [];
  	let m = Matrix.m;
  	let n = Matrix.n;
  	for(let i = 0; i < m; i++) 
      for(let j = 0; j < n; j++)
      {
        if (i == row) 
          tempArray.push(factor * Matrix.array[index(i, j, n)]);
        else tempArray.push(Matrix.array[index(i, j, n)]);
      }
  	Matrix.array = tempArray;
  	return Matrix;}

  function round_zeros(Matrix) {
  let v = Matrix.array.length;
   for (let i = 0; i < v; ++i) 
     {  if (Math.abs(Matrix.array[i]) < 1e-10) 
       		Matrix.array[i] = 0; }
  return Matrix; }


function echelon(Matrix) {
  let m = Matrix.m;
  let n = Matrix.n;
  Matrix = round_zeros(Matrix);
  for (let i = 0; i < m; ++i) {
      let denom = Matrix.array[index(i, i, n)];
      if (denom != 0) Matrix = row_mult(Matrix, 1/Matrix.array[index(i, i, n)], i); }
          
  Matrix = round_zeros(Matrix);
  return Matrix; }


function Elimination(Matrix) {
  let m = Matrix.m;
  let n = Matrix.n;
  let k = 0, l = 0, s = 1;
  
  function max_row(k, l) {
	let rows = Matrix.m;
	let max = Matrix.array[index(k,l,n)];
	let max_row = k;

	for (let i = k; i < rows; ++i) {
	if (Math.abs(Matrix.array[index(i,l,n)]) > Math.abs(max))
 		{ max =  Matrix.array[index(i,l,n)];
   		max_row = i;}}
	return max_row;}
  
  function swap_rows(a, b) {
  	let tempArray = [];
  	
  if (a === b) return 1;
  
  for(let i = 0; i < m; i++) 
      for(let j = 0; j < n; j++)
      {
        if (i == a) 
          tempArray.push(Matrix.array[index(b, j, n)]);
        else if (i == b) 
          tempArray.push(Matrix.array[index(a, j, n)]);
        else tempArray.push(Matrix.array[index(i, j, n)]);
      }
  	Matrix.array = tempArray;
  	return -1;} 

  function row_mult_add (factor, from_row, to_row) {
  	let tempArray = [];
  	for(let i = 0; i < m; i++) 
      for(let j = 0; j < n; j++)
      {
        if (i == to_row) 
          tempArray.push(factor * Matrix.array[index(from_row, j, n)] + 
                         Matrix.array[index(i, j, n)]);
        else tempArray.push(Matrix.array[index(i, j, n)]);
      }
  	Matrix.array = tempArray;
  	return Matrix;}
  
  function reduce_columns(k, l) { let factor = 0;
  	for (let i = k + 1; i < Matrix.m; ++i) 
    { factor = - Matrix.array[index(i,l,n)] /
                     Matrix.array[index(k,l,n)];
      if (factor != 0) Matrix = row_mult_add(factor, k, i); }
    return Matrix; }
  
  function order_rows(k, l) {
	let r_max = max_row(k, l);
	let w = swap_rows(k, r_max);
  	return w; }
  
  while ((k < (m - 1)) && (l < (n - 1))) {        // while the indices (k,l) are not on the last (row, col) of Matrix:
    s = s * order_rows(k, l);                    // order rows so that the largest abs value is on top
    if (Matrix.array[index(k, l, n)] == 0) ++l;   // if the largest value abs value is zero, then increment l
    else {  Matrix = reduce_columns(k, l);        // otherwise, reduce the row entries below the index (k,l) through elimination
            ++k; ++l; } }
    
  Matrix = round_zeros(Matrix);
  Matrix.s = s;
  return Matrix; }

  
print_matrix(Matrix);
Elimination(Matrix);
print_matrix(Matrix);
echelon(Matrix);
print_matrix(Matrix);
console.log("Swap parity is: ", Matrix.s);
