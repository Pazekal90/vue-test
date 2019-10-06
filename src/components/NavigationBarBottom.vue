<template>
    <v-bottom-navigation
            grow
            shift
            fixed
            :value="activeBtn"
            min-height="60px"
    >
        <v-btn v-for="(item, index) in items" :to="item.href" :key="index">
            <span class="NavigationTitle">{{item.title}}</span>
            <v-icon>{{item.icon}}</v-icon>
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
                    ]
            };
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