export default function scrollToId(e, id) {
  if (e && e.preventDefault) e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.hash = `#${id}`;
  }
}
