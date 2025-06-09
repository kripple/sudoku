let emptyCell = "_ ";
let row = emptyCell.repeat(9);

let app = new Vue({
  el: '#app',
  data: {
    row: row
  }
})


// 1. Solve an empty row
// 2. Solve an empty column
// 3. Solve an empty board 