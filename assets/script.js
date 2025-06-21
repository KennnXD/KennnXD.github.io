AOS.init();

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

function translateLanguage(lang) {

    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navService = document.getElementById('nav-service');
    const navProduct = document.getElementById('nav-product');
    const navContact = document.getElementById('nav-contact');
    const navLanguage = document.getElementById('nav-lang');
    
    const langEn = document.getElementById('lang-en');
    const langId = document.getElementById('lang-id');
    const langArb = document.getElementById('lang-arb');
    const langChn = document.getElementById('lang-chn');

    const titleStart1 = document.getElementById('title-start-1');
    const titleStart2 = document.getElementById('title-start-2');
    const titleStart3 = document.getElementById('title-start-3');
    const titleStart4 = document.getElementById('title-start-4');

    const about1 = document.getElementById('about-1');
    const about2 = document.getElementById('about-2');
    const about3 = document.getElementById('about-3');
    const about4 = document.getElementById('about-4');
    const about5 = document.getElementById('about-5');
    const about6 = document.getElementById('about-6');
    const about7 = document.getElementById('about-7');
    const about8 = document.getElementById('about-8');
    const about9 = document.getElementById('about-9');
    const about10 = document.getElementById('about-10');
    const about11 = document.getElementById('about-11');
    const about12 = document.getElementById('about-12');

    const serviceStart1 = document.getElementById('service-start-1');
    const serviceStart2 = document.getElementById('service-start-2');
    const serviceStart3 = document.getElementById('service-start-3');
    const serviceStart4 = document.getElementById('service-start-4');
    const serviceStart5 = document.getElementById('service-start-5');
    const serviceStart6 = document.getElementById('service-start-6');
    const serviceStart7 = document.getElementById('service-start-7');
    const serviceStart8 = document.getElementById('service-start-8');

    const product1 = document.getElementById('product-1');
    const product2 = document.getElementById('product-2');
    const product3 = document.getElementById('product-4');
    const product4 = document.getElementById('product-5');
    const product5 = document.getElementById('product-6');
    const product6 = document.getElementById('product-7');
    const product7 = document.getElementById('product-8');
    const product8 = document.getElementById('product-9');

    const contact1 = document.getElementById('contact-1');
    const contact2 = document.getElementById('contact-2');
    const contact3 = document.getElementById('contact-3');
    const contact4 = document.getElementById('contact-4');
    const contact5 = document.getElementById('contact-5');
    const contact6 = document.getElementById('contact-6');
    const contact7 = document.getElementById('contact-7');

    const footer0 = document.getElementById('footer-0');
    const footer1 = document.getElementById('footer-1');
    const footer2 = document.getElementById('footer-2');
    const footer3 = document.getElementById('footer-3');
    const footer4 = document.getElementById('footer-4');
    const footer5 = document.getElementById('footer-5');
    const footer6 = document.getElementById('footer-6');
    const footer7 = document.getElementById('footer-7');
    const footer8 = document.getElementById('footer-8');
    const footer9 = document.getElementById('footer-9');

    const modal1 = document.querySelector('.modal-1');
    const modal2 = document.getElementById('modal-2');
    const modal3 = document.getElementById('modal-3');
    const modal4 = document.getElementById('modal-4');
    const modal5 = document.getElementById('modal-5');
    const modal6 = document.getElementById('modal-6');

    if (lang === 'en') {

        navHome.innerHTML = 'Home';
        navAbout.innerHTML = 'About Us';
        navService.innerHTML = 'Services';
        navProduct.innerHTML = 'Products';
        navContact.innerHTML = 'Contact';
        navLanguage.innerHTML = 'Language';

        langEn.innerHTML = 'English (Active)';
        langId.innerHTML = 'Indonesia';
        langArb.innerHTML = 'Arabic';
        langChn.innerHTML = 'Chinese';

        titleStart1.innerHTML = 'Your Reliable Supplier';
        titleStart2.innerHTML = 'Premium Moringa Powder';
        titleStart3.innerHTML = 'Exporter From Indonesia';
        titleStart4.innerHTML = 'Tell Me More';

        about1.innerHTML = 'Export Readiness';
        about2.innerHTML = 'Our current position in the global supply chain';
        about3.innerHTML = 'Established';
        about4.innerHTML = 'Trusted Local Suppliers';
        about5.innerHTML = 'Ready';
        about6.innerHTML = 'Export Documentation';
        about7.innerHTML = 'Our Leaves Journey';
        about8.innerHTML = 'Discover how fresh Indonesian leaves are <br> sourced and handled before they reach global markets.';
        about9.innerHTML = 'Our Production';
        about10.innerHTML = `Indonesia is home to rich biodiversity and powerful superfoods—among them, Moringa (Moringa oleifera) stands out for its nutritional value and growing global demand. <br><br>
                            IndoLeaves is a dedicated supplier of premium moringa powder sourced from trusted local farmers in East Java, Indonesia. While we are a new player in global trade, our approach is fresh, transparent, and highly responsive to international quality expectations. <br><br>
                            We work closely with our partners to ensure:`;
        about11.innerHTML = `<li>Ethical and sustainable harvesting</li>
                            <li>Natural sun-drying and fine milling</li>
                            <li>Food-grade packaging</li>
                            <li>Export-compliant documentation and logistics</li>`;
        about12.innerHTML = 'Our mission is simple: <b><i>Deliver clean, consistent, and reliable moringa powder for your health and wellness needs.</i></b>';

        serviceStart1.innerHTML = 'Our Services';
        serviceStart2.innerHTML = 'There are many leaves supplier, why you should choose IndoLeaves?';
        serviceStart3.innerHTML = 'Quality Control';
        serviceStart4.innerHTML = 'Every product is controlled to maintain the consistency of high-quality products.';
        serviceStart5.innerHTML = 'Available 24/7';
        serviceStart6.innerHTML = 'Anytime you contacted us, our team always ready.';
        serviceStart7.innerHTML = 'Free Consultation';
        serviceStart8.innerHTML = 'For any of your needs, we will always assist you.';

        product1.innerHTML = 'Our Product';
        product2.innerHTML = 'Explore our premium leaf products crafted with care.';
        product3.innerHTML = 'Moringa Powder';
        product4.innerHTML = 'Premium moringa powder, rich in nutrients and antioxidants, perfect for health supplements and culinary uses.';
        product5.innerHTML = 'Details <i class="bi bi-caret-right-fill"></i>';
        product6.innerHTML = 'Download Our Catalog';
        product7.innerHTML = '<i>Get our latest Catalog in PDF format for more information about IndoLeaves.</i>';
        product8.innerHTML = '<i class="bi bi-file-earmark-arrow-down-fill"></i> Download Catalog';

        contact1.innerHTML = 'Contact Us';
        contact2.innerHTML = 'For Dealing To Achieve the Deal.';
        contact3.placeholder = 'Your Name';
        contact4.placeholder = 'Your Email';
        contact5.placeholder = 'Your Phone';
        contact6.placeholder = 'Your Message';
        contact7.innerHTML = 'Send Message';

        footer0.innerHTML = 'Shop';
        footer1.innerHTML = 'Moringa Powder';
        footer2.innerHTML = 'Learn';
        footer3.innerHTML = 'Home';
        footer4.innerHTML = 'About Us';
        footer5.innerHTML = 'Services';
        footer6.innerHTML = 'Products';
        footer7.innerHTML = 'Contact';
        footer8.innerHTML = 'Follow Us';
        footer9.innerHTML = 'Copyright &copy; 2025 indoleaves.com';

        modal1.innerHTML = 'Moringa Powder';
        modal2.innerHTML = 'Moringa powder is a nutrient-dense superfood made from the leaves of the Moringa oleifera tree, known for its high levels of vitamins, minerals, and antioxidants.';
        modal3.innerHTML = 'Benefits of Moringa Powder';
        modal4.innerHTML = 'Product Details:';
        modal5.innerHTML = `<li><b>Form:</b> Fine powder from dried moringa leaves</li>
                            <li><b>Mesh Size:</b> 60-80 mesh (customizable)</li>
                            <li><b>Moisture Content:</b> ≤ 7%</li>
                            <li><b>Color:</b> Bright green (natural, non-bleached)</li>
                            <li><b>Odor & Taste:</b> Mildly earthy and characteristic herbal aroma</li>
                            <li><b>Packaging:</b> 25 kg vacuum-sealed food-grade bags (or as requested)</li>
                            <li><b>Usage:</b> Health supplements, tea blends, herbal capsules, cosmetics</li>
                            <li><b>Shelf Life:</b> 18-24 months (stored in cool, dry conditions)</li>
                            <li><b>Availability:</b> Consistent monthly supply from Java, Indonesia</li>`
        modal6.innerHTML = 'Close';

    } else if (lang === 'id') {

        navHome.innerHTML = 'Beranda';
        navAbout.innerHTML = 'Tentang Kami';
        navService.innerHTML = 'Layanan';
        navProduct.innerHTML = 'Produk';
        navContact.innerHTML = 'Kontak';
        navLanguage.innerHTML = 'Bahasa';

        langEn.innerHTML = 'Inggris';
        langId.innerHTML = 'Indonesia (Aktif)';
        langArb.innerHTML = 'Arab';
        langChn.innerHTML = 'Cina';

        titleStart1.innerHTML = 'Pemasok Terpercaya Anda';
        titleStart2.innerHTML = 'Bubuk Daun Kelor Premium';
        titleStart3.innerHTML = 'Eksportir dari Indonesia';
        titleStart4.innerHTML = 'Beritahu Saya Lebih Lanjut';

        about1.innerHTML = 'Kesiapan Ekspor';
        about2.innerHTML = 'Posisi kami saat ini dalam rantai pasok global';
        about3.innerHTML = 'Terlaksana';
        about4.innerHTML = 'Pemasok Lokal Terpercaya';
        about5.innerHTML = 'Siap';
        about6.innerHTML = 'Dokumentasi Ekspor';
        about7.innerHTML = 'Perjalanan Daun Kami';
        about8.innerHTML = 'Temukan bagaimana daun Indonesia yang segar <br> dipanen dan ditangani sebelum sampai ke pasar global.';
        about9.innerHTML = 'Produksi Kami';
        about10.innerHTML = `Indonesia adalah rumah bagi keanekaragaman hayati dan superfood yang kaya — salah satunya adalah Kelor (Moringa oleifera), dikenal akan nilai gizinya dan permintaan global yang meningkat. <br><br>
                            IndoLeaves adalah pemasok khusus bubuk kelor premium yang berasal dari petani lokal terpercaya di Jawa Timur, Indonesia. Meskipun kami pemain baru dalam perdagangan global, pendekatan kami segar, transparan, dan sangat sesuai dengan standar kualitas internasional. <br><br>
                            Kami bekerja erat dengan mitra kami untuk memastikan:`;
        about11.innerHTML = `<li>Pemanenan yang etis dan berkelanjutan</li>
                            <li>Pengeringan alami dan penggilingan halus</li>
                            <li>Kemasan dengan standar makanan</li>
                            <li>Dokumentasi dan logistik sesuai ekspor</li>`;
        about12.innerHTML = 'Misi kami sederhana: <b><i>Menghadirkan bubuk kelor yang bersih, konsisten, dan terpercaya untuk kebutuhan kesehatan dan kebugaran Anda.</i></b>';

        serviceStart1.innerHTML = 'Layanan Kami';
        serviceStart2.innerHTML = 'Banyak pemasok daun di luar sana, mengapa Anda harus memilih IndoLeaves?';
        serviceStart3.innerHTML = 'Kontrol Kualitas';
        serviceStart4.innerHTML = 'Setiap produk dikontrol untuk menjaga konsistensi kualitas tinggi.';
        serviceStart5.innerHTML = 'Tersedia 24/7';
        serviceStart6.innerHTML = 'Kapan pun Anda menghubungi kami, tim kami selalu siap.';
        serviceStart7.innerHTML = 'Konsultasi Gratis';
        serviceStart8.innerHTML = 'Untuk semua kebutuhan Anda, kami akan selalu membantu.';

        product1.innerHTML = 'Produk Kami';
        product2.innerHTML = 'Jelajahi produk daun premium kami yang dibuat dengan penuh perhatian.';
        product3.innerHTML = 'Bubuk Daun Kelor';
        product4.innerHTML = 'Bubuk kelor premium, kaya akan nutrisi dan antioksidan, cocok untuk suplemen kesehatan dan penggunaan kuliner.';
        product5.innerHTML = 'Detail <i class="bi bi-caret-right-fill"></i>';
        product6.innerHTML = 'Unduh Katalog Kami';
        product7.innerHTML = '<i>Dapatkan Katalog terbaru kami dalam format PDF untuk informasi lebih lanjut tentang IndoLeaves.</i>';
        product8.innerHTML = '<i class="bi bi-file-earmark-arrow-down-fill"></i> Unduh Katalog';

        contact1.innerHTML = 'Hubungi Kami';
        contact2.innerHTML = 'Untuk Mencapai Kesepakatan Bersama.';
        contact3.placeholder = 'Nama Anda';
        contact4.placeholder = 'Email Anda';
        contact5.placeholder = 'Nomor Telepon Anda';
        contact6.placeholder = 'Pesan Anda';
        contact7.innerHTML = 'Kirim Pesan';

        footer0.innerHTML = 'Belanja';
        footer1.innerHTML = 'Bubuk Daun Kelor';
        footer2.innerHTML = 'Pelajari';
        footer3.innerHTML = 'Beranda';
        footer4.innerHTML = 'Tentang Kami';
        footer5.innerHTML = 'Layanan';
        footer6.innerHTML = 'Produk';
        footer7.innerHTML = 'Kontak';
        footer8.innerHTML = 'Ikuti Kami';
        footer9.innerHTML = 'Hak Cipta &copy; 2025 indoleaves.com';

        modal1.innerHTML = 'Bubuk Daun Kelor';
        modal2.innerHTML = 'Bubuk kelor adalah superfood kaya nutrisi yang terbuat dari daun pohon Moringa oleifera, dikenal karena kandungan vitamin, mineral, dan antioksidannya yang tinggi.';
        modal3.innerHTML = 'Manfaat Bubuk Daun Kelor';
        modal4.innerHTML = 'Detail Produk:';
        modal5.innerHTML = `<li><b>Bentuk:</b> Bubuk halus dari daun kelor kering</li>
                            <li><b>Ukuran Mesh:</b> 60-80 mesh (dapat disesuaikan)</li>
                            <li><b>Kadar Air:</b> ≤ 7%</li>
                            <li><b>Warna:</b> Hijau cerah (alami, tidak diputihkan)</li>
                            <li><b>Aroma & Rasa:</b> Sedikit earthy dengan aroma herbal khas</li>
                            <li><b>Kemasan:</b> Karung food-grade 25 kg vakum (atau sesuai permintaan)</li>
                            <li><b>Penggunaan:</b> Suplemen kesehatan, campuran teh, kapsul herbal, kosmetik</li>
                            <li><b>Masa Simpan:</b> 18-24 bulan (disimpan di tempat sejuk dan kering)</li>
                            <li><b>Ketersediaan:</b> Pasokan bulanan stabil dari Jawa, Indonesia</li>`;
        modal6.innerHTML = 'Tutup';

    } else if (lang === 'arb') {

        navHome.innerHTML = 'الصفحة الرئيسية';
        navAbout.innerHTML = 'من نحن';
        navService.innerHTML = 'الخدمات';
        navProduct.innerHTML = 'المنتجات';
        navContact.innerHTML = 'اتصل بنا';
        navLanguage.innerHTML = 'اللغة';

        langEn.innerHTML = 'اللغة الإنجليزية';
        langId.innerHTML = 'اللغة الإندونيسية';
        langArb.innerHTML = 'اللغة العربية (نشطة)';
        langChn.innerHTML = 'اللغة الصينية';

        titleStart1.innerHTML = 'موردك الموثوق';
        titleStart2.innerHTML = 'مسحوق المورينجا الفاخر';
        titleStart3.innerHTML = 'مُصدر من إندونيسيا';
        titleStart4.innerHTML = 'أخبرني المزيد';

        about1.innerHTML = 'الجاهزية للتصدير';
        about2.innerHTML = 'موقعنا الحالي في سلسلة التوريد العالمية';
        about3.innerHTML = 'تم التأسيس';
        about4.innerHTML = 'موردون محليون موثوقون';
        about5.innerHTML = 'جاهز';
        about6.innerHTML = 'وثائق التصدير';
        about7.innerHTML = 'رحلة أوراقنا';
        about8.innerHTML = 'اكتشف كيف يتم جمع الأوراق الإندونيسية الطازجة <br> ومعالجتها قبل وصولها إلى الأسواق العالمية.';
        about9.innerHTML = 'إنتاجنا';
        about10.innerHTML = `تعد إندونيسيا موطنًا لتنوع بيولوجي غني وأطعمة فائقة القيمة — من بينها نبات المورينجا (Moringa oleifera) الذي يتميز بقيمته الغذائية والطلب المتزايد عليه عالميًا. <br><br>
                    IndoLeaves هو مورد مخصص لمسحوق المورينجا الفاخر من مزارعين محليين موثوقين في جاوة الشرقية، إندونيسيا. رغم أننا لاعب جديد في التجارة العالمية، إلا أن نهجنا حديث وشفاف ويتوافق مع معايير الجودة الدولية. <br><br>
                    نحن نعمل عن كثب مع شركائنا لضمان:`;
        about11.innerHTML = `<li>حصاد أخلاقي ومستدام</li>
                     <li>تجفيف طبيعي وطحن دقيق</li>
                     <li>تغليف بدرجة غذائية</li>
                     <li>توثيق ولوجستيات مطابقة للتصدير</li>`;
        about12.innerHTML = 'مهمتنا بسيطة: <b><i>تقديم مسحوق مورينجا نظيف ومتسق وموثوق لتلبية احتياجاتكم الصحية والبدنية.</i></b>';

        serviceStart1.innerHTML = 'خدماتنا';
        serviceStart2.innerHTML = 'يوجد العديد من موردي الأوراق، لماذا يجب عليك اختيار IndoLeaves؟';
        serviceStart3.innerHTML = 'مراقبة الجودة';
        serviceStart4.innerHTML = 'يتم فحص كل منتج للحفاظ على اتساق الجودة العالية.';
        serviceStart5.innerHTML = 'متوفرون 24/7';
        serviceStart6.innerHTML = 'في أي وقت تتواصل معنا، فريقنا دائمًا جاهز.';
        serviceStart7.innerHTML = 'استشارة مجانية';
        serviceStart8.innerHTML = 'مهما كانت احتياجاتك، سنساعدك دائمًا.';

        product1.innerHTML = 'منتجاتنا';
        product2.innerHTML = 'استكشف منتجاتنا المميزة المصنوعة بعناية.';
        product3.innerHTML = 'مسحوق المورينجا';
        product4.innerHTML = 'مسحوق المورينجا الفاخر، غني بالعناصر الغذائية ومضادات الأكسدة، مثالي للمكملات الصحية والاستخدامات الغذائية.';
        product5.innerHTML = 'تفاصيل <i class="bi bi-caret-right-fill"></i>';
        product6.innerHTML = 'تحميل الكتالوج الخاص بنا';
        product7.innerHTML = '<i>احصل على أحدث كتالوج بصيغة PDF لمزيد من المعلومات عن IndoLeaves.</i>';
        product8.innerHTML = '<i class="bi bi-file-earmark-arrow-down-fill"></i> تحميل الكتالوج';

        contact1.innerHTML = 'اتصل بنا';
        contact2.innerHTML = 'من أجل إتمام الصفقة بنجاح.';
        contact3.placeholder = 'اسمك';
        contact4.placeholder = 'بريدك الإلكتروني';
        contact5.placeholder = 'رقم هاتفك';
        contact6.placeholder = 'رسالتك';
        contact7.innerHTML = 'إرسال الرسالة';

        footer0.innerHTML = 'تسوق';
        footer1.innerHTML = 'مسحوق المورينجا';
        footer2.innerHTML = 'تعلم';
        footer3.innerHTML = 'الرئيسية';
        footer4.innerHTML = 'معلومات عنا';
        footer5.innerHTML = 'الخدمات';
        footer6.innerHTML = 'المنتجات';
        footer7.innerHTML = 'اتصل';
        footer8.innerHTML = 'تابعنا';
        footer9.innerHTML = 'حقوق النشر &copy; 2025 indoleaves.com';

        modal1.innerHTML = 'مسحوق المورينجا';
        modal2.innerHTML = 'مسحوق المورينجا هو غذاء فائق غني بالعناصر الغذائية مصنوع من أوراق شجرة المورينجا، ويُعرف بمستوياته العالية من الفيتامينات والمعادن ومضادات الأكسدة.';
        modal3.innerHTML = 'فوائد مسحوق المورينجا';
        modal4.innerHTML = 'تفاصيل المنتج:';
        modal5.innerHTML = `<li><b>الشكل:</b> مسحوق ناعم من أوراق المورينجا المجففة</li>
                            <li><b>حجم الشبكة:</b> 60-80 شبكة (قابل للتخصيص)</li>
                            <li><b>محتوى الرطوبة:</b> ≤ 7%</li>
                            <li><b>اللون:</b> أخضر زاهي (طبيعي، غير مبيض)</li>
                            <li><b>الرائحة والطعم:</b> رائحة عشبية خفيفة مع طابع ترابي</li>
                            <li><b>التعبئة:</b> أكياس مفرغة من الهواء بوزن 25 كجم مخصصة للأغذية (أو حسب الطلب)</li>
                            <li><b>الاستخدام:</b> مكملات صحية، خلطات شاي، كبسولات عشبية، مستحضرات تجميل</li>
                            <li><b>مدة الصلاحية:</b> 18-24 شهرًا (يُخزن في مكان بارد وجاف)</li>
                            <li><b>التوافر:</b> إمدادات شهرية منتظمة من جزيرة جاوة، إندونيسيا</li>`;
        modal6.innerHTML = 'إغلاق';

    } else if (lang === 'chn') {

        navHome.innerHTML = '首页';
        navAbout.innerHTML = '关于我们';
        navService.innerHTML = '服务';
        navProduct.innerHTML = '产品';
        navContact.innerHTML = '联系我们';
        navLanguage.innerHTML = '语言';

        langEn.innerHTML = '英语';
        langId.innerHTML = '印度尼西亚语';
        langArb.innerHTML = '阿拉伯语';
        langChn.innerHTML = '汉语（启用中）';

        titleStart1.innerHTML = '您值得信赖的供应商';
        titleStart2.innerHTML = '优质辣木粉';
        titleStart3.innerHTML = '来自印度尼西亚的出口商';
        titleStart4.innerHTML = '告诉我更多';

        about1.innerHTML = '出口准备';
        about2.innerHTML = '我们在全球供应链中的当前地位';
        about3.innerHTML = '已建立';
        about4.innerHTML = '值得信赖的本地供应商';
        about5.innerHTML = '已准备好';
        about6.innerHTML = '出口文件';
        about7.innerHTML = '我们的叶子之旅';
        about8.innerHTML = '了解新鲜印尼树叶是如何 <br> 被采集和处理，然后进入全球市场的。';
        about9.innerHTML = '我们的生产';
        about10.innerHTML = `印度尼西亚拥有丰富的生物多样性和强大的超级食品——其中辣木（Moringa oleifera）因其营养价值和日益增长的全球需求而脱颖而出。<br><br>
                    IndoLeaves 是一家专注于提供优质辣木粉的供应商，原料来自印度尼西亚东爪哇值得信赖的本地农民。虽然我们是国际贸易的新成员，但我们的方法新颖、透明，并积极响应国际质量标准。<br><br>
                    我们与合作伙伴密切合作，确保：`;
        about11.innerHTML = `<li>符合道德和可持续性的采收方式</li>
                     <li>自然阳光干燥与精细研磨</li>
                     <li>食品级包装</li>
                     <li>符合出口要求的文件和物流</li>`;
        about12.innerHTML = '我们的使命很简单：<b><i>提供干净、一致且可靠的辣木粉，满足您的健康和保健需求。</i></b>';

        serviceStart1.innerHTML = '我们的服务';
        serviceStart2.innerHTML = '有很多叶类供应商，为什么选择 IndoLeaves？';
        serviceStart3.innerHTML = '质量控制';
        serviceStart4.innerHTML = '每一件产品都经过严格控制，以确保高质量的一致性。';
        serviceStart5.innerHTML = '全天候服务';
        serviceStart6.innerHTML = '无论何时联系我们，我们的团队都准备就绪。';
        serviceStart7.innerHTML = '免费咨询';
        serviceStart8.innerHTML = '无论您有什么需求，我们都会为您提供协助。';

        product1.innerHTML = '我们的产品';
        product2.innerHTML = '探索我们用心打造的优质叶类产品。';
        product3.innerHTML = '辣木粉';
        product4.innerHTML = '优质辣木粉，富含营养和抗氧化物，适合健康补品和烹饪用途。';
        product5.innerHTML = '详细信息 <i class="bi bi-caret-right-fill"></i>';
        product6.innerHTML = '下载我们的目录';
        product7.innerHTML = '<i>获取我们最新的 PDF 格式目录，了解更多关于 IndoLeaves 的信息。</i>';
        product8.innerHTML = '<i class="bi bi-file-earmark-arrow-down-fill"></i> 下载目录';

        contact1.innerHTML = '联系我们';
        contact2.innerHTML = '为了达成交易而沟通。';
        contact3.placeholder = '您的姓名';
        contact4.placeholder = '您的邮箱';
        contact5.placeholder = '您的电话';
        contact6.placeholder = '您的留言';
        contact7.innerHTML = '发送消息';

        footer0.innerHTML = '购物';
        footer1.innerHTML = '辣木粉';
        footer2.innerHTML = '了解';
        footer3.innerHTML = '首页';
        footer4.innerHTML = '关于我们';
        footer5.innerHTML = '服务';
        footer6.innerHTML = '产品';
        footer7.innerHTML = '联系';
        footer8.innerHTML = '关注我们';
        footer9.innerHTML = '版权 &copy; 2025 indoleaves.com';

        modal1.innerHTML = '辣木粉';
        modal2.innerHTML = '辣木粉是一种营养丰富的超级食品，由辣木树的叶子制成，以其高含量的维生素、矿物质和抗氧化剂而闻名。';
        modal3.innerHTML = '辣木粉的功效';
        modal4.innerHTML = '产品详情：';
        modal5.innerHTML = `<li><b>形式：</b> 由干辣木叶制成的细粉</li>
                            <li><b>目数：</b> 60-80 目（可定制）</li>
                            <li><b>水分含量：</b> ≤ 7%</li>
                            <li><b>颜色：</b> 鲜绿色（天然，未漂白）</li>
                            <li><b>气味与口感：</b> 微微泥土味，具有草本特有香气</li>
                            <li><b>包装：</b> 25 公斤真空食品级包装袋（可按需定制）</li>
                            <li><b>用途：</b> 保健品、茶饮混合物、草本胶囊、化妆品</li>
                            <li><b>保质期：</b> 18-24 个月（存放于阴凉干燥处）</li>
                            <li><b>供应情况：</b> 来自印尼爪哇的稳定月供</li>`;
        modal6.innerHTML = '关闭';

    }
}

function sendMessage() {
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