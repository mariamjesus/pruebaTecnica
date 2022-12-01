export default {
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
        this.handleScroll()
        const listElm = document.querySelector('#infinite-list');
        listElm.addEventListener('scroll', () => {
          if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
            this.handleScroll()
          }
        })
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
            this.loading = true;
            setTimeout(() => {
              axios.get(`https://jsonplaceholder.typicode.com/photos`).then(response => {
                this.albumInit +=1
                const restInfo = response.data.filter(elem => elem.albumId == this.albumInit)
                restInfo.forEach(elem => {
                  this.info.push(elem)
                })
              })
              this.loading = false
            }, 200)
          },
          isScrolledIntoView (el) {
            let rect = el.getBoundingClientRect()
            let elemTop = rect.top
            let elemBottom = rect.bottom
    
            let isVisible = elemTop < window.innerHeight && elemBottom >= 0
            return isVisible
          }
        }
      }