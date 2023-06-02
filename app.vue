<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const title = 'Drizzle Nuxt CF Example'
const description = 'Drizzle Nuxt CF Example'
const ogImage = 'og-image.png'

useSEOHead({
  title,
  description,
  ogImage
})

</script>
