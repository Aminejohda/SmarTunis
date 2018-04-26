<template>
  <div class="form-horizontal">
    <fieldset>

      <!-- Form Name -->
      <legend>Scrapper</legend>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="Title">Twitter ScreenId</label>
        <div class="col-md-4">
          <input id="Title" name="Title" type="text" placeholder="Event" class="form-control input-md" required="" v-model="id">

        </div>
      </div>
      <!-- Button -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="submit"></label>
        <div class="col-md-4">
          <button id="submit" name="submit" class="btn btn-primary" @click="scrape">Scrape</button>
        </div>
      </div>
      <!-- p -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="submit"></label>
        <div class="col-md-4">
          <p id="interests" name="submit"  >{{interests}}</p>
        </div>
      </div>
    </fieldset>
  </div>

</template>

<script>
  import ScrappingService from '@/services/ScrappingService'

  export default {
        name: "interests",
      data () {
        return {
          interests: '',id:''
        }
      },
    mounted () {
      //this.ScrapeUser()
    },

    methods: {
      async scrape(){
        this.ScrapeUser(this.id);
        setTimeout(()=>{
          this.CategorizeUser(this.id);

        },3000 );
      },
      async ScrapeUser (iduser) {
        const response = await ScrappingService.ScrapeUser(iduser)
        console.log(response.data)
        console.log("test1")

      },
      async CategorizeUser (iduser) {
        const response = await ScrappingService.CategorizeUser(iduser)
        this.interests = response.data[0];
        console.log(response.data[0])
        console.log("test2")


      },

    }
    ,
  }

</script>

<style scoped>

</style>
