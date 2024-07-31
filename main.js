// Thay đổi nội dung búc thư ở đây
var letterContent ="Chào em bấy bì của anh. À thì hôm nay là ngày 1/8 ah hong biết gì hết nhưng nhờ tụi nó nói ah mới biết đây là ngày quốc tế bạn gái. Mới xin được cái code của ông anh lập trình nên viết cái này. Nhân việc hôm nay là ngày 1/8 ah không biết tặng em móng quà gì hết nên anh có vài lời để nói với em. Ah iu eim nhiều lắm, ah mong eim sẽ ở bên ah càng lâu càng tốt có thể là đến khi tụi mình bạc trắng cả đầu. Chúc em luôn mãi xinh đẹp như thiên thần trong mắt anh."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
