function my_map(f, xs){
    return accumulate((x, y) => pair(f(x), y), null, xs);
}
const lst = list(1,2,3, 4, 4, 5, 6);
// my_map(x => x + 1, lst);
// Q2 is hard
function remove_duplicates(lst){
    return is_null(lst)
           ? null
           : pair(head(lst), remove_duplicates(filter(x => !equal(head(lst), x), tail(lst))));
}
// remove_duplicates(lst);