function swap(xs) {
    const temp = head(xs);
    set_head(xs, head(tail(xs)));
    set_head(tail(xs), temp);
}
function bubble(xs) {
     if(is_null(xs) || is_null(tail(xs))) {
        return undefined;
    }
    else {
        if(head(xs) > head(tail(xs))) {
            swap(xs);
            bubble(tail(xs));
        }
        else {
            bubble(tail(xs));
        }
    }
}
function bubblesort_list(xs) {
    // Your solution here.
    let count = 0;
    while(count < length(xs)) {
        bubble(xs);
        count = count + 1;
    }
}

const LL = list(3, 6, 2, -90, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]

//row(i) -> col(n - i)

//a[i][j] = a[j][n-i]