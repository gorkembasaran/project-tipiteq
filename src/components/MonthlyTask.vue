<template>
    <div class="container">
        <task-box 
            :tasks="monthly"
        >
        </task-box>
    </div>
  </template>


<script>

import axios from 'axios'
import TaskBox from './TaskBox.vue'
  
  export default {
    name: 'MonthlyTask',
    components : {
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
