<template>
      <ul class="list-group" v-if="todos.length > 0">
        <li class="list-group-item"
            v-for="(todo, index) in todos"
            :class="{'completed':todo.completed}">
          {{ todo.title }}
          <button
            class="btn btn-xs pull-right margin-right-10"
            @click="toggleCompletion(todo)"
            :class="[todo.completed? 'btn-danger':'btn-success']"
          >{{ todo.completed? 'undo':'completed' }}</button>
          <button
            class="btn btn-warning btn-xs pull-right"
            @click="deleteTodo(index)"
          >Delete</button>
        </li>
      </ul>
</template>

<script>
    export default {
        name: "todos",
        props: ['todos'],
        methods:{
          deleteTodo(index){
            this.todos.splice(index,1)
          },
          toggleCompletion(todo){
            todo.completed = !todo.completed
          }
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
