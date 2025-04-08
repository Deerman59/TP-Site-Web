document.addEventListener("click", function () {
    var audio = new Audio("bip.mp3");
    audio.play();
});

const apiKey = "09fde116fc4a4080a5829b488fb15ad5";

    const countries = [
      { code: "de", name: "Allemagne", id: "flagDE" },
      { code: "fr", name: "France", id: "flagFR" },
      { code: "co", name: "Colombie", id: "flagCO" },
      { code: "cn", name: "Chine", id: "flagCN" },
      { code: "jp", name: "Japon", id: "flagJP" },
      { code: "eg", name: "Égypte", id: "flagEG" },
    ];

    fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        countries.forEach(country => {
          const flagUrl = `https://flagcdn.com/w320/${country.code}.png`;
          const flagDiv = document.getElementById(country.id);
          flagDiv.innerHTML = `
            <img src="${flagUrl}" alt="Drapeau de ${country.name}">
            <p>${country.name}</p>
          `;
        });
      })
      .catch(error => {
        console.error("Erreur API:", error);
        countries.forEach(country => {
          document.getElementById(country.id).textContent = "Erreur de chargement.";
        });
      });