import Assignment from "./Assignment.js"
export default {
    components: { Assignment },
    template :`
    <section v-show="assignments.length">
        <h2 class="text-white bg-info p-3 mt-4 rounded">{{ title }}</h2>
        <ul class="list-group">
            <assignment 
             v-for="assignment in assignments"
             :key="assignment.id"
             :assignment="assignment"
            ></assignment>
        </ul>
    </section>
    `,
    props:{
        assignments: Array,
        title: String
    }
}
