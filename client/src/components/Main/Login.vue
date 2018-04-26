<template>
<div>
  <div class="inside-banner">
    <div class="container">
      <span class="pull-right"><a><i class="fa fa-home"></i></a> /
      Login
    </span>
    <h2>
    Login
    </h2>
  </div>
</div>

<div class="container">
 
  <div class="listing spacer">
    <div class="row">
      <div class="col-lg-4">
        <aside class="right-sidebar">
        </aside>
      </div>                               
       <div class="col-lg-8">
      <div class='row'>
       <div class="col-lg-7">
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
  <a id="login-text" href="#" class="authtype panel">
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

</div>
            <div class="col-lg-12">
              <div class="col-lg-12 fields">
                
                <div class="row field-row">
                  <div class="col-lg-4">
                    Email  :
                  </div>
                  <div class="col-lg-8">
                    <input type="email" name="username" v-model="usernamel" placeholder="Email">
                  </div>
                </div>
                
                
                
                <div class="row field-row">
                  <div class="col-lg-4">
                    Password :
                  </div>
                  <div class="col-lg-8">
                <input type="password" name="password" v-model="passwordl" placeholder="Password">
                  </div>
                </div>

                <div class="row field-row">
                  <div class="col-lg-4">Picture :</div>
                  <div class="col-lg-8">
                  </div>



         <div id="camera-wrap">
    <div id="camera">
      <div style="width: 100%; height: 100%; position: relative;">
        <div style="width: 100%; height: 100%; box-sizing: border-box; overflow: hidden; text-align: center; padding: 128px 96px; position: absolute; z-index: 3; display: none;">
          Please allow camera access when prompted by the browser.<br><br>Look for camera icon around your address bar.
        </div>
        <div style="width: 380px; height: 640px; overflow: hidden; position: absolute; z-index: 1;">
          <video id="videol" style="transform: scaleX(-1); position: relative; width: 700px; height: 600px; left: -129px; top: 0px;"></video>
          <canvas id="canvasl" style="transform: scaleX(-1); position: relative; width: 700px; height: 600px; left: -129px; top: 0px;"></canvas>
        </div>
        <div style="width: 100%; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 2;"></div>
      </div>
    </div>
    <button id="capturel" class="btn">
      <span id="shutter-filling"></span>
    </button>
    <div id="confirmation-wrap" >
      <button id="deny" class="prompt-btn icon-btn btn"><i class="material-icons">close</i></button>
      <button id="accept" class="prompt-btn icon-btn btn"><i class="material-icons">done</i> </button>
    </div>
  </div>






                </div>
              </div>
            </div>
          </div>
          
      
          <button @click="login" class="btn btn-primary"> Login </button>

            <p><router-link to="Register" class="text-center">Register a new membership</router-link></p>
            <a href="http://localhost:3000/Auth/facebook"  class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using Facebook</a>
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
import AuthentifacationService from '@/services/AuthentifacationService'
import SmarTunisManager from '@/services/SmarTunisManager'
export default {
  data () {
    return {
      msg: 'Welcome Login',
      usernamel:'',
      passwordl:'',
opcaml : true,
      storages: SmarTunisManager.init()
    }
  },
  methods: {
     caml(){

this.opcaml = false
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
            document.getElementById("canvasl").style.display = "block";
        context.drawImage(video, 0,0,300,300)
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
console.log(dataURL);
        const res = await AuthentifacationService.login({
          img : dataURL,
            username: this.usernamel,
            password: this.passwordl,

        })
        if(this.storages === null || this.storages === undefined){
         this.storages = SmarTunisManager.get()
          console.log("if")
          this.storages.push({
          user :res.data.user,
          token :res.data.token,
          isUserLoggedIn : true
        })
        SmarTunisManager.set(this.storages)
        }else{
          console.log("else")
        this.storages.push({
          user :res.data.user,
          token :res.data.token,
          isUserLoggedIn : true
        })
        SmarTunisManager.set(this.storages)
        }

      
        this.$store.dispatch('setToken',res.data.token)
        this.$store.dispatch('setUser',res.data.user)
        this.$store.dispatch('setIsLoggedIn',true)
        if(res.data.user !== undefined){
            this.$router.push({
            name : 'profile'
        })
              
        }else {
            console.log("wrong login");
        }
    }
  },
  watch: {
    storages: {
      handler: function(payload) {
        SmarTunisManager.set(payload);
      },
      deep: true
    }
  },

  created: function() {
    SmarTunisManager.init();
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    max-height: 640px;
}
#camera {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #eee;
    height: 100%;
    width: 100%;
    margin: 0;
}
#capturel {
    width: 5.25rem;
    height: 5.25rem;
    border-radius: 50%;
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -30px;
    padding: 0;
    z-index: 10;
    margin-bottom: 80px;
    /* border: #c0392b solid 6px; */
    border: #ffffff solid 6px;
    background-color: transparent;
}
#shutter-filling {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    margin-top: 3px;
    border-radius: 50%;
    background-color: #e74c3c;
}
.icon-btn {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    padding: 0;
}
#accept {
    background-color: #2ecc71;
}
#deny {
    background-color: #e74c3c;
}
#camera-wrap #confirmation-wrap {
    z-index: 101;
}
#confirmation-wrap {
    position: absolute;
    bottom: 30px;
    left: 0;
    width: 100%;
}
</style>