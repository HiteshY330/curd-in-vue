<template>
  <div class="container" :class="{containerdiv: !formIsValid}">
    <h2>New User</h2>
    <div>
      <form @submit.prevent="ADD()">
        <div class="col-md-12" :class="{ invalid: !name.isValid }">
        <label for="validationCustom01" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          v-model.trim ="name.val"
          @blur="clearValidity('name')"
        />
        <p v-if="!name.isValid">The name field is requried</p>
      </div>
      <div class="col-md-12" :class="{ invalid: !email.isValid }">
        <label for="validationCustom02" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="validationCustom02"
          v-model.trim ="email.val"
          @blur="clearValidity('email')"
        />
        <p v-if="!email.isValid">The email field is requried</p>
      </div>
      <div class="col-md-12" :class="{ invalid: !password.isValid }">
        <label for="validationCustom03" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="validationCustom03"
          v-model.trim ="password.val"
          @blur="clearValidity('password')"
        />
        <p v-if="!password.isValid">The name field is requried</p>
      </div>
      <div class="col-md-12" :class="{ invalid: !country.isValid }">
        <label for="validationCustom0" class="form-label">Country</label>
        <select
          type="select"
          class="form-control"
          id="validationCustom0"
          v-model.trim ="country.val"
          @blur="clearValidity('country')"
        >
          <option class="form-control">India</option>
          <option class="form-control">USA</option>
          <option class="form-control">UK</option>
        </select>
        <p v-if="!country.isValid">The country field is requried</p>
      </div>
      <div class="col-md-12" :class="{ invalid: !gender.isValid }">
         <label for="validationCustom04" class="form-label">Male</label>&nbsp;
         <input
          type="radio"
          v-model.trim ="gender.val"
          value="Male"
          name="gender"
          id="validationCustom04"
          @blur="clearValidity('gender')"
        />&nbsp; 
        <label for="validationCustom05" class="form-label">Female</label>&nbsp;
        <input
          type="radio"
          v-model.trim ="gender.val"
          value="Female"
          name="gender"
          id="validationCustom05"
          @blur="clearValidity('gender')"
        />
        <p v-if="!gender.isValid">The gender is requried</p>
      </div>
      <!--<p v-if="!formIsValid">Error</p>-->
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
       newuser:'',
      name: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },
      country: {
        val: "",
        isValid: true,
      },
      gender: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      key: "",
      user: [],
    };
  },
  
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validform() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === "") {
        this.password.isValid = false;
        this.formIsValid = false;
      }
      if (this.country.val === "") {
        this.country.isValid = false;
        this.formIsValid = false;
      }
      if (this.gender.val === "") {
        this.gender.isValid = false;
        this.formIsValid = false;
      }
    },
    ADD() {
       this.validform();
      if (!this.formIsValid) {
        return;
      }
      const users = {
        id: Math.random(),
        name: this.name.val,
        email: this.email.val,
        password: this.password.val,
        country: this.country.val,
        gender: this.gender.val,
      };
      this.newuser = users;
      axios
        .post(
          "https://vue-form-6d470-default-rtdb.firebaseio.com/user.json",
          this.newuser
        )
        .then((response) => {
          console.log(response);
          this.$router.push({ path: "/user" });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  background-color: #f7f7f7;
}
* {
  box-sizing: border-box;
}

h2 {
  font-weight: 700;
  font-size: 2.3em;
  text-align: center;
  padding-bottom: 20px;
}
.container {
  padding: 20px;
  width: 500px;
  margin-top: 30px;
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
  font-size: 16px;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  border-radius: 10px;
}

button:hover {
  opacity: 1;
}
label {
  font-weight: bold;
}

.invalid p{
  color: red;
}
.invalid input,
.invalid select {
  border: 1px solid red;
}
.containerdiv{
  margin-top: 100px;
}
</style>