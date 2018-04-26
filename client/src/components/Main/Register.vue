<template>
<div>
  <div class="loaderdiv" v-show="prealod">
    <div class='loader-container'>
  <div class='outer-circle'>
    <div class='inner-circle'></div>
  </div>
</div>
  </div>
  <div v-show="!prealod">
  <div class="inside-banner">
    <div class="container">
      <span class="pull-right"><a href="#"><i class="fa fa-home"></i></a> /
      Register-Login
    </span>
    <h2>
    Register/Login
    </h2>
  </div>
</div>
<div class="container">
  <div class="listing spacer">
    <div class="row">
              
      
       <div class="col-lg-5" v-show="aftersignup">
        <div class="item">
          <div class="image-holder">
              <img src="uploads/topics/15124722222408.jpg"
              alt=""/>

          </div>
          <h4>
            Register
          </h4>
<select v-model="Role" id="soflow">
  <option :value="Select" >Select ...</option>
  <option :value="Citizen" >Citizen</option>
  <option :value="Company" >Company</option>
</select>
          <div class="row" v-show="regform">
            <div class="col-lg-12">
              <div class="col-lg-12 fields">



                <div class="row field-row">
                  <div class="col-lg-4">
                    Name :
                  </div>
                  <div class="col-lg-8">
                    <input type="text" name="name" v-model="name" placeholder="Name">
                  </div>
                </div>


                <div class="row field-row" v-show="usercitizen">
                  <div class="col-lg-4">
                   Last Name :
                  </div>
                  <div class="col-lg-8">
                    <input type="text" name="lastname" v-model="lastname" placeholder="Last Name">

                  </div>
                </div>


                <div class="row field-row">
                  <div class="col-lg-4">
                    Email :
                  </div>
                  <div class="col-lg-8">
                    <input type="email" name="email" v-model="email" placeholder="Email">
                  </div>
                </div>
                 <div class="row field-row" v-show="!usercitizen">
                  <div class="col-lg-4">
                    Address :
                  </div>
                  <div class="col-lg-8">
                    <textarea name="address" v-model="address" placeholder="Address"></textarea>
                  </div>
                </div>
                 <div class="row field-row" v-show="!usercitizen">
                  <div class="col-lg-4">
                    Fax :
                  </div>
                  <div class="col-lg-8">
                    <input type="text" name="fax" v-model="fax" placeholder="Fax">
                  </div>
                </div>
                 <div class="row field-row" v-show="!usercitizen">
                  <div class="col-lg-4">
                    Telephone :
                  </div>
                  <div class="col-lg-8">
                    <input type="text" name="tel" v-model="tel" placeholder="Telephone">
                  </div>
                </div>


                <div class="row field-row">
                  <div class="col-lg-4">
                    Password :
                  </div>
                  <div class="col-lg-8">
                <input type="password" name="password" v-model="password" placeholder="Password">
                  </div>
                </div>

                <div class="row field-row">
                  <div class="col-lg-4">
                    Re-type Password :
                  </div>
                  <div class="col-lg-8">
                <input type="password" name="password2" v-model="password2" placeholder="Re-type Password">

                  </div>
                </div>

                <div class="row field-row">
                  <div class="col-lg-4" ><div v-show="opcam && usercitizen">Picture :</div><br><br>Upload Your Picture :</div>
                  <div class="col-lg-8">
                    <button  @click="cam" id="opencam" v-show="opcam && usercitizen" class="btn btn-warning">Open Camera </button>
                    <br> <br>  
                    <input type="file" @change="processFile($event)" id="files"  v-show="uplpicc" >
                    <br>
                  </div>
                </div>
              

    <div id="camera-wrap"  v-show="camregister">
    <div id="camera"  v-show="camregister">
      <div style="width: 100%; height: 100%; position: relative;"  v-show="camregister">
        <div style="width: 380px; height: 530px; overflow: hidden; position: absolute; z-index: 1; border-radius :50px"  v-show="camregister">
          <video id="video" style="transform: scaleX(-1); position: relative; width: 700px; height: 600px; left: -129px; top: -35px;" v-show="vid"></video>
          <canvas id="canvas" style="transform: scaleX(-1); position: relative; width: 700px; height: 550px; left: -129px; top: 0px;" v-show="canv"></canvas>
        </div>
      </div>
    </div>
   <button id="capture" v-show="cap">
      <span id="shutter-filling"></span>
    </button>
  </div>

              </div>
            </div>
          </div>


          <button @click="register" class="btn btn-primary" v-show="regform"> Register </button>
          <p></p>
        <a v-show="regform" href="http://localhost:3000/Auth/facebook"  class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using Facebook</a>

        </div>
      </div>
       <div class="col-lg-2">
       </div>
       <div class="col-lg-2" v-if="!aftersignup">
       </div>
       <div class="col-lg-5">
        <div class="item">
          <div class="image-holder">
              <img src="uploads/topics/15124722222408.jpg"
              alt=""/>
            
          </div>
          <h4>
            Login
          </h4>
          
          <div class="row">
             <div class="panel-wrap">
  <a id="login-text" @click="textshow"  v-show="optext" class="authtype panel">
    <h2 class="feature-icon">
      <i class="material-icons">text_fields</i>
    </h2>
    <h4 class="section-title">Text</h4>
  </a>
  <a id="login-face" @click="caml" v-show="opcaml" class="authtype panel">
    <h2 class="feature-icon">
      <i class="material-icons">face</i>
    </h2>
    <h4 class="section-title">Face</h4>
  </a>
  <a id="login-face" href="http://localhost:3000/Auth/facebook" class="authtype panel">
    <h2 class="feature-icon">
      <i class="material-icons">F</i>
    </h2>
    <h4 class="section-title">Facebook</h4>
  </a>

