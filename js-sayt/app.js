let products = [
  {
    id: 1,
    title: "RB21",
    description:
      "The Red Bull Racing RB21 is a Formula One car designed by Red Bull Racing currently competing in the 2025 Formula One World Championship.",
    image:
      "https://www.motorsportweek.com/wp-content/uploads/2024/02/BahrainGP-Perez.jpg",
  },
  {
    id: 2,
    title: "SF-25",
    description:
      "The Ferrari SF-25 is the Formula 1 car designed by Scuderia Ferrari for the 2025 season, driven by Charles Leclerc and Lewis Hamilton.",
    image:
      "https://www.formula1.com/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202490999.jpg",
  },
  {
    id: 3,
    title: "MCL39",
    description:
      "The McLaren MCL39 is a championship-windanger car constructed by McLaren to compete in the 2025 Formula One World Championship.",
    image:
      "https://storage.googleapis.com/the-race-com.appspot.com/1/2023/07/XPB_1220243_HiRes-1024x683.jpg",
  },
  {
    id: 4,
    title: "Mercedes W16",
    description:
      "The Mercedes-AMG F1 W16 E Performance is a Formula One racing car designed and built by the Mercedes-AMG Petronas F1 Team.",
    image:
      "https://cdn-4.motorsport.com/images/amp/YKEBPX80/s1000/george-russell-mercedes-w13-1.jpg",
  },
];

let productsBody = document.getElementById("products");
for (let i = 0; i < products.length; i++) {
  productsBody.innerHTML += `
  <div class="col-lg-3 p-10">
  <img src="${products[i].image}" alt="" class="redbull"/>
  <h3>${products[i].title}</h3>
  <p>${products[i].description}</p>
  </div>
  `;
  console.log(products[i]);
}
