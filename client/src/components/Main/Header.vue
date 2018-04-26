<template>
<div>
    <div class="navbar-wrapper">
        <div class="navbar-inverse" role="navigation">
            <div class="container">
                <div class="pull-left">
                    <span class="lang">
                        <a href="http://smartfordesign.net/smartend/frontend2">العربية
                        </a>

                    </span>
                </div>
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                </div>
                <!-- Nav Starts -->
                <div class="navbar-collapse collapse ">
                    <ul class="nav navbar-nav navbar-right">

<li><a @click="navigateTo({name :'Index'})">Home</a></li>
<li class="dropdown"><a @click="navigateTo({name :'event'})" class="dropdown-toggle " data-toggle="dropdown" data-hover="dropdown"
                        data-delay="0" data-close-others="true">Events<i
  class="fa fa-angle-down"></i></a>
  <ul class="dropdown-menu">
    <li>
      <a @click="navigateTo({name :'addevent'})">
        <i class="fa fa-ambulance"></i> &nbsp;
        Add Event</a>
    </li>
    <li>
      <a @click="navigateTo({name :'myEvents'})">
        <i class="fa fa-cart-plus"></i> &nbsp;
        My Events</a>
    </li>

  </ul>
</li>
<li class="dropdown">
                            <a href="javascript:void(0)" class="dropdown-toggle " data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="true">Projects <i class="fa fa-angle-down"></i></a>                                       
                            <ul class="dropdown-menu">
                                <li>                         
                                    <router-link :to="{ name: 'projects'}">
                                    <i class="fa fa-book"></i>&nbsp; All Projects</router-link>
                                </li>
                                <li v-if="$store.state.token !== null"> 
                                    <router-link :to="{ name: 'addProject'}">
                                    <i class="fa fa-plus"></i>&nbsp;Add project</router-link>
                                </li>
                                <li v-if="$store.state.token !== null">
                                    <router-link  :to="{ name: 'myProjects'}">
                                    <i class="fa fa-book"></i>&nbsp; My Projects</router-link>                    
                                </li>
                                <li>                         
                                    <router-link :to="{ name: 'projectsMap'}">
                                    <i class="fa fa-map-marker"></i>&nbsp; Map</router-link>  
                                </li>   
                                <li>                         
                                    <router-link :to="{ name: 'projectStats'}">
                                    <i class="fa fa-pie-chart"></i>&nbsp;Stats</router-link>  
                                </li>                                                                                                                       
                            </ul>               
                        </li>
