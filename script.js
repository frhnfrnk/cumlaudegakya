
const sumbitBtn = document.getElementById("submit")


const sumbitform = (e) => {
    e.preventDefault()
    const ips = document.getElementById("ips").value
    const sks1 = document.getElementById("sks1").value
    const sks2 = document.getElementById("sks2").value
    const ipc = document.getElementById("ipc").value
    const ipr = document.getElementById("ipr")
    const notif = document.getElementById("notif")
    const ucapan1 = document.getElementById("ucapan1")
    const alert = document.getElementById("alert")

    var arrayTest = [ips, sks1, sks2, ipc]
    var test = true
    for (var i = 0; i <= 3; i++){
        if (arrayTest[i] === ""){
            test = false
            break
        }
    }
    console.log(test)

    if(test){
        alert.style.display = "none"

        var nilaiTem = ips * sks1
        var sksSisa = sks2 - sks1
        var syarat = sks2 * ipc

        var resultSem = (syarat - nilaiTem) / sksSisa

        var result = resultSem.toFixed(2)
        if(result < 4){
            notif.classList.remove("none")
            ipr.innerHTML = result
            ucapan1.innerHTML = "Minimal nilai per-sks yang dibutuhkan untuk bisa cumlaude adalah"
        }
        else{
            notif.classList.remove("none")
            ucapan1.innerHTML = "Waduhhh"
            ipr.innerHTML = "Udah gaada harapan cumlude kk"
        }
    }

    else{
        alert.style.display = "flex"

    }

    

}

sumbitBtn.addEventListener('click', sumbitform)
