(function () {
  // window.onhashchange = function () {
  //   EditProgressBar();
  //   console.log(123);
  //   console.log(window.location.hash);
  // };
  window.addEventListener(
    "hashchange",
    function () {
      progressBar.style.width = 0 + "%";
    },
    false
  );
  let divObj = document.createElement("div");
  divObj.innerHTML = `<div class="progress-bar-wrap" style="position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #ddd;
  z-index: 99999;">
            <div class="progress-bar" style=" position: absolute;
            left: 0;
            height: 100%;
            background-color:var(--theme-color,#0089f2) ;"></div>
            </div>`;
  document.body.appendChild(divObj);
  let progressBar = document.querySelector(".progress-bar");

  document.addEventListener("scroll", function (e) {
    EditProgressBar();
  });

  function EditProgressBar() {
    // 距顶部
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    // 可视区高度
    var clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    // 滚动条总高度
    var scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    progressBar.style.width =
      +(scrollTop / (scrollHeight - clientHeight)).toFixed(2) * 100 + "%";
  }
})();
