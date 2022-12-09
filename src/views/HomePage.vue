<template>
  <div>

    <!-- <input ref="file" v-on:change="handleFileUpload()"  type="file"> -->
    <input ref="imagesFile"   type="file" accept="image/*">
    <button @click="sendRequest">send</button>

    <button @click="getImageRequest">getImage</button>
    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
  </div>
</template>
  
<script>
import axios from "axios";
import { ref } from "vue";


export default {
  setup() {

    const imagesFile = ref(null);
    // const sendRequest = async () => {
    //   console.log("imagesFile",imagesFile.value.files)
    //   const boss = {
    //     name: "sharvi",
    //     age: "25",
    //     image: imagesFile.value
    //   };
    //   const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: "JWT fefege...",
    //   };
    //   console.log("boss", boss)
    //   await axios
    //     .post(
    //       "http://localhost:3000/uploader/saveImage",
    //       JSON.stringify(boss),
    //       {
    //         headers: headers,
    //       }
    //     )
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error));
    //   console.log("selected file button",imagesFile.value);
    // };

    const sendRequest = async () => {
      console.log("imagesFile",typeof(imagesFile.value.files[0]))
      
      const headers = {
        'Content-Type': 'Object',
      };
      console.log("boss")
      await axios
        .post(
          "http://localhost:3000/uploader/saveImage",
          imagesFile.value.files[0]
          ,
          {
            headers: headers,
          }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    };

    const getImageRequest = async () => {
      await axios
        .get("http://localhost:3000/uploader/getImage/sfq")
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log("selected file button");
    };

    return {
      imagesFile,
      sendRequest,
      getImageRequest,
    };
  },
};
</script>
<style scoped>
button {
  background-color: rgb(3, 121, 81);
}
.file-input {
  background-color: aqua;
}
</style>