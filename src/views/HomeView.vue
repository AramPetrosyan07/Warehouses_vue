<script setup>
import { ref, onMounted } from 'vue'

const name = ref('abcde')
const status = ref('active')
const tasks = ref(["task1", "task2", "task3"])
const link = ref("https://www.google.com/")
const newTask = ref('')

function toggleStatus() {
    if (status.value === "active") {
        status.value = 'inactive'
    } else {
        status.value = 'active'
    }
}

const addTask = () => {
    if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value)
        newTask.value = ''
    }
}

const deleteTask = (index) => {
    tasks.value.splice(index, 1)
}

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        tasks.value = data.map(item => item.title)
    } catch (error) {
        console.error(error)
    }
})
</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">user is active</p>
    <p v-else-if="status === 'inactive'">user is inactive</p>
    <p v-else>user is pending</p>


</template>
