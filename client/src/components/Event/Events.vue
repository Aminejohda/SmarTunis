<template>
<div class="events">

<!--start of the etemp events -->
  <div class="container">
    <div class="row">
      <div class="[ col-xs-12 col-sm-offset-2 col-sm-8 ]">
        <ul class="event-list" v-for="e in events">
          <li>
            <time datetime="2018-10-29">
              <span class="day">{{ moment(e.startDate).format("DD")}}</span>
              <span class="month">{{ moment(e.startDate).format("MMM")}}</span>
              <span class="year">{{ moment(e.startDate).format("YYYY")}}</span>
              <span class="time">ALL DAY</span>
            </time>
            <img alt="dj-set" :src="'http://localhost:3000/images/media/' + e.media" />
            <div class="info">

              <div class="row">
                <div class="col-sm-10">
                  <h2 class="title">{{e.title}}</h2>
                </div>
                <div class="col-sm-2">
                  <a :href="'http://localhost:8888/?idEvent=' + e._id"><img src="http://localhost:3000/images/media/recorder.png"></a>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">Starts : {{ moment(e.startDate).format("DD-MM-YYYY [at] hh:mm")}}</div>
                <div class="col-sm-6">Ends : {{ moment(e.endDate).format('DD-MM-YYYY [at] hh:mm')}}</div>
              </div>
              <div class="row">
                <div class="col-sm-6"><img src="http://localhost:3000/images/icons/fee.png"> Fee : {{e.fee}}</div>
                <div class="col-sm-6"><img src="http://localhost:3000/images/icons/capacity.png"> Capacity : {{e.capacity}} </div>
              </div>

            </div>
            <div class="social">
              <ul>
                <li class="facebook" style="width:33%;"><a href="#facebook"></a></li>
                <li class="twitter" style="width:34%;"><router-link class="btn btn-primary" v-bind:to="{ name: 'event-details', params: { id: e._id,end: moment(e.endDate).format('MM , DD , YYYY') } }"><img src="http://localhost:3000/images/icons/details.png"></router-link></li>
                <li class="google-plus" style="width:33%;"><a href="#google-plus"><img src="http://localhost:3000/images/icons/location.png"></a></li>
              </ul>
            </div>
          </li>


        </ul>
      </div>
      <div class="row" name="pub">
        publicity
      </div>
    </div>
  </div>



<!-- end of the temp envets-->
</div>
</template>

<script>
import eventsService from '@/services/EventService'
var moment = require('moment');


export default {
  name: 'events',
  data () {
    return {
      moment:moment ,
      events: []
    }
  },
  mounted () {
    this.getEvents()
  },
  methods: {
    async getEvents () {
      const response = await eventsService.getevents()
      this.events = response.data
    }
  }
}
</script>

<style scoped>
  @import url("http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,400italic");
  @import url("//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css");
  body {
    padding: 60px 0px;
    background-color: rgb(220, 220, 220);
  }

  .flag{
    width: 50px;
  }

  h2{
    font-size: 200%;
    margin-top: 0px;
    font-weight: bold;
  }

  .event-list .info .row{
    padding-left: 10px;
    font-size: 80%;
  }

  .event-list {
    list-style: none;
    font-family: 'Lato', sans-serif;
    margin: 0px;
    padding: 0px;
  }
  .event-list > li {
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px rgb(51, 51, 51);
    box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);
    padding: 0px;
    margin: 0px 0px 20px;
  }
  .event-list > li > time {
    display: inline-block;
    width: 100%;
    color: rgb(255, 255, 255);
    background-color: rgb(63, 182, 247);
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
  }
  .event-list > li:nth-child(even) > time {
    background-color: rgb(165, 82, 167);
  }
  .event-list > li > time > span {
    display: none;
  }
  .event-list > li > time > .day {
    display: block;
    font-size: 56pt;
    font-weight: 100;
    line-height: 1;
  }
  .event-list > li time > .month {
    display: block;
    font-size: 24pt;
    font-weight: 900;
    line-height: 1;
  }
  .event-list > li > img {
    width: 100%;
  }
  .event-list > li > .info {
    padding-top: 5px;
    text-align: center;
  }
  .event-list > li > .info > .title {
    font-size: 17pt;
    font-weight: 700;
    margin: 0px;
  }
  .event-list > li > .info > .desc {
    font-size: 13pt;
    font-weight: 300;
    margin: 0px;
  }
  .event-list > li > .info > ul,
  .event-list > li > .social > ul {
    display: table;
    list-style: none;
    margin: 10px 0px 0px;
    padding: 0px;
    width: 100%;
    text-align: center;
  }
  .event-list > li > .social > ul {
    margin: 0px;
  }
  .event-list > li > .info > ul > li,
  .event-list > li > .social > ul > li {
    display: table-cell;
    cursor: pointer;
    color: rgb(30, 30, 30);
    font-size: 11pt;
    font-weight: 300;
    padding: 3px 0px;
  }
  .event-list > li > .info > ul > li > a {
    display: block;
    width: 100%;
    color: rgb(30, 30, 30);
    text-decoration: none;
  }
  .event-list > li > .social > ul > li {
    padding: 0px;
  }
  .event-list > li > .social > ul > li > a {
    padding: 3px 0px;
  }
  .event-list > li > .info > ul > li:hover,
  .event-list > li > .social > ul > li:hover {
    color: rgb(30, 30, 30);
    background-color: rgb(200, 200, 200);
  }
  .facebook a,
  .twitter a,
  .google-plus a {
    display: block;
    width: 100%;
    color: rgb(75, 110, 168) !important;
  }
  .twitter a {
    color: rgb(79, 213, 248) !important;
  }
  .google-plus a {
    color: rgb(221, 75, 57) !important;
  }
  .facebook:hover a {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(75, 110, 168) !important;
  }
  .twitter:hover a {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(79, 213, 248) !important;
  }
  .google-plus:hover a {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(221, 75, 57) !important;
  }

  @media (min-width: 768px) {
    .event-list > li {
      position: relative;
      display: block;
      width: 100%;
      height: 120px;
      padding: 0px;
    }
    .event-list > li > time,
    .event-list > li > img  {
      display: inline-block;
    }
    .event-list > li > time,
    .event-list > li > img {
      width: 120px;
      float: left;
    }
    .event-list > li > .info {
      background-color: rgb(245, 245, 245);
      overflow: hidden;
    }
    .event-list > li > time,
    .event-list > li > img {
      width: 120px;
      height: 120px;
      padding: 0px;
      margin: 0px;
    }
    .event-list > li > .info {
      position: relative;
      height: 120px;
      text-align: left;
      padding-right: 40px;
    }
    .event-list > li > .info > .title,
    .event-list > li > .info > .desc {
      padding: 0px 10px;
    }
    .event-list > li > .info > ul {
      position: absolute;
      left: 0px;
      bottom: 0px;
    }
    .event-list > li > .social {
      position: absolute;
      top: 0px;
      right: 0px;
      display: block;
      width: 40px;
    }
    .event-list > li > .social > ul {
      border-left: 1px solid rgb(230, 230, 230);
    }
    .event-list > li > .social > ul > li {
      display: block;
      padding: 0px;
    }
    .event-list > li > .social > ul > li > a {
      display: block;
      width: 40px;
      padding: 10px 0px 6px;
    }
  }
</style>
