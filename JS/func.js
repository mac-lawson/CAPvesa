function changeProgress() {
    document.getElementById('progressBar').innerText = ('Course Status: ' + (sessionStorage.getItem('%')) + '% Complete')
}

function sessionProgress(percent) {
    sessionStorage.setItem('%', percent)
}