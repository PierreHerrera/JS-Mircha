const d = document
const w = window

export default function scrollTopButton(btn){
    const $scrollBbtn = d.querySelector(btn)

    
    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop
        // console.log(w.pageYOffset, d.documentElement.scrollTop)
        if( scrollTop > 600){
            $scrollBbtn.classList.remove("hidden")
        } else {
            $scrollBbtn.classList.add("hidden")
        }

    })
    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                left: 0,
            })
        }
    })
}