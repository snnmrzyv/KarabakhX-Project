/* ═══════════════════════════════════════════════════════
   KarabakhX  ·  app.js
   ═══════════════════════════════════════════════════════ */

/* ── CONFIG ── */
const IMG   = n => `assets/images/sekil-${n}.jpg`;
const CITIES = [
  'Şuşa','Ağdam','Füzuli','Cəbrayıl','Zəngilan',
  'Qubadlı','Kəlbəcər','Laçın','Xankəndi','Xocalı','Xocavənd'
];

/* ── SEED DATA ── */
const SEED = {
  places: [
    { title:'Cıdır düzü',        city:'Şuşa',     type:'Tarixi məkan', image:IMG(1), desc:'Şuşanın ən tanınmış turizm nöqtəsi. Hər il burada at yarışları keçirilir, panoramik mənzərəsi ziyarətçiləri heyran qoyur.' },
    { title:'Ağdam Cümə Məscidi',city:'Ağdam',     type:'Tarixi məkan', image:IMG(2), desc:'Ağdam şəhərinin simvolu olan bu məscid XIX əsrə aiddir, bölgənin ən nəfis memarlıq nümunələrindəndir.' },
    { title:'Xudafərin körpüsü', city:'Cəbrayıl',  type:'Tarixi məkan', image:IMG(3), desc:'Orta əsrlərə aid bu tarixi körpü Araz çayı üzərindədir, bölgənin ən önəmli arxeoloji abidəsidir.' },
    { title:'Şuşa qalası',       city:'Şuşa',     type:'Tarixi məkan', image:IMG(4), desc:'XVIII əsrdə inşa edilmiş Şuşa qalası, şəhərin strateji möhkəmləndirilmiş qədim hissəsidir.' },
    { title:'Jidir düzü panoram',city:'Şuşa',     type:'Turizm məkanı',image:IMG(5), desc:'Şuşanın üzərindəki bu düzənlikdən Qarabağın valehedici mənzərəsi açılır.' },
    { title:'Zəngilan meşəsi',   city:'Zəngilan',  type:'Təbiət',       image:IMG(6), desc:'Ekoloji turizm üçün ideal olan Zəngilan meşəsi nadir bitki örtüyü ilə zəngindir.' }
  ],
  hotels: [
    {
      title:'Şuşa Palace Hotel', city:'Şuşa', image:IMG(7),
      phone:'+994 50 000 10 10', cashback:2,
      rooms:'Standart: 120 AZN · Deluxe: 180 AZN · Suite: 260 AZN',
      desc:'Mərkəzə yaxın, ailə və turistlər üçün uyğun otel. Müasir interyeri, panoramik mənzərəsi və üzgüçülük hovuzu ilə fərqlənir.',
      amenities:['WiFi','Hovuz','Restoran','Parkinq','Spa']
    },
    {
      title:'Qarabağ View Hotel', city:'Xankəndi', image:IMG(8),
      phone:'+994 50 000 20 20', cashback:2,
      rooms:'Standart: 100 AZN · Family: 150 AZN · Penthouse: 220 AZN',
      desc:'Panoramik mənzərə, rahat yerləşmə şəraiti və yüksək keyfiyyətli xidmət. Şəhər mərkəzinə piyada məsafədədir.',
      amenities:['WiFi','Fitness','Restoran','Parkinq']
    },
    {
      title:'Cəbrayıl Resort', city:'Cəbrayıl', image:IMG(9),
      phone:'+994 50 000 30 30', cashback:2,
      rooms:'Bungalov: 200 AZN · Superior: 160 AZN',
      desc:'Araz çayı kənarında, təbiətin qoynunda yerləşən bu resort ekoloji turizm sevənlər üçün idealdır.',
      amenities:['WiFi','Hovuz','BBQ Terras','Balıqçılıq']
    }
  ],
  restaurants: [
    {
      title:'Cıdır Restoran', city:'Şuşa', image:IMG(10),
      phone:'+994 55 000 40 40', cashback:1.5,
      desc:'Milli mətbəx, rezervasiya və qrup sifarişləri. Canlı musiqi axşamları, gözəl mənzərə.',
      menu: [
        { name:'Piti', price:'18 AZN', category:'Əsas' },
        { name:'Lavangi toyuq', price:'22 AZN', category:'Əsas' },
        { name:'Qutab (pendirli)', price:'6 AZN', category:'Başlanğıc' },
        { name:'Doşab çörəyi', price:'4 AZN', category:'Çörəklər' },
        { name:'Qarabağ şərbəti', price:'5 AZN', category:'İçkilər' },
        { name:'Firni', price:'7 AZN', category:'Desert' }
      ]
    },
    {
      title:'Xan Bağı', city:'Ağdam', image:IMG(11),
      phone:'+994 55 000 50 50', cashback:1.5,
      desc:'Ailəvi atmosfer, yerli yeməklər, geniş bağ sahəsi. Həftə sonları canlı folklor musiqisi.',
      menu: [
        { name:'Kəlkims şorbası', price:'9 AZN', category:'Başlanğıc' },
        { name:'Dolma (üçlü)', price:'16 AZN', category:'Əsas' },
        { name:'Saç qovurması', price:'20 AZN', category:'Əsas' },
        { name:'Ayran', price:'3 AZN', category:'İçkilər' },
        { name:'Badam halvası', price:'8 AZN', category:'Desert' }
      ]
    },
    {
      title:'Araz Kənarı', city:'Zəngilan', image:IMG(12),
      phone:'+994 55 000 60 60', cashback:3,
      desc:'Çay kənarında yerləşən restoran, şirin su balıqları üzrə ixtisaslaşıb. Açıq terras mövsümdə açıqdır.',
      menu: [
        { name:'Çay balığı qızartması', price:'24 AZN', category:'Əsas' },
        { name:'Küftə-bozbash', price:'14 AZN', category:'Başlanğıc' },
        { name:'Təndir çörəyi', price:'3 AZN', category:'Çörəklər' },
        { name:'Alma şirəsi (ev)', price:'4 AZN', category:'İçkilər' }
      ]
    }
  ],
  services: [
    { title:'Bələdçi xidməti',  city:'Şuşa',     image:IMG(13),  phone:'+994 70 000 70 70', cashback:0.5, desc:'Peşəkar, çoxdilli tur bələdçiləri. Tarixi məkanlar, muzey turu, fərdi proqramlar.' },
    { title:'Taksi & Transfer', city:'Füzuli',    image:IMG(14),  phone:'+994 70 000 80 80', cashback:0.5, desc:'Hava limanı, şəhərlərarası və tur transferi. Uşaq oturacağı, geniş bagaj sahəsi.' },
    { title:'Təmizlik xidməti', city:'Xankəndi',  image:IMG(15), phone:'+994 70 000 90 90', cashback:0.5, desc:'Ev, ofis və obyekt təmizliyi. Günlük, həftəlik və aylıq paketlər mövcuddur.' },
    { title:'Foto & Çəkiliş',  city:'Şuşa',     image:IMG(16),  phone:'+994 70 001 00 10', cashback:0.5, desc:'Peşəkar fotoqraf xidməti. Toya, ad günü, tur çəkilişi, dron fotoqrafiyası.' },
    { title:'Kargo & Çatdırılma',city:'Ağdam',   image:IMG(17),  phone:'+994 70 001 10 11', cashback:0.5, desc:'Şəhərlərarası kargo, sürətli çatdırılma. İzlənə bilən paket sistemi.' }
  ],
  tours: [
    { title:'Şuşa Tarixi Turu',     city:'Şuşa',     type:'Tur', image:IMG(18), cashback:1, duration:'4 saat', price:'40 AZN',  phone:'+994 70 001 20 12', desc:'Cıdır düzü, Şuşa qalası, məscidlər — sertifikatlı bələdçi ilə tam tarixi tur. Kiçik qruplar üçün fərdi proqram mövcuddur.' },
    { title:'Araz Vadisi Ekotur',   city:'Zəngilan', type:'Tur', image:IMG(19), cashback:1, duration:'6 saat', price:'55 AZN',  phone:'+994 70 001 30 13', desc:'Araz çayı boyunca ekoloji tur — təbiət, tarixi körpülər, milli parkda gəzinti. Nahar daxildir.' },
    { title:'Qarabağ Fototur',      city:'Şuşa',     type:'Tur', image:IMG(20), cashback:1, duration:'5 saat', price:'50 AZN',  phone:'+994 70 001 40 14', desc:'Dron fotoqrafiyası, panoramik məntəqələr, professional çəkiliş nöqtələri. Fotoqraflar üçün xüsusi proqram.' },
    { title:'Cəbrayıl Tarixi Turu', city:'Cəbrayıl', type:'Tur', image:IMG(21), cashback:1, duration:'5 saat', price:'45 AZN',  phone:'+994 70 001 50 15', desc:'Xudafərin körpüsü və ətraf tarixi abidələr üzrə bələdçili tur. Nəqliyyat və sığorta daxildir.' }
  ],
  partners: [
    { name:'Şuşa Palace Hotel', type:'Otel',      cashback:2   },
    { name:'Cıdır Restoran',    type:'Restoran',   cashback:1.5 },
    { name:'Xan Bağı',          type:'Restoran',   cashback:1.5 },
    { name:'Araz Kənarı',       type:'Restoran',   cashback:3   },
    { name:'Bələdçi xidməti',   type:'Xidmət',     cashback:0.5 }
  ],
  campaigns: [
    { name:'#KarabakhX paylaşım kampaniyası', tag:'#KarabakhX', reward:0.01 }
  ]
};

