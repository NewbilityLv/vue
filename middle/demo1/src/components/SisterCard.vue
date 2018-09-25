<template>
    <div class="message">
        <div class="message-header">
            <h5 v-text="theCardTitle"></h5>
        </div>
        <div class="message-body">
            <p class="message-text">我是Sister组件</p>

            <button @click="messageBrother">给哥哥发消息</button>
            <div v-if="messageDaughter" class="alert" v-html="messageDaughter"></div>
        </div>
    </div>
</template> 
<script> 
    export default { 
        name: 'SisterCard',
        props: ['messageDaughter'], 
        data: () => ({ 
            theCardTitle: '子组件2'
        }) ,
        methods:{
            messageBrother(){
                this.$emit('sisterSaid123','写作业写作业写作业')
            }
        }
      
    } 
</script>
