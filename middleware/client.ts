export default defineNuxtRouteMiddleware( async(to, from) => {
    const runtimeConfig = useRuntimeConfig()
    const url = to.params
    const fbclid = from.query.fbclid
    if(fbclid){
      if(url.slug){
        const res = await fetch(`${runtimeConfig.public.API_URL}wp-json/wp/v2/posts?slug=${url.slug}`)
        const data = await res.json()
        navigateTo(data[0].link, {
          external: true
        })
      }else{
        navigateTo(`${runtimeConfig.public.API_URL}`, {
          external: true
        })
      }
    }else{
        if(url.slug){
            const res = await fetch(`${runtimeConfig.public.API_URL}wp-json/wp/v2/posts?slug=${url.slug}`)
            const data = await res.json()
            navigateTo(data[0].link, {
              external: true
            })
          }else{
            navigateTo(`${runtimeConfig.public.API_URL}`, {
              external: true
            })
          }
    }
  });
  