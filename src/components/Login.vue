<template>
<main  class="container-fluid coloraBgP">
    <div id="loginform" class="logCentro">
        <form @submit.prevent="log" >
            <div class="col-md-12 col-lg-12 form-inline alturaLog">
                <div class="col-md-6 col-lg-6 logcentro">
               <i class="fas fa-user-lock fa-10x imgcolor"></i>
                </div>
                <div class="col-md-6 col-lg-6 ">
                    <div class="col-auto">
                        <label class="sr-only" for="usr">Username</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-unlock"></i></div>
                            </div>
                            <input type="text" class="form-control" id="usr" v-model="username" placeholder="Username">
                        </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <label class="sr-only" for="pss">Password</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-asterisk"></i></div>
                                </div>
                                <input type="password" class="form-control col-md-12 col-md-12" v-model="pass" 
                                id="pss" placeholder="Pass">
              </div>                 
                            </div>
                            <div class="btnLog">
                                <div class="col-auto">
                                    <button type="submit" title="LOGIN" class="btn btn-primary  btnformat"> 
                                        <i class="fas fa-user"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
        </form>
    </div>
</main>
</template>
<script>
export default {
  data: function() {
    return {
      username: "",
      pass: ""
    };
  },
  methods: {
    log() {
      if (this.username == "admin" && this.pass == "admin") {
        this.pass='practiac';  
        this.$router.push("principal");
      }
    }
  }
};
</script>

<style>
.btnformat {
  width: 60px;
}
.logcentro {
  justify-content: center;
  display: flex;
}
.imgcolor {
  color: beige;
}
</style>
