import Eight from "./components/Eight";
import Nine from "./components/Nine";
import Ten from "./components/Ten";
import Eleven from "./components/Eleven";
import Twelve from "./components/Twelve";
import Home from "./components/Home";

export default {
    routes: [
        {
            path: '/eight',
            component: Eight
        },
        {
            path: '/nine',
            component: Nine
        },
        {
            path: '/ten',
            component: Ten
        },
        {
            path: '/eleven',
            component: Eleven
        },
        {
            path: '/twelve',
            component: Twelve
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        }
    ],
    mode: 'hash'
}