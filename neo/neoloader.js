try {
  if (window._pm_object === undefined)
    window._pm_object = JSON.parse(localStorage.getItem("hoverrneo"));
} catch (err) {
  //do nothing
}