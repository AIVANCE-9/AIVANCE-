// فایل script.js

// 1. نمایش پیام خوش‌آمدگویی
document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to AIVANCE! Explore your AIVANCE token journey!');
});

// 2. شبیه‌سازی قیمت توکن AIVANCE
const tokenPriceElement = document.createElement('p');
tokenPriceElement.id = 'token-price';
tokenPriceElement.textContent = 'Current AIVANCE Token Price: $10.00';
document.querySelector('header').appendChild(tokenPriceElement);

// به‌روزرسانی قیمت به صورت رندوم (هر 5 ثانیه)
setInterval(() => {
    const randomPrice = (10 + Math.random() * 2).toFixed(2); // قیمت بین $10.00 تا $12.00
    tokenPriceElement.textContent = `Current AIVANCE Token Price: $${randomPrice}`;
}, 5000);

// 3. دکمه دریافت توکن AIVANCE
const tokenButton = document.querySelector('.button');
let tokenBalance = 0;

// کلیک روی دکمه
tokenButton.addEventListener('click', () => {
    const success = Math.random() > 0.2; // 80% احتمال موفقیت
    if (success) {
        tokenBalance += 1; // اضافه کردن توکن به کیف پول
        alert(`Success! You have received 1 AIVANCE token. Your total tokens: ${tokenBalance}`);
    } else {
        alert('Failed to get token. Please try again.');
    }
});

// 4. باز کردن لینک یوتیوب در صفحه جدید
document.addEventListener('DOMContentLoaded', () => {
    const youtubeLink = document.querySelector('a[href*="youtube"]');
    if (youtubeLink) {
        youtubeLink.setAttribute('target', '_blank');
    }
});

// 5. حالت ریسپانسیو برای نمایش کیف پول
const walletDisplay = document.createElement('p');
walletDisplay.id = 'wallet-display';
walletDisplay.textContent = `Your AIVANCE Token Balance: ${tokenBalance}`;
document.body.appendChild(walletDisplay);

// به‌روزرسانی کیف پول
setInterval(() => {
    walletDisplay.textContent = `Your AIVANCE Token Balance: ${tokenBalance}`;
}, 1000);
