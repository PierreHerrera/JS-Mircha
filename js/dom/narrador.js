const d = document
const w = window

export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select")
    const $speechTextarea = d.getElementById("speech-text")
    const $speechBtn = d.getElementById("speech-btn")
    const speechMessage = new SpeechSynthesisUtterance()

    // console.log(speechMessage)

    let voices = []

    d.addEventListener("DOMContentLoaded", e => {
        // console.log(w.speechSynthesis)
        // console.log(w.speechSynthesis.getVoices())

        w.speechSynthesis.addEventListener("voiceschanged", e => {
            // console.log(e)
            voices = w.speechSynthesis.getVoices()
            // console.log(voices)

            voices.forEach(voice => {
                const $option = d.createElement("option")
                $option.value = voice.name
                $option.textContent = `${voice.name} *** ${voice.lang}`

                $speechSelect.append($option)
            })
        })
    })

    d.addEventListener("change", e => {
        if (e.target === $speechSelect){
            speechMessage.voice = voices.find(voice => voice.name === e.target.value)
        }
    })

    d.addEventListener("click", e => {
        if(e.target === $speechBtn){
            speechMessage.text = $speechTextarea.value
            w.speechSynthesis.speak(speechMessage)
        }
    })
}