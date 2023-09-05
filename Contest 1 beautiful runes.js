// My contest entry
function runes_contest() {
    const pi = math_PI / 4;
    const random_paint = (useless, rune) => random_color(rune);
    function leave(r_l, rune){
        return translate(4 * r_l / 5, -1 / 4, rotate(-1 * r_l * pi, scale(0.65, rune)));
    }
    const paint = (num, rune) => color(rune, 0.36, 0.48 - num * 0.036, 0.26 - num * 0.016);
    function make_tree(color_number, rune){
        return overlay_frac(2 / 3,
                            overlay(leave(1, rune), leave(-1, rune)),
                            translate(0, 1 / 2, scale(1 / 2, paint(color_number, square))));
    }
    function fractal_tree(n){
        return n === 1
        ? make_tree(1, green(square))
        : make_tree(n-1, fractal_tree(n - 1));
    }
    const background = overlay(translate(0.7, -0.7, scale(1 / 8, red(circle))),
                               stack_frac(3 / 5, blue(square), green(square)));
    return overlay_frac(2 / 8, scale(3 / 7, fractal_tree(10)),background);
}

// Keep this show function call
show(runes_contest());