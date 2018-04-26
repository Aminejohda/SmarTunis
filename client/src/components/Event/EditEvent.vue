<template>
  <form class="form-horizontal">
    <fieldset>

      <!-- Form Name -->
      <legend>Edit your Event</legend>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="Title">Title</label>
        <div class="col-md-4">
          <input id="Title" name="Title" type="text" placeholder="Event" class="form-control input-md" required="" v-model="title">

        </div>
      </div>

      <!-- Textarea -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="textarea">Description</label>
        <div class="col-md-4">
          <textarea class="form-control" id="textarea" name="textarea" v-model="description">Describe your Event</textarea>
        </div>
      </div>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="Capacity">Capacity</label>
        <div class="col-md-4">
          <input id="Capacity" name="Capacity" type="number" placeholder="How many?" class="form-control input-md" required="" v-model="capacity">

        </div>
      </div>

      <!-- Text input-->


      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="Fee">Fee</label>
        <div class="col-md-4">
          <input id="Fee" name="Fee" type="number" placeholder="How much?" class="form-control input-md" required="" v-model="fee">

        </div>
      </div>

      <!-- Select Basic -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="eventType" >Event's Type</label>
        <div class="col-md-4">
          <select id="eventType" name="eventType" class="form-control" v-model="eventType">
            <option value="opening">Opening</option>
            <option value="ceramony">Ceramony</option>
          </select>
        </div>
      </div>

      <!-- Select Basic -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="visibility">Visibility</label>
        <div class="col-md-4">
          <select id="visibility" name="visibility" class="form-control" v-model="visiblity">
            <option value="isPublic">Public</option>
            <option value="isPrivate">Private</option>
          </select>
        </div>
      </div>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="startDate">Start Date</label>
        <div class="col-md-4">
          <input id="startDate" name="startDate" type="date" placeholder="when it starts" class="form-control input-md" v-model="startDate">

        </div>
      </div>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="endDate">End Date</label>
        <div class="col-md-4">
          <input id="endDate" name="endDate" type="date" placeholder="when it ends" class="form-control input-md" v-model="endDate">

        </div>
      </div>

      <!-- Button -->
      <div class="form-group">
        <label class="col-md-4 control-label" for="submit"></label>
        <div class="col-md-4">
          <button id="submit" name="submit" class="btn btn-primary" @click="updateEvent">Update</button>
        </div>
      </div>


    </fieldset>
  </form>

</template>

<script>
  import eventsService from '@/services/EventService'

  export default {
        name: "edit-event",
    data () {
      return {
        title: '',
        description: '',
        fee: '',
        capacity: '',
        eventType: '',
        visibility: '',
        startDate: '',
        endDate: '',
      }
    },

    mounted () {
      console.log("loula"+this.$store.state.route.params.id)
      console.log("2eme"+this.$route.params.id)
      this.idEvent = this.$route.params.id;
      this.getEvent()
      console.log(this.getEvent())
    },
    methods: {
      async getEvent () {
        const response = await eventsService.getEvent(this.idEvent)
        console.log(response.data[0].title)

        this.title = response.data[0].title,
        this.description = response.data[0].description,
        this.fee = response.data[0].fee,
        this.capacity = response.data[0].capacity,
        this.eventType = response.data[0].eventType
        this.visibility = response.data[0].visibility
        this.startDate = response.data[0].startDate
        this.endDate = response.data[0].endDate
        // this.$router.push({ name: 'Posts' })
      },
      async updateEvent () {
        await eventsService.updateEvent({
          id: this.$route.params.id,
          title: this.title,
          description: this.description,

      })
        this.$swal(
          'Great!',
          `Your Event has been updated!`,
          'success'
        )
        this.$router.push({ name: 'myEvents' })
      }
    }


  }
</script>

<style scoped>

</style>
