export default {
    template:`
             <li class="list-group-item list-group-item-action"> 
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