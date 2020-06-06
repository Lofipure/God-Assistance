<template>
    <div>
        <div class="actions">
            <v-row justify="center">
                <v-col cols="11">
                    <v-btn width="100%" color="success" v-on:click="addNewItem">天黑请闭眼</v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col v-for="(item,i) in item" v-bind:key="i" cols="12">
                    <v-card>
                        <v-card-title>第{{i+1}}回合</v-card-title>
                        <v-card-text>
                            <v-row justify="center">
                                <v-col cols="4">
                                    <v-text-field label="狼人杀害" type="number" v-model="item.wolfKill"
                                                  v-on:change="judgeDead(i)"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="女巫解救" type="number" v-model="item.witchSave"
                                                  v-on:change="judgeDead(i)"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="女巫毒害" type="number" v-model="item.witchKill"
                                                  v-on:change="judgeDead(i)"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="预言家查验" type="number" v-model="item.godSee"
                                                  v-on:change="judgeDead(i)"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="守卫守护" type="number" v-model="item.guardianProtect"
                                                  v-on:change="judgeDead(i)"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="放逐" type="number" v-model="item.peopleKill"
                                                  v-on:change="judgeDead(i)"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="猎人杀害" type="number" v-model="item.hunterKill"
                                                  v-on:change="judgeDead(i)"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <v-row justify="center" class="roles">
            <v-col cols="4" v-for="index in 11" v-bind:key="index">
                <v-card class="roleCard" height="70px">
                    <v-row justify="center">
                        <v-col cols="11">
                            <v-badge
                                    v-bind:icon="playerStatus[index] === true ? 'mdi-map-marker-check':'mdi-map-marker-alert'"
                                    v-bind:color="playerStatus[index] === true ? 'success' : 'red'">
                                <v-select v-bind:items="roles" v-bind:label="index.toString()"
                                          class="selectRole" v-bind:disabled="!playerStatus[index]"></v-select>
                            </v-badge>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Eleven",
        data: () => ({
            roles: ["狼人", "预言家", "女巫", "猎人", "村民", "守卫"],
            item: [],
            playerStatus: [true, true, true, true, true, true, true, true, true, true, true, true]
        }),
        methods: {
            addNewItem() {
                let newObj = {
                    wolfKill: "",
                    witchKill: "",
                    witchSave: "",
                    peopleKill: "",
                    hunterKill: "",
                    guardianProtect: "",
                    godSee: ""
                };
                this.item.push(newObj);
            },
            judgeDead(index) {
                let forJudge = this.item[index];
                if (forJudge.guardianProtect === forJudge.witchSave) {
                    this.playerStatus[forJudge.guardianProtect] = false;
                }

                if (forJudge.guardianProtect === forJudge.witchKill) {
                    this.playerStatus[forJudge.guardianProtect] = false;
                }

                if (forJudge.wolfKill !== '') {
                    if (forJudge.witchSave === forJudge.wolfKill) {
                        if (forJudge.guardianProtect === forJudge.witchSave) {
                            this.playerStatus[forJudge.wolfKill] = false;
                        } else {
                            this.playerStatus[forJudge.wolfKill] = true;
                        }
                    } else if (forJudge.guardianProtect === forJudge.wolfKill) {
                        this.playerStatus[forJudge.wolfKill] = true;
                    } else {
                        this.playerStatus[forJudge.wolfKill] = false;
                    }
                }
                if (forJudge.witchKill !== '') {
                    this.playerStatus[forJudge.witchKill] = false;
                }
                if (forJudge.hunterKill !== '') {
                    this.playerStatus[forJudge.hunterKill] = false;
                }
                if (forJudge.peopleKill !== '') {
                    this.playerStatus[forJudge.peopleKill] = false;
                }
                this.$mount(".roleCard");
            }
        }
    };
</script>

<style scoped>
</style>