let puanText = document.getElementById('puanText');
puan = 0;

puanText.innerHTML = "0"

const kartTemplate = `
    <div class="kart-cerceve">
        <div class="kart-onyuz">
            <img src="https://via.placeholder.com/100x100?text=?">
        </div>

        <div class="kart-arkayuz">
            <img src="">
        </div>
    </div>
`;

let rastgeleSayiUret = function(){
    let rastAralik = [];
    for (let i = 0; i < 4; i++){
       let rastgeleSayi = Math.floor(Math.random() * 99) + 1;
        rastAralik.push(rastgeleSayi, rastgeleSayi);
    }
    return rastAralik
};

const fotoNumaralari = [10, 20, 30, 20, 10, 40, 40, 30];


console.log(fotoNumaralari);

for (fotoNumara of fotoNumaralari) {
    const yenikart = document.createElement("div");
    yenikart.innerHTML = kartTemplate;
    yenikart.classList.add("kart");
    yenikart.querySelector(".kart-arkayuz img").src = `https://lipsum.app/id/${fotoNumara}/100x100`;
    document.querySelector("div#oyun-cerceve").append(yenikart);

    //Her bir karta tıklandığında "kartTiklama" fonksiyonu çalışacak.
    yenikart.addEventListener("click", kartTiklama);
}

function kartTiklama(olay) {
    
    const secilenKart = olay.currentTarget;
   
    if (secilenKart.classList.contains("eslesti") === true) {
        return;
    }
   
    if (secilenKart.classList.contains("acik") === true) {
        return;
    }

    const tumAcikKartlar = document.querySelectorAll(".acik");
    if (tumAcikKartlar.length === 2) {
        return;
    }
   
    const acikKart = document.querySelector(".acik");
    
    if (acikKart === null) {
        secilenKart.classList.add("acik");

        setTimeout(
            () => {
                secilenKart.classList.remove("acik");
            }, 1500
        );
        return;
    }
 
    secilenKart.classList.add("acik");

    const acikKartImg = acikKart.querySelector(".kart-arkayuz img");
    const secilenKartImg = secilenKart.querySelector(".kart-arkayuz img");

    if (acikKartImg.src === secilenKartImg.src) {
      
      acikKart.classList.add("eslesti");
      secilenKart.classList.add("eslesti");

      puan++;

      console.log(puan);

      puanText.innerHTML = puan;

      if (puan === 4) {
        const kutlamaGif = document.getElementById("kutlama-gif");
        kutlamaGif.style.display ="block"
        setTimeout(() => {
            kutlamaGif.style.display = "none";
        }, 5000);
    }
      acikKart.classList.remove("acik");
      secilenKart.classList.remove("acik");

      setTimeout(() => {
        acikKart.removeEventListener("click", kartTiklama);
        secilenKart.removeEventListener("click", kartTiklama);
      }, 1000);
    } else {
       
        setTimeout(() => {
            acikKart.classList.remove("acik");
            secilenKart.classList.remove("acik");
        }, 1500);
    }
}
