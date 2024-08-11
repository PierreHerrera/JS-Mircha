// https://developer.wordpress.org/rest-api/

// const NAME = "css-tricks"
const NAME = "malvestida"
const DOMAIN = `https://${NAME}.com`
const SITE = `${DOMAIN}/wp-json`
const API_WP = `${SITE}/wp/v2`
const PERPAGE = 9
const POSTS = `${API_WP}/posts?_embed&per_page=${PERPAGE}`
const POST = `${API_WP}/posts`
const SEARCH = `${API_WP}/search?_embed&per_page=${PERPAGE}&search=`

let page = 1

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PERPAGE,
    POSTS,
    POST,
    SEARCH,
    page,
}