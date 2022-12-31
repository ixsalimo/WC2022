// Declare constant variables
const $ = document ,
_id = id => $.getElementById(id) ,
_qs = qs => $.querySelector(qs) ,
_qsa = qs => $.querySelectorAll(qs);

_qsa("tbody .team-name").forEach(elem => {
    let teamName = elem.textContent.trim() ,
    ISOcode = elem.dataset.iso ,
    aTag = $.createElement('a');
    aTag.href = `./Pages/Teams.html?ISO=${ISOcode}`;
    aTag.textContent = teamName;
    elem.innerHTML = null;
    elem.append(aTag);
});