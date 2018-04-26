import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Main/Index'
import Redirect from '@/components/Main/redirect'
import Register from '@/components/Main/Register'
import Login from '@/components/Main/Login'
import Profile from '@/components/User/Profile'
import EditProfile from '@/components/User/EditProfile'
import Culture from '@/components/Culture/Culture'
import Contact from '@/components/Main/Contact'
import NewSpace from '@/components/Culture/NewSpace'
import Projects from '@/components/project/Projects'
import AddProject from '@/components/project/AddProject'
import MySpaces from '@/components/Culture/MyCultSpaces'
import MyProjects from '@/components/project/MyProjects'
import EditProject from '@/components/project/EditProject'
import ProjectsMap from '@/components/project/ProjectsMap'
import ProjectDetail from '@/components/project/ProjectDetail'
import ShowSpace from '@/components/Culture/showSpace'
import EditSpace from '@/components/Culture/EditSpace'
import Event from '@/components/Event/Events'
import AddEvent from '@/components/Event/AddEvent'
import EventDetails from '@/components/Event/EventDetails'
import Categories from '@/components/Culture/Categories'
import myEvents from '@/components/Event/MyEvents'
import UpdateEvent from '@/components/Event/EditEvent'
import Interests from '@/components/Event/Interests'
import ProjectStats from '@/components/project/ProjectStats'
import FacebookScraping from '@/components/User/FacebookScraping'
import ProjectAds from '@/components/project/ProjectAds'




Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'home',
      component: Index
    },

    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/profile/edit',
      name: 'editProfile',
      component: EditProfile
    },
    {
      path: '/culture',
      name: 'culture',
      component: Culture
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/newspace',
      name: 'newspace',
      component: NewSpace
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/projects/add',
      name: 'addProject',
      component: AddProject
    },
    {
      path: '/projects/stats',
      name: 'projectStats',
      component: ProjectStats
    },
    {
      path: '/fbScraping',
      name: 'facebookScraping',
      component: FacebookScraping
    },
    {
      path: '/myspaces',
      name: 'myspaces',
      component: MySpaces
    },
    {
      path: '/show/:spotId',
      name: 'show',
      component: ShowSpace
    },
    {
      path: '/edit/:spotId',
      name: 'edit',
      component: EditSpace
    },
    {
      path: '/myProjects',
      name: 'myProjects',
      component: MyProjects
    },
    {
      path: '/editProject',
      name: 'editProject',
      component: EditProject
    },
    {
      path: '/projectsMap',
      name: 'projectsMap',
      component: ProjectsMap
    },
    {
      path: '/projects/detail',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/events',
      name: 'event',
      component: Event
    },
    {
      path: '/events/addevent',
      name: 'addevent',
      component: AddEvent
    },
    {
      path: '/events/details/:end',
      name: 'event-details',
      component: EventDetails
    },
    {
      path: '/cultures/:categorie',
      name: 'categorie',
      component: Categories,

    },
    {
      path: '/redirect/:token',
      name: 'redirect',
      component: Redirect
    },
    {
      path: '/myEvents',
      name: 'myEvents',
      component: myEvents
    }
    ,
    {
      path: '/updateEvent/:id',
      name: 'UpdateEvent',
      component: UpdateEvent
    }
    ,
    {
      path: '/interests',
      name: 'Interests',
      component: Interests
    },
    {
      path: '/projectAds',
      name: 'projectAds',
      component: ProjectAds
    }
  ]
})
