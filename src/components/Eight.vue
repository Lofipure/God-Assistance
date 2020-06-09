<template>
    <div>
        <!--
            1. 女巫第只能第一晚自救
            2. 猎人毒杀不能开枪
            3. 不能同守一个人
        -->
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
                                    <v-badge icon="mdi-emoticon-kiss"
                                             v-bind:color="witchSaveStatus === true ? 'success' : 'red'">
                                        <v-text-field label="女巫解救" type="number" v-model="item.witchSave"
                                                      v-on:change="judgeDead(i)"
                                                      v-bind:disabled="!witchSaveStatus"></v-text-field>
                                    </v-badge>
                                </v-col>
                                <v-col cols="4">
                                    <v-badge icon="mdi-emoticon-cry"
                                             v-bind:color="witchKillStatus === true ? 'success' : 'red'">
                                        <v-text-field label="女巫毒害" type="number" v-model="item.witchKill"
                                                      v-on:change="judgeDead(i)"
                                                      v-bind:disabled="!witchKillStatus"></v-text-field>
                                    </v-badge>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="预言家查验" type="number" v-model="item.godSee"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="放逐" type="number" v-model="item.peopleKill"
                                                  v-on:change="judgeDead(i)"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-badge v-bind:icon="hunterStatus === true ? '':'mdi-emoticon-cry'"
                                             v-bind:color="hunterStatus === true ? '':'red'">
                                        <v-text-field label="猎人杀害" type="number" v-model="item.hunterKill"
                                                      v-on:change="judgeDead(i)"
                                                      v-bind:disabled="!hunterStatus"></v-text-field>
                                    </v-badge>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="当选警长" type="number" v-model="police"
                                                  v-on:change="policeEmit($event)"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <v-row justify="center" class="roles">
            <v-col cols="4" v-for="index in 8" v-bind:key="index">
                <v-card class="roleCard" height="70px">
                    <v-row justify="center">
                        <v-col cols="10">
                            <v-badge icon="mdi-shield-star" left v-model="playerPoliceStatus[index]" class="police"
                                     color="orange">
                                <v-badge v-bind:icon="playerStatus[index] === true ? 'mdi-emoticon':'mdi-emoticon-dead'"
                                         v-bind:color="playerStatus[index] === true ? 'success' : 'red'">
                                    <v-select v-bind:items="roles" v-bind:label="index.toString()"
                                              class="selectRole" v-bind:disabled="!playerStatus[index]"></v-select>
                                </v-badge>
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
        name: "Eight",
        data: () => ({
            roles: ["狼人", "预言家", "女巫", "猎人", "村民"],
            item: [],
            playerStatus: [true, true, true, true, true, true, true, true, true],
            playerPoliceStatus: ["", "", "", "", "", "", "", "", ""],
            witchKillStatus: true,
            witchSaveStatus: true,
            hunterStatus: true,
            police: ''
        }),
        methods: {
            policeEmit(e) {
                this.playerPoliceStatus = ["", "", "", "", "", "", "", "", ""];
                this.playerPoliceStatus[e] = true;
                // console.log(this.playerPoliceStatus);
                this.$mount(".police");
            },
            addNewItem() {
                let newObj = {
                    wolfKill: "",
                    witchKill: "",
                    witchSave: "",
                    peopleKill: "",
                    hunterKill: "",
                    godSee: ""
                };
                this.item.push(newObj);
            },
            judgeDead(index) {
                let forJudge = this.item[index];
                if (forJudge.wolfKill !== '') {
                    if (forJudge.witchSave === forJudge.wolfKill) {
                        this.witchSaveStatus = false;
                        this.playerStatus[forJudge.wolfKill] = true;
                    } else {
                        this.playerStatus[forJudge.wolfKill] = false;
                    }
                }
                if (forJudge.witchKill !== '') {
                    this.playerStatus[forJudge.witchKill] = false;
                    this.witchKillStatus = false;
                }
                if (forJudge.hunterKill !== '') {
                    this.playerStatus[forJudge.hunterKill] = false;
                    this.hunterStatus = false;
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