/* ── STORAGE ── */
const store = {
  get: k => { try { return JSON.parse(localStorage.getItem('kx_'+k)) } catch { return null } },
  set: (k, v) => localStorage.setItem('kx_'+k, JSON.stringify(v)),
  del: k => localStorage.removeItem('kx_'+k)
};

/* Normalize admin-saved items (name→title, desc fields) so they render correctly */
function normalizeItem(item) {
  if (!item) return item;
  const out = { ...item };
  if (!out.title && out.name)        out.title = out.name;
  if (!out.desc  && out.description) out.desc  = out.description;
  if (out.cashback !== undefined)    out.cashback = parseFloat(out.cashback) || 0;
  return out;
}

const getData = k => {
  const raw = store.get(k) || SEED[k] || [];
  return Array.isArray(raw) ? raw.map(normalizeItem) : raw;
};
const getBalance = () => parseFloat(store.get('balance') || 0);
const addBalance = n => { const b = +(getBalance() + n).toFixed(2); store.set('balance', b); return b; };

/* ── USER STATE ── */
let currentUser = store.get('user');

/* ── NAVIGATION ── */
function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(id);
  if (!page) return;
  page.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Highlight active nav button
  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('nav-active'));
  const navBtn = document.getElementById('nav-' + id);
  if (navBtn) navBtn.classList.add('nav-active');

  if (id === 'profile') renderProfile();
  if (id === 'earn')    renderEarnBalance();
  if (id === 'home')    renderPromotionsBanner();
}

