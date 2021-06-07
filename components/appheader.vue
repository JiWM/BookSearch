<template>
  <header class="flex border-gray-500 p-3 justify-between align-middle">
    <nuxt-link to="/"><div class="text-gray-800 text-2xl font-bold">BOOKLAMP</div></nuxt-link>
    <div class="text-gray-400">
      <div v-if='isAuthenticated'>
        Welcome, {{loggedInUser}} | <button @click="logout">logout</button> | <nuxt-link to="/bookshelf">bookshelf</nuxt-link>
      </div>
      <div v-else>
        <nuxt-link to="/login">login</nuxt-link> | <nuxt-link to="/signup">signup</nuxt-link> | <nuxt-link to="/bookshelf">bookshelf</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name:'appHeader',

    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods:{
    logout(){
        this.$store.commit('logout')
        
        var current = this.$route.name;
        if (current=='bookshelf')
          {this.$router.go()}
        
      }
    }
    
}
</script>