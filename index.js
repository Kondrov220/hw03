const elem = document.querySelectorAll('img');

const onEntry = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
};

const observer = new IntersectionObserver(onEntry);

elem.forEach(element => {
    observer.observe(element);
});