function searchAndGo() {
  const city = document.getElementById('homeCity').value;
  const cat  = document.getElementById('homeCat').value;
  go('discover');
  if (city) filterCityTabs('discoverTabs', city, renderDiscoverGrid);
  else renderDiscoverGrid('');
}

/* ── CITY TABS ── */
function buildCityTabs(containerId, onSelect, allLabel = 'Hamısı') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const tabs = [allLabel, ...CITIES];
  container.innerHTML = tabs.map((c, i) =>
    `<button class="city-tab${i===0?' active':''}" data-fn="${onSelect.name}" data-city="${c}" onclick="selectCityTab('${containerId}',this)">${c}</button>`
  ).join('');
}

function selectCityTab(containerId, el) {
  document.querySelectorAll(`#${containerId} .city-tab`).forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  const city = el.dataset.city;
  const fnName = el.dataset.fn;
  const fn = window[fnName];
  if (fn) fn(city === 'Hamısı' ? '' : city);
}

function filterCityTabs(containerId, city, fn) {
  const tabs = document.querySelectorAll(`#${containerId} .city-tab`);
  tabs.forEach(b => {
    b.classList.remove('active');
    if (b.textContent === city || (city === '' && b.textContent === 'Hamısı')) b.classList.add('active');
  });
  fn(city);
}

/* ── HOME CITY SELECT ── */
function initHomeCity() {
  const sel = document.getElementById('homeCity');
  if (!sel) return;
  sel.innerHTML = '<option value="">Bütün şəhərlər</option>' +
    CITIES.map(c => `<option>${c}</option>`).join('');
}

