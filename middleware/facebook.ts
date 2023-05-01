export default defineNuxtRouteMiddleware( async (to, from) => {
    const url = to.params
    const fbclid = from.query.fbclid
  if(url.slug){
    console.log('post')
    console.log(fbclid)
    const res = await fetch(`https://thedramaclubs.com/wp-json/wp/v2/posts?slug=${url.slug}`)
    const data = await res.json()
    navigateTo(data[0].link, {
      external: true
    })
  }else{
    console.log('except post')
    navigateTo('https://thedramaclubs.com/', {
      external: true
    })
  }
});