<template>
  <div>
      <ul class="list-group">
        <li class="list-group-item"
            v-for="(todo, index) in todos"
            :class="{'completed':todo.completed}">
          <router-link :to="{ name: 'todo', params: { id: todo.id }}">{{ todo.title }}</router-link>
          <button
            class="btn btn-xs pull-right margin-right-10"
            @click="toggleCompletion(todo)"
            :class="[todo.completed? 'btn-danger':'btn-success']"
          >{{ todo.completed? 'undo':'completed' }}</button>
          <button
            class="btn btn-warning btn-xs pull-right"
            @click="deleteTodo(index, todo)"
          >Delete</button>
        </li>
      </ul>
      <todo-form></todo-form>
  </div>
</template>

<script>
  import TodoForm from './TodoForm'
    export default {
        name: "todos",
        computed:{
          todos(){
            return this.$store.state.todos
          },
        },
        methods:{
          deleteTodo(index, todo){
            this.axios.delete('http://127.0.0.1:8000/api/todo/' + todo.id + '/delete').then(response => {
              console.log(response.data)
              this.todos.splice(index,1)
            })
          },
          toggleCompletion(todo){
            this.axios.patch('http://127.0.0.1:8000/api/todo/' + todo.id + '/completed').then(response => {
              console.log(response.data)
              todo.completed = !todo.completed
            })
          }
        },
        components:{
          TodoForm
        }
    }
</script>

<style scoped>
  .completed{
    color: #5cb85c;
    text-decoration: line-through;
  }

  .margin-right-10{
    margin-right: 10px;
  }
</style>
