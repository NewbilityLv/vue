<!-- BrotherCard.vue --> <template>
    <div class="message">
        <div class="message-header">
            <h5 v-text="theCardTitle"></h5>
        </div>
        <div class="message-body">
            <p class="message-text">我是Brother组件</p>
            <button @click="messageSister" class="btn">给妹妹发消息</button>
            <div v-if="fromSister" class="alert" v-html="fromSister"></div>
        </div>
    </div>
</template>
 <script>
 import { eventBus } from '../main'
//  console.log(eventBus)
  export default {
       name: 'BrotherCard',
        props: ['messageSon'], 
        data: () => ({ theCardTitle: '子组件1' ,fromSister:""}),
         methods: { 
             messageSister() { 
                 eventBus.$emit('brotherSaid', '妈妈说，该做作业了！(^_^)!!!') }
        },
        created(){
            eventBus.$on("sisterSaid",message=>{
                this.fromSister=message
            })
        } 
    } 
</script>
