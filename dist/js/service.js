let clickbtn = document.querySelector('.clickbtn')
let aj = document.querySelector('.aj')
let number = document.querySelector('#number')

clickbtn.addEventListener('click', () => {
    var promise = sendRequest(number.value)
    promise.then(images)
})

function images(data) {
    data.forEach(el => {
        let img = document.createElement('img');
        img.setAttribute('src', el.thumbnail)
        aj.appendChild(img)
    })
}