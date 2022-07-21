function pix(element, art, theme, color) { 

        var resultd = art.replace(/0/g, "\xa0".repeat(3))
        var finald = resultd.replace(/1/g, "█")
        var el = document.getElementById(element)
        el.style.background= theme
        el.innerHTML = finald
        el.style.width = "max-content"
        el.clientHeight.width = "max-content"
        el.style.paddingBottom = "20px"
        el.style.color = color
   
}