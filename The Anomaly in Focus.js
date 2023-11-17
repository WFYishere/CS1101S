function red_rectangle_stream(s){
    function helper(image){
        let r1 = HEIGHT - 1;//min
        let c1 = WIDTH - 1;//min
        let flag = false;
        let r2 = 0;//max
        let c2 = 0;//max
        for(let i = 0; i < HEIGHT; i = i + 1){
            for(let j = 0; j < WIDTH ;j = j + 1){
                if(image[i][j][1] === 0 && image[i][j][2] === 0 && image[i][j][0] > 0){
                    r2 = i;
                    c2 = c2 < j ? j : c2;
                    if(!flag){
                        r1 = i;
                        c1 = j;
                        flag = true;
                    }
                }
            }
        }
        return pair(pair(r1,c1), pair(r2, c2));
    }
    return is_null(s) ? null : pair(helper(head(s)), () => red_rectangle_stream(stream_tail(s)));
}
function stream_combine(f, s1, s2){
    return pair(f(head(s1), head(s2)), 
                () => stream_combine(f, stream_tail(s1), stream_tail(s2)));
}
