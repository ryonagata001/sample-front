<template>
    <div class="home">{{ message }}</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { apiClient } from "@/api/apiClient";

@Component({})
export default class Home extends Vue {
    public message: string = "";

    public async created() {
        const res = await apiClient.get(
            "http://localhost:3000/welcome/ryoNagata"
        );
        console.log(res);
        this.message = res.data;
    }
}
</script>
