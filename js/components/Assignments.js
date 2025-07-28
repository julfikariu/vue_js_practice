import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
     components: { AssignmentList, AssignmentCreate },
     template : `
        <div class="container mt-5">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <assignment-list :assignments="filterTask.inProgress" title="In progress Task">
                                <assignment-create @add="add"></assignment-create>
                            </assignment-list>
                        </div>
                        <div class="col-md-6">
                            <div v-show="showCompleted">
                                <assignment-list 
                                    :assignments="filterTask.isCompleted" 
                                    title="Completed Task" 
                                    can-toogle
                                    @toggle="showCompleted = !showCompleted"
                                ></assignment-list>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>         
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true
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