/* ── CARD DATA REGISTRY (onclick-də JSON qırılmasının qarşısını alır) ── */
const _cardRegistry = new Map();
let _cardIdx = 0;
function _reg(obj) {
  const id = _cardIdx++;
  _cardRegistry.set(id, obj);
  return id;
}
function _get(id) { return _cardRegistry.get(Number(id)); }

/* ── CARD BUILDERS ── */
function cardHTML(x, type) {
  const rid     = _reg({ ...x, _cardType: type });
  const badge    = x.cashback ? `<span class="badge badge-gold">✦ ${x.cashback}% KC</span>` : '';
  const cityBadge= `<span class="badge">${x.city}</span>`;
  return `
    <article class="card" onclick="openDetails(_get(${rid}),_get(${rid})._cardType)">
      <div class="card-pic" style="background-image:url('${x.image}')">
        <div class="card-badges">${cityBadge}${badge}</div>
      </div>
      <div class="card-body">
        <div class="card-city">${x.city} · ${x.type || type}</div>
        <h3>${x.title}</h3>
        <p>${(x.desc || '').substring(0, 90)}${x.desc && x.desc.length > 90 ? '…' : ''}</p>
        <div class="card-row">
          <span class="price">${x.cashback ? x.cashback + '% cashback' : ''}</span>
          <button class="btn-details">Daxil ol →</button>
        </div>
      </div>
    </article>`;
}

function placeCardHTML(x) {
  const rid = _reg(x);
  return `
    <article class="place-card" onclick="openPlaceDetails(_get(${rid}))">
      <div class="place-pic" style="background-image:url('${x.image}')">
        <div class="place-overlay">
          <div class="place-type">${x.type || 'Məkan'}</div>
          <h3>${x.title}</h3>
        </div>
      </div>
      <div class="place-body">
        <p>${(x.desc || '').substring(0, 80)}…</p>
      </div>
    </article>`;
}

function emptyHTML(msg = 'Bu şəhər üzrə məlumat əlavə edilməyib.') {
  return `<div class="empty-state"><div style="font-size:48px;margin-bottom:12px">🏔</div><p>${msg}</p></div>`;
}

/* ── RENDER GRIDS ── */
function renderDiscoverGrid(city = '') {
  const all = [
    ...getData('places').map(x => ({ ...x, _isPlace: true })),
    ...getData('hotels').map(x => ({ ...x, type: 'Otel' })),
    ...getData('restaurants').map(x => ({ ...x, type: 'Restoran' })),
    ...getData('services').map(x => ({ ...x, type: 'Xidmət' })),
    ...getData('tours').map(x => ({ ...x, type: 'Tur' }))
  ];
  const filtered = city ? all.filter(x => x.city === city) : all;
  const grid = document.getElementById('discoverGrid');
  if (!grid) return;
  grid.innerHTML = filtered.length
    ? filtered.map(x => x._isPlace ? placeCardHTML(x) : cardHTML(x, x.type)).join('')
    : emptyHTML();
}

function renderHotels(city = '') {
  const items = city ? getData('hotels').filter(x => x.city === city) : getData('hotels');
  const grid = document.getElementById('hotelGrid');
  if (!grid) return;
  grid.innerHTML = items.length ? items.map(x => cardHTML(x, 'Otel')).join('') : emptyHTML();
}

function renderRestaurants(city = '') {
  const items = city ? getData('restaurants').filter(x => x.city === city) : getData('restaurants');
  const grid = document.getElementById('restGrid');
  if (!grid) return;
  grid.innerHTML = items.length ? items.map(x => cardHTML(x, 'Restoran')).join('') : emptyHTML();
}

function renderServices(city = '') {
  const items = city ? getData('services').filter(x => x.city === city) : getData('services');
  const grid = document.getElementById('servGrid');
  if (!grid) return;
  grid.innerHTML = items.length ? items.map(x => cardHTML(x, 'Xidmət')).join('') : emptyHTML();
}

function renderTours(city = '') {
  const items = city ? getData('tours').filter(x => x.city === city) : getData('tours');
  const grid = document.getElementById('tourGrid');
  if (!grid) return;
  grid.innerHTML = items.length ? items.map(x => cardHTML(x, 'Tur')).join('') : emptyHTML();
}

