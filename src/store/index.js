<<<<<<< HEAD
export const state = () => ({
question:'',
  list: []
})

export const mutations = {
  add: function(state, q) {
    state.question=q;
    state.list.push(q);
  }
}
=======
//
// export  const state =()=>({
//   //data
//
//   counter:0;
//
// })
//
// export const mutations ={
// increament(state){
//
//   state.counter++;
// }
//
// }
export const state = () => ({
  counter: 0
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  }
};
>>>>>>> MyProject2021
