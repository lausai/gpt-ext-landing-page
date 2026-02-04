// components/GuideflowEmbed.tsx
"use client"
import { useEffect } from "react"

const GuideflowEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://app.guideflow.com/assets/opt.js"
    script.dataset.iframeId = "xrgmlw5c1r"
    document.body.appendChild(script)
  }, [])

  return (
    // 不知道為什麼 guideflow 的嵌入連結只要 color-scheme 是 dark,
    // 這個 div 邊邊就有一層白邊, 設定 background-color 也無法消除
    // 手寫一個空白頁面嵌入 guideflow 連結也會這樣, 感覺是 guideflow bug
    // 所以就設定 inline style 為 light 避掉這個 bug
    <div
      style={{
        position: "relative",
        paddingBottom: "calc(52.61455525606469% + 47px)",
        height: 0,
        colorScheme: "light"
      }}
    >
      <iframe
        id="xrgmlw5c1r"
        src="https://app.guideflow.com/embed/xrgmlw5c1r"
        width="100%"
        height="100%"
        style={{
          overflow: "hidden",
          position: "absolute",
          border: "none",
        }}
        scrolling="no"
        allow="clipboard-read; clipboard-write"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allowTransparency
      />
    </div>
  )
}

export default GuideflowEmbed
