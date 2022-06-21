<template>
    <div class="EditEventDetails">
       <form class="form_input">
			<div v-for="input in inputs" :key="input.label" class="form_control">
				<label class="form_label">{{ input.label }}</label>
				<input v-model="eventModel[input.model]" type="text" class="form_model" />
			</div>
		</form>
		<button
			@click="updateDetails"
			class="btn">
			Update
		</button>
        <button
          class="btn"
          @click="getBack">
          Get back
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'EditEventDetails',
    props: {
    id: String,
    },
    computed: {
    ...mapGetters(['eventDetails']),
    },
    methods: {
		...mapActions(['updateEvent']),
		updateDetails() {
			this.updateEvent(this.eventModel);
			this.$router.push({ name: 'eventDetails', params: { id: this.eventModel.id } });
		},
        getBack() {
            this.$router.back();
        },
	},
    mounted() {
		if (this.eventDetails) {
			this.eventModel = this.eventDetails;
		} else {
			this.$router.push({ name: 'eventsList' });
		}
	},
    data() {
		return {
			inputs: [
				{ label: 'Title', model: 'title' },
				{ label: 'Date', model: 'date' },
				{ label: 'Time', model: 'time' },
				{ label: 'Location', model: 'location' },
				{ label: 'Description', model: 'description' },
				{ label: 'Organizer', model: 'organizer' },
				{ label: 'Category', model: 'category' },
			],
			eventModel: {
				id: null,
				title: '',
				date: '',
				time: '',
				location: '',
				description: '',
				organizer: '',
				category: '',
				attendees: [{}],
			},
		};
	},
}
    
</script>

<style scoped>
.EditEventDetails {
    display: flex;
    align-items: center;   
    flex-direction: column;
    flex-wrap: wrap;
}
</style>