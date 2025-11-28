// 根据时间切换背景
function updateBackgroundByTime() {
  const now = new Date();
  const hour = now.getHours();
  const body = document.body;
  
  // 判断白天还是夜晚（6:00-18:00 为白天）
  if (hour >= 6 && hour < 18) {
    body.classList.remove('night-mode');
    body.classList.add('day-mode');
  } else {
    body.classList.remove('day-mode');
    body.classList.add('night-mode');
  }
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
  updateBackgroundByTime();
  
  // 每分钟检查一次时间（可选）
  setInterval(updateBackgroundByTime, 60000);
});