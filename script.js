function dodge() {
  let btn = document.getElementById("no-btn");

  let maxX = window.innerWidth - btn.offsetWidth;
  let maxY = window.innerHeight - btn.offsetHeight;

  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  btn.style.position = "fixed";
  btn.style.left = x + "px";
  btn.style.top  = y + "px";

  speed += 0.075;
  btn.style.transition = (0.6 / speed) + "s";
}

function goTemple() {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:50px;
    ">
      🎉 เย้ เจอกันพรุ่งนี้! 🙏✨
    </div>
  `;
}