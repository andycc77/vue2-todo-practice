<template>
  <div id="app">
    <todos :todos="todos"></todos>
    <todo-form :todos="todos"></todo-form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
export default {
  name: 'App',
  data(){
    return {
      message:'Hello World',
      todos:[
        {id:1, title:'Learn Vuejs', completed:false}
      ]
    }
  },
  computed:{
    todoCount(){
      return this.todos.length;
    }
  },
  components: {
    HelloWorld,
    Todos,
    TodoForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
