function adjustFontSize() {
  const displayOperationText = document.querySelector('.display-operation-text');
  const containerWidth = displayOperationText.offsetWidth;
  const textWidth = displayOperationText.scrollWidth;
  const originalFontSize = parseFloat(getComputedStyle(displayOperationText).fontSize);
  
  if (textWidth > containerWidth) {
    const newFontSize = (containerWidth / textWidth) * originalFontSize;
    displayOperationText.style.fontSize = newFontSize + 'px';
  }
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();