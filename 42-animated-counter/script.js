const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = +counter.textContent;
    let inc = target / speed;
    if (count < target) {
      counter.textContent = count + inc;
      setTimeout(updateCount, 1);
    } else {
      counter.textContent = target;
    }
  };
  updateCount();
});
