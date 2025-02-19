<template>
  <h1>Member</h1>
  
  <p>{{ memEmail }}</p>
  <p>{{ memName }}</p>
  <p>{{ dutyId }}</p>


</template>

<script>
import Cookies from "js-cookie"; //imporo js-cookie มาใช้งาน
import { jwtDecode } from "jwt-decode"; //ใช้แทน jsonwebtoken เพราะ jsonwebtoken ไม่เข้ากับ Vue.js

export default {
  name: "MainMenu",
  data() {
    return {
      token: "",
      decodedToken: null, //token ที่ถูกแกะแล้ว
      memEmail: null,
      memName: null,
      dutyId: null,
    };
  },
  mounted() {
    this.getCookie(); //เมื่อเริ่ม Component ให้เรียก methods getCookie()
  },
  methods: {
    getCookie() {
      try {
        this.token = Cookies.get("token"); //อ่านค่าจากCookies ชื่อtoken แล้วเอาใส่ตัวแปร token
        // jwt-decode ไม่ใช้ secretkey แกะแต่ส่วน payload - ฝั่งBackend ที่ต้องการความเชื่อถือได้
        this.decodedToken = jwtDecode(this.token);
        console.log(`MainMenu-->${this.decodedToken}`);
        this.memEmail = this.decodedToken.memEmail;
        this.memName = this.decodedToken.memName;
        this.dutyId = this.decodedToken.dutyId;
      } catch (err) {
        console.error(`fail decode token ${err}`);
      }
    },
  },
};
</script>

<style></style>
