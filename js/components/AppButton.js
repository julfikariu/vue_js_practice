export default {
    template: `
        <button :class="{
            'text-white btn btn-lg bg-primary': bg=='primary',
            'text-white btn btn-lg bg-info': bg=='info',
            'text-white btn btn-lg bg-secondary': bg=='secondary',
            'is-loading' : processing
        }
        ">
        <slot/>
        </button>  
    `,
    props: {
        bg : {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false,
        },
    },
}