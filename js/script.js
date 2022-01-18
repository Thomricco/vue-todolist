new Vue({
    el: "#app",
    data: {
        
        todoList: [
            {
                text: 'Fare i compiti',
                done: false,
            },
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Fare il bucato',
                done: true,
            },
            
        ],
        textTemoporaneo: '',
        
    },


    methods: {
        AddAList: function() {
            this.todoList.push({text: this.textTemoporaneo, done: false})
            this.textTemoporaneo = ''
        },

        removeAList: function(index) {
            this.todoList.splice(index,1)
        },

        doneUndone: function (index) {
            this.todoList[index].done = ! this.todoList[index].done
        }
        
    }
})