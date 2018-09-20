<template>
    <div class="message">
        <div class="message-header">
            <h5 v-text="theCardTitle"></h5>
        </div>
        <div class="message-body">
            <p class="message-text" v-html="theCardBody"></p>
            <div v-if="parentMessage" class="alert" v-html="parentMessage"></div>
            <button v-if="parentMessage" @click="onOk">OK</button>
        </div>
    </div>
</template> 
<script> 
    export default { 
        name: 'ChildCard',
        props: ['parentMessage'], 
        data: () => ({ 
            theCardTitle: '子组件',
            theCardBody: '我是一个子组件！(^_^) !!!'
        }) ,
        methods:{
            onOk(){
                this.$emit('finished')
            }
        }
    } 
</script>
