<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-link class="navbar-brand" to="#"></b-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-navbar-nav class="d-md-down-none">
      <b-nav-item class="px-3">Dashboard</b-nav-item>
      <b-nav-item class="px-3"><a>Users</a></b-nav-item>
      <b-nav-item class="px-3"></b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
     

     <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
           <b-nav-item class="d-md-down-none">
        <i class="icon-bell"></i>
        <b-badge pill variant="danger" class="noti">0</b-badge>
      </b-nav-item>
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>Users</strong></b-dropdown-header>
        <div id="addnoti" class="dropdownnotis">
        </div>
      </b-nav-item-dropdown>


      <b-nav-item class="d-md-down-none">
        <i class="icon-list"></i>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-location-pin"></i>
      </b-nav-item>
      <HeaderDropdown/>
    </b-navbar-nav>
    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>
</template>
<!--<a role="menuitem" href="#" target="_self" class="dropdown-item dropdownnoti">mohamed amine</a>-->
<script>
var socket = io.connect('http://localhost:4000');
socket.on('news', function (data) {
  var x = document.getElementsByClassName("noti");
  var namenoti = document.getElementsByClassName("dropdownnoti");
  //var addnoti = document.getElementsByClassName("addnoti");

  //parseInt(x[0].innerText)+1
    
console.log(data);
if(data ==="faild profiling"){
  if(document.getElementsByClassName("dropdownnotis")["0"].children.length == 0){
    x[0].innerHTML = parseInt(x[0].innerText)+1
     var node = document.createElement("a"); 
    node.className  = "dropdown-item dropdownnoti"; 
    node.setAttribute("role", "menuitem");               // Create a <li> node
    //node.setAttribute("href", "#");               // Create a <li> node
  var textnode = document.createTextNode("faild to get facebook");         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("addnoti").appendChild(node);
  }
    
}else {
  for (var i = 0; i < data.length; i++) {
    x[0].innerHTML = parseInt(x[0].innerText)+1
    var node = document.createElement("a"); 
    node.className  = "dropdown-item dropdownnoti"; 
    node.setAttribute("role", "menuitem");               // Create a <li> node
    //node.setAttribute("href", "#");               // Create a <li> node
var textnode = document.createTextNode(data[i].FirstName+" "+data[i].LastName);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("addnoti").appendChild(node);
    //namenoti["0"].innerHTML = data[i].FirstName
   console.log(data[i].FirstName)
  }
  
}
});
  import HeaderDropdown from './HeaderDropdown.vue'

  export default {
    name: 'c-header',
    components: {
      HeaderDropdown
    },
    data(){
      return{
        notification : 0
      }
    },
    methods: {
      sidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-hidden')
      },
      sidebarMinimize (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-minimized')
      },
      mobileSidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-mobile-show')
      },
      asideToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('aside-menu-hidden')
      }
    }
  }
</script>
