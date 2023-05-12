<template>
  <section class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="title" :content="title" />
      <Meta name="description" :content="`${title} Article`" />
    </Head>
    <PostList />
  </section>
</template>
<script setup>
definePageMeta({
  middleware: "posts",
});
const runtimeConfig = useRuntimeConfig();
const title = runtimeConfig.public.PAGE_TITLE;
</script>
