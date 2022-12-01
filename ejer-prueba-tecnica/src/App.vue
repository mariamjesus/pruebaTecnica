<template>
  <div id="app">
    <TitleHeader title = "Prueba Tecnica con Vue.js, Bootstrap Vue, JavaScript"/>
    <div class="row" id="infinite-list">
      <div class="col" v-for="(elem, index) in info" :key="index">
        <img v-on:click="remove(elem.id)" :src="elem.thumbnailUrl" :alt="elem.id"/>
        <p class="h6"> {{elem.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleHeader from './components/TitleHeader.vue'
import axios from "axios"
export default {
  name: 'App',
  components: {
    TitleHeader
  },
  data(){
    return {
      json: null,
      listImagen: [],
      info: [],
      albumInit: 0,
      loading: false
    }
  },
  mounted() {
    // this.info = this.getInitialInfo()
    // Detect when scrolled to bottom.
    /* this.handleScroll()
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', () => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.handleScroll()
      }
    }) */
    this.getInitialInfo()
    this.getNextUser()
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
      remove: function (deleteId) {
        let update = this.json.filter(elem => elem.id !== deleteId)
        this.json = update
      },
      getInitialInfo () {
        axios.get(`https://jsonplaceholder.typicode.com/photos`).then((response) => {
          this.info = response.data.filter(elem => elem.albumId == this.albumInit)
        })
      },
      handleScroll () {
        this.loading = true
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
          axios.get(`https://jsonplaceholder.typicode.com/photos`).then(response => {
            this.albumInit +=1
            const restInfo = response.data.filter(elem => elem.albumId == this.albumInit)
            restInfo.forEach(elem => {
              this.info.push(elem)
            })
          })
          this.loading = false
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
  color: #2c3e50;
  text-align: center;
}
.intersect {
  margin-top:50px;
}


</style>