</div>
            <div class="col-lg-12">
              <div class="col-lg-12 fields">
                <div class="row field-row" v-show="usern">
                  <div class="col-lg-4">
                    Email  :
                  </div>
                  <div class="col-lg-8">
                    <input type="email" name="username" v-model="usernamel" placeholder="Email">
                  </div>
                </div>
                
                
                
                <div class="row field-row" v-show="passn">
                  <div class="col-lg-4">
                    Password :
                  </div>
                  <div class="col-lg-8">
                <input type="password" name="password" v-model="passwordl" placeholder="Password">
                  </div>
                </div>
                <div class="row field-row" v-show="piclog">
                  <div class="col-lg-4">Picture :</div>
                  <div class="col-lg-8">
                  </div>



         <div id="camera-wrap">
    <div id="camera">
      <div style="width: 100%; height: 100%; position: relative;">
        <div style="width: 380px; height: 530px; overflow: hidden; position: absolute; z-index: 1; border-radius :50px">
          <video id="videol" style="transform: scaleX(-1); position: relative; width: 700px; height: 600px; left: -129px; top: -35px;"></video>
          <canvas id="canvasl" style="transform: scaleX(-1); position: relative; width: 700px; height: 550px; left: -129px; top: 0px;"></canvas>
        </div>
      </div>
    </div>
    <button id="capturel" class="btn">
      <span id="shutter-filling"></span>
    </button>
  </div>

                </div>
              </div>
            </div>
          </div>
          
      
          <button @click="login" class="btn btn-primary" v-show="btnlog"> Login </button>
        </div>
      </div>
    
</div>
</div>
</div>

</div>
</div>
</template>
<script>

