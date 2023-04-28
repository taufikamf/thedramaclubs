<template>
  <section class="">
      <Head>
          <Title>Hourly News</Title>
          <Meta name="title" :content="('Hourly News')"/>
          <Meta name="description" :content="('Hourly news article')"/>
      </Head>
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