const todoList = Vue.createApp({
    data(){
        return {
            editing: false,
            newTask: '',
            taskPriority: '',
            tasks: JSON.parse(localStorage.getItem('tasks')) || []
        }
    },
    computed: {
        reversedTasks(){
            return [...this.tasks].reverse()
        }
    },
    methods: {
        saveTask(){

            const task = {
                id: this.tasks.length + 1,
                label: this.newTask,
                done: false,
                taskPriority: this.taskPriority
            }

            this.tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(this.tasks))

            this.newTask = ''
        },
        toggleDone(task){
            task.done = !task.done
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        clearTasks(){
            this.tasks = []
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        sortTasksByPriority(){
            this.tasks.sort(function(a, b){return a.taskPriority - b.taskPriority})
        }
    }
}).mount('#app')