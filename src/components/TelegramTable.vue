<template>
    <v-container class="mx-auto">
        <v-row class="justify-center">
            <v-col cols="12" class="d-flex justify-center">
                <v-card-title>Telegram table</v-card-title>
            </v-col>
            <v-col cols="12" sm="12" md="6">
                <div class="pb-4">
                    <add-bot-dialog></add-bot-dialog>
                </div>
                <v-card>
                    <v-simple-table
                            fixed-header
                            height="500px"
                    >
                        <template>
                            <thead>
                            <tr>
                                <th class="text-center title black--text">Name</th>
                                <th class="text-center title black--text">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="row in tableData"
                                    :key="row.id"
                                    class="text-center"
                            >
                                <td>
                                    <update-bot-dialog :bot="row"></update-bot-dialog>
                                </td>
                                <td>
                                    <v-btn
                                            @click="deleteBot(row.id)"
                                            color="error"
                                            dark
                                            rounded
                                            fab
                                            small
                                            icon
                                    >
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import AddBotDialog from '../Dialogs/AddBotDialog';
    import UpdateBotDialog from '../Dialogs/UpdateBotDialog';

    export default {
        name: "TelegramTable",
        components:{
            AddBotDialog,
            UpdateBotDialog
        },
        computed: {
            tableData() {
                return this.$store.state.botsTableData;
            }
        },
        methods: {
            deleteBot(data) {
                this.$store.commit('deleteBot', data);
            },
        },
    }
</script>

<style scoped>

</style>