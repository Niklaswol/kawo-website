import {createStore} from 'vuex'

const store = createStore({
    state: {
        services: [
            {
                title: 'homePage.services.onboard.title',
                subtitle: 'homePage.services.onboard.subtitle',
                img: 'Plane1.jpg'
            },
            {
                title: 'homePage.services.flex.title',
                subtitle: 'homePage.services.flex.subtitle',
                img: 'Plane1.jpg'
            },
            {
                title: 'homePage.services.charter.title',
                subtitle: 'homePage.services.charter.title',
                img: 'Plane1.jpg'
            },
        ],
        areas: [
            {
                title: 'homePage.areas.auto.title',
                subtitle: 'homePage.areas.auto.title',
                img: 'Plane1.jpg'
            },
            {
                title: 'homePage.areas.logistic.title',
                subtitle: 'homePage.areas.logistic.subtitle',
                img: 'Plane1.jpg'
            },
            {
                title: 'homePage.areas.proto.title',
                subtitle: 'homePage.areas.proto.subtitle',
                img: 'Plane1.jpg'
            },
        ]
    },
    getters: {
        getServices(state) {
            return state.services
        },
        getAreas(state) {
            return state.areas
        }
    },
})

export default store