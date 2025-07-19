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
            assignments: [],

            newAssignment:'',
        }                    
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
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