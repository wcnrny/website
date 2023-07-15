<template>
    <div class="button-container">
        <Icon v-if="icon" :name="icon" size="24"></Icon>
        <div>{{ text }}</div>
    </div>
</template>

<style lang="scss">
.button-container {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-inline: 1rem;
    border-radius: 20%;
    background-color: #202020;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
}
</style>

<script lang="ts">
export default {
    props: {
        text: {
            type: String,
            required: false,
            default: "",
        },
        icon: {
            type: String,
            required: false,
            default: "IconDev"
        }
    }
}
</script>