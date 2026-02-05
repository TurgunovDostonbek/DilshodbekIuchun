import "./Hobby.css";
import hobbyimg from "../../assets/images/1765336962_uUNkm6w3if.webp";
import hobbyimg1 from "../../assets/images/1-21-mcpe.webp";

function Hobby() {
  return (
    <div id='hobby' className="Hobby_Asosiysi container">
      <div className="Hobby1">
        <h1>Hobby</h1>
        <p>
          🎮 O‘yin o‘ynashni yoqtiraman (ayniqsa PUBG kabi), o‘yinlarda taktika
          va kuchli o‘ynash menga yoqadi. <br />
           📚 O‘rganishga qiziqaman — qonun,
          huquqiy mavzularni so‘rab, bandma-band tushunib olaman. <br /> 🗣️ Tilga ham
          qiziqaman — uzbekcha gaplarni to‘g‘ri aytish, tarjima va talaffuzni
          ham tekshirtirib turaman. <br /> 😂 Memlarni yoqtiraman, ayniqsa italyancha
          memlar ko‘p uchraydi menda.
        </p>
      </div>

      <div className="Hobby2">
        <div className="Hobby2_text">
          <img src={hobbyimg} alt="" />
          <br />
          <h4>March 20, 2025 (PUBGm)</h4>
          <p>
            PUBG Mobile — bu ommabop battle royale janridagi mobil o‘yin.
            O‘yinda 100 nafargacha o‘yinchi bitta xaritaga tushib, qurol-aslaha
            topadi va oxirgi tirik qolgan jamoa yoki o‘yinchi g‘alaba qozonadi.
            PUBG Mobile strategiya, tezkor reaksiya, aniqlik va jamoaviy
            hamkorlikni talab qiladi. O‘yin Android va iOS platformalarida
            mavjud bo‘lib, doimiy yangilanishlar va turli rejimlarga ega.
          </p>
        </div>

        <div className="Hobby2_text">
          <img src={hobbyimg1} alt="" />
          <h4>June 13, 2020 (MCPE)</h4>
          <p>
            Minecraft: Pocket Edition (MCPE) — bu sandbox janridagi mashhur
            mobil o‘yin. Unda o‘yinchilar bloklar yordamida qurish, resurs
            yig‘ish, omon qolish (Survival) va erkin ijod qilish (Creative)
            imkoniyatiga ega. MCPE ijodkorlik, mantiqiy fikrlash va tasavvurni
            rivojlantiradi. O‘yin Android va iOS qurilmalarida o‘ynaladi hamda
            multiplayer rejimini qo‘llab-quvvatlaydi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hobby;
