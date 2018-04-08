// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Todos from './components/Todos'
import Todo from './components/Todo'
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

const routes = [
  {path:'/',component:Todos},
  {path:'/todo/:id',component:Todo,name:'todo'}
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const store = new Vuex.Store({
  state: {
    todos: [],
    newTodo:{id:null,title:'', completed:false}
  },
  mutations: {
    get_todos_list (state, todos){
      state.todos = todos
    },
    complete_todo(state, todo){
      todo.completed = !todo.completed
    },
    delete_todo(state, index){
      state.todos.splice(index, 1)
    },
    add_todo(state, todo){
      state.todos.push(todo)
    }
  },
  actions : {
    getTodos(store){
      Vue.axios.get('http://127.0.0.1:8000/api/todos').then(response => {
        store.commit('get_todos_list', response.data)
      });
    },
    completeTodo(store, todo){
      Vue.axios.patch('http://127.0.0.1:8000/api/todo/' + todo.id + '/completed').then(response =>{
        store.commit('complete_todo', todo)
      })
    },
    removeTodo(store, payload){
      Vue.axios.delete('http://127.0.0.1:8000/api/todo/' + payload.todo.id + '/delete').then(response =>{
        store.commit('delete_todo', payload.index)
      })
    },
    saveTodo(store, todo){
      Vue.axios.post('http://127.0.0.1:8000/api/todo/create',{title:todo.title}).then(response =>{
        store.commit('add_todo', response.data)
      })
      store.state.newTodo = {id:null,title:'', completed:false}
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App,Todos,Todo },
  template: '<App/>',
  router
})
