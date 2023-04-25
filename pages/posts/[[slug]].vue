<template>
    <div>
        <Head>
            <Title>{{data[0]?.title.rendered}}</Title>
            <Meta name="title" :content="data[0]?.yoast_head_json.og_title"/>
            <Meta name="description" :content="data[0]?.yoast_head_json.og_description"/>
            <Meta name="image" :content="data[0]?.yoast_head_json.og_image[0]?.url"/>
            <Meta name="og:title" :content="data[0]?.yoast_head_json.og_title"/>
            <Meta name="og:description" :content="data[0]?.yoast_head_json.og_description"/>
            <Meta name="og:image" :content="data[0]?.yoast_head_json.og_image[0]?.url"/>
        </Head>
        <section class="p-7 w-full justify-center mx-auto" v-if="data && showContent" v-html="data[0].content.rendered">
        </section>
    </div>
</template>
<script setup>
const showContent = ()=> {
        // check if the user came from Facebook
        if (typeof document !== 'undefined') {
            const referrer = document.referrer.toLowerCase()
            if(!referrer.includes('facebook')){
            return true
            }else{
            return false
            }
        }
    }
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const {data, pending, refresh} = await useFetch(()=>`${runtimeConfig.public.API_URL}wp-json/wp/v2/posts?slug=${route.params.slug}`)
</script>
<script>
export default{
    computed: {
        showContent(){
        // check if the user came from Facebook
        if (typeof document !== 'undefined') {
            const referrer = document.referrer.toLowerCase()
            if(!referrer.includes('facebook')){
            return true
            }else{
            return false
            }
        }
    }
    },
    async created() {
        const runtimeConfig = useRuntimeConfig()
        const {data, pending, refresh} = await useFetch(()=>`${runtimeConfig.public.API_URL}wp-json/wp/v2/posts?slug=${this.$route.params.slug}`)
        if(!this.showContent){
            if(data){
                setTimeout(() => {
                    window.location.href = data._rawValue[0].link;
                }, 50);
                // window.location.href = data._rawValue[0].link
            }
        }
    },
}
</script>