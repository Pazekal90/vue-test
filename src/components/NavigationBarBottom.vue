<template>
    <v-bottom-navigation
            grow
            shift
            fixed
            min-height="60px"
    >
        <v-btn v-for="(item, index) in items" :to="item.href" :key="index">
            <span class="NavigationTitle">{{item.title}}</span>
            <v-icon>{{item.icon}}</v-icon>
        </v-btn>
        <v-btn id="login" v-if="!activeUser" v-on:click="login">
            <span class="NavigationTitle" href="#">Login</span>
            <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn id="logout" v-if="activeUser" v-on:click="logout">
            <span class="NavigationTitle" href="#" >Logout</span>
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        name: "NavigationBarBottom",
        data() {
            return {
                items: [
                    {title: "Dashboard", href: "/", icon: "mdi-home-circle"},
                    {title: "Terminkalender", href: "/calendar", icon: "mdi-calendar"},
                    {title: "Benachrichtigungen", href: "/notifications", icon: "mdi-bell-ring"},
                    {title: "Einstellungen", href: "/settings", icon: "mdi-settings"}
                ],
                activeUser: null
            };
        },
        async created () {
            await this.refreshActiveUser()
        },
        watch: {
            // everytime a route is changed refresh the activeUser
            '$route': 'refreshActiveUser'
        },
        methods: {
            login () {
                this.$auth.loginRedirect()
            },
            async refreshActiveUser () {
                this.activeUser = await this.$auth.getUser()
            },
            async logout () {
                await this.$auth.logout()
                await this.refreshActiveUser()
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .v-btn {
        min-height:60px;
    }
    .NavigationTitle {
        margin-top:10px;
    }
</style>