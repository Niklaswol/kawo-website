import {createStore} from 'vuex'

const store = createStore({
    state: {
        areas: [
            {
                title: 'homePage.areas.auto.title',
                subtitle: 'homePage.areas.auto.subtitle',
                img: 'Plane1.jpg',
                route: '/operations'
            },
            {
                title: 'homePage.areas.comp.title',
                subtitle: 'homePage.areas.comp.subtitle',
                img: 'Plane1.jpg',
                route: '/operations'
            },
            {
                title: 'homePage.areas.avia.title',
                subtitle: 'homePage.areas.avia.subtitle',
                img: 'Plane1.jpg',
                route: '/operations'
            },
        ],
        questions: [
            {
                id: 0,
                title: 'homePage.questions.first.title',
                answer: 'homePage.questions.first.answer',
            },
            {
                id: 1,
                title: 'homePage.questions.second.title',
                answer: 'homePage.questions.second.answer',
            },
            {
                id: 2,
                title: 'homePage.questions.third.title',
                answer: 'homePage.questions.third.answer',
            },
            {
                id: 3,
                title: 'homePage.questions.fourth.title',
                answer: 'homePage.questions.fourth.answer',
            },
            {
                id: 4,
                title: 'homePage.questions.fifth.title',
                answer: 'homePage.questions.fifth.answer',
            },
        ].map(question => ({...question, visible: false})),
    },
    getters: {
        getServices(state) {
            return state.services
        },
        getAreas(state) {
            return state.areas
        },
        getQuestions(state) {
            return state.questions
        }
    },
})

export default store