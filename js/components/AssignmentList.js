import Assignment from "./Assignment.js"
import AssignmentTag from "./AssignmentTags.js"
export default {
    components: { Assignment, AssignmentTag },
    template :`
    <section v-show="assignments.length">
        <div class="d-flex justify-content-between align-items-start">
            <h4 class="text-white bg-info p-3 mt-4 rounded">
                {{ title }}
                ({{ assignments.length }})
            </h4>
            <button 
                    v-show="canToogle"
                    class="bg-white border-0 text-danger h2"
                    @click="$emit('toggle')"
            >&times;</button>
        </div>

        <assignment-tag
            :initial-tags="assignments.map(a => a.tag)"
            v-model:currentTag="currentTag"
        ></assignment-tag>

        <ul class="list-group">
            <assignment 
                v-for="assignment in filterAssignments"
                :key="assignment.id"
                :assignment="assignment"
            ></assignment>
        </ul>
        <slot></slot>
    </section>

    `,
    props:{
        assignments: Array,
        title: String,
        canToogle:{ type:Boolean, default:false}
    },

    data(){
        return {
            currentTag:'All',
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
