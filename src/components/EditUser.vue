<template>
<div class="container">
  <h2>Edit User</h2>
  <div class="div">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        v-model="newuser.name"
        id="exampleInputEmail1"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        v-model="newuser.email"
        id="exampleInputEmail1"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        v-model="newuser.password"
        id="exampleInputPassword1"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Country</label>
      <select class="form-control" v-model="newuser.country" :value="newuser.country" required >
        <option class="form-control">India</option>
        <option class="form-control">USA</option>
        <option class="form-control">UK</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="male"> Male </label>&nbsp;
      <input type="radio" v-model="newuser.gender" value="Male" id="male" name="gender" required />&nbsp; 
      <label for="female"> Female </label>&nbsp;
      <input type="radio" v-model="newuser.gender" value="Female" id="female" name="gender" required />&nbsp;
    </div>
    <button type="submit" @click="UpdateUser()" class="btn btn-success">Update</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      newuser: {
        id:Math.random(),
        name: "",
        email: "",
        password: "",
        country: "",
        gender: "",
      },
    };
  },
  /*computed:{
    Edit(){
        return this.$store.getters.getEditData;
    }
  },*/
   mounted(){
    this.getpost();
    console.log(this.newuser)
    
  },
  methods: {
    async getpost(){
      const id = new URLSearchParams(window.location.search).get('id');
      await axios.get(`https://vue-form-6d470-default-rtdb.firebaseio.com/user/${id}.json`).then((response)=>{
       this.formateUserData(response.data);
      })
    },
    formateUserData(user){
      this.newuser = user;
      //console.log(this.users)
      
      },
    UpdateUser(){
      const id = new URLSearchParams(window.location.search).get('id');
        axios.put(`https://vue-form-6d470-default-rtdb.firebaseio.com/user/${id}.json`,this.newuser).then((response)=>{
            console.log(response);
            this.$router.push({path:'/user'})
        });
    }
    
  },
  
};
</script>

<style lang="scss" scoped>
body {
	font-family: Montserrat,Arial, Helvetica, sans-serif;
	background-color:#f7f7f7;
}
* {box-sizing: border-box}

h2{
		font-weight: 700;
		font-size: 2.3em;
		text-align: center;
    padding-bottom: 20px;
}
.container{
  padding: 20px;
  width: 500px;
  margin-top:30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  border-radius: 10px;
  background: white;
  -webkit-box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);
  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);
}
button {
  background-color: #0eb7f4;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
	font-size:16px;
	font-family: Montserrat,Arial, Helvetica, sans-serif;
	border-radius:10px;
}

button:hover {
  opacity:1;
}
label{
  font-weight: bold;
}

</style>