import AuthentifacationService from '@/services/AuthentifacationService'
  import SmarTunisManager from '@/services/SmarTunisManager'
  let ccc ="helo"
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
export default {
data () {
return {
  prealod : false,
  aftersignup :true,
  regform :false,
  address:'',
  fax:'',
  tel:'',
  Role :'Select',
  Citizen :'Citizen',
  Company :'Company',
  Select:"Select",
usercitizen : false,
msg: 'Welcome Register',
email:'',
name:'',
camregister: false,
lastname:'',
password:'',
password2:'',
canv : false,
vid : false,
cap : false,
opcam : true,
uplpicc : true,
usernamel:'',
passwordl:'',
opcaml : true,
piclog : false,
usern : false,
passn : false,
optext : true,
btnlog : false,
imgea : '',
isuploadfile : false,
storages: SmarTunisManager.init()
}
},

methods: {
  processFile(event) {
    this.isuploadfile = true;
      var file = document.querySelector('input[type="file"]').files[0];
    this.imgea = getBase64(file)
    //this.img = event.target.files[0]
  },

  textshow(){
    this.usern = true
    this.passn = true
    this.btnlog = true
    this.optext = false
this.opcaml = false
  },
       caml(){
    this.usern = true
    this.passwordl="STRING_VALUESmarTunis"
    this.optext = false
    this.btnlog = true
this.opcaml = false
this.piclog = true
    var video = document.getElementById('videol');
      var canvas = document.getElementById('canvasl');
      var context = document.getElementById('canvasl').getContext('2d');
      canvas.width = 300
      canvas.height = 400
      var vendorURL = window.URL
      navigator.getMedia = navigator.getUserMedia;
      navigator.getMedia({
        video : true,
        audio : false
      },function(stream){
        video.src = vendorURL.createObjectURL(stream)
        video.play()
        document.getElementById('capturel').addEventListener('click',function(){
            document.getElementById("videol").style.display = "none";
            document.getElementById("capturel").style.display = "none";
            document.getElementById("canvasl").style.display = "block";
        context.drawImage(video, 0,0,280,380)
        video.pause();
        video.src="";
        var track = stream.getTracks()[0];  // if only one media track
// ...
track.stop();
      })
      },function(err){
        console.log(err);
      })
  
 
    // here is the Vue code
},
  async login(){
      var dataURL = canvasl.toDataURL("image/png");
console.log(this.passwordl);
        const res = await AuthentifacationService.login({
          img : dataURL,
            username: this.usernamel,
            password: this.passwordl,

        })
        if(res.data.user.Role ==="User"){
           this.storages = SmarTunisManager.get()
          console.log("if")
          this.storages.push({
          user :res.data.user,
          token :res.data.token,
          isUserLoggedIn : true
        })
          console.log()
          responsiveVoice.speak("Welcome "+res.data.user.FirstName+" to Smartunis");
          
        SmarTunisManager.set(this.storages)
        
        console.log("eee")

        console.log(this.storages[0].isUserLoggedIn)
        console.log("this.storages")

      
        this.$store.dispatch('setToken',this.storages[0].token)
        this.$store.dispatch('setUser',this.storages[0].user)
        this.$store.dispatch('setIsLoggedIn',this.storages[0].isUserLoggedIn)
          this.$router.push({
            name : 'profile'
        })
      }else if(res.data.user.Role ==="Company"){
        window.location.replace("http://localhost:8081")
      } else {
            console.log("wrong login");
        }
    },
async register(){
  this.prealod = true
if(this.isuploadfile)
{
  var dataURL = ccc
}else{
  var dataURL = canvas.toDataURL("image/png");
}
//console.log(dataURL);
if(this.usercitizen){
 const res = await AuthentifacationService.register({
  img : dataURL,
email: this.email,
name: this.name,
lastname: this.lastname,
password2: this.password2,
password: this.password
}) 
 //this.$store.dispatch('setToken',res.data.token)
//this.$store.dispatch('setUser',res.data.user)
if (res.data ==="barcha wjouh fel taswira" || res.data ==="taswira mballa3") {
  console.log('famma 8alta')
}else{
  this.$router.push({
            name : 'register'
        })
console.log(res.data.token);
  this.aftersignup = false
  this.prealod = false

}
}else{
 const res = await AuthentifacationService.register({
  img : dataURL,
email: this.email,
name: this.name,
adr: this.address,
tel: this.tel,
fax: this.fax,
password: this.password,
role : "Company"


})
//this.$store.dispatch('setToken',res.data.token)
//this.$store.dispatch('setUser',res.data.user)
if (res.data ==="barcha wjouh fel taswira" || res.data ==="taswira mballa3") {
  console.log('famma 8alta')
}else{
  this.$router.push({
            name : 'register'
        })
  this.aftersignup = false
console.log(res.data.token);
this.prealod = false
} 
}





},
 cam(){
this.camregister = true
this.vid = true
this.opcam = false
this.uplpicc = false
this.cap = true

  var othervid;
  var othercanv ;
    var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = document.getElementById('canvas').getContext('2d');
      var vendorURL = window.URL
      canvas.width = 300
      canvas.height = 400
      navigator.getMedia = navigator.getUserMedia;
      navigator.getMedia({
        video : true,
        audio : false
      },function(stream){
        video.src = vendorURL.createObjectURL(stream)
        video.play()
        document.getElementById('capture').addEventListener('click',function(){
            document.getElementById("video").style.display = "none";
            document.getElementById("canvas").style.display = "block";
            document.getElementById("capture").style.display = "none";
       context.drawImage(video, 0,0,280,380)
        video.pause();
        video.src="";
        var track = stream.getTracks()[0];  // if only one media track
track.stop();
      })
      },function(err){
        console.log(err);
      })
}
},

  watch: {
    storages: {
      handler: function(payload) {
        SmarTunisManager.set(payload);
      },
      deep: true
    },
    Role: function(test) {
      console.log(test)
      if(test==="Citizen") {this.usercitizen = true
       this.regform = true}
        if(test==="Company") {this.usercitizen = false
       this.regform = true}
    }
  },


  created: function() {
    SmarTunisManager.init();
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn .btn-flat{
 border-radius: 0;
        box-shadow: none;
    border-width: 1px;
}
.btn-block {
    display: block;
    width: 100%;
}
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  margin-top: 5px;
}
.btn .btn-flat{
 border-radius: 0;
        box-shadow: none;
    border-width: 1px;
}
.btn-block {
    display: block;
    width: 100%;
}
.btn-facebook {
    color: #fff;
    background-color: #3b5998;
}
.panel-wrap a.panel .feature-icon i {
    font-size: 6rem;
}
.panel-wrap a.panel {
    outline: 2px solid rgba(0, 0, 0, 0.08);
    padding: 1rem;
    background-color: #fff;
    color: #242424;
    display: inline-block;
    margin: .5rem;
}
.panel-wrap a.panel .feature-icon {
    margin: 0;
}
.listing div.item h4 {
     padding:0px
}



#camera-wrap {
    position: relative;
    display: inline-block;
    width: initial;
    height: initial;
    margin: 0;
    width: 100%;
    height: 100vh;
    max-width: 480px;
    max-height: 530px;
}
#camera {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
}
#capturel , #capture{
    width: 5.25rem;
    height: 5.25rem;
    border-radius: 50%;
    position: absolute;
    bottom: 60px;
    left: 50%;
    margin-left: -30px;
    padding: 0;
    z-index: 10;
    border: #ffffff solid 6px;
    background-color: transparent;
}
#shutter-filling {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #e74c3c;
}
.icon-btn {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    padding: 0;
}
input[type=text], input[type=email], input[type=password]{
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 1.8rem;
    margin: 0 0 20px 0;
    padding: 0;
    box-shadow: none;
    box-sizing: content-box;
    transition: all 0.3s;
}


