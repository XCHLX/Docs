/*!
 * 1 * (c) 2022-2023
 * Released under the MIT License.
 */
var uTools = (function () {
  "use strict";
  function t() {
    return {
      scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
      clientHeight:
        document.documentElement.clientHeight || document.body.clientHeight,
      scrollHeight:
        document.documentElement.scrollHeight || document.body.scrollHeight,
    };
  }
  function e(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  async function o(t) {
    let o = document.documentElement.scrollTop + document.body.scrollTop;
    do {
      (o = document.documentElement.scrollTop + document.body.scrollTop),
        window.scrollBy(0, -300),
        await e(10);
    } while (0 !== o);
  }
  return {
    inItProgressBar: function (e) {
      let o = document.createElement("div");
      (o.innerHTML =
        '<div class="progress-bar-wrap" style="position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 3px;\n      z-index: 99999;">\n                <div class="progress-bar" style=" position: absolute;\n                left: 0;\n                height: 100%;\n                background-color:var(--theme-color,#0089f2) ;"></div>\n                </div>'),
        document.body.appendChild(o),
        (function (e, o) {
          document.addEventListener("scroll", function (o) {
            const n = t();
            e &&
              (e.style.width =
                100 *
                  +(n.scrollTop / (n.scrollHeight - n.clientHeight)).toFixed(
                    2
                  ) +
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
    },
    getScroll: t,
    getUrl: (t) => {
      var e = {};
      if (
        void 0 === t ||
        "string" != typeof t ||
        -1 == t.indexOf("?") ||
        -1 == t.indexOf("=")
      )
        return e;
      {
        let i = t.split("?")[1].split("&");
        for (var o = 0; o < i.length; o++) {
          var n = i[o].split("=");
          e[n[0]] = n[1];
        }
      }
      return e;
    },
    inItGoUp: function ({
      id: t,
      width: e,
      height: n,
      bottom: i,
      right: l,
      content: c,
    }) {
      const d = document.createElement("div");
      (d.innerHTML = `<div id="${t}">${c ?? "返回顶部"}</div>`),
        document.body.appendChild(d);
      const r = document.getElementById(t);
      (r.style.position = "fixed"),
        (r.style.width = e ?? "40px"),
        (r.style.height = n ?? "40px"),
        (r.style.bottom = i ?? "53px"),
        (r.style.right = l ?? "55px"),
        (r.style.cursor = "pointer"),
        (r.onclick = o);
    },
  };
})();