function renderPlaces(city = '') {
  const items = city ? getData('places').filter(x => x.city === city) : getData('places');
  const grid = document.getElementById('placeGrid');
  if (!grid) return;
  grid.innerHTML = items.length ? items.map(x => placeCardHTML(x)).join('') : emptyHTML();
}

/* ── MODALS ── */
function openDetails(x, type) {
  const menuHTML = buildMenuHTML(x);
  const roomsHTML = x.rooms
    ? `<div class="info-box" style="grid-column:1/-1"><label>Otaq qiymətləri</label><span>${x.rooms}</span></div>` : '';
  const amenitiesHTML = x.amenities
    ? `<div class="info-box" style="grid-column:1/-1">
        <label>İmkanlar</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px">
          ${x.amenities.map(a => `<span class="chip">${a}</span>`).join('')}
        </div>
      </div>` : '';

  showModal(`
    <h2>${x.title}</h2>
    <div class="modal-meta">
      <span class="meta-item">📍 <strong>${x.city}</strong></span>
      <span class="meta-item">🏷 <strong>${type}</strong></span>
      ${x.cashback ? `<span class="meta-item">✦ <strong style="color:var(--gold)">${x.cashback}% KC Cashback</strong></span>` : ''}
    </div>
    <div class="modal-pic" style="background-image:url('${x.image}')"></div>
    <p style="color:var(--muted);line-height:1.7;margin-bottom:16px">${x.desc || ''}</p>
    <div class="modal-info-grid">
      ${x.phone ? `<div class="info-box"><label>Əlaqə</label><span>${x.phone}</span></div>` : ''}
      ${x.cashback ? `<div class="info-box"><label>Cashback</label><span style="color:var(--gold)">✦ ${x.cashback}% KC</span></div>` : ''}
      ${x.duration ? `<div class="info-box"><label>Müddət</label><span>${x.duration}</span></div>` : ''}
      ${x.price ? `<div class="info-box"><label>Qiymət</label><span>${x.price}</span></div>` : ''}
      ${roomsHTML}
      ${amenitiesHTML}
    </div>
    ${menuHTML}
    <div class="modal-actions">
      <button class="btn-primary" data-phone="${x.phone || ''}" onclick="reserve(this.dataset.phone)">📞 Rezerv et</button>
      <button class="btn-secondary" onclick="closeModal()">Bağla</button>
    </div>
  `);
}

function openPlaceDetails(x) {
  showModal(`
    <h2>${x.title}</h2>
    <div class="modal-meta">
      <span class="meta-item">📍 <strong>${x.city}</strong></span>
      <span class="meta-item">🏛 <strong>${x.type}</strong></span>
    </div>
    <div class="modal-pic" style="background-image:url('${x.image}')"></div>
    <p style="color:var(--muted);line-height:1.7">${x.desc || ''}</p>
    <div class="modal-actions">
      <button class="btn-primary" onclick="go('hotels');closeModal()">🏨 Otel tap</button>
      <button class="btn-secondary" onclick="closeModal()">Bağla</button>
    </div>
  `);
}

function buildMenuHTML(x) {
  if (!x.menu || !Array.isArray(x.menu)) return '';
  const categories = [...new Set(x.menu.map(m => m.category))];
  return `<div class="menu-section">
    <h4>🍽 Menyu</h4>
    ${categories.map(cat => `
      <p style="font-size:11px;font-weight:800;color:var(--sage);text-transform:uppercase;letter-spacing:1px;margin:12px 0 6px">${cat}</p>
      ${x.menu.filter(m => m.category === cat).map(m => `
        <div class="menu-item-row">
          <span class="menu-item-name">${m.name}</span>
          <span class="menu-item-price">${m.price}</span>
        </div>`).join('')}
    `).join('')}
  </div>`;
}

function reserve(phone) {
  showToast(`📞 Zəng edin: ${phone}`);
  closeModal();
}

/* ── MODAL ENGINE ── */
function showModal(html) {
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
  document.body.style.overflow = '';
}

/* ── TOAST ── */
function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

