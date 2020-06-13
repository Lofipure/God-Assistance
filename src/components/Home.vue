<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="10" class="text-center subtitle-1">
                    目前支持的模式如下
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="6" v-for="(item,i) in pattern" v-bind:key="i">
                    <v-card>
                        <v-card-subtitle class="text-center">{{item.name}}</v-card-subtitle>
                        <v-card-text>
                            <v-row justify="center" class="text-center">
                                {{item.desc}}
                            </v-row>
                            <v-row justify="center" class="text-center">
                                {{item.win}}
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <!--<v-row justify="center">
                <v-col cols="10">
                    <v-card color="primary">
                        <v-card-title>诚邀开发者</v-card-title>
                        <v-card-text>
                            <v-row justify="center" class="text-center">
                                开发框架: Vue.js + Vuetify
                            </v-row>
                            <v-row justify="center" class="text-center">
                                Email: littlebanana@126.com
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>-->
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: () => ({
            pattern: [
                {
                    name: "八人场",
                    desc: "三狼三神两民",
                    win: "屠城"
                },
                {
                    name: "九人场",
                    desc: "三狼三神三民",
                    win: "屠边"
                },
                {
                    name: "十人场",
                    desc: "三狼三神四民",
                    win: "屠边"
                },
                {
                    name: "十一人场",
                    desc: "四狼四神三民",
                    win: "屠边"
                },
                {
                    name: "十二人场",
                    desc: "四狼四神四民",
                    win: "屠边"
                }
            ]
        })
    }
</script>

<style scoped>
</style>