document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#form");
  let input = document.querySelector("#file-input");
  console.log(input);
  input.addEventListener("change", async () => {
    let csv = input.files[0];
    let formData = new FormData();
    formData.append("csvfile", csv);

    let result_arr = await sendCsvToProcessingPage(formData);
    showResults(result_arr);
    document
      .getElementById("resultados")
      .scrollIntoView({ behavior: "smooth" });
    console.log("en resultados");
  });
});

async function sendCsvToProcessingPage(formData) {
  document.getElementById("procesando").scrollIntoView({ behavior: "smooth" });

  const fetchResponse = await fetch("http://localhost:3000", {
    method: "POST",
    body: formData,
  });

  const res = await fetchResponse.json();
  console.log("...")
  init = res.result.indexOf("{");
  fin = res.result.indexOf("}");
  results = res.result.substr(init + 1, fin - init - 1);
  results = "{"+results+"}"
  results_arr =  JSON.parse(results)

  return results_arr;
}

function showResults(arr) {
  console.log(arr)
  res = arr.results;
  console.log("asdasd: ", arr)
  condicion = (item) => {
    if (item == 0) return " Sí   ";
    else return " No ";
  };

  console.log("show results: ", arr);
  let tableBodyWrapper = document.querySelector("#table-body");
  let ul = document.createElement("ul");

  let iterator = 0;
  res.forEach((item) => {
    iterator++;
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.textContent = iterator;
    td.textContent = condicion(item) + " pagará su tarjeta de crédito.";
    tr.appendChild(td);
    tableBodyWrapper.appendChild(tr);
  });


  // adding image
  let imageWrapper = document.querySelector(".graficas-imagen");
  let id = arr.id;
  console.log(": ",arr);
  console.log(id)
  let img = document.createElement('img');
  img.src = 'http://localhost:3000/api-imgs/'+ id +".png";
  img.width = 200;
  img.height = 200;
  imageWrapper.append(img);

}
