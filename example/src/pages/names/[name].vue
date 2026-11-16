<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute<'/names/[name]'>()
</script>

<template>
  <div>
    <p>name: {{ route.params.name }}</p>
  </div>
</template>
