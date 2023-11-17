function dsplitlist(xs) {
    function tail_n_times(ys, n) {
        return is_null(ys) || n <= 0
               ? ys
            : tail_n_times(tail(ys), n - 1);
    }
    const len = length(xs);
    const mid = math_floor((len - 1) / 2);
    const first_list_last_pair = tail_n_times(xs, mid);
    const second_list = tail(first_list_last_pair);
    set_tail(first_list_last_pair, null);
    return pair(xs, second_list);
}


function d_merge(xs, ys) {
    if (is_null(xs)) { 
        return ys; 
        
    } 
    else if (is_null(ys)) { 
        return xs; 
    } 
    else if (head(xs) <= head(ys)) { 
        set_tail(xs, d_merge(tail(xs), ys)); 
        return xs; 
        
    } 
    else { 
        set_tail(ys, d_merge(xs, tail(ys))); 
        return ys; 
    } 
}

function d_merge_sort(lst){
    if(is_null(lst)){
        return null;
    }
    else if(is_null(tail(lst))){
        return lst;
    }
    else{
        let p = dsplitlist(lst);
        let xs = d_merge_sort(head(p));
        let ys = d_merge_sort(tail(p));
        return d_merge(xs, ys);
    }
}