/* ── AUTH ── */
function openAuth(tab = 'login') {
  showModal(`
    <h2 style="margin-bottom:20px">Hesab</h2>
    <div class="auth-tabs">
      <button class="auth-tab" id="at-login"    onclick="authTab('login')">Giriş</button>
      <button class="auth-tab" id="at-personal" onclick="authTab('personal')">Fərdi</button>
      <button class="auth-tab" id="at-business" onclick="authTab('business')">Müəssisə</button>
    </div>
    <div id="authBody"></div>
  `);
  authTab(tab);
}

function authTab(t) {
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('at-' + t);
  if (btn) btn.classList.add('active');
  const body = document.getElementById('authBody');

  if (t === 'login') {
    body.innerHTML = `
      <div class="form-field"><label>E-mail</label><input id="loginEmail" type="email" placeholder="email@example.com"></div>
      <div class="form-field"><label>Parol</label><input id="loginPass" type="password" placeholder="••••••••"></div>
      <button class="btn-primary" style="width:100%;justify-content:center;padding:16px;margin-top:8px" onclick="doLogin()">Daxil ol →</button>
      <div id="authErr" class="error-msg"></div>`;
  } else if (t === 'personal') {
    body.innerHTML = `
      <div class="form-row">
        <div class="form-field"><label>Ad</label><input id="pFn" placeholder="Adınız"></div>
        <div class="form-field"><label>Soyad</label><input id="pSn" placeholder="Soyadınız"></div>
      </div>
      <div class="form-row">
        <div class="form-field"><label>FİN</label><input id="pFin" placeholder="FİN kod"></div>
        <div class="form-field"><label>Doğum tarixi</label><input id="pDob" type="date"></div>
      </div>
      <div class="form-field"><label>E-mail</label><input id="pEm" type="email" placeholder="email@example.com"></div>
      <div class="form-field"><label>Parol</label><input id="pPw" type="password" placeholder="••••••••"></div>
      <button class="btn-primary" style="width:100%;justify-content:center;padding:16px;margin-top:8px" onclick="doRegister('personal')">Qeydiyyatdan keç →</button>
      <div id="authErr" class="error-msg"></div>`;
  } else {
    body.innerHTML = `
      <div class="form-row">
        <div class="form-field"><label>VÖEN</label><input id="bVoen" placeholder="VÖEN nömrəsi"></div>
        <div class="form-field"><label>Müəssisə</label><input id="bName" placeholder="Müəssisə adı"></div>
      </div>
      <div class="form-row">
        <div class="form-field"><label>Kateqoriya</label>
          <select id="bType"><option>Restoran</option><option>Otel</option><option>Xidmət</option></select>
        </div>
        <div class="form-field"><label>Cashback %</label><input id="bCash" type="number" placeholder="2" min="0" max="10"></div>
      </div>
      <div class="form-field"><label>Əlaqə nömrəsi</label><input id="bPhone" placeholder="+994 50 ..."></div>
      <div class="form-field"><label>E-mail</label><input id="bEm" type="email" placeholder="email@example.com"></div>
      <div class="form-field"><label>Parol</label><input id="bPw" type="password" placeholder="••••••••"></div>
      <button class="btn-primary" style="width:100%;justify-content:center;padding:16px;margin-top:8px" onclick="doRegister('business')">Müəssisəni qeydiyyata al →</button>
      <div id="authErr" class="error-msg"></div>`;
  }
}

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  if (!email || !pass) { document.getElementById('authErr').textContent = 'Bütün xanaları doldurun.'; return; }
  createSession({ name: email.split('@')[0], email, type: 'personal' });
}

function doRegister(type) {
  let name, email;
  if (type === 'personal') {
    name  = (document.getElementById('pFn').value + ' ' + document.getElementById('pSn').value).trim();
    email = document.getElementById('pEm').value.trim();
  } else {
    name  = document.getElementById('bName').value.trim();
    email = document.getElementById('bEm').value.trim();
  }
  if (!name || !email) { document.getElementById('authErr').textContent = 'Ad və e-mail mütləqdir.'; return; }
  createSession({ name, email, type });
}

function createSession(data) {
  currentUser = {
    ...data,
    barcode: 'KX-' + Math.floor(100000 + Math.random() * 899999),
    joined: new Date().toLocaleDateString('az')
  };
  store.set('user', currentUser);
  closeModal();
  showToast('✦ Xoş gəldiniz, ' + currentUser.name + '!');
  renderProfile();
  go('profile');
}

