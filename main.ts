import { series } from "./data.js";

const tbody = document.getElementById("series-body") as HTMLElement;
const avgEl = document.getElementById("seasons-avg") as HTMLElement;
const detail = document.getElementById("detail-card") as HTMLElement;

function renderTable(): void {
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

function renderDetail(id: number): void {
  const s = series.find(x => x.id === id);
  if (!s) return;
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

function wireEvents(): void {
  tbody.addEventListener("click", (ev) => {
    const target = ev.target as HTMLElement;
    const anchor = target.closest("a");
    if (!anchor) return;

    ev.preventDefault();

    const idAttr = (anchor as HTMLAnchorElement).dataset.id;
    const id = Number(idAttr);
    if (!Number.isNaN(id)) renderDetail(id);
  });
}

renderTable();
wireEvents();
