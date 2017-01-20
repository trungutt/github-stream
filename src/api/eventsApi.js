import axios from 'axios';

export default class EventsApi {
    static getAllEvents() {
        return axios.get('https://api.github.com/events');
    }
}