<li><a @click="navigateTo({name :'culture'})">Cultural Spaces</a></li>
<li><a @click="navigateTo({name :''})">Map</a></li>
<li><a @click="navigateTo({name :'contact'})">Contact</a></li>
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="dropdown-toggle " data-toggle="dropdown" data-hover="dropdown"
                                data-delay="0" data-close-others="true">Services <i
                            class="fa fa-angle-down"></i></a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a href="services/topic/5.html">
                                        <i class="fa fa-ambulance"></i> &nbsp;
                                    Nullam mollis dolor</a>
                                </li>
                                <li>
                                    <a href="services/topic/6.html">
                                        <i class="fa fa-cart-plus"></i> &nbsp;
                                    Sample Lorem Text</a>
                                </li>
                                <li>
                                    <a href="services/topic/7.html">
                                        <i class="fa fa-pie-chart"></i> &nbsp;
                                    Gravida tellus suscipit</a>
                                </li>
                                <li>
                                    <a href="services/topic/8.html">
                                        <i class="fa fa-coffee"></i> &nbsp;
                                    Curabitur sit amet era</a>
                                </li>
                            </ul>
                        </li>
                        <li  v-if="$store.state.token === null">
                            <a @click="navigateTo({name :'register'})">Register/Login</a>
                        </li>
                        <li  v-if="$store.state.token !== null">
                            <a @click="logout">Log Out</a>
                        </li>
                    </ul>
                    </div>        <!-- #Nav Ends -->
                </div>
            </div>
        </div>
        <div class="container">
            <!-- Header Starts -->
            <div class="header">
                <a href="http://smartfordesign.net/smartend/frontend2">
                    <img alt=""
                    src="uploads/settings/15125964809207.png">

                </a>
                <ul class="pull-right menu2">

                    <li>
                        <div class="dropdown show">
                            <a class="btn btn-primary menu-btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">For Sale <i class="fa fa-angle-down"></i></a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">


                                <a class="dropdown-item" href="apartment.html">
                                    <i class="fa fa-building-o"></i> &nbsp;
                                Apartment</a>


                                <a class="dropdown-item" href="villa.html">
                                    <i class="fa fa-university"></i> &nbsp;
                                Villa</a>


                                <a class="dropdown-item" href="office.html">
                                    <i class="fa fa-coffee"></i> &nbsp;
                                Office</a>


                                <a class="dropdown-item" href="commercial-store.html">
                                    <i class="fa fa-building"></i> &nbsp;
                                Commercial Store</a>


                                <a class="dropdown-item" href="land.html">
                                    <i class="fa fa-map"></i> &nbsp;
                                Land</a>


                                <a class="dropdown-item" href="hotel-apartment.html">
                                    <i class="fa fa-building-o"></i> &nbsp;
                                Hotel Apartments</a>


                                <a class="dropdown-item" href="hotel-rooms.html">
                                    <i class="fa fa-hotel"></i> &nbsp;
                                Hotel rooms</a>


                                <a class="dropdown-item" href="other-properties.html">
                                    <i class="fa fa-map-o"></i> &nbsp;
                                Other Properties</a>

                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown show">
                            <a class="btn btn-primary menu-btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">For Rent <i class="fa fa-angle-down"></i></a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">


                                <a class="dropdown-item" href="PropertiesForRent/30.html">
                                    <i class="fa fa-building-o"></i> &nbsp;
                                Apartment</a>


                                <a class="dropdown-item" href="PropertiesForRent/31.html">
                                    <i class="fa fa-university"></i> &nbsp;
                                Villa</a>


                                <a class="dropdown-item" href="PropertiesForRent/32.html">
                                    <i class="fa fa-coffee"></i> &nbsp;
                                Office</a>


                                <a class="dropdown-item" href="PropertiesForRent/33.html">
                                    <i class="fa fa-building"></i> &nbsp;
                                Commercial Store</a>


                                <a class="dropdown-item" href="PropertiesForRent/34.html">
                                    <i class="fa fa-map"></i> &nbsp;
                                Land</a>


                                <a class="dropdown-item" href="PropertiesForRent/35.html">
                                    <i class="fa fa-building-o"></i> &nbsp;
                                Hotel Apartments</a>


                                <a class="dropdown-item" href="PropertiesForRent/36.html">
                                    <i class="fa fa-hotel"></i> &nbsp;
                                Hotel Rooms</a>

                            </div>
                        </div>
                    </li>
                </ul>        <div class="pull-right head-contacts">
                <i class="fa fa-phone"></i>  Call Us:
                <div>
                    <a
                    href="call:+(00) 0123456789"><h3 style="direction: ltr"></h3></a>
                </div>
                <div>
                    <span class="top-email"><a
                    href="mailto:info@sitename.com">info@sitename.com</a>
                </span>
            </div>
        </div>
    </div>
    <!-- #Header Starts -->
</div>
</div>
</template>
<script>
import SmarTunisManager from '@/services/SmarTunisManager'
var socket = io.connect('http://localhost:4000');
socket.on('news', function (data) {
console.log(data);
});
export default {
data () {
    return {
        storages: SmarTunisManager.get()
    }
},
    methods : {
        logout(){
             SmarTunisManager.clear()
        this.storages= SmarTunisManager.init()

            this.$store.dispatch('setToken',null)
        this.$store.dispatch('setUser',null)
        this.$store.dispatch('setIsLoggedOut',false)
        this.$router.push({
            name : 'register'
        })
        },
        navigateTo(route){
        this.$router.push(route)
        }
    }
}
</script>
<style scoped></style>
