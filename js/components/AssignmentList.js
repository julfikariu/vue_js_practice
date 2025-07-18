import Assignment from "./Assignment.js"
import AssignmentTag from "./AssignmentTags.js"
export default {
    components: { Assignment, AssignmentTag },
    template :`
    <section v-show="assignments.length">
        <h2 class="text-white bg-info p-3 mt-4 rounded">
            {{ title }}
             ({{ assignments.length }})
        </h2>

        <assignment-tag
            :initial-tags="assignments.map(a => a.tag)"
            :current-tag="currentTag"
            @change="currentTag = $event"
        ></assignment-tag>

        <ul class="list-group">
            <assignment 
             v-for="assignment in filterAssignments"
             :key="assignment.id"
             :assignment="assignment"
            ></assignment>
        </ul>
    </section>
    `,
    props:{
        assignments: Array,
        title: String
    },
    data(){
        return {
            currentTag:'All'
        }
    },
    computed:{
        filterAssignments(){
            if(this.currentTag == 'All'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag == this.currentTag);
        },
    }
}
