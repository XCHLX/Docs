/*!
 * 1 * (c) 2022-2023
 * Released under the MIT License.
 */
var uTools = (function () {
  "use strict";
  return function (e) {
    let t = document.createElement("div");
    (t.innerHTML =
      '<div class="progress-bar-wrap" style="position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  z-index: 99999;">\n            <div class="progress-bar" style=" position: absolute;\n            left: 0;\n            height: 100%;\n            background-color:var(--theme-color,#0089f2) ;"></div>\n            </div>'),
      document.body.appendChild(t),
      (function (e, t) {
        document.addEventListener("scroll", function (t) {
          const n = {
            scrollTop:
              document.documentElement.scrollTop || document.body.scrollTop,
            clientHeight:
              document.documentElement.clientHeight ||
              document.body.clientHeight,
            scrollHeight:
              document.documentElement.scrollHeight ||
              document.body.scrollHeight,
          };
          e &&
            (e.style.width =
              100 *
                +(n.scrollTop / (n.scrollHeight - n.clientHeight)).toFixed(2) +
              "%");
        }),
          window.addEventListener(
            "hashchange",
            function () {
              e && (e.style.width = "0%");
            },
            !1
          );
      })(document.querySelector(".progress-bar"));
  };
})();
