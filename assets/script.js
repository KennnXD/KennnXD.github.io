import productDataEng from "./product-data-eng.js";
import productDataId from "./product-data-id.js";
import productDataArb from "./product-data-arb.js";
import productDataChn from "./product-data-chn.js";
import translateLanguage from "./translate.-page.js";

AOS.init();

// initialize event listeners for buttons
document.getElementById('lang-en').addEventListener('click', function() {   
    translateLanguage('en');
    translateProducts('en');
});

document.getElementById('lang-id').addEventListener('click', function() {
    translateLanguage('id');
    translateProducts('id');
});

document.getElementById('lang-arb').addEventListener('click', function() {
    translateLanguage('arb');
    translateProducts('arb');
});

document.getElementById('lang-chn').addEventListener('click', function() {
    translateLanguage('chn');
    translateProducts('chn');
});

document.getElementById('messageForm').addEventListener('submit', function(event) {
    sendMessage(event);
});

window.addEventListener('DOMContentLoaded', function() {
    // Navbar shrink function
    var navbarScroll = function() {
        const mainNav = document.getElementById('mainNav');
        if (window.scrollY > 0) {
            mainNav.style.backgroundColor = '#086454';
            mainNav.style.transition = 'background-color 0.5s ease, box-shadow 0.5s ease';
        } else {
            mainNav.style.backgroundColor = 'transparent';
            mainNav.style.transition = 'background-color 0.5s ease, box-shadow 0.5s ease';
        }
    }

    navbarScroll(); // Call once to set the initial state

    document.addEventListener('scroll', navbarScroll);
    
})

function translateProducts(lang) {
    if (lang === 'id') {
        createProductCard(productDataId);
        createModal(productDataId);
    } 
    if (lang === 'en') {
        createProductCard(productDataEng);
        createModal(productDataEng);
    }
    if (lang === 'arb') {
        createProductCard(productDataArb);
        createModal(productDataArb);
    }
    if (lang === 'chn') {
        createProductCard(productDataChn);
        createModal(productDataChn);
    }
}

function createProductCard(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = ""
    products.forEach(product => {
        productContainer.innerHTML += `
        
            <div class="col-md-4 my-4">
                <div class="card shadow">
                    <img src="${product.gambar}" alt="${product.alt_gambar}" class="rounded-top">
                    <div class="card-body">
                    <h4 class="fw-bold mb-3">${product.nama}</h4>
                    <p>${product.deskripsi}</p>
                    <button type="button" class="btn btn-success float-end shadow mt-2" data-bs-toggle="modal" data-bs-target="#${product.id}">Details <i class="bi bi-caret-right-fill"></i></button>
                    </div>
                </div>
            </div>
        
        `
    })
}

function createModal(products) {
    const modalContainer = document.getElementById('modals-container');
    modalContainer.innerHTML = ""
    products.forEach(product => {
        modalContainer.innerHTML += `
        
            <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="${product.id}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">${product.nama}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="text-center">
                                <img src="${product.gambar}" alt="${product.alt_gambar}" class="img-items rounded shadow">
                            </div>
                            <p class="text-center mt-3"><i>${product.deskripsi}</i></p>
                            <h4 class="fw-semibold">${product.prod_detail}:</h4>
                            <ul>
                                ${product.form ? `<li><b>${product.form[0]}:</b> ${product.form[1]}</li>` : ''}
                                ${product.mesh ? `<li><b>${product.mesh[0]}:</b> ${product.mesh[1]}</li>` : ''}
                                ${product.moisture ? `<li><b>${product.moisture[0]}:</b> ${product.moisture[1]}</li>` : ''}
                                ${product.warna ? `<li><b>${product.warna[0]}:</b> ${product.warna[1]}</li>` : ''}
                                ${product.odor ? `<li><b>${product.odor[0]}:</b> ${product.odor[1]}</li>` : ''}
                                ${product.packaging ? `<li><b>${product.packaging[0]}:</b> ${product.packaging[1]}</li>` : ''}
                                ${product.usage ? `<li><b>${product.usage[0]}:</b> ${product.usage[1]}</li>` : ''}
                                ${product.shelfLife ? `<li><b>${product.shelfLife[0]}:</b> ${product.shelfLife[1]}</li>` : ''}
                                ${product.availability ? `<li><b>${product.availability[0]}:</b> ${product.availability[1]}</li>` : ''}
                                ${product.essentialOil ? `<li><b>${product.essentialOil[0]}:</b> ${product.essentialOil[1]}</li>` : ''}
                                ${product.additives ? `<li><b>${product.additives[0]}:</b> ${product.additives[1]}</li>` : ''}
                                ${product.certification ? `<li><b>${product.certification[0]}:</b> ${product.certification[1]}</li>` : ''}
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        `
    })
}

function sendMessage(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-3').value;
    const email = document.getElementById('contact-4').value;
    const phone = document.getElementById('contact-5').value;
    const message = document.getElementById('contact-6').value;
    const text = 'Name: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Phone: ' + phone + '\n' +
    'Message: ' + message;
    const whatsappUrl = `https://wa.me/6281330418386?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
}

function initializePage() {
    createProductCard(productDataEng); // Default to English products
    createModal(productDataEng); // Default to first product modal
}

initializePage(); // Call this function to set up the page on load