<script>
import ProjectService from '@/services/ProjectService'
import { Line } from 'vue-chartjs'
export default {
    data () {
    return {
      projectsByMonthAndYear:null,
      labels:[],
      data:[]
    }
  },
  extends: Line,
  mounted () {
      this.getProjectsByMonthAndYear()
      setTimeout(() => {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Number of projects',
          backgroundColor: '#f87979',
          data: this.data
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
     }, 1500)
  },
  methods: {
    async getProjectsByMonthAndYear () {
        const response = await ProjectService.getCountByMonthAndYear()
        this.projectsByMonthAndYear=response.data
        response.data.forEach(element => {
            this.data.push(element.nbr)
            this.labels.push(element._id.month.toString()+'/'+element._id.year.toString())
            //console.log(this.data)
            console.log(this.data.toString())
            console.log(this.labels.toString())
          
              })
        
    }
    
  }
}
</script>