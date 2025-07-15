import AssignmentList from "./AssignmentList.js";

export default {
     components: { AssignmentList },
     template : `
        <assignment-list :assignments="filterTask.inProgress" title="In progress Task"></assignment-list>
        <assignment-list :assignments="filterTask.isCompleted" title="Completed Task"></assignment-list>
        <form @submit.prevent="add">
            <div class="input-group mt-4">
                <input v-model="newAssignment" type="text" class="form-control" placeholder="Add new task">
                 <div class="input-group-btn">
                    <button class="btn btn-primary" type="submit">Add</button>
                 </div>
            </div>
        </form>
    `,
    data() {
        return {
            assignments: [
                { name:"This is first assignment", completed: false, id:1 },
                { name:"Second assignment for", completed: false, id:2 },
                { name:"The third design model", completed: false, id:3 },
                { name:"Forth project assign", completed: false, id:4 },
            ],

            newAssignment:'',
        }                    
    },
    computed: {
        filterTask() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.completed),
                isCompleted: this.assignments.filter(assignment => assignment.completed)
            };
        }
    },
    methods:{
        add(){
            this.assignments.push({
                name:this.newAssignment,
                completed:false,
                id:this.assignments.length+1,
            });
            this.newAssignment = '';
        }
    }
}