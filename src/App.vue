<template>
    <v-app>
        <div>
            <v-app-bar color="primary" dark>
                <v-app-bar-nav-icon v-on:click="drawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title>狼人杀上帝助手</v-toolbar-title>
                <v-spacer/>
                <v-btn icon v-on:click.stop="dialog = true">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
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
        <div>
            <v-dialog v-model="dialog">
                <v-card>
                    <v-card-title>诚邀开发者</v-card-title>
                    <v-card-text>
                        <v-row justify="center" class="text-center">
                            开发框架: Vue.js + Vuetify
                        </v-row>
                        <v-row justify="center" class="text-center">
                            Email: littlebanana@126.com
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row justify="center">
                            <v-btn v-on:click="dialog = false" color="primary">I KNOW</v-btn>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
            ],
            dialog: false
        }),
    };
</script>
