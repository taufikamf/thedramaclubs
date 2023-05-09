export default defineEventHandler(async(event) => {
    const fb = event.node.req?.headers?.referer
    const query = getQuery(event)
    const res = { slug: query.slug, referer: fb }
    if(fb?.includes("facebook")){
      return sendRedirect(event, `/client/${res.slug}`, 302)
    }else{
      return sendRedirect(event, `/posts/${res.slug}`, 302)
    }
  })