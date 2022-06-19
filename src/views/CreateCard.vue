<template>
  <div class="EventCard__container">
		<h1 class="EventCard__tittle">Create your card of event</h1>
		<form class="form_input">
			<div v-for="input in inputs" :key="input.label" class="form_control">
				<label class="form_label">{{ input.label }}</label>
				<input v-model="eventModel[input.model]" type="text" class="form_model" />
			</div>
		</form>
		<button
			@click="createEvents"
			class="btn">
			Create event
		</button>
	</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'CreateCard',
  methods: {
		...mapActions(['createEvent']),
		createEvents() {
			this.createEvent(this.eventModel);
			this.$router.push({ name: 'eventsList' });
		},
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
};
</script>

<style>
.EventCard__container {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
}
.form_input {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
}

.form_control {
  text-align: center;
  margin: 10px 10px;
  padding: 15px;
}
.form_control label {
  font-size: 20px;
  display: block;
}
.form_control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
  overflow: auto;
  border: 1px solid steelblue;
  border-radius: 5px;
}
</style>
