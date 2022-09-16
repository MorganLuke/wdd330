const links = [
    {label: 'Week 1 Notes', url: "week1/index.html"},
    {label: 'Week 2 Notes', url: "week2/index.html"}
]


links.forEach(link => {
    const ol = document.querySelector('ol');
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.innerHTML = `${link.label}`;
    a.setAttribute('href', link.url)
    li.append(a);
    ol.append(li);
});


