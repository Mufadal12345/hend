// app.js - وظائف مشتركة وحماية المسارات
(function() {
    const userId = localStorage.getItem('soulSeekerUserId');
    const path = window.location.pathname;

    // الصفحات التي تتطلب حماية
    const protectedPaths = ['/dashboard.html', '/results.html'];

    // فحص بسيط للمسار (يعمل على النشر الثابت و Vercel)
    const isProtected = protectedPaths.some(p => path.endsWith(p));

    if (isProtected && !userId) {
        alert('الرجاء إنشاء حساب أولاً للوصول لهذه الصفحة.');
        window.location.href = 'index.html';
    }
})();
