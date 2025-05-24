const counters = document.querySelectorAll(".counter");
const speed = 100;

const startCounting = (counter) => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;

  if (count < target) {
    const increment = Math.ceil(target / speed);
    const updateCount = () => {
      let current = +counter.innerText;
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 50);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          counter.innerText = "0"; // reset before animating again
          startCounting(counter);
        });
      }
    });
  },
  { threshold: 0.3 }
);

counters.forEach((counter) => observer.observe(counter));
