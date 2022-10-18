function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}
function reverse_array(A) {
    const len = array_length(A);
    const half_len = math_floor(len / 2);
     let i = 0;
    while (i < half_len) {
        const j = len - 1 - i;
        swap(A, i, j);
        i = i + 1;
    }
}

function rotate_matrix(M) {
    const n = array_length(M); // M is assumed n x n.
    reverse_array(M);
    function swap(r1, c1, r2, c2) {
        const temp = M[r1][c1];
         M[r1][c1] = M[r2][c2];
         M[r2][c2] = temp;
    }
    for(let i = 0; i < n; i = i + 1) {
        for(let j = i + 1; j < n; j = j + 1) {
            swap(i, j, j, i);
        }
    }
    
}
const M = [[ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, 10, 11, 12],
[13, 14, 15, 16]];
rotate_matrix(M);
M;
//a[i][j] = a[j][n-i - 1]

/*1 2 3        7 4 1    7 8 9 
4 5 6        8 5 2.     4 5 6
7 8 9        9 6 3      1 2 3 

row(i) -> col(n - 1 - i)
a[i][j] -> a[j][n - 1 - i]*/
//a[n - 1 - j][i]        -> a[i][j]
//a[i][j]
// n - 1 - i = j
//swap(0, 1, 1, 0), swap(0, 2, 2, 0) swap(2, 1)
