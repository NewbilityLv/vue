<template>
  <div class="card">
    <div class="card-header">
      <h5 v-text="theCardTitle"></h5>
      <!-- <button @click="momSaidChill" v-if="stopFighting()" class="btn">停止通讯</button> -->
    </div>
    <div class="card-body">
      <brother-card></brother-card>
      <sister-card></sister-card>
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
      
       }),
      components: { 
        BrotherCard, 
        SisterCard, 
      }, 
      
   } 
</script>
