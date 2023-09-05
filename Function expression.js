const zero_repeater = f => x => x;
const one_repeater = f => x => f(zero_repeater, () => zero_repeater(f)(x));
const two_repeater = f => x => f(one_repeater, () => one_repeater(f)(x));
const three_repeater = f => x => f(two_repeater, () => two_repeater(f)(x));

const to_int = repeater => repeater((iter_count, x) => x() + 1)(0);
// display(to_int(three_repeater)); // displays 3

// const warn = three_repeater((iter_count, x) => display(x()));
// warn("ALERT"); // displays "ALERT" 3 times

const increment_repeater = repeater => f => x => f(repeater, ()=> repeater(f)(x));

const repeater_itself = repeater => f => x => f(repeater, () => repeater);

// const decrement_repeater = repeater => f => x => f(repeater, ()=> repeater()());

to_int(repeater_itself(three_repeater));


 