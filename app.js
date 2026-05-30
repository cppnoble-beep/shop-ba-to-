/* ============================================================
   Kapeng Kabado — app.js
   ============================================================ */

// ── Products ─────────────────────────────────────────────────
const PRODUCTS = [
  { id: 1,  temp: 'Hot',     category: 'Amerikano',   name: 'Amerikano ng Bayan',         tagline: '"Para sa taong may trabaho pero walang pag-asa."',           description: 'Dark, bold, no apologies. Single-origin Arabica, black as your future.',          price: 120, image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=800&auto=format&fit=crop' },
  { id: 2,  temp: 'Hot',     category: 'Latte',       name: 'Kapeng Kabado Latte',         tagline: '"Relax ka lang, hindi pa naman kita sinasakal."',            description: 'Ristretto shots wrapped in velvety steamed milk. Smooth, warm, walang drama.',    price: 175, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop' },
  { id: 3,  temp: 'Hot',     category: 'Cappuccino',  name: 'Cappuccino ni Kapitbahay',   tagline: '"Para feeling barista ka sa umaga."',                        description: 'Classic thirds — espresso, milk, thick foam. Your 3-in-1 is jealous.',           price: 160, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop' },
  { id: 4,  temp: 'Hot',     category: 'Flat White',  name: 'Flat White ng Flat Broke',   tagline: '"Mahal ang buhay, pero hindi tayo."',                        description: 'Stronger than a latte, silkier than your excuses. Worth every centavo.',         price: 165, image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop' },
  { id: 5,  temp: 'Cold',    category: 'Cold Brew',   name: 'Cold Brew ng Puso Ko',       tagline: '"Cold brew, cold text, same feeling."',                     description: 'Steeped 18 hours. Smooth, low-acid, slow burn. Unlike your ex — this one stays.', price: 190, image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop' },
  { id: 6,  temp: 'Cold',    category: 'Iced Latte',  name: 'Iced Latte Paraluman',       tagline: '"Para sa taong hindi pa rin nakakaalis sa ex."',             description: 'Double shots over ice, vanilla milk finish. Chilled, elegant, zero drama.',       price: 180, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop' },
  { id: 7,  temp: 'Cold',    category: 'Spanish Latte', name: 'Spanish Latte ng Sawi',   tagline: '"Sweeter kaysa sa kanya, promise."',                         description: 'Espresso meets condensed milk on ice. Never left you on read pa.',               price: 200, image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop' },
  { id: 8,  temp: 'Cold',    category: 'Matcha Latte', name: 'Dirty Matcha Feeling',      tagline: '"Para sa mga nagpapanggap na hindi coffee-dependent."',     description: 'Ceremonial matcha, cold milk, hidden espresso shot underneath. Rebellious.',      price: 210, image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=800&auto=format&fit=crop' },
  { id: 9,  temp: 'Frappe',  category: 'Frappe',      name: 'Mocha Frappe Marites',       tagline: '"Chika habang naghihintay ng orders."',                      description: 'Blended espresso, choco sauce, whipped cream. Tsismis energy in a cup.',          price: 220, image: 'https://images.unsplash.com/photo-1572490122747-3f92b79e4e82?q=80&w=800&auto=format&fit=crop' },
  { id: 10, temp: 'Frappe',  category: 'Frappe',      name: 'Caramel Frappe Balikbayan',  tagline: '"Nag-abroad pero uwi pa rin para sa kape."',                 description: 'Buttery caramel, espresso, mountain of cream. Decadent. Mahal. Worth it.',       price: 230, image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=800&auto=format&fit=crop' },
  { id: 11, temp: 'Frappe',  category: 'Frappe',      name: 'Cookies & Cream Inday',      tagline: '"Masarap at hindi nagpapaasa."',                             description: 'Oreos, white choco, thick blended ice. No espresso — this one\'s purely sweet.',  price: 235, image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&w=800&auto=format&fit=crop' },
  { id: 12, temp: 'Special', category: 'Brewed',      name: 'Barako ng Batangas',         tagline: '"Hindi natutumba ng anumang problema."',                    description: 'Authentic Batangas Barako, slow-brewed, bold, woody. Serve black. Serve proud.',  price: 150, image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop' },
  { id: 13, temp: 'Special', category: 'Hot Choco',   name: 'Tsokolate Kabado',           tagline: '"Hindi pa handa sa kape pero may exam bukas."',              description: 'Ground Davao tablea, thick, aromatic, pinch of sea salt. Hindi ito Milo, \'day.',  price: 185, image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=800&auto=format&fit=crop' },
  { id: 14, temp: 'Special', category: 'Affogato',    name: 'Affogato Hugot',             tagline: '"Maalala mo ang lahat ng ex mo sa unang sip."',              description: 'Vanilla gelato drowned in hot espresso. Bittersweet, just like your situationship.', price: 195, image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=800&auto=format&fit=crop' },
  { id: 15, temp: 'Special', category: 'Dalgona',     name: 'Creamy Dalgona Bading',      tagline: '"400 whisk strokes of pure dedication."',                   description: 'Whipped coffee cloud over cold milk. TikTok classic. Ours is better. Ingat ka.',  price: 175, image: 'https://images.unsplash.com/photo-1612276529731-4b21494e6d71?q=80&w=800&auto=format&fit=crop' },
  { id: 16, temp: 'Special', category: 'Ube Latte',   name: 'Ube Latte Panlaban',         tagline: '"Purple ang pag-ibig, hindi ito papaalam."',                 description: 'Espresso, ube halaya, oat milk foam. Nutty, sweet, unapologetically Filipino.',   price: 215, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop' }
];

// ── Add-ons ───────────────────────────────────────────────────
const ADDONS = [
  { id: 'whip',       label: 'Extra Whipped Cream', fee: 20 },
  { id: 'shot',       label: 'Extra Espresso Shot',  fee: 35 },
  { id: 'oat',        label: 'Oat Milk Upgrade',     fee: 30 },
  { id: 'syrup',      label: 'Flavored Syrup',        fee: 25 },
  { id: 'pearls',     label: 'Tapioca Pearls',        fee: 30 },
  { id: 'jelly',      label: 'Coffee Jelly',          fee: 25 },
  { id: 'cream',      label: 'Cheese Cream Topping',  fee: 40 },
  { id: 'drizzle',    label: 'Caramel Drizzle',       fee: 15 },
];

// ── Size pricing (multiplier offsets in PHP) ──────────────────
const SIZE_OFFSETS = { small: 0, medium: 30, large: 55 };

// ── State ─────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('kk_cart')) || [];
let selectedCategory = 'All';
let searchQuery = '';

// Order form state
let orderProduct   = null;
let orderQty       = 1;
let orderSize      = 'small';
let orderAddons    = new Set();
let orderSugar     = '0';
let orderIce       = 'no';

// ── Helpers ───────────────────────────────────────────────────
const saveCart  = () => localStorage.setItem('kk_cart', JSON.stringify(cart));
const getItem   = id => cart.find(i => i.id === id);
const cartTotal = () => cart.reduce((s, i) => s + i.linePrice * i.qty, 0);
const totalQty  = () => cart.reduce((s, i) => s + i.qty, 0);

const BADGE = {
  Hot:     { cls: 'badge-hot',     label: 'Hot' },
  Cold:    { cls: 'badge-cold',    label: 'Cold' },
  Frappe:  { cls: 'badge-frappe',  label: 'Frappe' },
  Special: { cls: 'badge-special', label: 'Special' }
};

// ── Render products ───────────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const q = searchQuery.toLowerCase();
    return (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
        && (selectedCategory === 'All' || p.temp === selectedCategory);
  });

  if (!filtered.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:4rem 0;color:#9ca3af;font-size:1.1rem;">Wala pang ganyan, bro. 😔</p>';
    return;
  }

  grid.innerHTML = filtered.map((p, i) => {
    const badge = BADGE[p.temp] || { cls: '', label: p.temp };
    const item  = getItem(p.id);
    const qty   = item ? item.qty : 0;

    const addBtn = qty === 0
      ? `<button class="add-btn" data-id="${p.id}">Add</button>`
      : `<div class="flex items-center gap-2">
           <button class="qty-btn minus" data-id="${p.id}" data-action="dec">−</button>
           <span class="font-bold text-lg w-6 text-center">${qty}</span>
           <button class="qty-btn plus" data-id="${p.id}" data-action="inc">+</button>
         </div>`;

    return `
      <div class="bg-white rounded-3xl overflow-hidden shadow-lg product-card flex flex-col"
           style="animation-delay:${i * 60}ms">
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop'">
          <span class="badge ${badge.cls}">${badge.label}</span>
        </div>
        <div class="p-4 flex flex-col flex-1">
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-bold text-base leading-snug">${p.name}</h3>
            <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0">${p.category}</span>
          </div>
          <p class="text-xs text-amber-700 italic mt-1 font-semibold leading-snug">${p.tagline}</p>
          <p class="text-xs text-gray-500 mt-2 flex-1 leading-relaxed">${p.description}</p>
          <div class="flex items-center justify-between mt-4">
            <span class="text-xl font-black text-amber-800">₱${p.price}</span>
            <div id="btn-area-${p.id}">${addBtn}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  // Attach events — "Add" opens order form
  grid.querySelectorAll('.add-btn').forEach(btn =>
    btn.addEventListener('click', () => openOrderForm(+btn.dataset.id)));
  grid.querySelectorAll('.qty-btn').forEach(btn =>
    btn.addEventListener('click', () =>
      btn.dataset.action === 'inc' ? increaseQty(+btn.dataset.id) : decreaseQty(+btn.dataset.id)));

  // Card reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.product-card').forEach(card => observer.observe(card));
}

// ── Order Form ────────────────────────────────────────────────
function calcOrderTotal() {
  if (!orderProduct) return 0;
  const base   = orderProduct.price + SIZE_OFFSETS[orderSize];
  const addFee = [...orderAddons].reduce((s, id) => {
    const a = ADDONS.find(x => x.id === id);
    return s + (a ? a.fee : 0);
  }, 0);
  return (base + addFee) * orderQty;
}

function updateOrderTotal() {
  const el = document.getElementById('order-total-display');
  if (el) el.textContent = calcOrderTotal().toLocaleString();
}

function openOrderForm(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  orderProduct = product;
  orderQty     = 1;
  orderSize    = 'small';
  orderAddons  = new Set();
  orderSugar   = '0';
  orderIce     = 'no';

  // Populate header
  document.getElementById('order-product-name').textContent    = product.name;
  document.getElementById('order-product-tagline').textContent = product.tagline;

  const imgWrap = document.getElementById('order-img-wrap');
  imgWrap.innerHTML = `<img src="${product.image}" alt="${product.name}"
    class="w-full h-full object-cover"
    onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=200&auto=format&fit=crop'">`;

  // Size prices
  document.getElementById('price-small').textContent  = `₱${product.price}`;
  document.getElementById('price-medium').textContent = `₱${product.price + SIZE_OFFSETS.medium}`;
  document.getElementById('price-large').textContent  = `₱${product.price + SIZE_OFFSETS.large}`;

  // Reset size radio
  document.querySelectorAll('input[name="size"]').forEach(r => r.checked = r.value === 'small');
  document.querySelectorAll('.size-card').forEach(c =>
    c.classList.toggle('border-amber-600', c.dataset.size === 'small'));

  // Qty
  document.getElementById('order-qty').textContent = '1';

  // Add-ons
  const addonList = document.getElementById('addons-list');
  addonList.innerHTML = ADDONS.map(a => `
    <label class="addon-check" data-addon="${a.id}">
      <input type="checkbox" value="${a.id}" class="addon-input">
      <span>${a.label}</span>
      <span class="addon-fee">+₱${a.fee}</span>
    </label>`).join('');

  addonList.querySelectorAll('.addon-input').forEach(cb => {
    cb.addEventListener('change', () => {
      const label = cb.closest('.addon-check');
      if (cb.checked) { orderAddons.add(cb.value); label.classList.add('checked'); }
      else            { orderAddons.delete(cb.value); label.classList.remove('checked'); }
      updateOrderTotal();
    });
  });

  // Sugar reset
  document.querySelectorAll('.sugar-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sugar === '0');
  });
  // Ice reset
  document.querySelectorAll('.ice-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.ice === 'no');
  });

  // Notes
  const notes = document.getElementById('order-notes');
  if (notes) notes.value = '';

  updateOrderTotal();
  document.getElementById('order-overlay').classList.add('open');
}

function closeOrderForm() {
  document.getElementById('order-overlay').classList.remove('open');
}

function confirmOrder() {
  if (!orderProduct) return;
  const existing = getItem(orderProduct.id);
  const linePrice = orderProduct.price + SIZE_OFFSETS[orderSize] +
    [...orderAddons].reduce((s, id) => {
      const a = ADDONS.find(x => x.id === id);
      return s + (a ? a.fee : 0);
    }, 0);

  // Build label for cart
  const sizeLabel   = orderSize.charAt(0).toUpperCase() + orderSize.slice(1);
  const addonLabels = [...orderAddons].map(id => ADDONS.find(x => x.id === id)?.label).filter(Boolean);
  const customLabel = [sizeLabel, ...addonLabels].join(', ');

  // Always push as a new line if customization differs
  const cartEntry = {
    ...orderProduct,
    cartKey:    `${orderProduct.id}-${orderSize}-${[...orderAddons].sort().join('-')}`,
    linePrice,
    size:       orderSize,
    addons:     [...orderAddons],
    customLabel,
    sugar:      orderSugar,
    ice:        orderIce,
    notes:      document.getElementById('order-notes')?.value || '',
    qty:        orderQty
  };

  const existIdx = cart.findIndex(i => i.cartKey === cartEntry.cartKey);
  if (existIdx >= 0) {
    cart[existIdx].qty += orderQty;
  } else {
    cart.push(cartEntry);
  }

  saveCart(); renderCart(); refreshBtnArea(orderProduct.id);
  closeOrderForm();

  // Tiny success nudge
  const cartBtn = document.getElementById('open-cart');
  if (cartBtn) {
    cartBtn.style.transform = 'scale(1.15)';
    setTimeout(() => cartBtn.style.transform = '', 300);
  }
}

// ── Render cart ───────────────────────────────────────────────
function renderCart() {
  const list    = document.getElementById('cart-items');
  const empty   = document.getElementById('empty-cart');
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-count');
  if (!list) return;

  if (countEl) {
    countEl.textContent = totalQty();
    countEl.classList.remove('cart-count-bounce');
    void countEl.offsetWidth;
    countEl.classList.add('cart-count-bounce');
  }

  if (!cart.length) {
    list.innerHTML = '';
    if (empty)   empty.style.display = 'block';
    if (totalEl) totalEl.textContent = '0';
    return;
  }

  if (empty)   empty.style.display = 'none';
  if (totalEl) totalEl.textContent = cartTotal().toLocaleString();

  list.innerHTML = cart.map(item => `
    <div class="flex items-center justify-between bg-gray-50 rounded-2xl p-3 gap-3"
         style="border:1px solid #f3f4f6;" data-cartkey="${item.cartKey}">
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <img src="${item.image}" alt="${item.name}"
             class="w-14 h-14 rounded-xl object-cover flex-shrink-0"
             onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=200&auto=format&fit=crop'">
        <div class="min-w-0">
          <p class="font-bold text-sm truncate">${item.name}</p>
          <p class="text-xs text-gray-400">${item.customLabel || ''}</p>
          <p class="text-xs text-amber-700 font-semibold">₱${item.linePrice} each</p>
        </div>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <button class="qty-btn minus cart-dec" data-cartkey="${item.cartKey}">−</button>
        <span class="font-bold text-sm w-5 text-center">${item.qty}</span>
        <button class="qty-btn plus cart-inc" data-cartkey="${item.cartKey}">+</button>
        <span class="font-bold text-amber-800 ml-1 text-sm min-w-[55px] text-right">
          ₱${(item.linePrice * item.qty).toLocaleString()}
        </span>
      </div>
    </div>`).join('');

  list.querySelectorAll('.cart-dec').forEach(btn =>
    btn.addEventListener('click', () => decreaseByKey(btn.dataset.cartkey)));
  list.querySelectorAll('.cart-inc').forEach(btn =>
    btn.addEventListener('click', () => increaseByKey(btn.dataset.cartkey)));
}

// ── Cart actions (by cartKey for custom items) ────────────────
function increaseByKey(key) {
  const item = cart.find(i => i.cartKey === key);
  if (item) { item.qty++; saveCart(); renderCart(); }
}
function decreaseByKey(key) {
  const idx = cart.findIndex(i => i.cartKey === key);
  if (idx === -1) return;
  cart[idx].qty--;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart(); renderCart();
}

// Legacy helpers (used for btn-area refresh on product grid)
function addToCart(id) {
  openOrderForm(id);
}
function increaseQty(id) {
  // Find any matching base entry for this product
  const items = cart.filter(i => i.id === id);
  if (items.length) { items[0].qty++; saveCart(); renderCart(); refreshBtnArea(id); }
  else openOrderForm(id);
}
function decreaseQty(id) {
  const items = cart.filter(i => i.id === id);
  if (!items.length) return;
  const item = items[0];
  item.qty--;
  if (item.qty <= 0) {
    const idx = cart.findIndex(i => i.cartKey === item.cartKey);
    if (idx >= 0) cart.splice(idx, 1);
  }
  saveCart(); renderCart(); refreshBtnArea(id);
}

function refreshBtnArea(id) {
  const area = document.getElementById(`btn-area-${id}`);
  if (!area) return;
  const totalQtyForProduct = cart.filter(i => i.id === id).reduce((s, i) => s + i.qty, 0);

  if (totalQtyForProduct === 0) {
    area.innerHTML = `<button class="add-btn" data-id="${id}">Add</button>`;
    area.querySelector('.add-btn').addEventListener('click', () => openOrderForm(id));
  } else {
    area.innerHTML = `
      <div class="flex items-center gap-2">
        <button class="qty-btn minus" data-id="${id}" data-action="dec">−</button>
        <span class="font-bold text-lg w-6 text-center">${totalQtyForProduct}</span>
        <button class="qty-btn plus" data-id="${id}" data-action="inc">+</button>
      </div>`;
    area.querySelectorAll('.qty-btn').forEach(btn =>
      btn.addEventListener('click', () =>
        btn.dataset.action === 'inc' ? increaseQty(id) : decreaseQty(id)));
  }
}

// ── Checkout ──────────────────────────────────────────────────
function checkout() {
  if (!cart.length) { alert('Walang laman ang cart mo! Mag-order muna.'); return; }
  const orders = JSON.parse(localStorage.getItem('kk_orders')) || [];
  orders.unshift({
    id: 'ORD-' + (Math.floor(Math.random() * 90000) + 10000),
    customer: 'Guest',
    items: cart.map(i => `${i.name} (${i.customLabel || 'Regular'}) x${i.qty}`).join(', '),
    total: cartTotal(),
    status: 'Pending',
    date: new Date().toLocaleDateString('en-PH')
  });
  localStorage.setItem('kk_orders', JSON.stringify(orders));
  cart = []; saveCart(); renderCart(); renderProducts(); closeCart();
  alert('Order placed! Salamat sa iyong tiwala, kabado! ☕');
}

// ── Cart modal ────────────────────────────────────────────────
const openCart  = () => document.getElementById('cart-overlay')?.classList.add('open');
const closeCart = () => document.getElementById('cart-overlay')?.classList.remove('open');

// ── Category filter ───────────────────────────────────────────
function setCategory(cat) {
  selectedCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.cat === cat));
  renderProducts();
}

// ── Debounce ──────────────────────────────────────────────────
function debounce(fn, delay) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}

// ── Search suggestions ────────────────────────────────────────
const SUGGESTIONS_LIMIT = 6;

function renderSuggestions(query) {
  const list = document.getElementById('suggestions-list');
  if (!query.trim() || query.length < 2) { list.style.display = 'none'; return; }
  const q = query.toLowerCase();
  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  ).slice(0, SUGGESTIONS_LIMIT);

  if (!matches.length) { list.style.display = 'none'; return; }

  list.innerHTML = matches.map(p => {
    const nameHighlighted = p.name.replace(
      new RegExp(`(${q})`, 'gi'), '<span class="suggestion-highlight">$1</span>'
    );
    return `<li data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <span>${nameHighlighted}</span>
      <span class="suggestion-category">${p.category}</span>
    </li>`;
  }).join('');
  list.style.display = 'block';
}

function onSuggestionClick(e) {
  const li = e.target.closest('li');
  if (!li) return;
  const product = PRODUCTS.find(p => p.id === +li.dataset.id);
  if (!product) return;
  document.getElementById('search-input').value = product.name;
  document.getElementById('suggestions-list').style.display = 'none';
  searchQuery = product.name;
  renderProducts();
}

function initSearchSuggestions() {
  const input = document.getElementById('search-input');
  const list  = document.getElementById('suggestions-list');
  if (!input || !list) return;

  const debouncedSuggest = debounce(() => renderSuggestions(input.value), 250);
  input.addEventListener('input', () => {
    searchQuery = input.value;
    renderProducts();
    debouncedSuggest();
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !list.contains(e.target)) list.style.display = 'none';
  });

  list.addEventListener('click', onSuggestionClick);

  input.addEventListener('keydown', (e) => {
    if (list.style.display === 'none') return;
    const items = list.querySelectorAll('li');
    let activeIdx = [...items].findIndex(li => li.classList.contains('active'));
    if (e.key === 'ArrowDown')      { e.preventDefault(); activeIdx = (activeIdx + 1) % items.length; }
    else if (e.key === 'ArrowUp')   { e.preventDefault(); activeIdx = (activeIdx - 1 + items.length) % items.length; }
    else if (e.key === 'Enter')     { e.preventDefault(); if (activeIdx >= 0) items[activeIdx]?.click(); return; }
    else return;
    items.forEach(li => li.classList.remove('active'));
    items[activeIdx]?.classList.add('active');
    items[activeIdx]?.scrollIntoView({ block: 'nearest' });
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
  initSearchSuggestions();

  // Category buttons
  document.querySelectorAll('.cat-btn').forEach(btn =>
    btn.addEventListener('click', () => setCategory(btn.dataset.cat)));

  // Cart modal
  document.getElementById('open-cart')?.addEventListener('click', openCart);
  document.getElementById('close-cart')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('cart-overlay')) closeCart();
  });
  document.getElementById('checkout-btn')?.addEventListener('click', checkout);

  // Order form: size
  document.querySelectorAll('input[name="size"]').forEach(radio => {
    radio.addEventListener('change', () => {
      orderSize = radio.value;
      document.querySelectorAll('.size-card').forEach(c =>
        c.classList.toggle('border-amber-600', c.dataset.size === orderSize));
      updateOrderTotal();
    });
  });

  // Order form: qty
  document.getElementById('qty-dec')?.addEventListener('click', () => {
    if (orderQty > 1) { orderQty--; document.getElementById('order-qty').textContent = orderQty; updateOrderTotal(); }
  });
  document.getElementById('qty-inc')?.addEventListener('click', () => {
    orderQty++; document.getElementById('order-qty').textContent = orderQty; updateOrderTotal();
  });

  // Order form: sugar
  document.querySelectorAll('.sugar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      orderSugar = btn.dataset.sugar;
      document.querySelectorAll('.sugar-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Order form: ice
  document.querySelectorAll('.ice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      orderIce = btn.dataset.ice;
      document.querySelectorAll('.ice-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Order form: close & confirm
  document.getElementById('close-order')?.addEventListener('click', closeOrderForm);
  document.getElementById('order-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('order-overlay')) closeOrderForm();
  });
  document.getElementById('confirm-order-btn')?.addEventListener('click', confirmOrder);

  // Hamburger
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  ham?.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });
  // Close mobile menu when a link is clicked
  menu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      menu.classList.remove('open');
    });
  });

  // Navbar scroll shrink
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('nav-scrolled', window.scrollY > 50);
  }, { passive: true });

  // Back to top
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () =>
      btt.classList.toggle('visible', window.scrollY > 300), { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});