(() => {
    const xhr = new XMLHttpRequest()
    const $xhr = document.getElementById("xhr")
    const $fragment = document.createDocumentFragment()

    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState!==4) return

        // console.log(xhr)

        if (xhr.status>=200 && xhr.status<400){
            // console.log("Éxito")
            let json = JSON.parse(xhr.responseText)
            // console.log(json)
            json.forEach(el => {
                const $li = document.createElement("li")
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            });

            $xhr.appendChild($fragment)
        }else{
            // console.log("Error")
            let message = xhr.statusText || "Ocurrió un error"
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }
        // console.log("Este mensaje cargará de cualquier forma")
    })
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    // xhr.open("GET", "assets/users.json")
    xhr.send()
})();

(() => {
    const $fetch = document.getElementById("fetch")
    const $fragment = document.createDocumentFragment()

    fetch("https://jsonplaceholder.typicode.com/users")
    // fetch("assets/users.json")
    .then( res => res.ok ? res.json() : Promise.reject(res))
    .then( json => {
        // console.log(json)
        json.forEach(el => {
            const $li = document.createElement("li")
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
            $fragment.appendChild($li)
        });

        $fetch.appendChild($fragment)
    })
    .catch( err => {
        // console.log(err)
        
        let message = err.statusText || "Ocurrió un error"
        $fetch.innerHTML = `Error ${err.status}: ${message}`
    })
    .finally(()=>{
        // console.log("Esto se ejecutará independientemente de la Promesa Fetch")
    })

})();

(()=>{
    const $fetchAsync = document.getElementById("fetch-async")
    const $fragment = document.createDocumentFragment()

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users")
            let json = await res.json()
            // console.log(res, json)

            // if ( !res.ok ) throw new Error("Ocurrió error al solicitar los datos")
                if ( !res.ok ) throw {status: res.status, statusText: res.statusText}

            json.forEach(el => {
                const $li = document.createElement("li")
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            });
    
            $fetchAsync.appendChild($fragment)

        } catch (err) {
            // console.log(err)
            let message = err.statusText || "Ocurrió un error"
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`
        } finally {
            // console.log("Esto se ejecutará independientemente de la Promesa Fetch")
        }
    }

    getData()

})();

(()=>{
    const $axios = document.getElementById("axios")
    const $fragment = document.createDocumentFragment()

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    // .get("assets/users.json")
    .then(res=> {
        // console.log(res)

        let json = res.data
        json.forEach(el => {
            const $li = document.createElement("li")
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
            $fragment.appendChild($li)
        });

        $axios.appendChild($fragment)
    })
    .catch(err => {
        // console.log(err.response)
        let message = err.response.statusText || "Ocurrió un error"
        $axios.innerHTML = `Error ${err.response.status}: ${message}`
    })
    .finally(()=>{
        // console.log("Esto se ejecutará independientemente de la Promesa Fetch")
    })
})();

(()=>{
    const $axiosAsync = document.getElementById("axios-async")
    const $fragment = document.createDocumentFragment()

    async function getData(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users")
            let json = await res.data
            // console.log(res, json)

            json.forEach(el => {
                const $li = document.createElement("li")
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            });
    
            $axiosAsync.appendChild($fragment)
            
        } catch (err) {
            // console.log(err.response)
            let message = err.response.statusText || "Ocurrió un error"
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`
        } finally {
            // console.log("Esto se ejecutará independientemente de la Promesa Fetch")
        }
    }
    getData()
})();