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
