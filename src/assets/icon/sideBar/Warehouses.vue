<template>
    <div class="iconContainer">
        <svg :width="svgWidth" :height="svgHeight" :class="$style.icon" viewBox="0 0 114 85" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M48.8707 20.4446L56.9926 12.3227L65.1145 20.4446L56.9926 28.5665L48.8707 20.4446Z" fill="white" />
            <path
                d="M71.6121 13.947L67.5511 18.008L59.4292 9.88607L67.5511 1.76414C69.7939 -0.478672 73.4302 -0.478671 75.673 1.76414L112.222 38.3128C114.465 40.5556 114.465 44.192 112.222 46.4348L75.673 82.9835C73.4302 85.2263 69.7939 85.2263 67.5511 82.9835L59.4292 74.8615L67.5511 66.7396L71.6121 70.8006L100.039 42.3738L71.6121 13.947Z"
                fill="white" />
            <path d="M65.1145 64.303L56.9926 56.1811L48.8707 64.303L56.9926 72.4249L65.1145 64.303Z" fill="white" />
            <path
                d="M46.4341 22.8812L31.0024 38.3128C28.7596 40.5556 28.7596 44.192 31.0024 46.4348L46.4341 61.8664L54.556 53.7445L43.1853 42.3738L54.556 31.0031L46.4341 22.8812Z"
                fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13.947 42.373L42.3738 70.7998L70.8005 42.373L42.3738 13.9463L13.947 42.373ZM1.76409 38.3121C-0.478718 40.5549 -0.47872 44.1912 1.76409 46.434L38.3128 82.9827C40.5556 85.2255 44.1919 85.2255 46.4347 82.9827L82.9834 46.434C85.2262 44.1912 85.2262 40.5549 82.9834 38.3121L46.4347 1.76339C44.1919 -0.479422 40.5556 -0.479424 38.3128 1.76339L1.76409 38.3121Z"
                fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.0381 64.7084L28.16 56.5864L42.3734 70.7998L70.8002 42.373L78.9221 50.495L46.4344 82.9827C44.1916 85.2255 40.5552 85.2255 38.3124 82.9827L20.0381 64.7084Z"
                fill="#EB672F" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M59.4292 74.8608L67.5511 66.7389L71.6121 70.7998L100.039 42.3731L108.161 50.495L75.673 82.9827C73.4302 85.2256 69.7939 85.2256 67.5511 82.9827L59.4292 74.8608Z"
                fill="#EB672F" />
        </svg>
    </div>
</template>
xacA
<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
    sideBarStatus: Boolean
});

const svgWidth = computed(() => props.sideBarStatus ? 114 : 62);
const svgHeight = computed(() => props.sideBarStatus ? 85 : 47);

watch(() => props.sideBarStatus, (newValue, oldValue) => {
    console.log('sideBarStatus changed,', newValue);
    // Your logic here when the prop changes
});

console.log("sideBarStatus warehouses", props.sideBarStatus);
</script>

<style module lang="scss">
.icon {
    transition: all 0.3s ease-in-out;
    will-change: width, height;
    /* Optimizes for animation */
}
</style>
