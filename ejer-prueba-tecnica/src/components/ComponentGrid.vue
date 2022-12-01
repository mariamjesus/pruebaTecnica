<template>
  <div class="row">
    <div class="col" v-for="(elem, index) in info" :key="index">
      <img v-on:click="remove(elem.id)" :src="elem.thumbnailUrl" :alt="elem.id"/>
      <p class="h6"> {{elem.title}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:'ComponentGrid',
    data(){
        return{
            json: null,
            listImagen: [],
            info: [],
            albumInit: 1
        }
    },
    created: function () {
      // METODO  para recoger datos json desde url
      /* fetch("https://jsonplaceholder.typicode.com/photos")
        .then(r => r.json())
        .then(json => {
          this.json=json
        });
      this.imagenOnly()  */
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
        /* window.onscroll = () => {
          let bottomOfWindow = window.scrollY + window.innerHeight >= document.body.scrollHeight - 50
          if (bottomOfWindow) {
            axios.get(`https://jsonplaceholder.typicode.com/photos`).then(response => {
              this.albumInit +=1
              const restInfo = response.data.filter(elem => elem.albumId == this.albumInit)
              restInfo.forEach(elem => {
                this.info.push(elem)
              })
            })
          }
        } */
        window.onscroll = () => {
          let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
          if (bottomOfWindow) {
            axios.get(`https://jsonplaceholder.typicode.com/photos`).then(response => {
              this.albumInit +=1
              const restInfo = response.data.filter(elem => elem.albumId == this.albumInit)
              restInfo.forEach(elem => {
                this.info.push(elem)
              })
            })
          }
        }
      }
    },
    mounted() {
      this.info = this.getInitialInfo()
      this.handleScroll()
    }
  }
</script>
