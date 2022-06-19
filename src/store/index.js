
import {createStore} from "vuex";
import events from '@/store/modules/events'
import * as user from '@/store/modules/user'

export const store = createStore ({
    modules:{
        events,
        user,
    }
})