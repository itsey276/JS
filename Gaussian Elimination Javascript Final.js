 function swap(a, b, matrix) {
    for (let j = 0; j < matrix[0].length; ++j)
     [matrix[a][j], matrix[b][j]] = [matrix[b][j], matrix[a][j]];
    return matrix;
 }

 function max_pivot(k, l, matrix) {
    let max_value = matrix[k][l];
    let max_row = k;
    for (let i = k + 1; i < matrix.length; ++i) {
        if (matrix[i][l] > max_value) {
            max_value = matrix[i][l];
            max_row = i; }
    }
    return max_row; 
 }

function reduce_row(k, l, matrix) {
	let factor = 0;
  	for (let i = k + 1; i < matrix.length; ++i) {
        factor = matrix[i][l] / matrix[k][l];
        for (let j = l; j < matrix[0].length; ++j) 
            matrix[i][j] = matrix[i][j] - factor * matrix[k][j]; 
    }
    return matrix; 
 }

function elimination(matrix) {
    let k = 0, l = 0, maxRow = 0, swaps = 0;
    while (k < matrix.length && l < matrix[0].length) {
        maxRow = max_pivot(k, l, matrix);
        if (maxRow > k) {
            matrix = swap(k, maxRow, matrix);
            swaps += 1;
        }
        if (matrix[k][l] != 0) {
            matrix = reduce_row(k, l, matrix);
            k += 1;
            l += 1; }
        else
            l += 1;
	}
  return [matrix, swaps];
}

function round_zero(matrix, tolerance) {
    for (let i = 0; i < matrix.length; ++i)
        for (let j = 0; j < matrix[0].length; ++j)
            if (Math.abs(matrix[i][j]) < tolerance)
                matrix[i][j] = 0;
    return matrix;
}

function print_matrix(matrix) {
    for (let i = 0; i < matrix.length; ++i)
        console.log(matrix[i]);
}

let testmatrix = [[1, 2, 3],[4, 5, 6], [7, 8, 9]];
let swaps = 0;
print_matrix(testmatrix);
console.log("=========");
[testmatrix, swaps] = elimination(testmatrix);
print_matrix(round_zero(testmatrix, 0.000001));
console.log("swaps " + swaps);


