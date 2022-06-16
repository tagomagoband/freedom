window.onload = () => {
  const spoti = document.getElementById('spoti');
  const yt = document.getElementById('yt');
  const apple = document.getElementById('apple');
  const yt_video = document.getElementById('yt_video');

  spoti.onclick = () => {
    window.open('https://open.spotify.com/album/5m3M7lp4Uce8IUt3C2rqay?si=qOREKFKgQeaQW3uEn0pu2A');
  }
  yt.onclick = () => {
    window.open('https://music.youtube.com/watch?v=r4CrGzfmWck&feature=share');
  }
  apple.onclick = () => {
    window.open('https://music.apple.com/es/album/freedom/1626924381?i=1626924383');
  }
  yt_video.onclick = () => {
    window.open('https://youtu.be/Xx1YGOpxi1w');
  }
}