<template>
    <div>
        <v-card shaped>
            <v-card-text class="text-center title">
                <v-row justify="center">
                    <v-col cols="6">
                        <v-progress-circular rotate="360" v-bind:value="this.totalTime*10/9" color="success" size="60">
                            {{this.totalTime}}
                        </v-progress-circular>
                    </v-col>
                    <v-col cols="6">
                        <v-card-actions class="align-center">
                            <v-btn icon v-on:click="this.pauseMethod" color="warning">
                                <v-icon>mdi-pause</v-icon>
                            </v-btn>
                            <v-btn icon v-on:click="this.restartMethod" color="red">
                                <v-icon>mdi-restart</v-icon>
                            </v-btn>
                            <v-btn icon v-on:click="this.startMethod" color="success">
                                <v-icon>mdi-play</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

    </div>
</template>

<script>
    export default {
        name: "CountDown",
        data: () => ({
            totalTime: 90,
            interval: null
        }),
        methods: {
            pauseMethod() {
                clearInterval(this.interval);
            },
            restartMethod() {
                clearInterval(this.interval);
                this.totalTime = 90;
            },
            startMethod() {
                this.interval = setInterval(() => {
                    this.totalTime--;
                }, 1000);
            }
        }
    }
</script>

<style scoped>

</style>