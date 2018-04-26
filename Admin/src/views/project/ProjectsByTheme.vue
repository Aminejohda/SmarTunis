<script>
import ProjectService from '@/services/ProjectService'
import { Pie } from 'vue-chartjs'
export default {
   data () {
    return {
      projectsByTheme:null,
      projectsByMonthAndYear:null,
      labels:[],
      data:[]
    }
  },
  extends: Pie,
   mounted () {
    this.getCountByTheme()
    setTimeout(() => {
              
         
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: this.data
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
     }, 1500)
  },
  methods: {
    async getCountByTheme () {
      const response = await ProjectService.getCountByTheme()
      this.projectsByTheme = response.data
      console.log(response.data)
      response.data.forEach(element => {
            this.data.push(element.nbr)
            this.labels.push(element._id)
            //console.log(this.data)
            console.log(this.data.toString())
            console.log(this.labels.toString())
          
              })
    },
    async getProjectsByMonthAndYear () {
        const response = await ProjectService.getCountByMonthAndYear()
        
    }
    
  }
}
</script>