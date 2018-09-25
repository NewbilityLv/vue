<template>
    <div class="message">
        <div class="message-header">
            <h5 v-text="theCardTitle"></h5>
        </div>
        <div class="message-body">
            <p class="message-text">我是Sister组件</p>

            <button @click="messageBrother">给哥哥发消息</button>
            <div v-if="fromBrother" class="alert" v-html="fromBrother"></div>
        </div>
    </div>
</template> 
<script> 
import { eventBus } from '../main'
    export default { 
        name: 'SisterCard',
        props: ['messageDaughter'], 
        data: () => ({ 
            theCardTitle: '子组件2',
            fromBrother:''
        }) ,
        methods:{
            messageBrother(){
                eventBus.$emit('sisterSaid','写作业写作业写作业')
            },
           
        },
         created(){
                eventBus.$on('brotherSaid',(message)=>{
                    this.fromBrother=message
                })
            }
      
    } 
</script>
