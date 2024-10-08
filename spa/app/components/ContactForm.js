export function ContactForm() {
    const d = document
    const $form = d.createElement("form")
    const $styles = d.getElementById("dynamic-styles")

    $form.classList.add("contact-form")
    $styles.innerHTML = `
        /*  **********    ContactForm     ********** */
        .contact-form {
            --form-ok-color: #4caf50;
            --form-error-color: #f44336;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
        }

        .contact-form > * {
            padding:  0.5rem;
            margin: 1rem auto;
            display: block;
            width: 100%;
        }

        .contact-form textarea {
            resize: none;
        }

        .contact-form legend,
        .contact-form-response {
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }

        .contact-form input,
        .contact-form textarea {
            font-size: 1rem;
            font-family: sans-serif;
        }

        .contact-form input[type="submit"] {
            width: 50%;
            font-weight: bold;
            cursor: pointer;
        }

        .contact-form *::placeholder {
            color: #000;
        }

        .contact-form [required]:valid {
            border: thin solid var(--form-ok-color);
        }

        .contact-form [required]:invalid {
            border: thin solid var(--form-error-color);
        }

        .contact-form-error {
            margin-top: -1rem;
            font-size: 80%;
            background-color: var(--form-error-color);
            color: #fff;
            transition: all 800ms ease;
        }

        .contact-form-error.is-active {
            display: block;
            animation: show-message 1s 1 normal 0s ease-out both;
        }

        .none {
            display: none;
        }

        .contact-form-loader {
            text-align: center;
        }

        @keyframes show-message {
            0% {
                visibility: hidden;
                opacity: 0;
            }

            100% {
                visibility: visible;
                opacity: 1;
            }
        }
    `


    $form.innerHTML = `
        <legend>Envíanos tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre" title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
        <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
        <input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" required>
        <textarea name="comments" rows="5" cols="50" placeholder="Escribe tus comentarios" required data-pattern="^.{1,255}$" data-title="Tu comentario no debe exceder los 255 caracteres"></textarea>
        <input type="submit" value="Enviar">
        <div class="contact-form-loader none">
            <img src="../assets/oval.svg" alt="Cargando">
        </div>
        <div class="contact-form-response none">
            <p>Los datos han sido enviados.</p>
        </div>
    `

    function validationsForm(){
        const $form = d.querySelector(".contact-form")
        const $inputs = d.querySelectorAll(".contact-form [required]")

        // console.log($inputs)

        $inputs.forEach(input => {
            const $span = d.createElement("span")
            $span.id = input.name
            $span.textContent = input.title
            if(!input.title) $span.textContent = input.dataset.title
            $span.classList.add("contact-form-error", "none")
            input.insertAdjacentElement("afterend", $span)
        })

        d.addEventListener("keyup", e => {
            if(e.target.matches(".contact-form [required]")){
                let $input = e.target
                let pattern = $input.pattern || $input.dataset.pattern
                // console.log($input, pattern)

                if(pattern && $input.value !== ""){
                    console.log("el input tiene patron")
                    let regex = new RegExp(pattern)
                    return !regex.exec($input.value)
                        ? d.getElementById($input.name).classList.add("is-active")
                        : d.getElementById($input.name).classList.remove("is-active")
                }
                if(!pattern){
                    console.log("el input NO tiene patron")
                    return $input.value === ""
                        ? d.getElementById($input.name).classList.add("is-active")
                        : d.getElementById($input.name).classList.remove("is-active")
                }
            }
        })

        d.addEventListener("submit", e => {
            e.preventDefault()
            alert("Enviando formulario")

            const $loader = d.querySelector(".contact-form-loader")
            const $response = d.querySelector(".contact-form-response")

            $loader.classList.remove("none")

            fetch("https://formsubmit.co/ajax/pierleblanc93@gmail.com", {
                method: "POST",
                body: new FormData(e.target)
            })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json)
                $loader.classList.add("none")
                $response.classList.remove("none")
                $response.innerHTML = `<p>${json.message}</p>`
                $form.reset()
            })
            .catch(err => {
                console.log(err)
                let message = xhr.statusText || "Ocurrió un error al enviar, intenta nuevamente."
                // error(`Error ${xhr.status}: ${message}`)
                $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`
            })
            .finally(() => setTimeout(() => {
                $response.classList.add("none")
                $response.innerHTML = ""
            }, 3000))
        })
    }

    // Primero esperar que se cargue completamente el DOM del form
    setTimeout(() => validationsForm(), 100)
    

    return $form
}