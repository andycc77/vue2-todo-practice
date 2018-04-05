<template>
    <form @submit.prevent="addTodo(newTodo)">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Add a new todo" v-model="newTodo.title">
      </div>
      <div class="form-group">
        <button class="btn btn-success" type="submit">Add Todo</button>
      </div>
    </form>
</template>

<script>
    export default {
        name: "todo-form",
        props: ['todos'],
        data(){
          return {
            newTodo:{id:null,title:'', completed:false}
          }
        },
        methods:{
          addTodo(newTodo){
            this.axios.post('http://127.0.0.1:8000/api/todo/create',{title:this.newTodo.title}).then(response =>{
              console.log(response.data)
              this.todos.push(response.data);
            })
            this.newTodo = {id:null,title:'', completed:false}
          }
        }
    }
</script>

<style scoped>

</style>
