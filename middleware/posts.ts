export default defineNuxtRouteMiddleware( async(to, from) => {
  const runtimeConfig = useRuntimeConfig()
  const url = to.params
  const fbclid = from.query.fbclid
  if(fbclid){
    navigateTo(to.fullPath)
  }else{
    navigateTo(to.fullPath)
  }
});
