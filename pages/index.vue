<template>
  <section class="">
    <PostList/>
  </section>
</template>
<script setup>
if (process.client && document) {
  const referrer = document.referrer;
  const isFromFacebook = referrer.includes('facebook.com');
  if (isFromFacebook) {
    window.location.href = 'https://thedramaclubs.com/'
  }
}
</script>