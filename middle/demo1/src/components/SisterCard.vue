<template>
    <div class="message">
        <div class="message-header">
            <h5 v-text="theCardTitle"></h5>
        </div>
        <div class="message-body">
            <p class="message-text">我是Sister组件</p>

            <button @click="messageBrother">OK</button>
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
        method:{
            messageBrother(){
                this.$emit('sisterSaid','写作业')
            }
        }
      
    } 
</script>
