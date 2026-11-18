// NOSTRA expanded storefront — category collections and demo shopping features
const products = [
  // FASHION
  {id:1,name:"The Weekend Midi Dress",category:"Fashion",subcategory:"Dresses",price:2499,tag:"NEW",colour:"Ivory",material:"Cotton blend",fit:"Regular fit",description:"An easy midi dress with a graceful silhouette, made for brunches, holidays and everyday plans.",image:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85"},
  {id:2,name:"Sculpted Linen Co-ord",category:"Fashion",subcategory:"Co-ord Sets",price:3299,tag:"BESTSELLER",colour:"Natural beige",material:"Linen blend",fit:"Relaxed fit",description:"A matching top and trouser set with a relaxed shape and breathable feel.",image:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85"},
  {id:3,name:"Everyday Tailored Trousers",category:"Fashion",subcategory:"Trousers",price:1999,tag:"NOSTRA PICK",colour:"Charcoal",material:"Cotton blend",fit:"Wide-leg fit",description:"Modern wide-leg trousers designed to pair effortlessly with shirts, tees and knitwear.",image:"https://images.unsplash.com/photo-1506629905607-d9d4b7a2f0a5?auto=format&fit=crop&w=900&q=85"},
  {id:4,name:"Soft Knit Cardigan",category:"Fashion",subcategory:"Jackets & Knitwear",price:2799,tag:"NEW",colour:"Oatmeal",material:"Soft knit blend",fit:"Comfort fit",description:"A lightweight layer with a timeless shape for cool evenings and everyday styling.",image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85"},
  {id:5,name:"The Everyday Shirt",category:"Fashion",subcategory:"Shirts",price:1499,tag:"ESSENTIAL",colour:"White",material:"100% cotton",fit:"Relaxed fit",description:"A versatile button-front shirt with a clean collar and breathable cotton feel.",image:"https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85"},
  {id:6,name:"Pleated Evening Skirt",category:"Fashion",subcategory:"Skirts",price:2199,tag:"LIMITED",colour:"Black",material:"Woven fabric",fit:"Regular fit",description:"A flowing pleated skirt that moves easily from daytime plans to evening occasions.",image:"https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=85"},
  // TEES
  {id:7,name:"Oversized Studio Tee",category:"Tees",subcategory:"Oversized T-shirts",price:999,tag:"BESTSELLER",colour:"White",material:"Cotton jersey",fit:"Oversized",description:"A relaxed cotton tee with dropped shoulders and an easy everyday silhouette.",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"},
  {id:8,name:"Weekend Graphic Tee",category:"Tees",subcategory:"Graphic T-shirts",price:1199,tag:"NEW",colour:"Washed black",material:"Cotton jersey",fit:"Relaxed fit",description:"A statement graphic tee designed to bring a little personality to casual outfits.",image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85"},
  {id:9,name:"Essential Crew Neck Tee",category:"Tees",subcategory:"Basic T-shirts",price:799,tag:"ESSENTIAL",colour:"Cream",material:"100% cotton",fit:"Classic fit",description:"A soft crew-neck basic that works on its own or layered under your favourite shirt.",image:"https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85"},
  {id:10,name:"Everyday Crop Tee",category:"Tees",subcategory:"Crop Tops",price:899,tag:"POPULAR",colour:"Sage",material:"Cotton stretch",fit:"Cropped fit",description:"A comfortable cropped tee with a clean finish and easy stretch.",image:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85"},
  // SHAPEWEAR
  {id:11,name:"Smooth Form Bodysuit",category:"Shapewear",subcategory:"Bodysuits",price:1699,tag:"NEW",colour:"Nude",material:"Nylon elastane blend",fit:"Sculpting fit",description:"A smooth layering bodysuit designed to sit neatly under dresses, shirts and tailored pieces.",image:"https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=900&q=85"},
  {id:12,name:"Everyday Sculpt Shorts",category:"Shapewear",subcategory:"Shaping Shorts",price:1299,tag:"BESTSELLER",colour:"Black",material:"Stretch blend",fit:"Close fit",description:"Seamless-feel shaping shorts designed for a smooth finish under outfits.",image:"https://images.unsplash.com/photo-1506629905607-d9d4b7a2f0a5?auto=format&fit=crop&w=900&q=85"},
  {id:13,name:"Sculpt Waist Leggings",category:"Shapewear",subcategory:"Shaping Leggings",price:1899,tag:"NOSTRA PICK",colour:"Black",material:"Performance stretch",fit:"High-rise fit",description:"High-rise leggings with a supportive waistband and flexible feel.",image:"https://images.unsplash.com/photo-1506629905607-d9d4b7a2f0a5?auto=format&fit=crop&w=900&q=85"},
  {id:14,name:"Smooth Layering Cami",category:"Shapewear",subcategory:"Camisoles",price:999,tag:"ESSENTIAL",colour:"Mocha",material:"Soft stretch fabric",fit:"Fitted",description:"A versatile fitted camisole that layers comfortably beneath everyday looks.",image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85"},
  // BEAUTY
  {id:15,name:"Daily Glow Face Serum",category:"Beauty",subcategory:"Skincare",price:899,tag:"NEW",colour:"Clear",material:"Glass bottle",fit:"30 ml",description:"A lightweight demo skincare pick for a simple, fresh-feeling daily routine.",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85"},
  {id:16,name:"Cloud Soft Moisturiser",category:"Beauty",subcategory:"Moisturisers",price:749,tag:"POPULAR",colour:"White",material:"Cream",fit:"50 g",description:"A daily moisturiser concept with a soft, comfortable finish.",image:"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85"},
  {id:17,name:"Everyday SPF Cream",category:"Beauty",subcategory:"Sun Care",price:699,tag:"ESSENTIAL",colour:"White",material:"Cream",fit:"50 ml",description:"A convenient sun-care essential for a considered everyday beauty shelf.",image:"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85"},
  {id:18,name:"Soft Tint Lip Colour",category:"Beauty",subcategory:"Makeup",price:599,tag:"NEW",colour:"Rose",material:"Lip colour",fit:"One size",description:"A wearable rose-toned lip colour concept for a subtle finishing touch.",image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85"},
  // WELLNESS
  {id:19,name:"Calm Hour Yoga Mat",category:"Wellness",subcategory:"Yoga",price:1499,tag:"BESTSELLER",colour:"Sage",material:"Textured foam",fit:"Standard",description:"A cushioned yoga mat concept for stretching, movement and mindful routines.",image:"https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=85"},
  {id:20,name:"Aroma Moment Diffuser",category:"Wellness",subcategory:"Aromatherapy",price:1799,tag:"NEW",colour:"Ivory",material:"Ceramic-look finish",fit:"One size",description:"A minimal diffuser concept to complement a calm home ritual.",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85"},
  {id:21,name:"Soft Rest Eye Mask",category:"Wellness",subcategory:"Sleep Essentials",price:499,tag:"ESSENTIAL",colour:"Taupe",material:"Soft fabric",fit:"Adjustable",description:"A lightweight eye mask designed for a comfortable wind-down routine.",image:"https://images.unsplash.com/photo-1511295742362-92c96b5a8b1d?auto=format&fit=crop&w=900&q=85"},
  // KITCHEN
  {id:22,name:"Stoneware Breakfast Set",category:"Kitchen",subcategory:"Dinnerware",price:1899,tag:"NEW",colour:"Sand",material:"Stoneware",fit:"Set of 2",description:"A softly textured breakfast set to bring a considered feel to everyday dining.",image:"https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85"},
  {id:23,name:"Minimal Pour-over Set",category:"Kitchen",subcategory:"Coffee & Tea",price:1299,tag:"NOSTRA PICK",colour:"Cream",material:"Ceramic",fit:"Set",description:"A clean-lined coffee set for slow mornings and simple rituals.",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"},
  {id:24,name:"Everyday Storage Jars",category:"Kitchen",subcategory:"Storage",price:999,tag:"POPULAR",colour:"Clear",material:"Glass",fit:"Set of 3",description:"Practical glass storage jars that keep kitchen shelves neat and organised.",image:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=85"},
  // HOME
  {id:25,name:"Woven Cushion Cover",category:"Home",subcategory:"Cushions",price:799,tag:"NEW",colour:"Natural",material:"Cotton blend",fit:"16 × 16 in",description:"A textured cushion cover that adds warmth to sofas, beds and reading corners.",image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85"},
  {id:26,name:"Sculptural Table Lamp",category:"Home",subcategory:"Lighting",price:2499,tag:"LIMITED",colour:"Ivory",material:"Ceramic-look base",fit:"One size",description:"A softly sculptural lamp concept for bedside tables and cosy corners.",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85"},
  {id:27,name:"Modern Ceramic Vase",category:"Home",subcategory:"Decor",price:1199,tag:"NOSTRA PICK",colour:"Off-white",material:"Ceramic",fit:"One size",description:"A minimal vase that looks beautiful with fresh stems or styled on its own.",image:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85"},
  // TECH
  {id:28,name:"Studio Wireless Headphones",category:"Tech",subcategory:"Audio",price:2999,tag:"NEW",colour:"Black",material:"ABS and cushioned finish",fit:"One size",description:"A clean, everyday headphone concept for music, calls and focused work.",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85"},
  {id:29,name:"Minimal Smart Watch",category:"Tech",subcategory:"Wearables",price:3499,tag:"POPULAR",colour:"Black",material:"Metal and silicone",fit:"Adjustable",description:"A modern smartwatch concept with a clean profile for everyday wear.",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"},
  {id:30,name:"Portable Bluetooth Speaker",category:"Tech",subcategory:"Speakers",price:1999,tag:"BESTSELLER",colour:"Charcoal",material:"Fabric and ABS",fit:"Compact",description:"A compact speaker concept for playlists at home and on the go.",image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85"}
];

const categoryDescriptions = {
  "New In":"Fresh arrivals across fashion, beauty, home and everyday essentials.",
  "Fashion":"Considered clothing, modern silhouettes and versatile wardrobe favourites.",
  "Tees":"Everyday tees, graphic styles and relaxed essentials made for easy dressing.",
  "Shapewear":"Smooth layering essentials and comfortable shaping-inspired pieces.",
  "Beauty":"Thoughtful beauty and skincare picks for your everyday routine.",
  "Wellness":"Small essentials for movement, rest and everyday self-care.",
  "Kitchen":"Useful, beautiful pieces for cooking, serving and slow mornings.",
  "Home":"Finishing touches and considered details for the spaces you love.",
  "Tech":"Modern everyday gadgets and accessories with a clean, practical feel."
};
const categoryLanding = {
 "New In": {eyebrow:"THE LATEST ARRIVALS · NOSTRA 2026",note:"FRESH FINDS · N° 01",story:"A fresh perspective on everyday essentials.",storyText:"Meet the newest additions to Nostra. A considered mix of modern wardrobe pieces, thoughtful home details and useful everyday finds.",hero:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85",promo:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",sub:["Just Arrived","Most Loved","Everyday Essentials","The New Season"]},
 "Fashion": {eyebrow:"THE MODERN WARDROBE · NOSTRA 2026",note:"DRESS WITH INTENTION · N° 02",story:"The building blocks of a wardrobe that feels like you.",storyText:"Explore considered silhouettes, easy layers and versatile pieces. From relaxed tailoring to occasion-ready dresses, discover styles made to work together.",hero:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85",promo:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",sub:["Dresses","Tops & Shirts","Trousers","Co-ord Sets"]},
 "Tees": {eyebrow:"THE EVERYDAY TEE EDIT",note:"EASY BY DESIGN · N° 03",story:"The simplest pieces often say the most.",storyText:"Discover the tee you'll reach for again and again. Explore relaxed fits, clean basics, graphic details and easy layers in everyday colours.",hero:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=2000&q=85",promo:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=85",sub:["Oversized T-shirts","Graphic T-shirts","Basic T-shirts","Crop Tops"]},
 "Shapewear": {eyebrow:"THE SECOND-SKIN EDIT",note:"FEEL GOOD IN YOUR FORM · N° 04",story:"Comfortable layers. A smoother-feeling finish.",storyText:"Explore shaping-inspired layers and versatile base pieces designed to sit comfortably beneath your favourite outfits. Check each product's fit and fabric details.",hero:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=2000&q=85",promo:"https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=1200&q=85",sub:["Bodysuits","Shaping Shorts","Shaping Leggings","Camisoles"]},
 "Beauty": {eyebrow:"THE DAILY BEAUTY EDIT",note:"A LITTLE RITUAL · N° 05",story:"A thoughtful routine, one good step at a time.",storyText:"Build your everyday beauty shelf with skincare, sun care and finishing touches. Browse the edit and check ingredient and suitability information before use.",hero:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=2000&q=85",promo:"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=85",sub:["Skincare","Moisturisers","Sun Care","Makeup"]},
 "Wellness": {eyebrow:"THE EVERYDAY WELLNESS EDIT",note:"MAKE SPACE FOR YOU · N° 06",story:"Small rituals can make room for a better day.",storyText:"Explore movement, rest and self-care essentials selected to support the little routines that make your day feel more balanced.",hero:"https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=2000&q=85",promo:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85",sub:["Yoga & Movement","Aromatherapy","Sleep Essentials","Self-care"]},
 "Kitchen": {eyebrow:"THE CONSIDERED KITCHEN",note:"MADE FOR SLOW MORNINGS · N° 07",story:"Useful objects. Beautiful everyday moments.",storyText:"From coffee rituals to organised shelves, discover functional pieces that bring a calm, considered feel to the heart of your home.",hero:"https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=2000&q=85",promo:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",sub:["Dinnerware","Coffee & Tea","Storage","Cookware"]},
 "Home": {eyebrow:"THE HOME DETAILS EDIT",note:"MAKE YOUR SPACE YOURS · N° 08",story:"A home comes together in the details.",storyText:"Discover considered accents for cosy corners, restful rooms and welcoming spaces. Explore texture, lighting and decorative finishing touches.",hero:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=2000&q=85",promo:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",sub:["Cushions & Throws","Lighting","Decor","Bed & Bath"]},
 "Tech": {eyebrow:"THE EVERYDAY TECH EDIT",note:"SMARTER DAILY DETAILS · N° 09",story:"Useful technology, thoughtfully chosen.",storyText:"Explore everyday gadgets and accessories for listening, working and staying connected. Review product specifications and device compatibility before purchasing.",hero:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=2000&q=85",promo:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",sub:["Audio","Wearables","Speakers","Accessories"]}
};

const readStore = key => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
const saveStore = (key,value) => localStorage.setItem(key,JSON.stringify(value));
let cart = readStore("nostraCart");
let wishlist = readStore("nostraWishlist");
function money(value){return "₹"+Number(value).toLocaleString("en-IN");}
function notify(message){
  let toast=document.querySelector(".toast");
  if(!toast){toast=document.createElement("div");toast.className="toast";toast.setAttribute("role","status");document.body.append(toast);}
  toast.textContent=message;toast.classList.add("show");
  clearTimeout(window.nostraToastTimer);
  window.nostraToastTimer=setTimeout(()=>toast.classList.remove("show"),2400);
}
function productCard(p){
  const saved=wishlist.includes(p.id);
  return `<article class="product-card">
    <div class="product-image-wrap">
      <a href="product-details.html?id=${p.id}" aria-label="View ${p.name} details"><img src="${p.image}" alt="${p.name}" loading="lazy"></a>
      <span class="product-tag">${p.tag}</span>
      <button class="wish-button ${saved?"saved":""}" data-wish="${p.id}" aria-label="Add ${p.name} to wishlist">${saved?"♥":"♡"}</button>
      <button class="quick-add" data-add="${p.id}">ADD TO BAG — ${money(p.price)}</button>
    </div>
    <div class="product-info"><small>${p.category.toUpperCase()} / ${p.subcategory.toUpperCase()}</small><h3><a href="product-details.html?id=${p.id}">${p.name}</a></h3><p>${money(p.price)}</p><a class="product-details-link" href="product-details.html?id=${p.id}">VIEW DETAILS ↗</a></div>
  </article>`;
}
function renderProducts(){
  const featured=document.querySelector("[data-featured-products]");
  if(featured) featured.innerHTML=products.slice(0,4).map(productCard).join("");
  renderCollection();
}
function renderCollection(){
  const target=document.querySelector("[data-all-products]");
  if(!target)return;
  const params=new URLSearchParams(location.search);
  const requested=params.get("category")||"New In";
  const title=["Women","Men","Accessories"].includes(requested)?"Fashion":requested;
  const heading=document.getElementById("collectionTitle");
  const desc=document.getElementById("collectionDescription");
  if(heading)heading.textContent=title==="New In"?"New in":title;
  if(desc)desc.textContent=categoryDescriptions[title]||categoryDescriptions["New In"];
  const landing=categoryLanding[title]||categoryLanding["New In"];
  const setText=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value;};
  setText("categoryEyebrow",landing.eyebrow);setText("categoryHeroNote",landing.note);
  setText("categoryStoryTitle",landing.story);setText("categoryStoryText",landing.storyText);
  setText("categoryPromoText",landing.storyText);
  const heroImage=document.getElementById("categoryHeroImage");if(heroImage){heroImage.src=landing.hero;heroImage.alt=`${title} collection editorial`;}
  const promoImage=document.getElementById("categoryPromoImage");if(promoImage){promoImage.src=landing.promo;promoImage.alt=`Nostra ${title} edit`;}
  const subGrid=document.getElementById("subcategoryCards");
  if(subGrid){
    const categoryProducts=products.filter(p=>title==="New In"||p.category===title);
    const fallbacks=categoryProducts.map(p=>p.image);
    const subNames=landing.sub;
    subGrid.innerHTML=subNames.map((name,index)=>{
      const matched=categoryProducts.find(p=>p.subcategory.toLowerCase().includes(name.toLowerCase().split(" ")[0]));
      const image=matched?.image||fallbacks[index%Math.max(fallbacks.length,1)]||landing.hero;
      const href=matched?`product-details.html?id=${matched.id}`:`#shopProducts`;
      return `<a class="subcategory-card" href="${href}"><img src="${image}" alt="${name}" loading="lazy"><span>${String(index+1).padStart(2,"0")} / ${name.toUpperCase()} ↗</span></a>`;
    }).join("");
  }
  const promoTitle=document.getElementById("categoryPromoTitle");
  if(promoTitle)promoTitle.innerHTML=title==="Fashion"?"Wear it your<br><em>own way.</em>":title==="Beauty"?"Your everyday<br><em>feel-good ritual.</em>":title==="Tech"?"Thoughtful tech.<br><em>Made useful.</em>":"Made to be used.<br><em>Loved for longer.</em>";
  document.title=`${title} | Nostra Collections`;
  const categorySelect=document.getElementById("categoryFilter");
  const sortSelect=document.getElementById("sortFilter");
  const subSelect=document.getElementById("subcategoryFilter");
  const search=params.get("search");
  let list=title==="New In"?products.slice(0,12):products.filter(p=>p.category.toLowerCase()===title.toLowerCase());
  if(search)list=products.filter(p=>(p.name+" "+p.category+" "+p.subcategory).toLowerCase().includes(search.toLowerCase()));
  if(categorySelect && categorySelect.value!=="All")list=list.filter(p=>p.category===categorySelect.value);
  if(subSelect && subSelect.value!=="All")list=list.filter(p=>p.subcategory===subSelect.value);
  if(sortSelect?.value==="low")list.sort((a,b)=>a.price-b.price);
  if(sortSelect?.value==="high")list.sort((a,b)=>b.price-a.price);
  if(sortSelect?.value==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
  target.innerHTML=list.length?list.map(productCard).join(""):`<p class="no-products">No products found. Try another category or search.</p>`;
  const count=document.getElementById("productCount");
  if(count)count.textContent=`${list.length} ${search?"MATCHES":"PIECES"}`;
  const subcategories=[...new Set(products.filter(p=>title==="New In"||p.category===title).map(p=>p.subcategory))];
  if(subSelect){
    const previous=subSelect.value;
    subSelect.innerHTML='<option value="All">All styles</option>'+subcategories.map(s=>`<option value="${s}">${s}</option>`).join("");
    if(subcategories.includes(previous))subSelect.value=previous;
  }
  document.querySelectorAll("[data-category-link]").forEach(a=>a.classList.toggle("active",a.dataset.categoryLink===title));
}
function renderCart(){
  document.querySelectorAll(".cart-count").forEach(el=>el.textContent=cart.reduce((sum,item)=>sum+item.qty,0));
  const target=document.getElementById("cartItems");
  if(target){
    target.innerHTML=cart.length?cart.map(item=>`<div class="mini-row"><span>${item.name}${item.size?` · ${item.size}`:""} × ${item.qty}</span><span>${money(item.price*item.qty)} <button data-remove="${item.id}" data-size="${item.size||""}">Remove</button></span></div>`).join(""):"Your bag is currently empty.";
    const total=cart.reduce((sum,item)=>sum+item.price*item.qty,0);
    const totalEl=document.getElementById("cartTotal");if(totalEl)totalEl.textContent=money(total);
  }
}
function renderWishlist(){
  const target=document.getElementById("wishlistItems");if(!target)return;
  const items=products.filter(p=>wishlist.includes(p.id));
  target.innerHTML=items.length?items.map(p=>`<div class="mini-row"><span>${p.name} — ${money(p.price)}</span><button data-wish="${p.id}">♥ Remove</button></div>`).join(""):"Your saved pieces will appear here.";
}
function addToCart(id,size=""){
  const p=products.find(item=>item.id===Number(id));if(!p)return;
  const existing=cart.find(item=>item.id===p.id&&item.size===size);
  if(existing)existing.qty+=1;else cart.push({...p,size,qty:1});
  saveStore("nostraCart",cart);renderCart();notify(`${p.name} added to your bag.`);
}
function toggleWishlist(id){
  id=Number(id);wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];
  saveStore("nostraWishlist",wishlist);renderProducts();renderWishlist();
  notify(wishlist.includes(id)?"Saved to your wishlist.":"Removed from your wishlist.");
}
document.addEventListener("click",event=>{
  const add=event.target.closest("[data-add]"),wish=event.target.closest("[data-wish]"),remove=event.target.closest("[data-remove]");
  if(add)addToCart(add.dataset.add);
  if(wish)toggleWishlist(wish.dataset.wish);
  if(remove){cart=cart.filter(item=>!(item.id===Number(remove.dataset.remove)&&(item.size||"")===(remove.dataset.size||"")));saveStore("nostraCart",cart);renderCart();}
});
document.querySelectorAll(".menu-toggle").forEach(button=>button.addEventListener("click",()=>{
  const nav=document.querySelector(".main-nav");if(!nav)return;
  const open=nav.classList.toggle("open");button.setAttribute("aria-expanded",String(open));button.textContent=open?"×":"☰";
}));
document.querySelectorAll(".search-toggle").forEach(button=>button.addEventListener("click",()=>{
  document.querySelector(".search-panel")?.classList.toggle("open");document.getElementById("siteSearch")?.focus();
}));
function runSearch(){const q=document.getElementById("siteSearch")?.value.trim();if(q)location.href=`collections.html?search=${encodeURIComponent(q)}`;}
document.querySelectorAll(".search-submit").forEach(b=>b.addEventListener("click",runSearch));
document.getElementById("siteSearch")?.addEventListener("keydown",e=>{if(e.key==="Enter")runSearch();});
["categoryFilter","subcategoryFilter","sortFilter"].forEach(id=>document.getElementById(id)?.addEventListener("change",renderCollection));
document.querySelector(".newsletter-form")?.addEventListener("submit",e=>{e.preventDefault();notify("Thank you for subscribing to Nostra!");e.currentTarget.reset();});
document.getElementById("checkoutButton")?.addEventListener("click",()=>notify(cart.length?"Demo checkout: connect a payment gateway to accept orders.":"Your shopping bag is empty."));
function setupProductDetails(){
  const page=document.getElementById("productDetail");if(!page)return;
  const id=Number(new URLSearchParams(location.search).get("id"))||1;
  const p=products.find(x=>x.id===id)||products[0];
  document.title=`${p.name} | Nostra`;
  const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value;};
  set("detailCrumb",p.name.toUpperCase());set("detailCategory",`${p.category.toUpperCase()} / ${p.subcategory.toUpperCase()}`);
  set("detailName",p.name);set("detailPrice",money(p.price));set("detailOldPrice",money(Math.round(p.price*1.2)));
  set("detailIntro",p.description);set("detailColour",p.colour);set("detailReview","4.8 / 5 · Demo product rating");
  set("detailButtonPrice",money(p.price));set("detailFit",p.fit);set("detailCare","Follow the care instructions on the product label. Keep away from harsh chemicals and store appropriately.");
  const image=document.getElementById("detailImage");if(image){image.src=p.image;image.alt=p.name;}
  const sticky=document.getElementById("stickyProductImage");if(sticky)sticky.src=p.image;
  set("stickyProductName",p.name);set("stickyProductPrice",money(p.price));
  const desc=document.getElementById("detailDescription");
  if(desc)desc.innerHTML=`<p>${p.description}</p><ul><li>${p.subcategory}</li><li>${p.material}</li><li>${p.fit}</li></ul><p><b>Colour:</b> ${p.colour}<br><b>Material:</b> ${p.material}</p>`;
  const sizes=["XS","S","M","L","XL","XXL"];
  const sizeBox=document.getElementById("sizeOptions");
  let selectedSize="One size";
  if(sizeBox){
    sizeBox.innerHTML=(["Beauty","Wellness","Kitchen","Home","Tech"].includes(p.category)?["One size"]:sizes).map(s=>`<button class="size-chip" type="button" data-size="${s}">${s}</button>`).join("");
    sizeBox.addEventListener("click",e=>{const b=e.target.closest("[data-size]");if(!b)return;selectedSize=b.dataset.size;sizeBox.querySelectorAll(".size-chip").forEach(x=>x.classList.toggle("selected",x===b));});
  }
  let qty=1;const out=document.getElementById("qtyValue");
  const update=()=>{if(out)out.textContent=qty;set("detailButtonPrice",money(p.price*qty));};
  document.getElementById("qtyMinus")?.addEventListener("click",()=>{qty=Math.max(1,qty-1);update();});
  document.getElementById("qtyPlus")?.addEventListener("click",()=>{qty=Math.min(10,qty+1);update();});
  const buy=()=>{for(let i=0;i<qty;i++)addToCart(p.id,selectedSize);};
  document.getElementById("detailAdd")?.addEventListener("click",buy);
  document.getElementById("stickyAdd")?.addEventListener("click",buy);
  const wish=document.getElementById("detailWish");
  if(wish){const refresh=()=>wish.textContent=wishlist.includes(p.id)?"♥ SAVED TO WISHLIST":"♡ ADD TO WISHLIST";refresh();wish.addEventListener("click",()=>{toggleWishlist(p.id);refresh();});}
  const thumbs=document.getElementById("detailThumbs");
  if(thumbs)thumbs.innerHTML=[0,1,2].map((_,i)=>`<button class="thumb ${i===0?"active":""}" type="button" data-view="${i}"><img src="${p.image}" alt="${p.name} view ${i+1}"></button>`).join("");
  thumbs?.addEventListener("click",e=>{const b=e.target.closest("[data-view]");if(!b)return;thumbs.querySelectorAll(".thumb").forEach(x=>x.classList.toggle("active",x===b));});
  const featured=document.querySelector("[data-featured-products]");
  if(featured)featured.innerHTML=products.filter(x=>x.id!==p.id&&x.category===p.category).slice(0,4).map(productCard).join("");
}
document.addEventListener("DOMContentLoaded",()=>{
  renderProducts();renderCart();renderWishlist();setupProductDetails();
});
