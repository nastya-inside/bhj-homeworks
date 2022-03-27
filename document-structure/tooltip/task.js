document.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelectorAll('.has-tooltip');
    
    //создадим элемент подсказки 
    const $tooltip = document.createElement("div")
    $tooltip.classList.add("tooltip")
    
    // Ссылка, которую нажали последний раз
    let clickedLink = null
    
    for (let i = 0; i < links.length; i++){
        const $link = links[i]
        
        $link.onclick = function (event) {
        event.preventDefault()
        
        //сравнение запомненной ссылки с нажатой
        if (clickedLink === $link) {
        hideTooltip($tooltip)
        clickedLink = null
      } else {
        clickedLink = $link
        showTooltip($link, $tooltip)
      }
    }
    }   
});

function showTooltip($link, $tooltip) {
  const linkPosition = $link.getBoundingClientRect()

  // Вставка подсказки в DOM
  const $parent = $link.parentNode
  $parent.insertBefore($tooltip, $link)
  $tooltip.innerHTML = $link.getAttribute("title")

  // Расчет позиции подсказки
  let top = linkPosition.top
  let left = linkPosition.left

  // Показать подсказку
  $tooltip.classList.add("tooltip_active")

  // Добавление смещения если указано положение подсказки
  const tooltipPositionType = $link.dataset.position
  const tooltipPosition = $tooltip.getBoundingClientRect()
  if (tooltipPositionType) {
    if (tooltipPositionType === "top") {
      top -= tooltipPosition.height
    }
    if (tooltipPositionType === "left") {
      left -= tooltipPosition.width
    }
    if (tooltipPositionType === "right") {
      left += linkPosition.width
    }
  } else {
    top += 20
  }

  // Установка позиции подсказки
  $tooltip.style.top = top + "px"
  $tooltip.style.left = left + "px"
}

function hideTooltip($tooltip) {
  $tooltip.classList.remove("tooltip_active")
}

