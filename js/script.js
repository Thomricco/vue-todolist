new Vue({
    el: "#app",
    data: {
        isActive: true,
        currentIndex: 0,
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
            this.todoList.push({text: this.textTemoporaneo, done: ''})
            this.textTemoporaneo = ''
        },

        removeAList: function(index) {
            this.todoList.splice(index,1)
        },
        
    }
})