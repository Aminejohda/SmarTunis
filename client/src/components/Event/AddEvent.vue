<template>
  <form class="form-horizontal">
    <fieldset>

      <!-- Form Name -->
      <legend>Add your Event</legend>


      <!-- First Step-->
      <div v-if="steps === 'one'">

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="Title">Title</label>
        <div class="col-md-4">
          <input id="Title" name="Title" type="text" placeholder="Event" class="form-control input-md" required="" v-model="title">

        </div>
      </div>

      <!-- Textarea -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="textarea">Description</label>
        <div class="col-md-4">
          <textarea class="form-control" id="textarea" name="textarea" v-model="description">Describe your Event</textarea>
        </div>
      </div>


        <!-- Select Basic -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="visibility">Event's Theme</label>
          <div class="col-md-4">
            <select id="ThemeEvent" name="ThemeEvent" class="form-control" v-model="ThemeEvent">
              <option value="Informatique">Informatique</option>
              <option value="Sport">Sport</option>
              <option value="Sport">Clothing</option>
              <option value="Sport">Political</option>
              <option value="Sport">Education</option>
            </select>
          </div>
        </div>


        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="startDate">Start Date</label>
          <div class="col-md-4">
            <input id="startDate" name="startDate" type="date" placeholder="when it starts" class="form-control input-md" v-model="startDate">

          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="endDate">End Date</label>
          <div class="col-md-4">
            <input id="endDate" name="endDate" type="date" placeholder="when it ends" class="form-control input-md" v-model="endDate">

          </div>
        </div>
        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="next1"></label>
          <div class="col-md-4">
            <button id="next1" name="next2" class="btn btn-primary" v-on:click="steps = 'two'">Next</button>
          </div>
        </div>
      <!-- End 1st Step-->
      </div>

      <!-- Second Step-->
      <div v-if="steps === 'two'">


        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="Capacity">Capacity</label>
          <div class="col-md-4">
            <input id="Capacity" name="Capacity" type="number" placeholder="How many?" class="form-control input-md" required="" v-model="capacity">

          </div>
        </div>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="Fee">Fee</label>
        <div class="col-md-4">
          <input id="Fee" name="Fee" type="number" placeholder="How much?" class="form-control input-md" required="" v-model="fee">

        </div>
      </div>

      <!-- Select Basic -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="eventType" >Event's Type</label>
        <div class="col-md-4">
          <select id="eventType" name="eventType" class="form-control" v-model="typeEvent">
            <option value="opening">Opening</option>
            <option value="ceramony">Ceramony</option>
          </select>
        </div>
      </div>

      <!-- Select Basic -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="visibility">Visibility</label>
        <div class="col-md-4">
          <select id="visibility" name="visibility" class="form-control" v-model="visibilityEvent">
            <option value="isPublic">Public</option>
            <option value="isPrivate">Private</option>
          </select>
        </div>
      </div>


        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="Capacity">images</label>
          <div class="col-md-4">
            <input type="file" class="form-control" @change="onFileSelected" accept="image/*">

          </div>
        </div>

        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="next2"></label>
          <div class="col-md-4">
            <button id="next2" name="next2" class="btn btn-primary" v-on:click="steps = 'final'">Next</button>
          </div>
        </div>
        <!-- End 2nd Step-->
      </div>


      <!-- Final Step-->
      <div v-if="steps === 'final'">

      <div class="form-group">
        <label class="col-md-4 control-label" for="endDate">Location</label>
        <div class="col-md-4">

        <gmap-autocomplete
          @place_changed="setPlace" v-model="street">
        </gmap-autocomplete>
        <br/>

        <br>
        <gmap-map
          :center="center"
          :zoom="12"
          style="width:100%;  height: 400px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :draggable="true"
            :clickable="true"
            @dragend="mapClick"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>

        <input type="hidden"  v-model="latp" name="lat">
        <input type="hidden"  v-model="lngp" name="lng">
      </div>
      </div>
        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="submit"></label>
          <div class="col-md-4">
            <button id="submit" name="submit" class="btn btn-primary" @click="addevent">Finish</button>
          </div>
        </div>

        <!-- End final Step-->
      </div>


    </fieldset>

  </form>

</template>

<script>
import eventsService from '@/services/EventService'
export default {
  name: 'addevent',
  data () {
    return {
      title: '',
      street:'',
      description: '',
      fee: '',
      capacity:'',
      startDate: '',
      visibilityEvent: '',
      typeEvent:'',
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      place: 'Sousse',
      latLng: {},
      latp : 35.8875705,
      lngp : 10.5893767,
      endDate :'',
      steps: "one",
    }

  },
  methods: {
    mapClick (e) {
      this.latp = e.latLng.lat()
      this.lngp =     e.latLng.lng()
      console.log(e.latLng.lat())
    },
    setPlace(place) {
      if(this.markers.length >0){
        this.markers.splice(0, 1)
      }
     var  curretstreet = place.formatted_address
      console.log(curretstreet)
      this.currentPlace = place;
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      };
      this.markers.push({ position: marker });
      this.places.push(this.currentPlace);
      this.center = marker;
      this.currentPlace = null;
      this.latp = this.currentPlace.geometry.location.lat()
      this.lngp = this.currentPlace.geometry.location.lng()
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },

    async addevent () {
      var data = new FormData();
      data.append('media', this.selectedFile);
      data.append('title', this.title);
      data.append('description', this.description);
      data.append('capacity', this.capacity);
      data.append('fee', this.fee);
      data.append('eventType', this.eventType);
      data.append('visiblity', this.visiblity);
      data.append('startDate', this.startDate);
      data.append('endDate',this.endDate);
      data.append('owner',this.$store.state.user._id);
      data.append('location.address',this.currentPlace);
      data.append('location.latitude',this.latp);
      data.append('location.longitude',this.lngp);

      await eventsService.addEvent(data)
      this.$swal(
        'Great!',
        `Your Event has been added!`,
        'success'
      )
      this.$router.push({ name: 'events' })
    },
    onFileSelected(event){
      this.selectedFile=event.target.files[0];
      console.log(this.selectedFile);
    }
  },
  mounted() {
    if(this.$store.state.isUserLoggedIn){
      this.iduser = this.$store.state.user._id
      console.log(this.iduser)
    }

    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );
    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace();
      let ac = place.address_components;
      let lat = place.geometry.location.lat();
      let lon = place.geometry.location.lng();
      let city = ac[0]["short_name"];

      console.log(`The user picked ${city} with the coordinates ${lat}, ${lon}`);
    });
    this.geolocate();

  }

}

</script>

<style scoped>


  .search-location {
    display: block;
    width: 60vw;
    margin: 0 auto;
    margin-top: 5vw;
    font-size: 20px;
    font-weight: 400;
    outline: none;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
  }

</style>
