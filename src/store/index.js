import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/*В даному прикладі немає потреби використовувати стор, так як всі компоненти взаємодіють з дочірніми за допомогою props, emit*/ 

const state = {
   
}
const getters = {

}
const actions = {
   
}
const mutations = {
 
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;