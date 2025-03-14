// 图片模态框
function openImageModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// 文字模态框
function openTextModal(title, element) {
    const modal = document.getElementById("textModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    
    modalTitle.textContent = title;
    const fullText = element.querySelector('.full-text').innerHTML;
    modalText.innerHTML = fullText;
    modal.style.display = "block";
}

// 关闭模态框
document.querySelectorAll('.close').forEach(close => {
    close.onclick = function() {
        // 找到最近的 modal 父元素并关闭它
        const modal = this.closest('.modal');
        if (modal) {
            modal.style.display = "none";
        }
    }
});

// 点击模态框外部关闭
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// 添加轮播图功能
let slideIndex = 1;
let slideTimer;

// 自动播放
function startSlideShow() {
    slideTimer = setInterval(() => {
        changeSlide(1);
    }, 3000); // 每3秒切换一次
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function changeSlide(n) {
    clearInterval(slideTimer); // 清除当前定时器
    showSlides(slideIndex += n);
    startSlideShow(); // 重新开始自动播放
}

function currentSlide(n) {
    clearInterval(slideTimer);
    showSlides(slideIndex = n);
    startSlideShow();
}

// 页面加载时初始化轮播
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startSlideShow();
}); 