function doLogout() {
  store.del('user');
  currentUser = null;
  renderProfile();
  go('home');
  showToast('Çıxış edildi.');
}

/* ── PROFILE ── */
function renderProfile() {
  const wrap = document.getElementById('profileWrap');
  if (!wrap) return;

  if (!currentUser) {
    wrap.innerHTML = `
      <div style="min-height:60vh;display:grid;place-items:center">
        <div style="text-align:center;max-width:360px">
          <div style="font-size:64px;margin-bottom:20px">👤</div>
          <h2 style="font-family:'Playfair Display',serif;margin-bottom:12px">Hesabınıza daxil olun</h2>
          <p style="color:var(--muted);margin-bottom:28px">KC balansınızı idarə edin, cashback qazanın.</p>
          <div style="display:flex;gap:12px;justify-content:center">
            <button class="btn-primary" onclick="openAuth('login')">Giriş et</button>
            <button class="btn-secondary" onclick="openAuth('personal')">Qeydiyyat</button>
          </div>
        </div>
      </div>`;
    return;
  }

  const balance = getBalance();
  const txs = store.get('transactions') || generateDemoTransactions();
  const earned = txs.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0).toFixed(2);
  const spent  = Math.abs(txs.filter(t => t.amount < 0).reduce((s, t) => s + t.amount, 0)).toFixed(2);

  wrap.innerHTML = `
    <div class="profile-layout">
      <aside class="profile-sidebar">
        <div class="profile-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
        <div class="profile-name">${currentUser.name}</div>
        <div class="profile-type">${currentUser.type === 'business' ? 'Müəssisə' : 'Fərdi istifadəçi'}</div>
        <div class="balance-card">
          <div class="balance-label">KC Balansı</div>
          <div class="balance-value">${balance.toFixed(2)}</div>
          <div class="balance-unit">KarabakhX Coin</div>
        </div>
        <div class="barcode-area">
          <div class="barcode-visual"></div>
          <div class="barcode-code">${currentUser.barcode}</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">
          <div style="text-align:center;padding:12px;background:rgba(45,106,63,0.15);border-radius:12px;border:1px solid rgba(45,106,63,0.3)">
            <div style="font-size:18px;font-weight:800;color:var(--gold)">+${earned}</div>
            <div style="font-size:11px;color:var(--muted);margin-top:2px">Qazanılmış</div>
          </div>
          <div style="text-align:center;padding:12px;background:rgba(239,68,68,0.08);border-radius:12px;border:1px solid rgba(239,68,68,0.15)">
            <div style="font-size:18px;font-weight:800;color:#ef4444">-${spent}</div>
            <div style="font-size:11px;color:var(--muted);margin-top:2px">Xərclənmiş</div>
          </div>
        </div>
        <button class="btn-secondary" style="width:100%;justify-content:center" onclick="doLogout()">Çıxış et</button>
      </aside>
      <div class="profile-main">
        <div class="activity-card">
          <h3>✦ KC Tarixçəsi</h3>
          <div class="tx-list">
            ${txs.map(t => `
              <div class="tx-item">
                <div class="tx-info">
                  <strong>${t.title}</strong>
                  <span>${t.date}</span>
                </div>
                <span class="tx-amount ${t.amount > 0 ? 'tx-earn' : 'tx-spend'}">
                  ${t.amount > 0 ? '+' : ''}${t.amount.toFixed(2)} KC
                </span>
              </div>`).join('')}
          </div>
        </div>
        <div class="activity-card">
          <h3>🤝 Partnyor şəbəkəsi</h3>
          <p style="color:var(--muted);font-size:14px;margin-bottom:20px">Bu partnyorlarda KC pul kimi xərclənir.</p>
          <div class="partners-row">
            ${getData('partners').map(p => `
              <div class="partner-chip">
                <div class="partner-logo">${p.name.charAt(0)}</div>
                <div class="partner-info">
                  <strong>${p.name}</strong>
                  <span>✦ ${p.cashback}% KC</span>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

function generateDemoTransactions() {
  return [
    { title:'#KarabakhX paylaşımı',     date:'28 Apr 2025', amount:+0.01 },
    { title:'Cıdır Restoran — cashback', date:'25 Apr 2025', amount:+0.30 },
    { title:'Şuşa Palace — cashback',    date:'20 Apr 2025', amount:+2.40 },
    { title:'Bələdçi xidməti',           date:'18 Apr 2025', amount:-1.50 },
    { title:'#KarabakhX paylaşımı',     date:'15 Apr 2025', amount:+0.01 }
  ];
}

