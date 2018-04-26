<template>
  <div>
    <div class="wrapper">
      <!-- Content -->
      <div class="main-content">
        <div class="counterDown text-center">
          <h1>{{event.title}}</h1>
          <hr>
          <div id="demo">
            <Countdown :deadline=$route.params.end id="infos" ></Countdown>

          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="col-lg-1">
        </div>
        <div class="col-lg-9">
         Location :  {{event.location.address}}
          <div class="row">
            <div class="col-lg-12">
              <br>
              <h4><i class="fa fa-map-marker"></i> Location Map</h4>
              <div class="well">
                <GmapMap style=" min-height: 395px;" :zoom="10" :center="{lat: event.location.latitude, lng: event.location.longitude}">
                  <GmapMarker v-for="(marker, index) in markers"
                              :key="index"
                              @place_changed="setPlace"
                              :position="marker.position"
                  />
                  <GmapMarker/>
                </GmapMap>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>

</template>

<script>
  import eventsService from '@/services/EventService'
  var moment = require('moment');
  import Countdown from 'vuejs-countdown'
    export default {
      name: 'event-details',
      data () {
        return {
          event: {},
          start : '',
          moment:moment ,
          markers : [],
          Lat : null,
          Lng : null,
          location:'',
          end : '',
          idEvent : ''
        }
      },
      mounted () {
        this.end = this.$route.params.end;
        console.log(this.end)

        this.idEvent = this.$route.params.id;
        this.getEvent()
        this.start = moment(this.event.startDate).format('MM , DD , YYYY')
        console.log(this.start)

        this.Lat = 36.800399
        this.Lng = 10.186619500000006
        this.markers.push({
          position: {
            lat: this.Lat,
            lng: this.Lng
        }

          })
      },
      methods: {
        async getEvent () {
          const response = await eventsService.getEvent(this.$route.params.id)
          this.event = response.data[0]
        }
      },
      components: { Countdown }

    }


</script>

<style scoped>
{
                         border: 0;
                         margin: 0;
                         padding: 0;
                       }

  html {
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 62.5%; /* 1rem vaut 10px */
  }

  body {
    font-size: 5.4rem; /* 1.4 rem vaut 14px */
    height: 100%;
  }

  .wrapper {
    display: flex;
    background-image: url('http://localhost:3000/images/media/eventBackground.jpg');
    background-size: cover;
    color: rgb(245,245,245);
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    display: flex;
    flex: 1;
  }

  .counterDown {
    margin: auto;
  }

  .counterDown h1 {
    font-size: 8rem;
  }

  hr {
    background-color: rgba(255,255,255, 0.8);
  }

  #demo {
    display: flex;
    flex-direction: row;
    font-size: 1.6rem;
  }

  #jours {
    font-family: "Roboto Mono", sans-serif;
    font-size: 4rem;
    height: 10rem;
    margin-right: 1rem;
    width: 24rem;
  }

  #heures {
    font-family: "Roboto Mono", sans-serif;
    font-size: 4rem;
    height: 10rem;
    margin-right: 1rem;
    width: 8rem;
  }

  #minutes {
    font-family: "Roboto Mono", sans-serif;
    font-size: 4rem;
    height: 10rem;
    margin-right: 1rem;
    width: 8rem;
  }

  #secondes {
    font-family: "Roboto Mono", sans-serif;
    font-size: 4rem;
    height: 10rem;
    margin: auto;
    width: 8rem;
  }

  #infos {
    color: white;
    display: flex;
    flex-direction: row;
    font-size: 1.6rem;
  }

  .infos-jours {
    font-family: "Roboto Mono", sans-serif;
    margin-right: 1rem;
    margin-top: -3rem;
    width: 8rem;
  }

  .infos-heures {
    font-family: "Roboto Mono", sans-serif;
    margin-right: 1rem;
    margin-top: -3rem;
    width: 8rem;
  }

  .infos-minutes {
    font-family: "Roboto Mono", sans-serif;
    margin-right: 1rem;
    margin-top: -3rem;
    width: 8rem;
  }

  .infos-secondes {
    font-family: "Roboto Mono", sans-serif;
    margin: auto;
    margin-top: -3rem;
    width: 8rem;
  }


</style>
