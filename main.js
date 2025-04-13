let mydomain = get3LD(location.href),redirectchkpage="/redirect.html?url="
console.log(mydomain)

    document.addEventListener("DOMContentLoaded",ev=>{
      redirectchk()
    })
    document.querySelectorAll(".openlink").forEach(function(el) {
      el.addEventListener("click",e =>{openlinkbtn(e)})
    })
function redirectchk() {
  document.querySelectorAll("a").forEach(function(el) {
    if (!el.href || get3LD(el.href) === mydomain || get3LD(el.href) === "path") {return}
    el.href = redirectchkpage+el.href
});
document.querySelectorAll(".openlink").forEach(function(el) {
    if (!el.dataset.url || get3LD(el.href) === mydomain || get3LD(el.dataset.url) === "path") {return}
        el.dataset.url = redirectchkpage+el.dataset.url
});
}

function get3LD(input) {
    try {
        // 相対URLでも動作するようにダミーのベースURLを指定
        const url = new URL(input, "http://dummy.base");
        
        // 入力が相対パスなら、hostname が "dummy.base" になる
        if (url.hostname === "dummy.base") {
          return "path"; // パスだけ返す
        }
    
        // 絶対URL → ホスト名から3LDを返す
        const parts = url.hostname.split('.');
        if (parts.length >= 3) {
          return parts.slice(-3).join('.');
        } else {
          return url.hostname;
        }
      } catch (e) {
        return null; // 無効なURL
      }
  }

    function openlinkbtn(event) {
        let element = event.target
        if (!element.dataset.url) {
            console.error(`${element}のデータ値にURLが指定されていません`)
            return;
        }
        let link = document.createElement("a")
        link.href = element.dataset.url
        link.rel = "noopener noreferrer"
        link.target = "_blank"
        link.click()
    }