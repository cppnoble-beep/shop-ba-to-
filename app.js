/* ============================================================
   Kapeng Kabado — app.js
   ============================================================ */

// ── Products ─────────────────────────────────────────────────
// Images: portrait-friendly, warm-toned, food-editorial quality
const PRODUCTS = [
  // ── HOT ──
  {
    id: 1, temp: 'Hot', category: 'Amerikano',
    name: 'Amerikano ng Bayan',
    tagline: '"Para sa taong may trabaho pero walang pag-asa."',
    description: 'Dark, bold, no apologies. Single-origin Arabica, black as your future.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 2, temp: 'Hot', category: 'Latte',
    name: 'Kapeng Kabado Latte',
    tagline: '"Relax ka lang, hindi pa naman kita sinasakal."',
    description: 'Ristretto shots wrapped in velvety steamed milk. Smooth, warm, walang drama.',
    price: 175,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 3, temp: 'Hot', category: 'Cappuccino',
    name: 'Cappuccino ni Kapitbahay',
    tagline: '"Para feeling barista ka sa umaga."',
    description: 'Classic thirds — espresso, milk, thick foam. Your 3-in-1 is jealous.',
    price: 160,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 4, temp: 'Hot', category: 'Flat White',
    name: 'Flat White ng Flat Broke',
    tagline: '"Mahal ang buhay, pero hindi tayo."',
    description: 'Stronger than a latte, silkier than your excuses. Worth every centavo.',
    price: 165,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  // ── COLD ──
  {
    id: 5, temp: 'Cold', category: 'Cold Brew',
    name: 'Cold Brew ng Puso Ko',
    tagline: '"Cold brew, cold text, same feeling."',
    description: 'Steeped 18 hours. Smooth, low-acid, slow burn. Unlike your ex — this one stays.',
    price: 190,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 6, temp: 'Cold', category: 'Iced Latte',
    name: 'Iced Latte Paraluman',
    tagline: '"Para sa taong hindi pa rin nakakaalis sa ex."',
    description: 'Double shots over ice, vanilla milk finish. Chilled, elegant, zero drama.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 7, temp: 'Cold', category: 'Spanish Latte',
    name: 'Spanish Latte ng Sawi',
    tagline: '"Sweeter kaysa sa kanya, promise."',
    description: 'Espresso meets condensed milk on ice. Never left you on read pa.',
    price: 200,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 8, temp: 'Cold', category: 'Matcha Latte',
    name: 'Dirty Matcha Feeling',
    tagline: '"Para sa mga nagpapanggap na hindi coffee-dependent."',
    description: 'Ceremonial matcha, cold milk, hidden espresso shot underneath. Rebellious.',
    price: 210,
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  // ── FRAPPE ──
  {
    id: 9, temp: 'Frappe', category: 'Frappe',
    name: 'Mocha Frappe Marites',
    tagline: '"Chika habang naghihintay ng orders."',
    description: 'Blended espresso, choco sauce, whipped cream. Tsismis energy in a cup.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1572490122747-3f92b79e4e82?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 10, temp: 'Frappe', category: 'Frappe',
    name: 'Caramel Frappe Balikbayan',
    tagline: '"Nag-abroad pero uwi pa rin para sa kape."',
    description: 'Buttery caramel, espresso, mountain of cream. Decadent. Mahal. Worth it.',
    price: 230,
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 11, temp: 'Frappe', category: 'Frappe',
    name: 'Cookies & Cream Inday',
    tagline: '"Masarap at hindi nagpapaasa."',
    description: 'Oreos, white choco, thick blended ice. No espresso — this one\'s purely sweet.',
    price: 235,
    image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  // ── SPECIAL ──
  {
    id: 12, temp: 'Special', category: 'Brewed',
    name: 'Barako ng Batangas',
    tagline: '"Hindi natutumba ng anumang problema."',
    description: 'Authentic Batangas Barako, slow-brewed, bold, woody. Serve black. Serve proud.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 13, temp: 'Special', category: 'Hot Choco',
    name: 'Tsokolate Kabado',
    tagline: '"Hindi pa handa sa kape pero may exam bukas."',
    description: 'Ground Davao tablea, thick, aromatic, pinch of sea salt. Hindi ito Milo, \'day.',
    price: 185,
    image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 14, temp: 'Special', category: 'Affogato',
    name: 'Affogato Hugot',
    tagline: '"Maalala mo ang lahat ng ex mo sa unang sip."',
    description: 'Vanilla gelato drowned in hot espresso. Bittersweet, just like your situationship.',
    price: 195,
    image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 15, temp: 'Special', category: 'Dalgona',
    name: 'Creamy Dalgona Bading',
    tagline: '"400 whisk strokes of pure dedication."',
    description: 'Whipped coffee cloud over cold milk. TikTok classic. Ours is better. Ingat ka.',
    price: 175,
    image: 'https://images.unsplash.com/photo-1612276529731-4b21494e6d71?q=80&w=800&auto=format&fit=crop&crop=center'
  },
  {
    id: 16, temp: 'Special', category: 'Ube Latte',
    name: 'Ube Latte Panlaban',
    tagline: '"Purple ang pag-ibig, hindi ito papaalam."',
    description: 'Espresso, ube halaya, oat milk foam. Nutty, sweet, unapologetically Filipino.',
    price: 215,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop&crop=center'
  }
];

// ── State ─────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('kk_cart')) || [];
let selectedCategory = 'All';
let searchQuery = '';

// ── Helpers ───────────────────────────────────────────────────
const saveCart  = () => localStorage.setItem('kk_cart', JSON.stringify(cart));
const getItem   = id => cart.find(i => i.id === id);
const cartTotal = () => cart.reduce((s, i) => s + i.price * i.qty, 0);
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
    const badge  = BADGE[p.temp] || { cls: '', label: p.temp };
    const item   = getItem(p.id);
    const qty    = item ? item.qty : 0;
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
          <img src="${p.image}" alt="${p.name}"
               loading="lazy"
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
            <span class="text-2xl font-black text-amber-800">₱${p.price}</span>
            <div id="btn-area-${p.id}">${addBtn}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  // Attach events
  grid.querySelectorAll('.add-btn').forEach(btn =>
    btn.addEventListener('click', () => addToCart(+btn.dataset.id)));
  grid.querySelectorAll('.qty-btn').forEach(btn =>
    btn.addEventListener('click', () =>
      btn.dataset.action === 'inc' ? increaseQty(+btn.dataset.id) : decreaseQty(+btn.dataset.id)));

  // Intersection Observer for card reveal animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  grid.querySelectorAll('.product-card').forEach(card => observer.observe(card));
}

// ── Render cart ───────────────────────────────────────────────
function renderCart() {
  const list    = document.getElementById('cart-items');
  const empty   = document.getElementById('empty-cart');
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-count');
  if (!list) return;

  // Badge
  if (countEl) {
    countEl.textContent = totalQty();
    countEl.classList.remove('cart-count-bounce');
    void countEl.offsetWidth; // reflow
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
         style="border:1px solid #f3f4f6;">
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <img src="${item.image}" alt="${item.name}"
             class="w-14 h-14 rounded-xl object-cover flex-shrink-0"
             onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=200&auto=format&fit=crop'">
        <div class="min-w-0">
          <p class="font-bold text-sm truncate">${item.name}</p>
          <p class="text-xs text-gray-400">₱${item.price} each</p>
        </div>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <button class="qty-btn minus cart-dec" data-id="${item.id}">−</button>
        <span class="font-bold text-sm w-5 text-center">${item.qty}</span>
        <button class="qty-btn plus cart-inc" data-id="${item.id}">+</button>
        <span class="font-bold text-amber-800 ml-1 text-sm min-w-[50px] text-right">
          ₱${(item.price * item.qty).toLocaleString()}
        </span>
      </div>
    </div>`).join('');

  list.querySelectorAll('.cart-dec').forEach(btn =>
    btn.addEventListener('click', () => decreaseQty(+btn.dataset.id)));
  list.querySelectorAll('.cart-inc').forEach(btn =>
    btn.addEventListener('click', () => increaseQty(+btn.dataset.id)));
}

// ── Cart actions ──────────────────────────────────────────────
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = getItem(id);
  existing ? existing.qty++ : cart.push({ ...product, qty: 1 });
  saveCart(); renderCart(); refreshBtnArea(id);
}

function increaseQty(id) {
  const item = getItem(id);
  item ? item.qty++ : addToCart(id);
  if (!item) return;
  saveCart(); renderCart(); refreshBtnArea(id);
}

function decreaseQty(id) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  cart[idx].qty--;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart(); renderCart(); refreshBtnArea(id);
}

function refreshBtnArea(id) {
  const area = document.getElementById(`btn-area-${id}`);
  if (!area) return;
  const qty = getItem(id)?.qty || 0;
  if (qty === 0) {
    area.innerHTML = `<button class="add-btn" data-id="${id}">Add</button>`;
    area.querySelector('.add-btn').addEventListener('click', () => addToCart(id));
  } else {
    area.innerHTML = `
      <div class="flex items-center gap-2">
        <button class="qty-btn minus" data-id="${id}" data-action="dec">−</button>
        <span class="font-bold text-lg w-6 text-center">${qty}</span>
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
    items: cart.map(i => `${i.name} x${i.qty}`).join(', '),
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

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();

  document.getElementById('search-input')?.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderProducts();
  });

  document.querySelectorAll('.cat-btn').forEach(btn =>
    btn.addEventListener('click', () => setCategory(btn.dataset.cat)));

  document.getElementById('open-cart')?.addEventListener('click', openCart);
  document.getElementById('close-cart')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('cart-overlay')) closeCart();
  });
  document.getElementById('checkout-btn')?.addEventListener('click', checkout);

  // Back to top
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () =>
      btt.classList.toggle('visible', window.scrollY > 300), { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});