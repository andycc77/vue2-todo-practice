<template>
  <div id="app">
    <router-view :todos="todos"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  data(){
    return {
      message:'Hello World',
      todos:[]
    }
  },
  mounted(){
    this.axios.get('http://127.0.0.1:8000/api/todos').then(response => {
      this.todos = response.data
      // console.log(response.data)
    });
  },
  computed:{
    todoCount(){
      return this.todos.length;
    }
  },
  components: {
    HelloWorld
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
