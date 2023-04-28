<template>
    <div>
        <Head>
            <Title>{{postStore.title}}</Title>
            <Meta name="title" :content="postStore.title"/>
            <Meta name="description" :content="postStore.description"/>
            <Meta name="image" :content="postStore.image"/>
            <Meta name="og:title" :content="postStore.title"/>
            <Meta name="og:description" :content="postStore.description"/>
            <Meta name="og:image" :content="postStore.image"/>
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
const postStore = usePostStore()
postStore.getPost()

const runtimeConfig = useRuntimeConfig()
const route = useRoute()

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