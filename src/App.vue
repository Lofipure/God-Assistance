<template>
    <v-app>
        <div>
            <v-app-bar color="primary" dark>
                <v-app-bar-nav-icon v-on:click="drawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title>狼人杀上帝助手</v-toolbar-title>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list nav>
                    <v-list-item-group>
                        <v-list-item to="/home">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>主页</v-list-item-title>
                        </v-list-item>
                        <v-list-item v-for="(item,i) in pattern" v-bind:key="i" v-bind:to="item.route">
                            <v-list-item-icon>
                                <v-icon>mdi-gamepad-square-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{item.name}}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
            <v-container>
                <CountDown/>
                <router-view></router-view>
            </v-container>
        </div>
    </v-app>
</template>

<script>
    import CountDown from "./components/CountDown";

    export default {
        name: 'App',
        components: {
            "CountDown": CountDown
        },
        data: () => ({
            drawer: false,
            pattern: [
                {
                    name: "八人场",
                    route: '/eight'
                },
                {
                    name: "九人场",
                    route: '/nine'
                },
                {
                    name: "十人场",
                    route: 'ten'
                },
                {
                    name: "十一人场",
                    route: 'eleven'
                },
                {
                    name: "十二人场",
                    route: 'twelve'
                }
            ]
        }),
    };
</script>
