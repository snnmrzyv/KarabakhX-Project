"use strict";

const ADMIN_LOGIN = "admin";
const ADMIN_PASSWORD = "admin123";

const defaultData = {
  hotels: [
    {
      id: 1,
      name: "Şuşa Palace Hotel",
      city: "Şuşa",
      phone: "+994 50 000 00 01",
      cashback: "2",
      price: "120 AZN-dən",
      image: "assets/images/sekil-1.jpg",
      rooms: "Standart: 120 AZN, Deluxe: 180 AZN, Suite: 260 AZN"
    }
  ],


  
  restaurants: [
    {
      id: 1,
      name: "Cıdır Restoran",
      city: "Şuşa",
      phone: "+994 50 000 00 02",
      cashback: "1.5",
      menuPdf: "assets/menus/menu-1.pdf",
      image: "assets/images/sekil-2.jpg",
      cuisine: "Milli mətbəx"
    }
  ],

  services: [
    {
      id: 1,
      name: "Bələdçi xidməti",
      city: "Şuşa",
      phone: "+994 50 000 00 03",
      cashback: "0.5",
      image: "assets/images/sekil-3.jpg",
      type: "Turizm"
    }
  ],

  partners: [
    {
      id: 1,
      name: "Şuşa Palace Hotel",
      voen: "1234567891",
      type: "Otel",
      cashback: "2",
      status: "Aktiv"
    }
  ],

  campaigns: [
    {
      id: 1,
      name: "#KarabakhX Paylaşım Kampaniyası",
      hashtag: "#KarabakhX",
      reward: "0.01 KC",
      status: "Aktiv"
    }
  ],

  promotions: [
  {
    id: 1,
    title: "Bu həftə otellərdə endirim həftəsidir",
    category: "Otellər",
    description: "Şuşa və Xankəndi otellərində xüsusi endirimlər və 2% KC cashback.",
    buttonText: "Otellərə bax",
    targetPage: "hotels",
    image: "assets/images/sekil-11.jpg",
    status: "Aktiv"
  }
],
  users: [
    {
      id: 1,
      name: "Azad Musayev",
      email: "azad@example.com",
      phone: "+994 50 000 00 00",
      type: "Fərdi",
      balance: "0.05 KC"
    }
  ]
};

function getData(key) {
  const saved = localStorage.getItem("kx_" + key);

  if (!saved) {
    localStorage.setItem("kx_" + key, JSON.stringify(defaultData[key]));
    return defaultData[key];
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.setItem("kx_" + key, JSON.stringify(defaultData[key]));
    return defaultData[key];
  }
}

function saveData(key, value) {
  localStorage.setItem("kx_" + key, JSON.stringify(value));
}

function byId(id) {
  return document.getElementById(id);
}

function safeValue(id) {
  const element = byId(id);
  return element ? element.value.trim() : "";
}

function setActiveTab(tab) {
  document.querySelectorAll(".admin-menu button").forEach(btn => {
    btn.classList.remove("active");
  });

  const activeButton = document.querySelector(`[data-tab="${tab}"]`);
  if (activeButton) activeButton.classList.add("active");
}

function setTitle(title) {
  byId("adminPageTitle").innerText = title;
}

function showPanel() {
  byId("adminLogin").style.display = "none";
  byId("adminPanel").style.display = "grid";
}

function showLogin() {
  byId("adminLogin").style.display = "grid";
  byId("adminPanel").style.display = "none";
}

function loginAdmin() {
  const username = safeValue("adminUsername");
  const password = safeValue("adminPassword");

  if (username === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
    localStorage.setItem("kx_admin_logged", "true");
    showPanel();
    renderDashboard();
  } else {
    byId("adminLoginError").innerText = "İstifadəçi adı və ya parol yanlışdır.";
  }
}

function logoutAdmin() {
  localStorage.removeItem("kx_admin_logged");
  location.reload();
}

function openTab(tab) {
  setActiveTab(tab);
  if (tab === "promotions") renderPromotions();

  if (tab === "dashboard") renderDashboard();
  if (tab === "hotels") renderHotels();
  if (tab === "restaurants") renderRestaurants();
  if (tab === "services") renderServices();
  if (tab === "tours") renderTours();
  if (tab === "partners") renderPartners();
  if (tab === "campaigns") renderCampaigns();
  if (tab === "users") renderUsers();
}

