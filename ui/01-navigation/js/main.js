/**
 * show a new Notification
 *
 * @author: chloe
 * @param {string} html HTML of notification
 * @param {string} className  "info"(default), "success", "warning", "error"
 */
function Notification({ html = "", className = "info" } = {}) {
  if (!html) return;

  this.el = document.createElement("div");
  this.el.className = "notification";
  this.el.innerHTML = html;
  this.el.classList.add(className);
  document.body.append(this.el);

  setTimeout(() => {
    this.el.classList.add("hide");
  }, 2000);
}
