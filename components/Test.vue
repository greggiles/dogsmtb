<script setup>
import { ref } from "vue";
import  axios from 'axios';
const queryText = ref("");
const decodedText = ref("");

const onData = (riders) => {
    console.log("got Data");
    console.log(riders[0][0]);
    queryText.value = riders[0];
    console.log(queryText)
}

const getRiders = async() => {
    axios.get('../api/getRiders').then((response) => {
        console.log(response.data.data);
        onData(response.data.data);
    }).catch((error) => {
        console.log(error);
    });
};

getRiders();

</script>

<template>
    <h2>Text?</h2>
    <p>{{ queryText }}</p>

    <p>{{ errorText }}</p>
    <h2>{{ decodedText }}</h2>

</template>

