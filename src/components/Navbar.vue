<template>
  <div>
    <v-toolbar dark color="indigo">
        <v-toolbar-side-icon class="hidden-md-and-up white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>BTM CV Uploader</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
            <router-link 
                v-for="item in items" 
                :key="item.title"
                :to="item.url"
            >
                <v-btn flat> {{ item.title }} </v-btn>
            </router-link>
        </div>
    </v-toolbar>
    <div class="hidden-md-and-up">           
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list class="pa-1">
                <v-list-tile avatar>
                <v-list-tile-avatar>
                    <img src="https://randomuser.me/api/portraits/men/85.jpg">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>John Leider</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <router-link
                    v-for="item in items"
                    :key="item.title"
                    :to="item.url"
                >
                    <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                    </v-list-tile>
                </router-link>
            </v-list>
        </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        msg: String
    },

    data () {
        return {
            drawer: null,
            items: [
                { title: 'Home', icon: 'dashboard', url: '/' },
                // { title: 'About', icon: 'question_answer', url: '/about' },
                { title: 'Upload CV', icon: 'exit_to_app', url: '/login' },
                // { title: 'register', icon: 'account_circle', url: '/register' }
            ]
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
    color: #000000
}
</style>
