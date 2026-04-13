import { series } from "./data.js";
const tbody = document.getElementById("series-body");
const avgEl = document.getElementById("seasons-avg");
const detail = document.getElementById("detail-card");
function renderTable() {
    let total = 0;
    series.forEach(s => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${s.id}</td>
      <td>
        <a href="${s.link}" target="_blank" data-id="${s.id}">
          ${s.name}
        </a>
      </td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
        tbody.appendChild(tr);
        total += s.seasons;
    });
    const avg = total / series.length;
    avgEl.textContent = `Seasons average: ${avg.toFixed(0)}`;
}
function renderDetail(id) {
    const s = series.find(x => x.id === id);
    if (!s)
        return;
    detail.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${s.image}" alt="${s.name}">
      <div class="card-body">
        <h5 class="card-title">${s.name}</h5>
        <p class="card-text">${s.description}</p>
        <a href="${s.link}" target="_blank" class="card-link">${s.link}</a>
      </div>
    </div>
  `;
}
function wireEvents() {
    tbody.addEventListener("click", (ev) => {
        const target = ev.target;
        const anchor = target.closest("a");
        if (!anchor)
            return;
        ev.preventDefault();
        const idAttr = anchor.dataset.id;
        const id = Number(idAttr);
        if (!Number.isNaN(id))
            renderDetail(id);
    });
}
renderTable();
wireEvents();
