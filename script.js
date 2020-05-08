
window.onload = () => {
    const items = document.querySelectorAll('.markers li');

    for (let item of items) {
        item.onclick = () => item.classList.toggle('is-active')
    }
}

