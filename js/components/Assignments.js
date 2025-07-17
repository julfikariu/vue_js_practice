import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
     components: { AssignmentList, AssignmentCreate },
     template : `
        <assignment-list :assignments="filterTask.inProgress" title="In progress Task"></assignment-list>
        <assignment-list :assignments="filterTask.isCompleted" title="Completed Task"></assignment-list>

        <assignment-create @add="add"></assignment-create>
        
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
        add(name){
            this.assignments.push({
                name: name,
                completed:false,
                id:this.assignments.length+1,
            });
        
        }
    }
}