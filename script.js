const sections = document.querySelectorAll('main section');
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    sections.forEach(section => {
      section.classList.add('hidden');
    });

    document.getElementById(targetId).classList.remove('hidden');
  });
});

document.querySelector('#home').classList.remove('hidden');
