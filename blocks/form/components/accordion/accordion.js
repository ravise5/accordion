export default function decorate(panel) {
  const legend = panel?.querySelector('legend');
  legend?.classList.add('accordion-legend');
  legend?.addEventListener('click', () => {
    legend.classList.toggle('accordion-collapse');
    Array.from(panel.children).forEach((childElement) => {
      if (childElement !== legend) {
        childElement.style.display = (childElement.style.display === 'none') ? '' : 'none';
      }
    });
  });
  return panel;
}
