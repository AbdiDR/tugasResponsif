const getMakanan = async () => {
  const response = await fetch("https://6453dd46c18adbbdfea9c555.mockapi.io/makanan");
  const result = await response.json();
  const card = document.getElementById("card");
  result.forEach((x) => {
    card.innerHTML += `<div class="col-md-3">
    <div class="border-[2px] mb-[20px] mx-auto w-[250px]">
      <img class= "h-[150px] mx-auto" src="${x.gambar}" alt="nasi" />
      <div class="card-body">
        <h5 class="text-center text-base font-semibold mx-auto bg-[#d7ffe3]">${x.makanan}</h5>
        <p class=" text-sm m-[0]">Kalori = ${x.kalori} g</p>
        <p class=" text-sm m-[0]">Lemak = ${x.lemak} g</p>
        <p class=" text-sm m-[0]">Karbohidrat = ${x.karbohidrat} g</p>
        <p class=" text-sm m-[0]">Protein = ${x.protein} g</p>
        <div class=" text-center">
          <button class="increment-button text-white rounded-md px-[10%] py-[2%] hover:bg-opacity-100 bg-opacity-[85%] bg-[#3EB389] mt-[10px]"
            data-kalori="${x.kalori}" data-lemak="${x.lemak}" data-karbohidrat="${x.karbohidrat}" data-protein="${x.protein}">
            Tambah
          </button>
        </div>
      </div>
    </div>
  </div>`;
  });
  const buttons = document.querySelectorAll(".increment-button");
  const sumKaloriEl = document.getElementById("sum-kalori");
  const sumLemakEl = document.getElementById("sum-lemak");
  const sumProteinEl = document.getElementById("sum-protein");
  const sumKarbohidratEl = document.getElementById("sum-karbohidrat");
  let sumKalori = 0;
  let sumLemak = 0;
  let sumProtein = 0;
  let sumKarbohidrat = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const kalori = parseFloat(button.dataset.kalori);
      const lemak = parseFloat(button.dataset.lemak);
      const protein = parseFloat(button.dataset.protein);
      const karbohidrat = parseFloat(button.dataset.karbohidrat);

      sumKalori += kalori;
      sumLemak += lemak;
      sumProtein += protein;
      sumKarbohidrat += karbohidrat;

      sumKaloriEl.textContent = `Kalori: ${sumKalori.toFixed(sumKalori % 1 !== 0 ? 2 : 0)} g`;
      sumLemakEl.textContent = `Lemak: ${sumLemak.toFixed(sumLemak % 1 !== 0 ? 2 : 0)} g`;
      sumProteinEl.textContent = `Protein: ${sumProtein.toFixed(sumProtein % 1 !== 0 ? 2 : 0)} g`;
      sumKarbohidratEl.textContent = `Karbohidrat: ${sumKarbohidrat.toFixed(sumKarbohidrat % 1 !== 0 ? 2 : 0)} g`;
    });
  });
};

getMakanan();
