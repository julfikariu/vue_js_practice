export default {
    template:`
             <li class="list-group-item"> 
                <label class="d-flex justify-content-between">
                    {{ assignment.name}} 
                    <input type="checkbox" v-model="assignment.completed">
                </label>
            </li>
    `,
    props:{
        assignment: Object
    }
}