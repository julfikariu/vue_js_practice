export default {
    template:`
        <button
            @click="$emit('update:currentTag', tag)"
            v-for="tag in tags" 
            class="btn btn-sm btn-primary mr-1 mb-2"
            :class="{
                'active': tag === currentTag
            }"
        >
            {{ tag}}
        </button> 
    `,
    props:{
        initialTags: Array,
        currentTag: String
    },
    computed:{
         tags(){
            return ['All', ...new Set(this.initialTags)];
        }
    }
}