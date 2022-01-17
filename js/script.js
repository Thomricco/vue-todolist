new Vue({
    el: "#app",
    data: {
        mansioneNonFatta: false,
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
            this.todoList.push(this.textTemoporaneo)
            this.textTemoporaneo = ''
        },

        removeAList: function(index) {
            this.todoList.splice(index,1)
        },
        
        mansione: function () {
           
            this.mansioneNonFatta = !this.mansioneNonFatta;
        },
    }
})