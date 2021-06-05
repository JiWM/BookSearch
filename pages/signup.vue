<template>
  <div class="sm:w-2/3 md:w-1/2 lg:w-2/5 mx-auto">
    <div class="container flex w-full justify-center mt-12">
      <form method="post" @submit.prevent="signup" class="w-full">
        <div class="h-auto w-full space-y-5 pt-10 pb-10 pl-14 pr-14 bg-gray-200 flex flex-col justify-center items-center">
          <input v-model="id" type="text" class="w-full h-12 bg-white rounded-md pl-5" placeholder="ID"/>
          <input v-model="username" type="text" class="w-full h-12 bg-white rounded-md pl-5" placeholder="name"/>
          <input v-model="email" type="text" class="w-full h-12 bg-white rounded-md pl-5" placeholder="email"/>
          <input v-model="password" type="password" class="w-full h-12 bg-white rounded-md pl-5" placeholder="PW"/>
          <button type="submit" class="bg-gray-500 w-full h-12 rounded-md text-white font-semibold tracking-widest">SIGNUP</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:'',
      username: '',
      email: '',
      password: '',
    }
  },
  
  methods: {
    async signup() {
      try {        
        let signup = await this.$axios.post('signup', {
            id:this.id,
            name: this.username,
            email: this.email,
            password: this.password
        })
        console.log(signup)

        await this.$axios.post('login', {
            id:this.id,
            password: this.password
        }).then((response) => {
		    console.log(response.data)
        var userid=response.data.user_id
        var usertoken=response.data.access_token
        this.$store.commit('loginid', userid)
        this.$store.commit('logintoken', usertoken)
        this.$store.dispatch('loggedIn')
	      });


        this.$router.go(-1)
      } catch (e) {
        console.error(e.response);
      }
    }
  }
}
</script>
