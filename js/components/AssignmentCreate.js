export default {
    template:`
        <form @submit.prevent="add">
            <div class="input-group mt-4">
                <input v-model="newAssignment" type="text" class="form-control" placeholder="Add new task">
                 <div class="input-group-btn">
                    <button class="btn btn-primary" type="submit">Add</button>
                 </div>
            </div>
        </form>
    `,
    data(){
        return {
            newAssignment:''
        }
    },
    methods: {
       add(){
            this.$emit('add', this.newAssignment)
            this.newAssignment = '';
        }
    }
}