select#soflow, select#soflow-color {
   -webkit-appearance: button;
   -webkit-border-radius: 2px;
   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
   -webkit-padding-end: 20px;
   -webkit-padding-start: 2px;
   -webkit-user-select: none;
   background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
   background-position: 97% center;
   background-repeat: no-repeat;
   border: 1px solid #AAA;
   color: #555;
   font-size: inherit;
   margin: 20px;
   overflow: hidden;
   padding: 5px 10px;
   text-overflow: ellipsis;
   white-space: nowrap;
   width: 300px;
}
.loader-container {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #000;
}

.loader-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.outer-circle {
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 0px #fff;
  animation: animateOuterCircle cubic-bezier(0.4, 0, 0.2, 1) 2s infinite;
}

.inner-circle {
  position: absolute;
  top: calc(50% - 55px);
  left: calc(50% - 55px);
  width: 110px;
  height: 110px;
  background-color: #000;
  border-radius: 50%;
  box-shadow: 0px 0px 0px #000 inset;
  animation: animateInnerCircle cubic-bezier(0.4, 0, 0.2, 1) 2s infinite;
}

@keyframes animateOuterCircle {
  0% {
    width: 110px;
    height: 110px;
    top: calc(50% - 55px);
    left: calc(50% - 55px);
    box-shadow: 0px 0px 0px #fff;
  }
  45% {
    width: 150px;
    height: 150px;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
    box-shadow: 0px 0px 10px #fff, 0px 0px 12px #fff;
  }
  90% {
    width: 150px;
    height: 150px;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
    box-shadow: 0px 0px 0px #fff;
  }
  100% {
    width: 110px;
    height: 110px;
    top: calc(50% - 55px);
    left: calc(50% - 55px);
    box-shadow: 0px 0px 0px #fff;
  }
}
@keyframes animateInnerCircle {
  0% {
    width: 115pxpx;
    height: 115pxpx;
    top: calc(50% - 57.5pxpx);
    left: calc(50% - 57.5pxpx);
    box-shadow: 0px 0px 0px #000 inset;
  }
  45% {
    width: 110px;
    height: 110px;
    top: calc(50% - 55px);
    left: calc(50% - 55px);
    box-shadow: 0px 0px 4px #fff inset, 0px 0px 8px #fff inset;
  }
  99% {
    width: 180px;
    height: 180px;
    top: calc(50% - 90px);
    left: calc(50% - 90px);
    box-shadow: 0px 0px 0px #000 inset;
  }
  100% {
    width: 115pxpx;
    height: 115pxpx;
    top: calc(50% - 57.5pxpx);
    left: calc(50% - 57.5pxpx);
    box-shadow: 0px 0px 0px #000 inset;
  }
}
.loaderdiv{
  padding-top: 100px;
  padding-bottom: 150px;
}
</style>
