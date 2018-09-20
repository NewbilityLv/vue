<template>
  <div class="card">
    <div class="card-header">
      <h5 v-text="theCardTitle"></h5>
      <button @click="sendMessage" class="btn">给子组件发送一个消息</button>
    </div>
    <div class="card-body">
      <child-card :parentMessage="parentMessage" @finished='eeeee'></child-card>
    </div>
  </div>
</template> 
<script> 
  import ChildCard from './ChildCard'; 
  export default { 
    name: 'ParentCard', 
    data: () => ({ 
      theCardTitle: '父组件', 
      parentMessage: '' }),
      components: { 
        ChildCard 
      }, 
      methods: { 
        sendMessage() {
          this.parentMessage = `<b>消息来自父组件：</b> (^_^)!!!` 
        },
        eeeee(){
          this.parentMessage=''
        } 
      } 
   } 
</script>
