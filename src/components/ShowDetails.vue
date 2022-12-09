<template>
<div class="container">
  <h2>Users Data</h2>
  <div class="tablediv">
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Country</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, i) in displayedPosts" :key="data.id">
      <th scope="row">{{i+1}}</th>
      <td>{{data.name}}</td>
      <td>{{data.email}}</td>
      <td>{{data.password}}</td>
      <td>{{data.country}}</td>
      <td>{{data.gender}}</td>
      <td> 
        <button class="btn btn-success" @click="edit(data.id)">Edit</button> &nbsp; 
        <button class="btn btn-danger" @click="Remove(data.id)">Delete</button>
      </td>
    </tr>
    
  </tbody>
</table>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item ">
      <a class="page-link" v-if="page !=1" @click="page--">Previous</a>
    </li>
    <a class="page-link" v-for="pageNo in pages.slice(page-1, page+4)" :key="pageNo"
    @click="page = pageNo">{{pageNo}}</a>
    <li class="page-item">
      <a class="page-link" v-if="page < pages.length" @click="page++">Next</a>
    </li>
  </ul>
</nav>
  </div>
</div>
</template>

<script>
import axios from 'axios';
//import store from '../store/index';
export default {
  data(){
    return{
      users:[],
      page: 1,
			perPage: 3,
			pages: [],
    }
  },
  /*mounted(){
    this.getpost();
  },*/
  methods:{
    getpost(){
      axios.get(`https://vue-form-6d470-default-rtdb.firebaseio.com/user.json`).then((response)=>{
        this.formateUserData(response.data);
      })
    },
    formateUserData(user){
      this.users =[];
      console.log(user)
      for(let key in user){
        this.users.push({ ...user[key], id:key});
      }
      console.log(this.users.reverse())
    },
    Remove(id){
      axios.delete(`https://vue-form-6d470-default-rtdb.firebaseio.com/user/${id}.json`).then((response)=>{
        console.log(response)
      window.location.reload(true);
      })
    },
    edit(id){
      //const editaData = this.users.find((item)=>item.id ===id)
      //console.log(editaData)
      //store.dispatch('EditaData', editaData)
      this.$router.push({path:'/edit', query:{id:id}})
    },
    setPages() {
      let numberOfPages = Math.ceil(this.users.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return users.slice(from, to);
    },

  },
  computed: {
    displayedPosts() {
      return this.paginate(this.users);
    },
  },
  watch: {
    users() {
      this.setPages();
    },
  },
  created() {
    this.getpost();
  },
  /*filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },*/

}
</script>

<style lang="scss" scoped>
body {
	font-family: Montserrat,Arial, Helvetica, sans-serif;
	background-color:#f7f7f7;
  text-align: center;
}
* {box-sizing: border-box}

.container{
 padding: 20px;
  width: 800px;
  margin-top:20px;
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
h2{
		font-weight: 700;
		font-size: 2.3em;
		text-align: center;
    padding-bottom: 20px;
}
.tablediv{
  border: 4px ;
}

</style>