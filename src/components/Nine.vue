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
                                    <v-text-field label="狼人杀害" type="number" v-model="item.wolfKill"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="女巫解救" type="number" v-model="item.witchSave"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="女巫毒害" type="number" v-model="item.witchKill"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="放逐" type="number" v-model="item.peopleKill"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field label="猎人杀害" type="number" v-model="item.hunterKill"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <v-row justify="center" class="roles">
            <v-col cols="4" v-for="index in 9" v-bind:key="index">
                <v-card class="roleCard" height="70px">
                    <v-row justify="center">
                        <v-col cols="11">
                            <v-select v-bind:items="roles" v-bind:label="index.toString()"
                                      class="selectRole"></v-select>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Nine",
        data: () => ({
            roles: ["狼人", "预言家", "女巫", "猎人", "村民"],
            item: [],
        }),
        methods: {
            addNewItem() {
                let newObj = {
                    wolfKill: '',
                    witchKill: '',
                    witchSave: '',
                    peopleKill: '',
                    hunterKill: '',
                };
                this.item.push(newObj);
            }
        }
    }
</script>

<style scoped>

</style>