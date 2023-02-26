const countWords = text => text.trim().split(/\s+/).length
const countLetters = text => text.trim().replace(/\s+/g, '').length

const $textArea = document.querySelector('#txtid')

$textArea.addEventListener('keyup', event => {
    const text = event.target.value
    
    const wordCount = document.querySelector('#wordCount')
    wordCount.textContent = countWords(text)
    const letterCount = document.querySelector('#letterCount')
    letterCount.textContent = countLetters(text)
})
