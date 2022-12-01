<template>
  <div >
    <h2>{{ title }}</h2>
    <h3>{{ texto }}</h3>
    <h6>{{ enumEjer }}</h6>
  </div>
   
</template>

<script>


export default {
  name: 'titleHeader',
  props: {
    title: String
  },
  data(){
    return {
      texto:"María Jesús Torres Simarro",
      enumEjer:"Clic sobre una imagen para eliminarla"
    }
  }
}
</script>

<style scoped>
</style>