/* ── EARN (KC) SECTION ── */
function renderEarnBalance() {
  const el = document.getElementById('earnBalance');
  if (el) el.textContent = getBalance().toFixed(2);
}

function fileSelected(input) {
  const area = document.getElementById('uploadArea');
  if (input.files && input.files[0]) {
    area.classList.add('has-file');
    area.querySelector('div:nth-child(2)').textContent = input.files[0].name;
  }
}

function doEarn() {
  const caption = document.getElementById('earnCaption').value;
  const file    = document.getElementById('earnFile').files.length;
  const msg     = document.getElementById('earnMsg');

  if (!file) { msg.innerHTML = '<div class="error-msg">Şəkil seçilməlidir.</div>'; return; }
  if (!caption.includes('#KarabakhX')) {
    msg.innerHTML = '<div class="error-msg">Paylaşım mətnində <strong>#KarabakhX</strong> heşteqi olmalıdır.</div>';
    return;
  }

  const newBal = addBalance(0.01);

  // Save transaction
  const txs = store.get('transactions') || generateDemoTransactions();
  txs.unshift({ title:'#KarabakhX paylaşımı', date: new Date().toLocaleDateString('az'), amount: +0.01 });
  store.set('transactions', txs);

  if (currentUser) {
    currentUser.balance = newBal;
    store.set('user', currentUser);
  }

  renderEarnBalance();
  msg.innerHTML = '<div class="note-msg">🎉 Təbriklər! Balansınıza <strong>+0.01 KC</strong> əlavə olundu.</div>';
  document.getElementById('earnCaption').value = '';
  document.getElementById('uploadArea').classList.remove('has-file');
  document.getElementById('earnFile').value = '';
  showToast('✦ +0.01 KC qazandınız!');
}

/* ── PROMOTIONS BANNER (ana səhifə elanları) ── */
function renderPromotionsBanner() {
  const wrap = document.getElementById('promotionsBanner');
  if (!wrap) return;
  const items = (getData('promotions') || []).filter(p => (p.status || 'Aktiv') === 'Aktiv');
  if (!items.length) { wrap.innerHTML = ''; return; }

  wrap.innerHTML = `
    <div class="wrap">
      <div class="promos-grid">
        ${items.map(p => `
          <div class="promo-card" onclick="go('${p.targetPage || 'discover'}')">
            <div class="promo-img" style="${p.image ? `background-image:url('${p.image}')` : ''}"></div>
            <span class="promo-cat">${p.category || 'Elan'}</span>
            <div class="promo-body">
              <h4>${p.title}</h4>
              <p>${p.description || ''}</p>
              <button class="promo-btn">${p.buttonText || 'Daha çox'} →</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

/* ── INIT ── */
function init() {
  initHomeCity();

  // Promotions banner
  renderPromotionsBanner();

  // Discover tabs
  buildCityTabs('discoverTabs', renderDiscoverGrid);
  renderDiscoverGrid('');

   buildCityTabs('placeTabs', renderPlaces);
   renderPlaces();


  // Hotels tabs
  buildCityTabs('hotelTabs', renderHotels);
  renderHotels('');

  // Restaurants tabs
  buildCityTabs('restTabs', renderRestaurants);
  renderRestaurants('');

  // Services tabs
  buildCityTabs('servTabs', renderServices);
  renderServices('');

  // Tours tabs
  buildCityTabs('tourTabs', renderTours);
  renderTours('');

  renderEarnBalance();
  renderProfile();

  // Close modal on backdrop click
  document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
}

// Wait for DOM
document.addEventListener('DOMContentLoaded', init);

// Admin-dən qayıdanda (tab focus və ya səhifə görünən olanda) banneri yenilə
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) renderPromotionsBanner();
});
window.addEventListener('focus', renderPromotionsBanner);

let lastScroll = 0;
const navbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // aşağı scroll → gizlət
    navbar.classList.add('hide');
  } else {
    // yuxarı scroll → göstər
    navbar.classList.remove('hide');
  }

  lastScroll = currentScroll;
});