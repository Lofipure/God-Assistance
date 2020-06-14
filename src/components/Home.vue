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
                        <v-card-text class="textName">
                            <v-row justify="center" class="text-center">
                                {{item.desc}}
                            </v-row>
                            <v-row justify="center" class="text-center">
                                {{item.win}}
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="actionsName">
                            <v-row justify="center">
                                <v-col cols="10" class="colName">
                                    <v-btn v-bind:to="item.route" color="#4DB6AC" width="100%" dark>开始</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
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
                    win: "屠城",
                    route: "/eight"
                },
                {
                    name: "九人场",
                    desc: "三狼三神三民",
                    win: "屠边",
                    route: "/nine"
                },
                {
                    name: "十人场",
                    desc: "三狼三神四民",
                    win: "屠边",
                    route: "/ten"
                },
                {
                    name: "十一人场",
                    desc: "四狼四神三民",
                    win: "屠边",
                    route: "/eleven"
                },
                {
                    name: "十二人场",
                    desc: "四狼四神四民",
                    win: "屠边",
                    route: "/twelve"
                }
            ],

        })
    }
</script>

<style scoped>
    .colName {
        padding: 0;
    }
    .actionsName {
        padding-top: 0;
    }
    .textName {
        padding-bottom: 2px;
    }
</style>