<template>
<div>
    <div v-if="todoEvent" class="event__details">
        <div class="event__id"><h1>Event</h1>{{"#"+todoEvent.id}}</div>
        <div class="event__title" >{{" " +todoEvent.title}}</div>
        <div><span>To do:</span>{{" " +todoEvent.description}}</div>
        <div><span>Where: </span>{{" " +todoEvent.location }}</div>
        <div><span>When: </span>{{" " +todoEvent.date }}</div>
        <div><span>Time:</span>{{" " +todoEvent.time }}</div>
        <div><span>Organizer:</span>{{" " +todoEvent.organizer}}</div>
        <div><span>Category:</span>{{" " +todoEvent.category}}</div>
        <div><span>Attendees:</span>{{" " + attendees()}}</div>
    </div>
  </div>
  
</template>

<script>
import store from '../mocks/store';
export default {
    name: "EventDetails",
    props: {
        id: String,
    },
    data() {
        return {
            todoEvent: null,
        }
    },
    created() {
        const todoEvent = store.events.find(event => event.id == this.$route.params.id)
        if (todoEvent) {
            this.todoEvent = todoEvent
        }
    },
    methods: {
        attendees() {
            return this.todoEvent.attendees.map((member) => member.name).join(', ')
        }
    }
}
</script>

<style scoped>
.event__details {
    align-content: center;
    font-size: 18px;
}
span {
    color: steelblue;
    font-size: 20px;
}
.btn {
    margin-left: 0;
}
.event__title {
    text-align: center;
    font-size: 26px;
}
.event__id {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
</style>