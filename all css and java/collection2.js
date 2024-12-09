const products = [
    //////////////////////////////// khaadi
    {
        id: 1, brand: 'khaadi',
        category: 'Printed | Cotton',
        name: 'Kurta',
        price: 4500,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/00U1SDY24V76_3.jpg?v=1730284203&width=400',
        sizes: ['S', 'M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 2,
        brand: 'khaadi',
        category: 'Embroidered',
        name: 'Shirt',
        price: 4000,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/00U1SDY24V94_5.jpg?v=1730285544&width=400',
        sizes: ['M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 3,
        brand: 'khaadi',
        category: 'Dyed',
        name: 'Top',
        price: 3000,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/WTOP24V60202.4.jpg?v=1729082257&width=400',
        sizes: ['S', 'L', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 4,
        brand: 'khaadi',
        category: 'Plain | Cotton',
        name: 'Tunic',
        price: 3500,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/00002472MOM8_5.jpg?v=1722940859&width=400',
        sizes: ['M', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 5,
        brand: 'khaadi',
        category: 'Printed | Cotton',
        name: 'Shirt',
        price: 4500,
        image: 'https://cdn.shopify.com/s/files/1/1592/0041/files/3PBEW24V410S_4_large.jpg?v=1729619046',
        sizes: ['S', 'M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 6,
        brand: 'khaadi',
        category: 'Embroidered',
        name: 'Kurta',
        price: 4000,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/02PRSDW24V41_4.jpg?v=1728528982&width=400',
        sizes: ['M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 7,
        brand: 'khaadi',
        category: 'Dyed',
        name: 'Top',
        price: 3000,
        image: 'https://cdn.shopify.com/s/files/1/1592/0041/files/WTOP24V60108_2_large.jpg?v=1727940239',
        sizes: ['S', 'L', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 8,
        brand: 'khaadi',
        category: 'Plain | Cotton',
        name: 'Tunic',
        price: 3500,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/02PESTW24V53_5.jpg?v=1730888325&width=400',
        sizes: ['M', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },

    //ethnic

    {
        id: 9,
        brand: 'ethnic',
        category: 'Printed | Cotton',
        name: 'Shirt',
        price: 4500,
        image: 'https://www.crossstitch.pk/cdn/shop/files/1_87c995a7-c44b-4cd2-84a4-83a0a5ccab3f.jpg?v=1722232048',
        sizes: ['S', 'M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 10,
        brand: 'ethnic',
        category: 'Embroidered',
        name: 'Kurta',
        price: 4000,
        image: 'https://www.crossstitch.pk/cdn/shop/files/29_c454d323-c7b4-4cce-b51c-90f41acaf0e4.jpg?v=1724660732',
        sizes: ['M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 11,
        brand: 'ethnic',
        category: 'Dyed',
        name: 'Top',
        price: 3000,
        image: 'https://saya.pk/cdn/shop/files/sp-7031_Ai-1.jpg?v=1730794898&width=600',
        sizes: ['S', 'L', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 12,
        brand: 'ethnic',
        category: 'Plain | Cotton',
        name: 'Tunic',
        price: 3500,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/003PBDW24V37_5.jpg?v=1730888948&width=400',
        sizes: ['M', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 13,
        brand: 'ethnic',
        category: 'Printed | Cotton',
        name: 'Shirt',
        price: 4500,
        image: 'https://cdn.shopify.com/s/files/1/1592/0041/files/03SEXJQDW245_1_large.jpg?v=1730268351',
        sizes: ['S', 'M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 14,
        brand: 'ethnic',
        category: 'Embroidered',
        name: 'Kurta',
        price: 4000,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/02STFSW24V58_2.jpg?v=1730268798&width=400',
        sizes: ['M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 15,
        brand: 'ethnic',
        category: 'Dyed',
        name: 'Top',
        price: 3000,
        image: 'https://cdn.shopify.com/s/files/1/1592/0041/files/WTOP24V60252_5_large.jpg?v=1727938880',
        sizes: ['S', 'L', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 16,
        brand: 'ethnic',
        category: 'Plain | Cotton',
        name: 'Tunic',
        price: 3500,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/003PBDW24V38_4.jpg?v=1730888961&width=400',
        sizes: ['M', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },

    //saphie

    {
        id: 17,
        brand: 'sapphire',
        category: 'Printed | Cotton',
        name: 'Shirt',
        price: 4500,
        image: 'https://cdn.shopify.com/s/files/1/1592/0041/files/00PBDYW24V34_4_large.jpg?v=1726045985',
        sizes: ['S', 'M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 18,
        brand: 'sapphire',
        category: 'Embroidered',
        name: 'Kurta',
        price: 4000,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/3PBEW24V413S_1.jpg?v=1730889994&width=400',
        sizes: ['M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 19,
        brand: 'sapphire',
        category: 'Dyed',
        name: 'Top',
        price: 3000,
        image: 'https://cdn.shopify.com/s/files/1/1592/0041/files/WTOP24V40024_4_large.jpg?v=1720176570',
        sizes: ['S', 'L', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 20,
        brand: 'sapphire',
        category: 'Plain | Cotton',
        name: 'Tunic',
        price: 3500,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/0F3PLXW24V56_1.jpg?v=1730886129&width=400',
        sizes: ['M', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 21,
        brand: 'sapphire',
        category: 'Printed | Cotton',
        name: 'Shirt',
        price: 4500,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/0TSTSLW24V52_6.jpg?v=1730886260&width=400',
        sizes: ['S', 'M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 22,
        brand: 'sapphire',
        category: 'Embroidered',
        name: 'Kurta',
        price: 4000,
        image: 'https://cdn.shopify.com/s/files/1/1592/0041/files/00002482MOM3_1_large.jpg?v=1726053871',
        sizes: ['M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 23,
        brand: 'sapphire',
        category: 'Dyed',
        name: 'Top',
        price: 3000,
        image: 'https://cdn.shopify.com/s/files/1/1592/0041/files/WTOP24V40013_1_64367084-b13d-4ae6-b8dc-0df84dcce191_large.jpg?v=1722338081',
        sizes: ['S', 'L', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 24,
        brand: 'sapphire',
        category: 'Plain | Cotton',
        name: 'Tunic',
        price: 3500,
        image: 'https://cdn.shopify.com/s/files/1/1592/0041/files/0T3PSLW24V24_3_4258266d-a3fc-4ec1-bd12-6a71149807c7_large.jpg?v=1723703853', sizes: ['M', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },

    //sheep

    {
        id: 25,
        brand: 'sheep',
        category: 'Printed | Cotton',
        name: 'Shirt',
        price: 4500,
        image: 'https://pk.sapphireonline.pk/cdn/shop/files/02STSGW24V56_5.jpg?v=1730888794&width=400',
        sizes: ['S', 'M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 26,
        brand: 'sheep',
        category: 'Embroidered',
        name: 'Kurta',
        price: 4800,
        image: 'https://sheepofficial.com/cdn/shop/files/Sheep6thSep.jpg?v=1726076268',
        sizes: ['M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 27,
        brand: 'sheep',
        category: 'Dyed',
        name: 'Top',
        price: 3000,
        image: 'https://sheepofficial.com/cdn/shop/files/WhatsAppImage2023-05-24at10.55.38AM.jpg?v=1685001962',
        sizes: ['S', 'L', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 28,
        brand: 'sheep',
        category: 'Plain | Cotton',
        name: 'Tunic',
        price: 3500,
        image: 'https://sheepofficial.com/cdn/shop/products/7V7A1479_785x.jpg?v=1648796092',
        sizes: ['M', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 29,
        brand: 'sheep',
        category: 'Printed | Cotton',
        name: 'Shirt',
        price: 4500,
        image: 'https://sheepofficial.com/cdn/shop/products/WhatsAppImage2023-03-30at12.47.01PM.jpg?v=1680257473',
        sizes: ['S', 'M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
    {
        id: 30,
        brand: 'sheep',
        category: 'Embroidered',
        name: 'Kurta',
        price: 4000,
        image: 'https://sheepofficial.com/cdn/shop/products/AP8A1427_534x.jpg?v=1654515994',
        sizes: ['M', 'L'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },

    {
        id: 31,
        brand: 'sheep',
        category: 'Dyed',
        name: 'Top',
        price: 3000,
        image: 'https://sheepofficial.com/cdn/shop/products/WhatsAppImage2023-03-11at12.40.11PM.jpg?v=1678525604',
        sizes: ['S', 'L', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },

    {
        id: 32,
        brand: 'sheep',
        category: 'Plain | Cotton',
        name: 'Tunic',
        price: 3500,
        image: 'https://sheepofficial.com/cdn/shop/files/MMA00762_b383e237-98a8-4736-a287-b33208b1625b.jpg?v=1728046132',
        sizes: ['M', 'XL'],
        description: 'Elegant cotton kurta with intricate print detailing, perfect for casual and semi-formal occasions.'
    },
];




filterProducts('all');

function selectSize(sizeElement, productId, size) {
    // Remove 'selected' class from all size options for this product
    const productSizeOptions = document.querySelectorAll(`#product-${productId} .size-option`);
    productSizeOptions.forEach(option => option.classList.remove('selected'));
    
    // Add 'selected' class to the clicked size
    sizeElement.classList.add('selected');
    
    // Update the selected size display
    const selectedSizeDisplay = document.getElementById(`selected-size-${productId}`);
    selectedSizeDisplay.textContent = `Selected Size: ${size}`;
}

function filterProducts(brand) {
    const container = document.getElementById('product-container');
    const tabs = document.querySelectorAll('.brand-tab');

    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(`${brand}-tab`).classList.add('active');

    container.innerHTML = '';
    const filteredProducts = brand === 'all' ? products : products.filter(product => product.brand === brand);

    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card" id="product-${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="price">${product.price} PKR</div>
                    <div class="sizes">
                        ${product.sizes.map(size => `<span class="size-option" onclick="selectSize(this, ${product.id}, '${size}')">${size}</span>`).join('')}
                    </div>
                    <div id="selected-size-${product.id}" class="selected-size"></div>
                    <button class="add-to-cart" onclick="openProductDetails(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

function openProductDetails(productId) {
    // Find the product in the products array
    const product = products.find(p => p.id === productId);

    if (!product) return;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.id = 'product-details-overlay';
    overlay.classList.add('product-details-overlay');

    // Blur the background
    document.body.classList.add('overlay-open');

    // Create overlay content
    overlay.innerHTML = `
        <div class="product-details-content">
            <button class="close-overlay" onclick="closeOverlay()">&times;</button>
            <div class="details-grid">
                <div class="details-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="details-info">
                    <h2>${product.name}</h2>
                    <p class="brand">Brand: ${product.brand.toUpperCase()}</p>
                    <p class="category">Category: ${product.category}</p>
                    <p class="description">${product.description}</p>
                    <p class="price">Price: ${product.price} PKR</p>
                    <div class="sizes">
                        Available Sizes: 
                        ${product.sizes.map(size => `<span class="size-option" onclick="selectSizeInDetails(this, '${size}')">${size}</span>`).join(' ')}
                    </div>
                    <div id="selected-details-size" class="selected-size"></div>
                    <button class="add-to-cart" onclick="finalizeCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    // Append overlay to body
    document.body.appendChild(overlay);
}

function selectSizeInDetails(sizeElement, size) {
    // Remove 'selected' class from all size options in details
    const detailsSizeOptions = document.querySelectorAll('.details-info .size-option');
    detailsSizeOptions.forEach(option => option.classList.remove('selected'));
    
    // Add 'selected' class to the clicked size
    sizeElement.classList.add('selected');
    
    // Update the selected size display in details
    const selectedSizeDisplay = document.getElementById('selected-details-size');
    selectedSizeDisplay.textContent = `Selected Size: ${size}`;
}

function finalizeCart(productId) {
    // Find the selected size
    const selectedSizeElement = document.querySelector('.details-info .size-option.selected');
    
    // Check if a size is selected
    if (!selectedSizeElement) {
        alert('Please select a size before adding to cart.');
        return;
    }
    
    // Find the product details
    const product = products.find(p => p.id === productId);
    const selectedSize = selectedSizeElement.textContent;
    
    // Create cart item object
    const cartItem = {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        size: selectedSize,
        image: product.image
    };
    
    // Save cart item to localStorage (you can modify this based on your cart management strategy)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Close the overlay
    closeOverlay();
    
    // Redirect to cart page (replace with your actual cart page URL)
    window.location.href = './cart-page.html';
}

function closeOverlay() {
    const overlay = document.getElementById('product-details-overlay');
    if (overlay) {
        overlay.remove();
    }
    document.body.classList.remove('overlay-open');
}

// Add fade-out animation to CSS
const styleSheet = document.createElement('style')
styleSheet.textContent = `
@keyframes fadeOut {
    from { opacity: 1; }
    to { 
        opacity: 0; 
        transform: scale(0.8);
        height: 0;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
}
`;
document.head.appendChild(styleSheet);

filterProducts('all');

