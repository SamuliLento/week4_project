if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const submitDataButton = document.getElementById("submit-data");
  const body = document.getElementById("body");

  async function getData() {
    const url = "https://api.tvmaze.com/search/shows?q=";

    let q = document.getElementById("input-show").value;

    const dataPromise = await fetch(url + q);
    const dataJSON = await dataPromise.json();

    dataJSON.forEach((show) => {
      let div = document.createElement("div");
      let div2 = document.createElement("div");
      let img = document.createElement("img");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");

      div.classList.add("show-data");
      div2.classList.add("show-info");

      img.src = show.show.image.medium;

      h1.innerText = show.show.name;
      p.innerHTML = show.show.summary;

      div.appendChild(img);
      div.appendChild(div2);
      div2.appendChild(h1);
      div2.appendChild(p);

      body.appendChild(div);
    });
  }

  submitDataButton.addEventListener("click", function () {
    getData();
  });
}
