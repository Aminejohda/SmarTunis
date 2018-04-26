<template>
  <div>
  <div class="inside-banner a14888112237145">
    <div class="container">
      <span class="pull-right"><a href="http://smartfordesign.net/smartend/frontend2"><i class="fa fa-home"></i></a> /
      Edit New Space
    </span>
    <h2>
    Edit New Space
    </h2>
  </div>
</div>
<div class="container">
  <div class="listing spacer">
    <div class="row">
       <div class="col-lg-12 cartcustom">
        <div class="item">
          <div class="navtopcart">
          <ul>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'profile' })"><div><i class="fa fa-eye"></i>My Profile</div></a></li>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'profile' })"><div><i class="fa fa-eye"></i>Edit Profile</div></a></li>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'event' })"><div><i class="fa fa-eye"></i>My Events</div></a></li>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'myProjects' })"><div><i class="fa fa-eye"></i>My Project</div></a></li>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'myspaces' })"><div><i class="fa fa-eye"></i>Cultural Spaces</div></a></li>
            </ul>
          </div>
          <h1 class="blacktitle">
            Edit New Space
          </h1>
          <div class="row">
            <div class="col-lg-12">
              <div class="col-lg-12 fields">


                
                <div class="row field-row">
                  <div class="col-lg-4">
                    Title :
                  </div>
                  <div class="col-lg-8">
                    <input type="text" name="title" v-model="culture.Title" placeholder="Title">
                  </div>
                </div>
                
                
                <div class="row field-row">
                  <div class="col-lg-4">
                   Description:
                  </div>
                  <div class="col-lg-8">
                    <textarea v-model="culture.Description" placeholder="Description"></textarea>
                  </div>
                </div>
                
                
                <div class="row field-row">
                  <div class="col-lg-4">
                    Image :
                  </div>
                  <div class="col-lg-8">
                    <input type="file" @change="processFile($event)" id="files" >
                    <img :src = "culture.Image"/>
                    
                  </div>
                </div>
                
                
                
                <div class="row field-row">
                  <div class="col-lg-4">
                    Theme :
                  </div>
                  <div class="col-lg-8">
                <select v-model="culture.Theme">
                  <option value="Cinemas">Cinemas</option>
                  <option value="Galleries">Galleries</option>
                  <option value="Museums">Museums</option>
                  <option value="Theatres">Theatres</option>
                  <option value="Monuments">Monuments</option>
                </select>
                  </div>
                </div>

                <div class="row field-row">
                  <div class="col-lg-4">
                    Location :
                  </div>
                  <div class="col-lg-8">
              <gmap-autocomplete
          @place_changed="setPlace" v-model="culture.Location.Street">
        </gmap-autocomplete>
      </label>
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
                <div class="row field-row">
                  <div class="col-lg-4">
                    More Information :
                  </div>
                  <div class="col-lg-8">
                <textarea v-model="culture.MoreInformation" placeholder="More Information"></textarea>
                  </div>
                </div>
                 <div class="row field-row">
                  <div class="col-lg-4">
                    <button @click="editspace" class="btn btn-primary"> Edit </button><br><br><br>
                  </div>
                  <div class="col-lg-8">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</div>
</div>
</template>


<script>
import CultureService from '@/services/CultureService'
let ccc ="helo"
let  lng =""
let  lat =""
let  curretstreet =""
  function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log("tatwa");
     ccc=reader.result
    return reader.result
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}
export default{
  data () {
return {
title:'',
description:'',
theme:'',
moreinfo:'', 
street:'',
img : '',
iduser : null,
center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
place: 'Sousse',
latLng: {},
latp : 35.8875705,
lngp : 10.5893767,
culture : null,
spotId :''
}
},
async mounted(){

    if(this.$store.state.isUserLoggedIn){
      this.iduser = this.$store.state.user._id
     // console.log(this.iduser)
       const SpaceId = this.$store.state.route.params.spotId
          this.spotId = SpaceId
      console.log(this.spotId)
      this.culture = (await CultureService.showSpace(SpaceId)).data
      console.log(this.culture)
    }
     this.geolocate();
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
      curretstreet = place.formatted_address
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
  navigateTo(route){
  this.$router.push(route)
    }
  ,
  processFile(event) {
      var file = document.querySelector('input[type="file"]').files[0];
    this.img = getBase64(file)
    //this.img = event.target.files[0]
  },

async editspace(){
console.log(this.street)
  var location = {
    Lat : this.latp,
    Lng : this.lngp,
    Street : curretstreet
  }
    const res = await CultureService.edit({
  img : ccc,
  spotId : this.spotId,
title: this.culture.Title,
description: this.culture.Description,
theme: this.culture.Theme,
moreinfo: this.culture.MoreInformation,
location: location
})
  this.$swal({
  position: 'top-end',
  type: 'success',
  title: 'Cultural Space has been edited',
  showConfirmButton: false,
  timer: 1500
})
console.log(res);

}
}
}
</script>

<style scoped>
.cartcustom{
  padding: 40px 49px 60px;
    display: inline-block;
    margin-top: -64px;
    position: relative;
    z-index: 105;
    background-color: #fff;
    border: 1px solid #eee;
    text-align: left;
}
.a14888112237145{
background-image: url(./../../assets/uploads/banners/blog-title.jpg);
}
.inside-banner{
      padding: 100px 0;
}
.navtopcart{
    position: relative;
    margin: 0 -49px;
    top: -40px;
    border-bottom: 1px solid #f3f3f3;
    text-align: center;}
   .navtopcart ul {
    list-style: none;
    margin: 0;
   }
   .eltd-listing-active-item{
        border-color: #e6e6e6;
    border-bottom-color: #fff;
    cursor: pointer;
        display: inline-block;
    padding: 20px;
    border: 1px solid transparent;
    border-top: 0;
    position: relative;
    top: 1px;
   }
   .blacktitle{
    color: black;
   }
   #map {
       height: 300px;
        width: 500px;
      }
      img{
    width: 25%;
   }
</style>