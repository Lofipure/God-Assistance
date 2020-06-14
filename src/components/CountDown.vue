<template>
    <div>
        <v-card shaped>
            <v-card-text class="text-center title">
                <v-row justify="center">
                    <v-col cols="6">
                        <v-progress-circular rotate="360" v-bind:value="(this.totalTime*10/9).toFixed(1)"
                                             color="#4DB6AC" size="60">
                            {{this.totalTime.toFixed(1)}}
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
                            <v-btn icon v-on:click="this.startMethod" color="#4DB6AC">
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
            totalTime: 90.0,
            interval: "",
            state: true,
            showNum: 90.0
        }),
        methods: {
            pauseMethod() {
                clearInterval(this.interval);
                this.state = true;
                console.log(this.state);
            },
            restartMethod() {
                clearInterval(this.interval);
                this.state = true;
                this.totalTime = 90.0;
            },
            startMethod() {
                console.log(this.state);
                if (this.state) {
                    this.state = false;
                    this.interval = setInterval(() => {
                        if (this.totalTime !== 0) {
                            this.totalTime -= 0.1;
                            console.log((this.totalTime*10/9).toFixed(1));
                        }
                    }, 100);
                }
            }
        }
    }
</script>

<style scoped>

</style>