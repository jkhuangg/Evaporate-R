// JavaScript implementation of gbm_pojo_test from H2O website
const {gbm_pojo_test} = require("./gbm_pojo_test");

// input & prediction array
data = [1987.0, 10.0, 14.0, 3.0, 730.0, NaN, 5.0, NaN, NaN, 106.0, 11.0]
pred = new Array(data.length).fill(0.0);

// try score0 function in JavaSript
let m = new gbm_pojo_test();
p = m.score0(data, pred);
console.log(p);
