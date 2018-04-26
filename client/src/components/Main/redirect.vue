<template>
</template>

<script>
import AuthentifacationService from '@/services/AuthentifacationService'
import SmarTunisManager from '@/services/SmarTunisManager'
export default{
	data () {
    return {
      msg: 'Welcome Login',
      username:'',
      password:'',
      storages: SmarTunisManager.init()
    }
  },
  async mounted(){
  	var path =(this.$store.state.route.fullPath).toString()
		var token =path.substr(path.lastIndexOf('/')+1, path.length) ;
        const res = await AuthentifacationService.redirect(token)
        console.log(res)
        if(this.storages === null || this.storages === undefined){
          responsiveVoice.speak("Welcome "+res.data.user.FirstName+" to Smartunis");
          
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

<style scoped>
</style>