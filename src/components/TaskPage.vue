<template>
    <div class="container">
        <task-box 
            :tasks="tasks"
        >
        </task-box>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import TaskBox from './TaskBox.vue'
  
  export default {
    name: 'TaskPage',
    components: {
        TaskBox : TaskBox
    },
    data() {
      return {
        tasks: [],
        monthly : [],
        weekly : [],
        daily : []
      }
    },
    created() {
        axios.get('https://jobs.tipiteq.com/dummy_data.json')
          .then(response => {
            this.tasks = Array.prototype.slice.call(Object.values(response.data));
            this.tasks = this.tasks[0]
            let getLength = this.tasks.length
            for(let i = 0; i < getLength; i++){
                if(this.tasks[i].occurrence === "daily"){
                    this.daily.push(this.tasks[i])
                }
                if(this.tasks[i].occurrence === "weekly"){
                    this.weekly.push(this.tasks[i])
                }
                if(this.tasks[i].occurrence === "monthly"){
                    this.monthly.push(this.tasks[i])
                }
            }
          }).catch(error => {
            console.error('Error fetching tasks:', error)
          })
    }
  }
</script>
  
<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 100px;
    }
    .TaskBox {
        display: flex;
        flex-direction: column;
        width: 80%;
        border: 1px solid black;
    }
    .titles-task {
        padding: 5px;
        display: flex;
        font-size: 20px;
        justify-content: center;
        align-items: center;
    }
    .titles-desc{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .description {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        margin-left: 20%;
        padding: 5px;
    }
    .events {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin-left: 10%;
        border: 1px solid black;
    }
    .titles-event {
        font-size: 15px;
        font-weight: bold;
    }
    .event {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .titles-tenant{
        font-size: 15px;
        font-weight: bold;
    }
    .tenants {
        padding: 10px;
        border: 1px solid black;
    }
    .altTitles {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }
    .occurrence{
        padding: 10px;
        font-weight: bold;

    }
    .priority {
        padding: 10px;
        font-weight: bold;

    }
    .titles-resp {
        padding: 10px;
        font-weight: bold;
    }
    .responsibleUsers {
        padding: 10px;
        font-weight: bold;

    }
    .titles-tenant {
        font-size: 15px;
        padding: 10px;
        font-weight: bold;
    }
    .tenantArr {
        padding: 10px;
        font-weight: bold;
    }
    .name {
        font-size: 15px;
        font-weight: bold;
    }
</style>
  