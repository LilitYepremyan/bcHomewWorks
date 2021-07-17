let max = localStorage.getItem('max')
  ? Number(localStorage.getItem('max'))
  : 50;
let min = localStorage.getItem('min') 
? Number(localStorage.getItem('min'))
 : 0;
let step = localStorage.getItem('step')
  ? Number(localStorage.getItem('step'))
  : 1;
let count = localStorage.getItem('count')
  ? Number(localStorage.getItem('count'))
  : 0;

let initialState = {
  count,
  step,
  min,
  max,
};

export default initialState;
