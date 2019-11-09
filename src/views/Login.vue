<template>
  <v-form id="formLogin" v-model="valid">
    <div class="text-xs-center">
      <v-layout pa-2>
        <v-flex>
          <div class="cabecalho animated fadeIn delay-1s mt-6">
            <img src="@/assets/logo_softplan.png" />
          </div>
          <v-layout justify-center class="subHeaderCabecalho animated fadeIn delay-1s">
            <span>Log Central</span>
          </v-layout>

          <v-layout align-center justify-center row>
            <v-flex xs10 lg3 class="px-4 margin-to-top animated fadeInLeft delay-1s">
              <v-text-field
                outlined
                label="Usuario"
                color="#004B8B"
                v-model="user"
                prepend-inner-icon="person"
                clearable
                @click:clear="limparForm"
                :rules="[rules.required]"
              />
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center row>
            <v-flex xs10 lg3 class="px-4 animated fadeInRight delay-1s">
              <v-text-field
                outlined
                v-model="password"
                label="Senha"
                color="#004B8B"
                prepend-inner-icon="vpn_key"
                :append-icon="show ? 'visibility' : 'visibility_off'"
                @click:append="show = !show"
                :type="show ? 'text' : 'password'"
                :rules="[rules.required, rules.min]"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout justify-center row>
            <v-btn type="submit" color="#004B8B" outlined class="animated fadeIn delay-1s">Entrar</v-btn>
          </v-layout>

          <v-layout justify-center row mt-4 class="animated fadeIn delay-1s">
            <a class="mr-2" href="/passwordrecovery">Esqueceu a senha?</a>  | 
            <a class="ml-2" href="/signup">Registrar-se</a>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
  </v-form>
</template>

<script>
export default {
  methods: {
    limparForm() {
      this.password = "";
    }
    // login(e) {
    //   e.preventDefault();
    //   if (this.loading || !this.valid) return;
    //   this.loading = true;
    //   this.$auth.newLogin(this.user, this.password, err => {
    //     if (err && err.code == "invalid_grant") {
    //       this.color = "#ffffff";
    //       this.text = "Usuário ou senha incorreto.";
    //       this.snackbar = true;
    //       console.log("Error", err);
    //     } else if (err) {
    //       this.color = "#ffffff";
    //       this.text = "Ocorreu um erro, por favor tente novamente mais tarde.";
    //       this.snackbar = true;
    //       console.log("Error", err);
    //     }
    //     this.loading = false;
    //   });
    // }
  },
  data() {
    return {
      valid: null,
      snackbar: false,
      text: "",
      color: "",
      show: false,
      user: null,
      password: "",
      loading: false,
      rules: {
        required: value => !!value || "Campo Obrigatorio",
        min: v => (v && v.length >= 8) || "Minimo de 8 caracteres"
      }
    };
  }
};
</script>

<style>
.cabecalho {
  font-size: 50px;
  margin-top: 150px;
  letter-spacing: 2px;
  width: 500px;
  height: 138;
  margin: auto;
}
.subHeaderCabecalho{
  font-size: 24px;
}
.snackBarTxt {
  color: #4a55c2 !important;
  caret-color: #4a55c2 !important;
}
.icon-cabecalho {
  font-size: 40px !important;
  padding-right: 4px;
  padding-bottom: 10px;
}
.margin-to-top {
  margin-top: 50px;
}
.margin-to-bottom {
  margin-top: 160px;
}
.overflow {
  overflow-y: hidden;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: transparent;
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>

<style scoped>
a {
  color: white;
}
</style>
