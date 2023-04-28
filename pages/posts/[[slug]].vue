<template>
    <div>
        <Head>
            <Title>{{data[0]?.title.rendered}}</Title>
            <Meta name="title" :content="data[0]?.title.rendered"/>
            <Meta name="description" :content="data[0]?.yoast_head_json?.og_description"/>
            <Meta name="image" :content="yoast_head_json?.og_image[0]?.url"/>
            <Meta name="og:title" :content="data[0]?.title.rendered"/>
            <Meta name="og:description" :content="data[0]?.yoast_head_json?.og_description"/>
            <Meta name="og:image" :content="data[0].yoast_head_json?.og_image[0]?.url"/>
        </Head>
        <section>
            <h1 v-if="postStore.loading">Loading...</h1>
        </section>
        <section class="p-7 w-full justify-center mx-auto" v-if="postStore.showContent" v-html="postStore.details[0]?.content?.rendered">
        </section>
    </div>
</template>
<script setup>
import { usePostStore } from '~/stores/PostStore';
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const {data, pending, refresh} = await useFetch(()=>`${runtimeConfig.public.API_URL}wp-json/wp/v2/posts?slug=${route.params.slug}`)

const postStore = usePostStore()
postStore.getPost()


postStore.getDetailPost(route.params.slug)
if (process.client && document) {
  const referrer = document.referrer;
  const isFromFacebook = referrer.includes('facebook.com');
  if (!isFromFacebook) {
    postStore.showContent = true
  }else{
    postStore.showContent = false
    setTimeout(() => {
        window.location.href = postStore.url
    }, 800);
  }
}
</script>
<script>
export default{
    computed: {
    //     showContent(){
    //     // check if the user came from Facebook
    //     if (typeof document !== 'undefined') {
    //         const referrer = document.referrer.toLowerCase()
    //         if(!referrer.includes('facebook')){
    //         return true
    //         }else{
    //         return false
    //         }
    //     }
    // }
    }
}
</script>