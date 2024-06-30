const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    console.log("1")
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastTrigger.addEventListener('click', () => {
        console.log("2")
        toastBootstrap.show()
    })
}