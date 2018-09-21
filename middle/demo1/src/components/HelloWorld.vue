<template>
  <div class="card">
    <div class="card-header">
      <h5 v-text="theCardTitle"></h5>
      <button @click="momSaidChill" v-if="stopFighting()" class="btn">停止通讯</button>
    </div>
    <div class="card-body">
      <brother-card :messageSon="messageson" @brotherSaid='messageDaughter($event)'></brother-card>
      <sister-card :messageDaughter="messageDaughter" @sisterSaid='messageSon($event)'></sister-card>
    </div>
  </div>
</template> 
<script> 
  import BrotherCard from './BrotherCard'; 
  import SisterCard from './SisterCard'; 
  export default { 
    name: 'ParentCard', 
    data: () => ({ 
      theCardTitle: '父组件', 
      messagedaughter: '',
      messageson: '',
       }),
      components: { 
        ChildCard 
      }, 
      methods: { 
        messageDaughter(message) {
          this.messagedaughter = message
        },
          messageSon(message) {
          this.messageson = message
        },
        stopFighting(){
         if(this.messagedaughter&&this.messageson){
           return true
         }
         return false
        },
        momSaidChill(){
          this.messagedaughter=''
          this.messageson=''
        } 
      } 
   } 
</script>
