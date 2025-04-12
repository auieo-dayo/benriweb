const CookieManager = {
  set: (name, value, days = 7) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
  },

  get: (name) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      if (cookie.startsWith(nameEQ)) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return null;
  },

  delete: (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
};

window.onload = function () {
  const textarea = document.getElementById("textarea");
  if (!textarea) return;

  // クッキーからデータを読み取る（クッキーがない場合は "" をセット）
  textarea.value = CookieManager.get("text") || "";

  // `textarea` の変更を監視
  textarea.addEventListener("input", () => {
    rw("write");
  });
};

function rw(w) {
  const textarea = document.getElementById("textarea");
  if (!textarea) {
    alert("エラー: テキストエリアが見つかりません");
    return;
  }

  if (w === "write") {
    CookieManager.set("text", textarea.value, 100);
  } else if (w === "read") {
    textarea.value = CookieManager.get("text") || "";
  } else if (w === "del") {
    CookieManager.delete("text");
    textarea.value = ""; // 削除後にテキストエリアをクリア
  } else {
    alert("エラー: 不明な操作");
  }
}