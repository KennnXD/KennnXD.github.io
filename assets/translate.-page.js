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
    const product3 = document.getElementById('product-3');
    const product4 = document.getElementById('product-4');
    const product5 = document.getElementById('product-5');

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

    const detailBtn = document.querySelectorAll('.detail-btn');
    const closeBtn = document.querySelectorAll('.close-btn');

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

        titleStart1.innerHTML = 'Your Reliable Trade Partner';
        titleStart2.innerHTML = 'Supplying Moringa & Powder';
        titleStart3.innerHTML = 'From Indonesia To The World';
        titleStart4.innerHTML = 'Explore Our Product';

        about1.innerHTML = 'Export Readiness';
        about2.innerHTML = 'Our current position in the global supply chain';
        about3.innerHTML = 'Established';
        about4.innerHTML = 'Trusted Local Suppliers';
        about5.innerHTML = 'Ready';
        about6.innerHTML = 'Export Documentation';
        about7.innerHTML = 'Our Leaves Journey';
        about8.innerHTML = 'Discover how fresh Indonesian leaves are <br> sourced and handled before they reach global markets.';
        about9.innerHTML = 'Our Product';
        about10.innerHTML = `IndoLeaves is an exporter that specializes in the supply of high-quality, natural products sourced directly from trusted local suppliers in Indonesia.
                We offer a range of premium powders, including:
                Moringa powder, cinnamon powder, ginger powder, red ginger, white ginger, and cinnamon.
                As an emerging exporter in global trade, our approach is transparent, agile, and committed to meeting international quality standards.
                We work closely with our partners to ensure:`;
        about11.innerHTML = `<li>Ethical and sustainable harvesting</li>
                            <li>Natural sun-drying and fine milling</li>
                            <li>Food-grade packaging</li>
                            <li>Export-compliant documentation and logistics</li>`;
        about12.innerHTML = 'Our mission is clear: <b><i>To deliver clean, consistent, and reliable products that support your health and wellness needs.</i></b>';

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
        product3.innerHTML = 'Download Our Catalog';
        product4.innerHTML = '<i>Get our latest Catalog in PDF format for more information about IndoLeaves.</i>';
        product5.innerHTML = '<i class="bi bi-file-earmark-arrow-down-fill"></i> Download Catalog';

        contact1.innerHTML = 'Contact Us';
        contact2.innerHTML = 'For Dealing To Achieve the Deal.';
        contact3.placeholder = 'Your Name';
        contact4.placeholder = 'Your Email';
        contact5.placeholder = 'Your Phone';
        contact6.placeholder = 'Your Message';
        contact7.innerHTML = 'Send Message';

        footer0.innerHTML = 'Address';
        footer1.innerHTML = `<b>Tower Bella Unit 3215</b> <br>
                    Jl. Raya Laguna Kejawan Putih Mutiara No. 2, Pakuwon Town Square Commercial Complex, Surabaya`;
        footer2.innerHTML = 'Learn';
        footer3.innerHTML = 'Home';
        footer4.innerHTML = 'About Us';
        footer5.innerHTML = 'Services';
        footer6.innerHTML = 'Products';
        footer7.innerHTML = 'Contact';
        footer8.innerHTML = 'Follow Us';
        footer9.innerHTML = 'Copyright &copy; 2025 indoleaves.com';

        detailBtn.forEach(btn => {
            btn.innerHTML = 'Details';
        });

        closeBtn.forEach(btn => {  
            btn.innerHTML = 'Close';
        } );

    } 

    if (lang === 'id') {

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

        titleStart1.innerHTML = 'Mitra Dagang Terpercaya Anda';
        titleStart2.innerHTML = 'Menyuplai Moringa & Bubuk';
        titleStart3.innerHTML = 'Dari Indonesia ke Seluruh Dunia';
        titleStart4.innerHTML = 'Jelajahi Produk Kami';

        about1.innerHTML = 'Kesiapan Ekspor';
        about2.innerHTML = 'Posisi kami saat ini dalam rantai pasok global';
        about3.innerHTML = 'Terlaksana';
        about4.innerHTML = 'Pemasok Lokal Terpercaya';
        about5.innerHTML = 'Siap';
        about6.innerHTML = 'Dokumentasi Ekspor';
        about7.innerHTML = 'Perjalanan Daun Kami';
        about8.innerHTML = 'Temukan bagaimana daun Indonesia yang segar <br> dipanen dan ditangani sebelum sampai ke pasar global.';
        about9.innerHTML = 'Produk Kami';
        about10.innerHTML = `IndoLeaves adalah eksportir yang mengkhususkan diri dalam penyediaan produk alami berkualitas tinggi yang bersumber langsung dari pemasok lokal terpercaya di Indonesia.
Kami menawarkan berbagai bubuk premium, termasuk:
Bubuk kelor, bubuk kayu manis, bubuk jahe, jahe merah, jahe putih, dan kayu manis.
Sebagai eksportir yang sedang berkembang dalam perdagangan global, pendekatan kami transparan, gesit, dan berkomitmen untuk memenuhi standar kualitas internasional.
Kami bekerja sama secara erat dengan mitra kami untuk memastikan:`;
        about11.innerHTML = `<li>Pemanenan yang etis dan berkelanjutan</li>
                            <li>Pengeringan alami dan penggilingan halus</li>
                            <li>Kemasan dengan standar makanan</li>
                            <li>Dokumentasi dan logistik sesuai ekspor</li>`;
        about12.innerHTML = `Misi kami jelas: <b><i>Untuk menghadirkan produk yang bersih, konsisten, dan terpercaya yang mendukung kebutuhan kesehatan dan kebugaran Anda.</i></b>`;

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
        product3.innerHTML = 'Unduh Katalog Kami';
        product4.innerHTML = '<i>Dapatkan Katalog terbaru kami dalam format PDF untuk informasi lebih lanjut tentang IndoLeaves.</i>';
        product5.innerHTML = '<i class="bi bi-file-earmark-arrow-down-fill"></i> Unduh Katalog';

        contact1.innerHTML = 'Hubungi Kami';
        contact2.innerHTML = 'Untuk Mencapai Kesepakatan Bersama.';
        contact3.placeholder = 'Nama Anda';
        contact4.placeholder = 'Email Anda';
        contact5.placeholder = 'Nomor Telepon Anda';
        contact6.placeholder = 'Pesan Anda';
        contact7.innerHTML = 'Kirim Pesan';

        footer0.innerHTML = 'Alamat';
        footer1.innerHTML = `<b>Tower Bella Unit 3215</b> <br>
                    Jl. Raya Laguna Kejawan Putih Mutiara No. 2 Kompleks Ruko Pakuwon Town Square, Surabaya`;
        footer2.innerHTML = 'Pelajari';
        footer3.innerHTML = 'Beranda';
        footer4.innerHTML = 'Tentang Kami';
        footer5.innerHTML = 'Layanan';
        footer6.innerHTML = 'Produk';
        footer7.innerHTML = 'Kontak';
        footer8.innerHTML = 'Ikuti Kami';
        footer9.innerHTML = 'Hak Cipta &copy; 2025 indoleaves.com';

        detailBtn.forEach(btn => {
            btn.innerHTML = 'Detail';
        });

        closeBtn.forEach(btn => {  
            btn.innerHTML = 'Tutup';
        } );

    } 
    
    if (lang === 'arb') {

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

        titleStart1.innerHTML = 'شريكك التجاري الموثوق';
        titleStart2.innerHTML = 'توريد المورينغا والمسحوق';
        titleStart3.innerHTML = 'من إندونيسيا إلى العالم';
        titleStart4.innerHTML = 'استكشف منتجاتنا';

        about1.innerHTML = 'الجاهزية للتصدير';
        about2.innerHTML = 'موقعنا الحالي في سلسلة التوريد العالمية';
        about3.innerHTML = 'تم التأسيس';
        about4.innerHTML = 'موردون محليون موثوقون';
        about5.innerHTML = 'جاهز';
        about6.innerHTML = 'وثائق التصدير';
        about7.innerHTML = 'رحلة أوراقنا';
        about8.innerHTML = 'اكتشف كيف يتم جمع الأوراق الإندونيسية الطازجة <br> ومعالجتها قبل وصولها إلى الأسواق العالمية.';
        about9.innerHTML = 'منتجاتنا1';
        about10.innerHTML = `إندوليفز هي شركة تصدير متخصصة في توفير المنتجات الطبيعية عالية الجودة، والمأخوذة مباشرة من موردين محليين موثوقين في إندونيسيا.
نقدم مجموعة من المساحيق المميزة، بما في ذلك:
مسحوق المورينجا، مسحوق القرفة، مسحوق الزنجبيل، الزنجبيل الأحمر، الزنجبيل الأبيض، والقرفة.
بصفتنا مُصدرًا ناشئًا في التجارة العالمية، فإن نهجنا شفاف ومرن ومُلتزم بتلبية معايير الجودة الدولية.
نحن نعمل عن كثب مع شركائنا لضمان:`;
        about11.innerHTML = `<li>حصاد أخلاقي ومستدام</li>
                     <li>تجفيف طبيعي وطحن دقيق</li>
                     <li>تغليف بدرجة غذائية</li>
                     <li>توثيق ولوجستيات مطابقة للتصدير</li>`;
        about12.innerHTML = `مهمتنا واضحة: <b><i>لتقديم منتجات نظيفة ومتسقة وموثوقة تدعم احتياجاتك الصحية والرفاهية.</i></b>`;
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
        product3.innerHTML = 'تحميل الكتالوج الخاص بنا';
        product4.innerHTML = '<i>احصل على أحدث كتالوج بصيغة PDF لمزيد من المعلومات عن IndoLeaves.</i>';
        product5.innerHTML = '<i class="bi bi-file-earmark-arrow-down-fill"></i> تحميل الكتالوج';

        contact1.innerHTML = 'اتصل بنا';
        contact2.innerHTML = 'من أجل إتمام الصفقة بنجاح.';
        contact3.placeholder = 'اسمك';
        contact4.placeholder = 'بريدك الإلكتروني';
        contact5.placeholder = 'رقم هاتفك';
        contact6.placeholder = 'رسالتك';
        contact7.innerHTML = 'إرسال الرسالة';

        footer0.innerHTML = 'العنوان';
        footer1.innerHTML = `<b>برج بيلا الوحدة 3215</b><br>
رقم 2، شارع لاجونا كيجاوان بوتيه موتيارا، مجمع محلات باكوون تاون سكوير، سورابايا`;      
        footer2.innerHTML = 'تعلم';
        footer3.innerHTML = 'الرئيسية';
        footer4.innerHTML = 'معلومات عنا';
        footer5.innerHTML = 'الخدمات';
        footer6.innerHTML = 'المنتجات';
        footer7.innerHTML = 'اتصل';
        footer8.innerHTML = 'تابعنا';
        footer9.innerHTML = 'حقوق النشر &copy; 2025 indoleaves.com';

        detailBtn.forEach(btn => {
            btn.innerHTML = 'التفاصيل';
        });

        closeBtn.forEach(btn => {  
            btn.innerHTML = 'إغلاق';
        });

    } 
    
    if (lang === 'chn') {

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

        titleStart1.innerHTML = '您值得信赖的贸易伙伴';
        titleStart2.innerHTML = '提供辣木及其粉末';
        titleStart3.innerHTML = '从印尼走向世界';
        titleStart4.innerHTML = '探索我们的产品';

        about1.innerHTML = '出口准备';
        about2.innerHTML = '我们在全球供应链中的当前地位';
        about3.innerHTML = '已建立';
        about4.innerHTML = '值得信赖的本地供应商';
        about5.innerHTML = '已准备好';
        about6.innerHTML = '出口文件';
        about7.innerHTML = '我们的叶子之旅';
        about8.innerHTML = '了解新鲜印尼树叶是如何 <br> 被采集和处理，然后进入全球市场的。';
        about9.innerHTML = '我们的产品';
        about10.innerHTML = `IndoLeaves 是一家专注于出口高品质天然产品的公司，这些产品直接来自印度尼西亚值得信赖的本地供应商。
我们提供一系列优质粉末，包括：
辣木粉、肉桂粉、生姜粉、红姜、白姜和肉桂。
作为全球贸易中新兴的出口商，我们秉持透明、高效的方式，并致力于符合国际质量标准。
我们与合作伙伴紧密合作，以确保：`;
        about11.innerHTML = `<li>符合道德和可持续性的采收方式</li>
                     <li>自然阳光干燥与精细研磨</li>
                     <li>食品级包装</li>
                     <li>符合出口要求的文件和物流</li>`;
        about12.innerHTML = '我们的使命很明确：<b><i>提供干净、一致且可靠的产品，以支持您的健康与保健需求。</i></b>';

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
        product3.innerHTML = '下载我们的目录';
        product4.innerHTML = '<i>获取我们最新的 PDF 格式目录，了解更多关于 IndoLeaves 的信息。</i>';
        product5.innerHTML = '<i class="bi bi-file-earmark-arrow-down-fill"></i> 下载目录';

        contact1.innerHTML = '联系我们';
        contact2.innerHTML = '为了达成交易而沟通。';
        contact3.placeholder = '您的姓名';
        contact4.placeholder = '您的邮箱';
        contact5.placeholder = '您的电话';
        contact6.placeholder = '您的留言';
        contact7.innerHTML = '发送消息';

        footer0.innerHTML = '地址';
        footer1.innerHTML = `<b>贝拉塔 3215 单元</b><br>
                        印度尼西亚泗水市帕库翁城市广场商铺区，拉古娜克贾万普蒂穆蒂亚拉路2号`;
        footer2.innerHTML = '了解';
        footer3.innerHTML = '首页';
        footer4.innerHTML = '关于我们';
        footer5.innerHTML = '服务';
        footer6.innerHTML = '产品';
        footer7.innerHTML = '联系';
        footer8.innerHTML = '关注我们';
        footer9.innerHTML = '版权 &copy; 2025 indoleaves.com';

        detailBtn.forEach(btn => {
            btn.innerHTML = '详情';
        });

        closeBtn.forEach(btn => {  
            btn.innerHTML = '关闭';
        });

    }
}

export default translateLanguage;