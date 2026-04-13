import { series } from "./data.js";
const tbody = document.getElementById("series-body");
series.forEach(function (serie) {
    const fila = document.createElement("tr");
    fila.innerHTML =
        "<td>" + serie.id + "</td>" +
            "<td>" + serie.name + "</td>" +
            "<td>" + serie.channel + "</td>" +
            "<td>" + serie.seasons + "</td>";
    tbody.appendChild(fila);
});

const total = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
const promedio = (total / series.length).toFixed(2);
const filaPromedio = document.createElement("tr");
filaPromedio.innerHTML =
    "<td colspan='4' class='text-right font-weight-bold'>" +
        "El promedio de temporadas de todas las series es: " + promedio +
        "</td>";
tbody.appendChild(filaPromedio);
