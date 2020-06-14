<template>
    <div>
        <div class="actions">
            <v-expansion-panels popout>
                <v-expansion-panel v-for="(item,i) in item" v-bind:key="i">
                    <v-expansion-panel-header>第{{i+1}}回合
                        <template v-slot:actions>
                            <v-icon>$expand</v-icon>
                        </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row justify="center">
                            <v-col cols="4">
                                <v-text-field label="狼人杀害" type="number" v-model="item.wolfKill" color="#4DB6AC"
                                              v-on:change="judgeDead(i)"></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-badge icon="mdi-emoticon-kiss"
                                         v-bind:color="witchSaveStatus === true ? '#4DB6AC' : 'red'" overlap>
                                    <v-text-field label="女巫解救" type="number" v-model="item.witchSave"
                                                  v-on:change="judgeDead(i)" color="#4DB6AC"
                                                  v-bind:disabled="!witchSaveStatus"></v-text-field>
                                </v-badge>
                            </v-col>
                            <v-col cols="4">
                                <v-badge icon="mdi-emoticon-cry"
                                         v-bind:color="witchKillStatus === true ? '#4DB6AC' : 'red'" overlap>
                                    <v-text-field label="女巫毒害" type="number" v-model="item.witchKill"
                                                  v-on:change="judgeDead(i)" color="#4DB6AC"
                                                  v-bind:disabled="!witchKillStatus"></v-text-field>
                                </v-badge>
                            </v-col>
                            <v-col cols="4">
                                <!--<v-text-field label="预言家查验" type="number" v-model="item.godSee"></v-text-field>-->
                                <v-badge
                                        v-bind:color="item.prophetCheck === null ? '':(item.prophetCheck === true ? 'red':'#4DB6AC')"
                                        overlap
                                        v-bind:icon="item.prophetCheck === null ? '' : (item.prophetCheck === true ? 'mdi-shield-alert' : 'mdi-shield-check')">
                                    <v-text-field label="预言家查验" type="number" v-model="item.prophetCheckTemp"
                                                  color="#4DB6AC"
                                                  v-on:change="judgeWolf($event)"></v-text-field>
                                </v-badge>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field label="守卫守护" type="number" v-model="item.guardianProtect" color="#4DB6AC"
                                              v-on:change="judgeDead(i)"></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field label="放逐" type="number" v-model="item.peopleKill" color="#4DB6AC"
                                              v-on:change="judgeDead(i)"></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-badge v-bind:icon="hunterStatus === true ? '':'mdi-emoticon-cry'"
                                         v-bind:color="hunterStatus === true ? '':'red'" overlap>
                                    <v-text-field label="猎人杀害" type="number" v-model="item.hunterKill"
                                                  v-on:change="judgeDead(i)" color="#4DB6AC"
                                                  v-bind:disabled="!hunterStatus"></v-text-field>
                                </v-badge>
                            </v-col>
                            <v-col cols="4">
                                <v-badge v-bind:icon="wolfKingStatus === true ? '':'mdi-emoticon-cry'"
                                         v-bind:color="wolfKingStatus === true ? '':'red'" overlap>
                                    <v-text-field label="狼王杀害" type="number" v-model="item.wolfKingKill"
                                                  v-on:change="judgeDead(i)" color="#4DB6AC"
                                                  v-bind:disabled="!wolfKingStatus"></v-text-field>
                                </v-badge>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field label="当选警长" type="number" v-model="police" color="#4DB6AC"
                                              v-on:change="policeEmit($event)"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-row justify="center">
                <v-col cols="11">
                    <v-btn width="100%" color="#4DB6AC" v-on:click="addNewItem" dark>天黑请闭眼</v-btn>
                </v-col>
            </v-row>
        </div>

        <v-row justify="center" class="roles">
            <v-col cols="4" v-for="index in 12" v-bind:key="index">
                <v-card class="roleCard" height="70px">
                    <v-row justify="center">
                        <v-col cols="11">
                            <v-badge icon="mdi-shield-star" left v-model="playerPoliceStatus[index]" class="police"
                                     color="orange">
                                <v-badge v-bind:icon="playerStatus[index] === true ? 'mdi-emoticon':'mdi-emoticon-dead'"
                                         v-bind:color="playerStatus[index] === true ? '#4DB6AC' : 'red'">
                                    <v-select v-bind:items="roles" v-bind:label="index.toString()" color="#4DB6AC"
                                              class="selectRole" v-model="playerRole[index]"></v-select>
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
        name: "Twelve",
        data: () => ({
            roles: ["狼人", "狼王", "预言家", "女巫", "猎人", "守卫", "村民"],
            item: [],
            playerStatus: [true, true, true, true, true, true, true, true, true, true, true, true, true],
            playerPoliceStatus: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
            playerRole: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
            witchSaveStatus: true,
            witchKillStatus: true,
            hunterStatus: true,
            police: "",
            // prophetCheck: 1,
            wolfKingStatus: true
        }),
        methods: {
            policeEmit(e) {
                this.playerPoliceStatus = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
                this.playerPoliceStatus[e] = true;
                // console.log(this.playerPoliceStatus);
                this.$mount(".police");
            },
            addNewItem() {
                let newObj = {
                    wolfKill: '',
                    witchKill: '',
                    witchSave: '',
                    peopleKill: '',
                    hunterKill: '',
                    guardianProtect: '',
                    godSee: '',
                    wolfKingKill: '',
                    prophetCheck: null,
                    prophetCheckTemp: "",
                };
                this.item.push(newObj);
                // this.prophetCheck = 1;
            },
            judgeDead(index) {
                let forJudge = this.item[index];
                if (forJudge.witchSave !== '') {
                    this.witchSaveStatus = false;
                }
                if (forJudge.witchKill !== '') {
                    this.witchKillStatus = false;
                }
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
                    this.hunterStatus = false;
                    this.playerStatus[forJudge.hunterKill] = false;
                }
                if (forJudge.wolfKingKill !== '') {
                    this.wolfKingStatus = false;
                    this.playerStatus[forJudge.wolfKingKill] = false;
                }
                if (forJudge.peopleKill !== '') {
                    this.playerStatus[forJudge.peopleKill] = false;
                }
                this.$mount(".roleCard");
            },
            /*            judgeWolf(index) {
                            this.prophetCheck = this.playerRole[index] === "狼人" || this.playerRole[index] === "狼王";
                        },*/
            judgeWolf(index) {
                this.item[this.item.length - 1].prophetCheck = this.item[this.item.length - 1].prophetCheckTemp;
                this.item[this.item.length - 1].prophetCheck = (this.playerRole[index] === "狼人" || this.playerRole[index] === "狼王");
            }
        },
        watch: {
            playerRole: {
                handler(newV, oldV) {
                    console.log("new", newV);
                    console.log("old", oldV);
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    .actions {
        margin-top: 20px;
    }
</style>