function renderDashboard() {
  setTitle("Dashboard");

  const hotels = getData("hotels");
  const restaurants = getData("restaurants");
  const services = getData("services");
  const tours = getData("tours");
  const partners = getData("partners");
  const campaigns = getData("campaigns");
  const users = getData("users");

  byId("adminMain").innerHTML = `
    <div class="admin-stats">
      <div class="admin-stat-card">
        <span>Otellər</span>
        <strong>${hotels.length}</strong>
      </div>
      <div class="admin-stat-card">
        <span>Restoranlar</span>
        <strong>${restaurants.length}</strong>
      </div>
      <div class="admin-stat-card">
        <span>Xidmətlər</span>
        <strong>${services.length}</strong>
      </div>
      <div class="admin-stat-card">
        <span>Turlar</span>
        <strong>${tours.length}</strong>
      </div>
      <div class="admin-stat-card">
        <span>Partnyorlar</span>
        <strong>${partners.length}</strong>
      </div>
      <div class="admin-stat-card">
        <span>Kampaniyalar</span>
        <strong>${campaigns.length}</strong>
      </div>
      <div class="admin-stat-card">
        <span>İstifadəçilər</span>
        <strong>${users.length}</strong>
      </div>
    </div>

    <div class="admin-box">
      <h2>Son əlavə olunan məlumatlar</h2>

      <table class="admin-table">
        <thead>
          <tr>
            <th>Ad</th>
            <th>Kateqoriya</th>
            <th>Şəhər / Status</th>
            <th>Cashback / Mükafat</th>
          </tr>
        </thead>
        <tbody>
          ${hotels.map(item => `
            <tr>
              <td>${item.name}</td>
              <td>Otel</td>
              <td>${item.city}</td>
              <td>${item.cashback}% KC</td>
            </tr>
          `).join("")}

          ${restaurants.map(item => `
            <tr>
              <td>${item.name}</td>
              <td>Restoran</td>
              <td>${item.city}</td>
              <td>${item.cashback}% KC</td>
            </tr>
          `).join("")}

          ${campaigns.map(item => `
            <tr>
              <td>${item.name}</td>
              <td>Kampaniya</td>
              <td>${item.status}</td>
              <td>${item.reward}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <div class="admin-info">
      Şəkilləri bu formada əlavə et:
      <b>assets/images/sekil-1.jpg</b>, <b>sekil-2.jpg</b>, <b>sekil-3.jpg</b>.
      Restoran menyuları üçün: <b>assets/menus/menu-1.pdf</b>.
    </div>
  `;
}

function renderHotels() {
  setTitle("Otellər");

  const data = getData("hotels");

  byId("adminMain").innerHTML = `
    <div class="admin-box">
      <h2>Yeni otel əlavə et</h2>

      <div class="admin-form">
        <input id="hotelName" placeholder="Otel adı">
        <input id="hotelCity" placeholder="Şəhər">
        <input id="hotelPhone" placeholder="Əlaqə nömrəsi">
        <input id="hotelCashback" placeholder="Cashback faizi">
        <input id="hotelPrice" placeholder="Qiymət aralığı">
        <input id="hotelImage" placeholder="assets/images/sekil-4.jpg">
        <textarea id="hotelRooms" placeholder="Otaqlara görə qiymətlər"></textarea>
      </div>

      <button class="btn-primary" onclick="addHotel()">Otel əlavə et</button>
    </div>

    <div class="admin-box">
      <h2>Otel siyahısı</h2>
      ${hotelTable(data)}
    </div>
  `;
}

function hotelTable(data) {
  return `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Şəkil</th>
          <th>Ad</th>
          <th>Şəhər</th>
          <th>Qiymət</th>
          <th>Cashback</th>
          <th>Əməliyyat</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(item => `
          <tr>
            <td><img src="${item.image}" class="admin-img" alt=""></td>
            <td>${item.name}<br><small>${item.phone}</small></td>
            <td>${item.city}</td>
            <td>${item.price}</td>
            <td>${item.cashback}% KC</td>
            <td>
              <button class="mini-btn danger" onclick="deleteItem('hotels', ${item.id})">Sil</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function addHotel() {
  const data = getData("hotels");

  data.push({
    id: Date.now(),
    name: safeValue("hotelName"),
    city: safeValue("hotelCity"),
    phone: safeValue("hotelPhone"),
    cashback: safeValue("hotelCashback"),
    price: safeValue("hotelPrice"),
    image: safeValue("hotelImage"),
    rooms: safeValue("hotelRooms")
  });

  saveData("hotels", data);
  renderHotels();
}

function renderRestaurants() {
  setTitle("Restoranlar");

  const data = getData("restaurants");

  byId("adminMain").innerHTML = `
    <div class="admin-box">
      <h2>Yeni restoran əlavə et</h2>

      <div class="admin-form">
        <input id="restName" placeholder="Restoran adı">
        <input id="restCity" placeholder="Şəhər">
        <input id="restPhone" placeholder="Əlaqə nömrəsi">
        <input id="restCashback" placeholder="Cashback faizi">
        <input id="restMenu" placeholder="assets/menus/menu-1.pdf">
        <input id="restImage" placeholder="assets/images/sekil-5.jpg">
        <input id="restCuisine" placeholder="Mətbəx növü">
      </div>

      <button class="btn-primary" onclick="addRestaurant()">Restoran əlavə et</button>
    </div>

    <div class="admin-box">
      <h2>Restoran siyahısı</h2>
      ${restaurantTable(data)}
    </div>
  `;
}

function restaurantTable(data) {
  return `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Şəkil</th>
          <th>Ad</th>
          <th>Şəhər</th>
          <th>Menyu PDF</th>
          <th>Cashback</th>
          <th>Əməliyyat</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(item => `
          <tr>
            <td><img src="${item.image}" class="admin-img" alt=""></td>
            <td>${item.name}<br><small>${item.phone}</small></td>
            <td>${item.city}</td>
            <td>${item.menuPdf}</td>
            <td>${item.cashback}% KC</td>
            <td>
              <button class="mini-btn danger" onclick="deleteItem('restaurants', ${item.id})">Sil</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function addRestaurant() {
  const data = getData("restaurants");

  data.push({
    id: Date.now(),
    name: safeValue("restName"),
    city: safeValue("restCity"),
    phone: safeValue("restPhone"),
    cashback: safeValue("restCashback"),
    menuPdf: safeValue("restMenu"),
    image: safeValue("restImage"),
    cuisine: safeValue("restCuisine")
  });

  saveData("restaurants", data);
  renderRestaurants();
}

function renderServices() {
  setTitle("Xidmətlər");

  const data = getData("services");

  byId("adminMain").innerHTML = `
    <div class="admin-box">
      <h2>Yeni xidmət əlavə et</h2>

      <div class="admin-form">
        <input id="serviceName" placeholder="Xidmət adı">
        <input id="serviceCity" placeholder="Şəhər">
        <input id="servicePhone" placeholder="Əlaqə nömrəsi">
        <input id="serviceType" placeholder="Xidmət tipi">
        <input id="serviceCashback" placeholder="Cashback faizi">
        <input id="serviceImage" placeholder="assets/images/sekil-6.jpg">
      </div>

      <button class="btn-primary" onclick="addService()">Xidmət əlavə et</button>
    </div>

    <div class="admin-box">
      <h2>Xidmət siyahısı</h2>
      ${serviceTable(data)}
    </div>
  `;
}

function serviceTable(data) {
  return `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Şəkil</th>
          <th>Ad</th>
          <th>Şəhər</th>
          <th>Tip</th>
          <th>Cashback</th>
          <th>Əməliyyat</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(item => `
          <tr>
            <td><img src="${item.image}" class="admin-img" alt=""></td>
            <td>${item.name}<br><small>${item.phone}</small></td>
            <td>${item.city}</td>
            <td>${item.type}</td>
            <td>${item.cashback}% KC</td>
            <td>
              <button class="mini-btn danger" onclick="deleteItem('services', ${item.id})">Sil</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function addService() {
  const data = getData("services");

  data.push({
    id: Date.now(),
    name: safeValue("serviceName"),
    city: safeValue("serviceCity"),
    phone: safeValue("servicePhone"),
    type: safeValue("serviceType"),
    cashback: safeValue("serviceCashback"),
    image: safeValue("serviceImage")
  });

  saveData("services", data);
  renderServices();
}

function renderTours() {
  setTitle("Turlar");
  const data = getData("tours");
  byId("adminMain").innerHTML = `
    <div class="admin-box">
      <h2>Yeni tur əlavə et</h2>
      <div class="admin-form">
        <input id="tourName" placeholder="Tur adı">
        <input id="tourCity" placeholder="Şəhər">
        <input id="tourPhone" placeholder="Əlaqə nömrəsi">
        <input id="tourPrice" placeholder="Qiymət (məs: 40 AZN)">
        <input id="tourDuration" placeholder="Müddət (məs: 4 saat)">
        <input id="tourCashback" placeholder="Cashback faizi">
        <input id="tourImage" placeholder="assets/images/sekil-1.jpg">
        <textarea id="tourDesc" placeholder="Tur təsviri"></textarea>
      </div>
      <button class="btn-primary" onclick="addTour()">Tur əlavə et</button>
    </div>
    <div class="admin-box">
      <h2>Tur siyahısı</h2>
      <table class="admin-table">
        <thead><tr><th>Şəkil</th><th>Ad</th><th>Şəhər</th><th>Qiymət</th><th>Müddət</th><th>Cashback</th><th>Əməliyyat</th></tr></thead>
        <tbody>
          ${data.map(item => `
            <tr>
              <td><img src="${item.image || item.img || ''}" class="admin-img" alt=""></td>
              <td>${item.name || item.title}<br><small>${item.phone || ''}</small></td>
              <td>${item.city}</td>
              <td>${item.price || '—'}</td>
              <td>${item.duration || '—'}</td>
              <td>${item.cashback}% KC</td>
              <td><button class="mini-btn danger" onclick="deleteItem('tours', ${item.id})">Sil</button></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function addTour() {
  const data = getData("tours");
  data.push({
    id: Date.now(),
    name: safeValue("tourName"),
    city: safeValue("tourCity"),
    phone: safeValue("tourPhone"),
    price: safeValue("tourPrice"),
    duration: safeValue("tourDuration"),
    cashback: safeValue("tourCashback"),
    image: safeValue("tourImage"),
    desc: safeValue("tourDesc"),
    type: "Tur"
  });
  saveData("tours", data);
  renderTours();
}

function renderPromotions() {
  setTitle("Ana səhifə elanları");
  const data = getData("promotions");

  byId("adminMain").innerHTML = `
    <div class="admin-box">
      <h2>Yeni elan əlavə et</h2>
      <div class="admin-form">
        <input id="promoTitle"      placeholder="Elan başlığı (məs: Bu həftə endirim!)">
        <input id="promoCategory"   placeholder="Kateqoriya (məs: Otellər, Turlar...)">
        <textarea id="promoDesc"    placeholder="Elan təsviri"></textarea>
        <input id="promoButtonText" placeholder="Düymə mətni (məs: Otellərə bax)">
        <input id="promoTargetPage" placeholder="Hədəf səhifə (hotels / restaurants / tours / services)">
        <input id="promoImage"      placeholder="assets/images/sekil-11.jpg">
        <input id="promoStatus"     placeholder="Status (Aktiv / Deaktiv)">
      </div>
      <button class="btn-primary" onclick="addPromotion()">Elan əlavə et</button>
    </div>

    <div class="admin-box">
      <h2>Mövcud elanlar</h2>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Şəkil</th>
            <th>Başlıq</th>
            <th>Kateqoriya</th>
            <th>Hədəf</th>
            <th>Status</th>
            <th>Əməliyyat</th>
          </tr>
        </thead>
        <tbody>
          ${data.length ? data.map(item => `
            <tr>
              <td><img src="${item.image || ''}" class="admin-img" alt="" onerror="this.style.display='none'"></td>
              <td><strong>${item.title}</strong><br><small>${item.description || ''}</small></td>
              <td>${item.category || '—'}</td>
              <td><span class="chip">${item.targetPage || '—'}</span></td>
              <td><span style="color:${item.status === 'Aktiv' ? 'var(--gold)' : 'var(--muted)'}">${item.status || 'Aktiv'}</span></td>
              <td><button class="mini-btn danger" onclick="deleteItem('promotions', ${item.id})">Sil</button></td>
            </tr>
          `).join('') : '<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:20px">Hələ elan yoxdur</td></tr>'}
        </tbody>
      </table>
    </div>
  `;
}

function addPromotion() {
  const title = safeValue("promoTitle");
  if (!title) { alert("Başlıq mütləqdir."); return; }

  const data = getData("promotions");
  data.push({
    id: Date.now(),
    title,
    category:    safeValue("promoCategory"),
    description: safeValue("promoDesc"),
    buttonText:  safeValue("promoButtonText") || "Daha çox",
    targetPage:  safeValue("promoTargetPage") || "discover",
    image:       safeValue("promoImage"),
    status:      safeValue("promoStatus") || "Aktiv"
  });

  saveData("promotions", data);
  renderPromotions();
}

function renderPartners() {
  setTitle("Partnyorlar");

  const data = getData("partners");

  byId("adminMain").innerHTML = `
    <div class="admin-box">
      <h2>Yeni partnyor əlavə et</h2>

      <div class="admin-form">
        <input id="partnerName" placeholder="Müəssisə adı">
        <input id="partnerVoen" placeholder="VÖEN">
        <input id="partnerType" placeholder="Otel / Restoran / Xidmət">
        <input id="partnerCashback" placeholder="Təklif etdiyi cashback">
        <input id="partnerStatus" placeholder="Status">
      </div>

      <button class="btn-primary" onclick="addPartner()">Partnyor əlavə et</button>
    </div>

    <div class="admin-box">
      <h2>Partnyor siyahısı</h2>
      ${partnerTable(data)}
    </div>
  `;
}

function partnerTable(data) {
  return `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Ad</th>
          <th>VÖEN</th>
          <th>Tip</th>
          <th>Cashback</th>
          <th>Status</th>
          <th>Əməliyyat</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(item => `
          <tr>
            <td>${item.name}</td>
            <td>${item.voen}</td>
            <td>${item.type}</td>
            <td>${item.cashback}%</td>
            <td>${item.status}</td>
            <td>
              <button class="mini-btn danger" onclick="deleteItem('partners', ${item.id})">Sil</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function addPartner() {
  const data = getData("partners");

  data.push({
    id: Date.now(),
    name: safeValue("partnerName"),
    voen: safeValue("partnerVoen"),
    type: safeValue("partnerType"),
    cashback: safeValue("partnerCashback"),
    status: safeValue("partnerStatus") || "Aktiv"
  });

  saveData("partners", data);
  renderPartners();
}

function renderCampaigns() {
  setTitle("Heşteq kampaniyaları");

  const data = getData("campaigns");

  byId("adminMain").innerHTML = `
    <div class="admin-box">
      <h2>Yeni heşteq kampaniyası əlavə et</h2>

      <div class="admin-form">
        <input id="campaignName" placeholder="Kampaniya adı">
        <input id="campaignHashtag" placeholder="#KarabakhX">
        <input id="campaignReward" placeholder="0.01 KC">
        <input id="campaignStatus" placeholder="Aktiv">
      </div>

      <button class="btn-primary" onclick="addCampaign()">Kampaniya əlavə et</button>
    </div>

    <div class="admin-box">
      <h2>Kampaniya siyahısı</h2>
      ${campaignTable(data)}
    </div>
  `;
}

function campaignTable(data) {
  return `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Ad</th>
          <th>Heşteq</th>
          <th>Mükafat</th>
          <th>Status</th>
          <th>Əməliyyat</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(item => `
          <tr>
            <td>${item.name}</td>
            <td>${item.hashtag}</td>
            <td>${item.reward}</td>
            <td>${item.status}</td>
            <td>
              <button class="mini-btn danger" onclick="deleteItem('campaigns', ${item.id})">Sil</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function addCampaign() {
  const data = getData("campaigns");

  data.push({
    id: Date.now(),
    name: safeValue("campaignName"),
    hashtag: safeValue("campaignHashtag"),
    reward: safeValue("campaignReward"),
    status: safeValue("campaignStatus") || "Aktiv"
  });

  saveData("campaigns", data);
  renderCampaigns();
}

function renderUsers() {
  setTitle("İstifadəçilər");

  const data = getData("users");

  byId("adminMain").innerHTML = `
    <div class="admin-box">
      <h2>Qeydiyyatdan keçən istifadəçilər</h2>

      <table class="admin-table">
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>Email</th>
            <th>Nömrə</th>
            <th>Tip</th>
            <th>Balans</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(item => `
            <tr>
              <td>${item.name}</td>
              <td>${item.email}</td>
              <td>${item.phone}</td>
              <td>${item.type}</td>
              <td>${item.balance}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function deleteItem(key, id) {
  const allow = confirm("Bu məlumat silinsin?");
  if (!allow) return;

  const data = getData(key).filter(item => item.id !== id);
  saveData(key, data);

  openTab(key);
}

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = byId("adminLoginBtn");
  const logoutBtn = byId("adminLogoutBtn");
  const backBtn = byId("backToSite");

  if (loginBtn) loginBtn.addEventListener("click", loginAdmin);
  if (logoutBtn) logoutBtn.addEventListener("click", logoutAdmin);
  if (backBtn) backBtn.addEventListener("click", () => {
    location.href = "index.html";
  });

  document.querySelectorAll(".admin-menu button[data-tab]").forEach(button => {
    button.addEventListener("click", () => {
      openTab(button.dataset.tab);
    });
  });

  if (localStorage.getItem("kx_admin_logged") === "true") {
    showPanel();
    renderDashboard();
  } else {
    showLogin();
  }
});