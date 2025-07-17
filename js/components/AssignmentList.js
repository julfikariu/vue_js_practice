import Assignment from "./Assignment.js"
export default {
    components: { Assignment },
    template :`
    <section v-show="assignments.length">
        <h2 class="text-white bg-info p-3 mt-4 rounded">
            {{ title }}
             ({{ assignments.length }})
        </h2>
        <button
            @click="currentTag = tag"
            v-for="tag in tags" 
            class="btn btn-sm btn-primary mr-1 mb-2"
            :class="{
                'active': tag ==currentTag
            }"
        >
            {{ tag}}
        </button>  
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
        tags(){
            return ['All', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}
