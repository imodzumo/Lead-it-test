<template>
    <v-container class="mx-auto">
        <v-row class="justify-center">
            <v-col cols="12" class="d-flex justify-center">
                <v-card-title>Telegram table</v-card-title>
            </v-col>
            <v-col cols="6">
                <div class="pb-4">
                    <add-bot-dialog @bot-added="getTableData"></add-bot-dialog>
                </div>
                <v-simple-table
                        fixed-header
                        height="500px"
                >
                    <template>
                        <thead>
                        <tr>
                            <th class="text-center subtitle-2 black--text">Name</th>
                            <th class="text-center subtitle-2 black--text">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                                v-for="row in tableData"
                                :key="row.name"
                                class="text-center"
                        >
                            <td>{{ row.name}}</td>
                            <td>
                                <v-btn
                                        @click="deleteBot(row.name)"
                                        color="error"
                                        dark
                                        rounded
                                        fab
                                        small
                                        icon
                                >
                                    <v-icon>delete</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>

            </v-col>
        </v-row>


    </v-container>
</template>

<script>

    import AddBotDialog from '../Dialogs/AddBotDialog';

    export default {
        name: "TelegramTable",
        components:{AddBotDialog},
        data() {
            return {
                tableData: {}
            }
        },
        methods: {
            deleteBot() {

            },
            getTableData(data) {
                console.log(data);
                this.tableData = data;
            }
        },
        created() {
            this.getTableData();
        }
    }
</script>

<style scoped>

</style>