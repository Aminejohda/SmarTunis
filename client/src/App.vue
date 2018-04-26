<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <page-header/>
    <router-view/>
    <page-footer/>

</div>

</template>

<script>
import PageHeader from '@/components/Main/Header.vue'
import PageFooter from '@/components/Main/Footer.vue'
export default {
  name: 'App',
  components : {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
#app {
 
}
.navbar-inverse {
        background-color: #161d21;
    }
    .lang a {
        background: #1eb6f7;
    }
    .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {
        background-color: #1eb6f7;
    }
    .dropdown-menu {
        background: #1eb6f7;
    }
    .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
        background: #161d21;
    }
    .btn-primary {
        background: #1eb6f7;
    }
    .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
        background-color: #161d21;
        border-color: #161d21;
    }
    .btn-primary{
        color: #fff;
    }
    .subscribe .btn-primary:hover {
        color: #161d21;
    }
    .hot-properties a, .item h4 a {
        color: #161d21;
    }
    .hot-properties a:hover, .item h4 a:hover {
        color: #1eb6f7;
    }

    a {
        color: #1eb6f7;
    }
    a:hover, a:active, a:focus {
        color: #161d21;
    }
    .inside-banner a:hover, .inside-banner a:active, .inside-banner a:focus {
        color: #fff;
    }
    .inside-banner {
        background: #161d21;
    }
    .btn-theme {
        background: #1eb6f7;
    }
    .list-group li a:hover, .list-group li a:active, .list-group li a:focus, .list-group li .active {
        color: #1eb6f7;
    }
    .badge {
        background-color: #1eb6f7;
    }
    .status.visits {
        background: #161d21;
    }
    .status.comments {
        background: #161d21;
    }
    .topic-info .info i {
        background: #161d21;
    }
    .banner-search {
        background: #161d21;
    }

    .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
        background-color: #1eb6f7;
        border-color: #1eb6f7;
    }
    .field-row .badge {
        color: #161d21;
    }
    footer {
        background: #161d21;
    }

    #sub-footer {
        background: #161d21;
    }
    .subscribe .btn-primary {
        background: #1eb6f7;
    }
    .sl-slider-wrapper{
        background: #161d21;
    }
    .dropdown-menu{
        border: 6px solid #1eb6f7;
    }

    .dropdown-menu .dropdown-item:hover, .dropdown-menu .dropdown-item:focus {
        background: #161d21;
    }
    .audioplayer {
        height: 2.5em; /* 40 */
        color: #fff;
        text-shadow: 1px 1px 0 #000;
        border: 1px solid #161d21;
        position: relative;
        z-index: 1;
        background: #161d21;
    }

    @media (max-width: 767px) {
        .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
            color: #1eb6f7;
        }
        .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {
            background-color: #161d21;
        }

    }


</style>
