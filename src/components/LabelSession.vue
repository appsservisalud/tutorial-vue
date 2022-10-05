<template>
    <SessionView @message="handleMessage"></SessionView>
    <span></span>
</template>

<script>
import SessionView from '@/views/SessionView.vue';
    export default {
    data() {
        return {
            message: ""
        };
    },
    components: { SessionView 
    },
    methods:{
        handleMessage (value) {
      this.myMessage = value   
    }
    }
}
</script>