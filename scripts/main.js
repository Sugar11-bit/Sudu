/* ========================================
   SUDU SECRET VAULT - Main JavaScript
   ======================================== */

// ========== BOOK DATA (Demo) ==========
const booksData = [
    {
        id: 1,
        title: "Sơn Hải Kinh - Bản dịch cổ",
        description: "Cuốn sách địa lý cổ đại Trung Hoa, ghi chép về các sinh vật huyền thoại, thần linh và địa lý kỳ bí. Bản dịch từ nguyên bản thời Chiến Quốc.",
        price: 299000,
        image: "../images/SachHiem/book-1.jpg",
        tags: ["cothu", "hiem"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 2,
        title: "Kinh Dịch - Văn bản gốc",
        description: "Một trong những văn bản cổ nhất của Trung Hoa, chứa đựng triết học và phương pháp bói toán cổ xưa. Bản scan từ bản in thời Thanh.",
        price: 399000,
        image: "../images/SachHiem/kinh_dich.png",
        tags: ["cothu"],
        isPremium: true,
        isLocked: false
    },
    {
        id: 3,
        title: "Thái Ất Thần Kinh",
        description: "Văn bản bí truyền về thuật chiêm tinh và dự đoán vận mệnh theo phương pháp Thái Ất. Sách cấm lưu hành thời phong kiến.",
        price: 599000,
        image: "../images/SachHiem/thai_at_than_kinh.png",
        tags: ["cam", "hiem"],
        isPremium: true,
        isLocked: false
    },
    {
        id: 4,
        title: "Hoàng Đế Nội Kinh",
        description: "Nền tảng của y học cổ truyền Trung Hoa, ghi chép đối thoại giữa Hoàng Đế và các danh y về cơ thể người.",
        price: 349000,
        image: "../images/SachHiem/hoang_de_noi_kinh.png",
        tags: ["cothu"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 5,
        title: "Đạo Đức Kinh - Bản cổ",
        description: "Tác phẩm triết học của Lão Tử, nền tảng của Đạo giáo. Bản dịch từ văn bản khắc trên trúc giản.",
        price: 279000,
        image: "../images/SachHiem/dao_duc_kinh.png",
        tags: ["cothu"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 6,
        title: "Kỳ Môn Độn Giáp",
        description: "Thuật chiến lược và tiên tri cổ đại, được cho là của Khương Tử Nha. Sách bị cấm truyền bá trong dân gian.",
        price: 799000,
        image: "../images/SachHiem/ky_mon_don_giap.png",
        tags: ["cam", "hiem"],
        isPremium: true,
        isLocked: true,
        question: {
            text: "Cuốn sách này của tác giả nào?",
            options: ["Khương Tử Nha", "Lão Tử", "Hoàng Đế", "Tôn Tử"],
            correct: 0
        }
    },

    {
        id: 8,
        title: "Tử Vi Đẩu Số - Nguyên bản",
        description: "Hệ thống chiêm tinh học Trung Hoa, dự đoán vận mệnh con người qua các sao. Bản chép tay thời Tống.",
        price: 529000,
        image: "../images/SachHiem/tu_vi_dau_so.png",
        tags: ["hiem"],
        isPremium: true,
        isLocked: false
    },
    {
        id: 11,
        title: "Kim Định Thần Công",
        description: "Bí ẩn nội công của phái Kim Định, được cho là bí truyền, lưu hành trong giới cao tăng.",
        price: 679000,
        image: "../images/SachHiem/kim_dinh_than_cong.png",
        tags: ["cam", "hiem"],
        isPremium: true,
        isLocked: true,
        question: {
            text: "Kim Định Thần Công là sách của môn phái nào?",
            options: ["Phái Kim", "Phái Huyền", "Phái Đàm", "Phái Mật"],
            correct: 0
        }
    },

    {
        id: 13,
        title: "Binh Pháp Tôn Tử - Bản cấm truyền",
        description: "Một bản thảo chiến lược bị cấm từ thời cổ, ghi lại cách kiếm tiền.",
        price: 849000,
        image: "../images/SachHiem/binh_phap_ton_tu.png",
        tags: ["cam", "hiem"],
        isPremium: true,
        isLocked: true,
        question: {
            text: "Sách này chủ yếu thuộc về lĩnh vực gì?",
            options: ["Quân sự", "Nông nghiệp", "Pháp luật", "Thơ văn"],
            correct: 0
        }
    },
    {
        id: 32,
        title: "Trường Sinh Pháp",
        description: "Ghi chép các phương pháp trường sinh và luyện khí trong y học cổ truyền.",
        price: 479000,
        image: "../images/SachHiem/truong_sinh_phap.png",
        tags: ["hiem"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 33,
        title: "Hoàng Kim Tảng",
        description: "Tập hợp các truyền thuyết và thần chú hoàng kim của một tông phái bí mật.",
        price: 829000,
        image: "../images/SachHiem/hoang_kim_tang.png",
        tags: ["cam", "hiem"],
        isPremium: true,
        isLocked: true,
        question: {
            text: "Sách này thuộc tông phái nào?",
            options: ["Hoàng Kim", "Bạch Vân", "Thủy Long", "Nguyệt Ảnh"],
            correct: 0
        }
    },
    {
        id: 34,
        title: "Tàng Kinh Các (Bản lưu truyền)",
        description: "Sưu tập sách quý hiếm đã bị thất lạc và tìm lại ở tàng kinh các cổ.",
        price: 299000,
        image: "../images/SachHiem/tang_kinh_cac.png",
        tags: ["hiem"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 35,
        title: "Di Vật Ma Giáo",
        description: "Nội dung về đạo giáo bí ẩn và những bí thuật được coi là tà đạo.",
        price: 749000,
        image: "../images/SachHiem/di_vat_ma_giao.png",
        tags: ["cam"],
        isPremium: true,
        isLocked: true,
        question: {
            text: "Đạo giáo bí ẩn này có liên quan nhiều nhất đến gì?",
            options: ["Tà thuật", "Thi ca", "Lịch sử", "Y học"],
            correct: 0
        }
    },
    {
        id: 36,
        title: "Quyển Sách Sáu Mươi Hai Thượng Pháp",
        description: "Tuyển tập lễ nghi và phép tắc được dùng trong hoàng cung và miếu thờ.",
        price: 279000,
        image: "../images/SachHiem/quyen_sach_sau_muoi_hai_thuong_phap.png",
        tags: ["cothu"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 39,
        title: "Tiên Thiên Đại Đạo",
        description: "Bài giảng về đạo lý thiên nhiên và mối liên hệ giữa người và vũ trụ.",
        price: 329000,
        image: "../images/SachHiem/tien_nhien_dai_dao.png",
        tags: ["cothu"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 41,
        title: "Kinh Thi Hoàng Cương",
        description: "Tuyển tập thơ ca cổ điển, một phần của kho sách nội bộ của triều đình.",
        price: 259000,
        image: "../images/SachHiem/kinh_thi_hoang_cuong.png",
        tags: ["cothu"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 42,
        title: "Bí Ẩn Huyền Không Lục",
        description: "Sách về luận phong thủy huyền không, chỉ dùng trong nội bộ các cao tăng và phong thủy sư.",
        price: 599000,
        image: "../images/SachHiem/bi_an_huyen_khong_luc.png",
        tags: ["cam", "hiem"],
        isPremium: true,
        isLocked: true,
        question: {
            text: "Huyền Không Lục dùng để nghiên cứu điều gì?",
            options: ["Phong thủy", "Thơ văn", "Thương mại", "Nông nghiệp"],
            correct: 0
        }
    },
    {
        id: 43,
        title: "Phương Thuật Giải Mã",
        description: "Bản thảo phép tính và toán học cổ xưa, được gọi là 'phương thuật' thời nhà Đường.",
        price: 429000,
        image: "../images/SachHiem/phuong_thuat_giai_ma.png",
        tags: ["hiem"],
        isPremium: true,
        isLocked: false
    },
    {
        id: 44,
        title: "Tàng Kinh Thất Nhất",
        description: "Tuyển tập bảy cuốn sách bí mật của các môn phái Giang hồ, hiếm dân thấy.",
        price: 519000,
        image: "../images/SachHiem/tang_kinh_thap_nhat.png",
        tags: ["hiem"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 45,
        title: "Thiên Cơ Lục",
        description: "Bản biên niên về cơ số và thiên thời, được trấn giữ trong viện sĩ của triều đại xưa.",
        price: 589000,
        image: "../images/SachHiem/thien_co_luc.png",
        tags: ["hiem"],
        isPremium: true,
        isLocked: false
    },
    {
        id: 46,
        title: "Tuyệt Kỹ Linh Khí",
        description: "Tài liệu về cách chế tạo linh khí và bảo vật, giới cao nhân luôn cất giấu.",
        price: 879000,
        image: "../images/SachHiem/tuyet_ky_linh_khi.png",
        tags: ["cam", "hiem"],
        isPremium: true,
        isLocked: true,
        question: {
            text: "Linh khí thường được dùng trong lĩnh vực gì?",
            options: ["Bảo vật", "Âm nhạc", "Y học", "Nấu ăn"],
            correct: 0
        }
    },
    {
        id: 47,
        title: "Văn Thù Sư Lợi Kinh",
        description: "Một bản kinh Phật quý hiếm về lòng từ bi và trí tuệ siêu hình.",
        price: 339000,
        image: "../images/SachHiem/van_thu_su_loi_kinh.png",
        tags: ["cothu", "hiem"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 49,
        title: "Cổ Xưa Thần Thư",
        description: "Bản thảo cổ chứa các nghi lễ cầu an và trừ tà của đời xưa.",
        price: 559000,
        image: "../images/SachHiem/cu_xua_thien_thu.png",
        tags: ["hiem"],
        isPremium: false,
        isLocked: false
    },
    {
        id: 50,
        title: "Sách Ghi Chép Thái Ất",
        description: "Tập hợp ghi chép về phép toán Thái Ất và huyền học, một phần của kho tàng hiếm.",
        price: 489000,
        image: "../images/SachHiem/sach_ghi_chep_thai_at.png",
        tags: ["hiem"],
        isPremium: true,
        isLocked: false
    }
];

booksData.forEach(book => {
    book.defaultIsLocked = book.isLocked;
});

function getUserUnlockedBooks(user) {
    if (!user || !Array.isArray(user.unlockedBooks)) return [];
    return user.unlockedBooks;
}

function resetBookLockState() {
    const user = getCurrentUser();
    const unlocked = getUserUnlockedBooks(user);
    booksData.forEach(book => {
        book.isLocked = book.defaultIsLocked;
        if (user && unlocked.includes(book.id)) {
            book.isLocked = false;
        }
    });
}

resetBookLockState();

// Global variable for selected answer
let selectedAnswer = -1;

function getTemplatesPath(relativePath) {
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    return currentPath.includes('/templates/') ? relativePath : `templates/${relativePath}`;
}

// ========== AUTH FUNCTIONS ==========
function getUsers() {
    return JSON.parse(localStorage.getItem('suduUsers') || '[]');
}

function saveUsers(users) {
    localStorage.setItem('suduUsers', JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('suduUser') || 'null');
}

function updateUserInStore(user) {
    const users = getUsers();
    const index = users.findIndex(u => u.phone === user.phone);
    if (index >= 0) {
        users[index] = user;
    } else {
        users.push(user);
    }
    saveUsers(users);
}

function refreshUserDependentViews() {
    if (document.getElementById('product-detail-content')) {
        loadProductDetail();
    } else if (document.getElementById('books-list')) {
        loadAllBooks();
    } else if (document.getElementById('featured-books')) {
        loadFeaturedBooks();
    }
}

function setCurrentUser(user) {
    if (!user) {
        localStorage.removeItem('suduUser');
    } else {
        if (!Array.isArray(user.unlockedBooks)) {
            user.unlockedBooks = [];
        }
        updateUserInStore(user);
        localStorage.setItem('suduUser', JSON.stringify(user));
    }
    resetBookLockState();
    updateAuthUI();
    refreshUserDependentViews();
}

function logoutUser() {
    localStorage.removeItem('suduUser');
    resetBookLockState();
    updateAuthUI();
    refreshUserDependentViews();
    showToast('Đã đăng xuất.', 'success');
}

function createUserPanel() {
    const headerContent = document.querySelector('.header .header-content');
    if (!headerContent || document.getElementById('user-panel')) return;

    const userPanel = document.createElement('div');
    userPanel.id = 'user-panel';
    userPanel.className = 'user-panel';
    headerContent.insertBefore(userPanel, headerContent.querySelector('.search-bar'));
}

function updateAuthUI() {
    createUserPanel();
    const userPanel = document.getElementById('user-panel');
    if (!userPanel) return;
    const user = getCurrentUser();

    if (user) {
        userPanel.innerHTML = `
            <span class="user-greeting">Xin chào, ${user.name}</span>
            <button class="btn btn-outline btn-small" onclick="logoutUser()">Đăng xuất</button>
        `;
    } else {
        userPanel.innerHTML = `
            <button class="btn btn-outline btn-small" onclick="openAuthModal('login')">Đăng nhập</button>
        `;
    }
}

function openAuthModal(tab = 'login') {
    ensureAuthModal();
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    modal.classList.add('open');
    switchAuthTab(tab);
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.classList.remove('open');
    }
}

function initAuthUI() {
    createUserPanel();
    updateAuthUI();
}

function ensureAuthModal() {
    if (document.getElementById('auth-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'auth-modal';
    modal.className = 'auth-modal';
    modal.innerHTML = `
        <div class="auth-modal-dialog">
            <button class="modal-close" onclick="closeAuthModal()">✕</button>
            <div class="auth-tabs">
                <button class="tab-btn active" id="login-tab" onclick="switchAuthTab('login')">Đăng nhập</button>
                <button class="tab-btn" id="register-tab" onclick="switchAuthTab('register')">Đăng ký</button>
            </div>
            <div class="auth-forms">
                <form id="login-form" class="auth-form active" onsubmit="event.preventDefault(); submitLogin();">
                    <div class="form-group">
                        <label for="login-phone">Số điện thoại</label>
                        <input id="login-phone" type="text" placeholder="Nhập số điện thoại" />
                    </div>
                    <button class="btn btn-primary" type="submit">Đăng nhập</button>
                </form>
                <form id="register-form" class="auth-form" onsubmit="event.preventDefault(); submitRegister();">
                    <div class="form-group">
                        <label for="register-name">Họ và tên</label>
                        <input id="register-name" type="text" placeholder="Nhập họ và tên" />
                    </div>
                    <div class="form-group">
                        <label for="register-phone">Số điện thoại</label>
                        <input id="register-phone" type="text" placeholder="Nhập số điện thoại" />
                    </div>
                    <button class="btn btn-primary" type="submit">Đăng ký</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function switchAuthTab(tab) {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (!loginTab || !registerTab || !loginForm || !registerForm) return;

    loginTab.classList.toggle('active', tab === 'login');
    registerTab.classList.toggle('active', tab === 'register');
    loginForm.classList.toggle('active', tab === 'login');
    registerForm.classList.toggle('active', tab === 'register');
}

function submitLogin() {
    const phone = document.getElementById('login-phone').value.trim();
    if (!phone) {
        showToast('Vui lòng nhập số điện thoại.', 'error');
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.phone === phone);
    if (!user) {
        showToast('Số điện thoại chưa đăng ký. Vui lòng đăng ký trước.', 'error');
        switchAuthTab('register');
        return;
    }

    if (!Array.isArray(user.unlockedBooks)) {
        user.unlockedBooks = [];
    }

    setCurrentUser(user);
    showToast(`Đăng nhập thành công, ${user.name}!`, 'success');
    closeAuthModal();
}

function submitRegister() {
    const name = document.getElementById('register-name').value.trim();
    const phone = document.getElementById('register-phone').value.trim();

    if (!name || !phone) {
        showToast('Vui lòng nhập họ tên và số điện thoại.', 'error');
        return;
    }

    const users = getUsers();
    const existing = users.find(u => u.phone === phone);
    if (existing) {
        showToast('Số điện thoại này đã được đăng ký. Vui lòng đăng nhập.', 'error');
        switchAuthTab('login');
        return;
    }

    const user = { name, phone, unlockedBooks: [] };
    users.push(user);
    saveUsers(users);
    setCurrentUser(user);
    showToast(`Đăng ký thành công, ${name}!`, 'success');
    closeAuthModal();
}

function requireLogin() {
    const user = getCurrentUser();
    if (user) return true;
    openAuthModal('login');
    showToast('Vui lòng đăng nhập hoặc đăng ký để thêm vào giỏ hàng.', 'error');
    return false;
}

// ========== CART FUNCTIONS ==========

/**
 * Lấy giỏ hàng từ localStorage
 */
function getCart() {
    const cart = localStorage.getItem('suduCart');
    return cart ? JSON.parse(cart) : [];
}

/**
 * Lưu giỏ hàng vào localStorage
 */
function saveCart(cart) {
    localStorage.setItem('suduCart', JSON.stringify(cart));
    updateCartCount();
}

function animateCartIcon() {
    const cartLink = document.querySelector('.cart-link');
    if (!cartLink) return;
    cartLink.classList.add('animate');
    setTimeout(() => cartLink.classList.remove('animate'), 400);
}

function animateAddToCart(button) {
    const cartLink = document.querySelector('.cart-link');
    if (!button || !cartLink) return;

    const bookCard = button.closest('.book-card');
    const productImage = bookCard ? bookCard.querySelector('img') : document.querySelector('.product-image img');
    if (!productImage) return;

    const imgRect = productImage.getBoundingClientRect();
    const cartRect = cartLink.getBoundingClientRect();

    const flyer = productImage.cloneNode(true);
    flyer.className = 'flyer-image';
    flyer.style.left = `${imgRect.left}px`;
    flyer.style.top = `${imgRect.top}px`;
    flyer.style.width = `${imgRect.width}px`;
    flyer.style.height = `${imgRect.height}px`;
    flyer.style.transform = 'translate(0, 0) scale(1)';
    flyer.style.opacity = '1';
    document.body.appendChild(flyer);

    requestAnimationFrame(() => {
        const translateX = cartRect.left + cartRect.width / 2 - (imgRect.left + imgRect.width / 2);
        const translateY = cartRect.top + cartRect.height / 2 - (imgRect.top + imgRect.height / 2);
        flyer.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.18)`;
        flyer.style.opacity = '0';
    });

    flyer.addEventListener('transitionend', () => {
        flyer.remove();
    });
    animateCartIcon();
}

/**
 * Thêm sách vào giỏ hàng
 */
function addToCart(bookId, button) {
    if (!requireLogin()) return;

    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    if (book.isLocked) {
        showToast('Sách này đang bị niêm phong!', 'error');
        return;
    }

    const cart = getCart();
    const existingItem = cart.find(item => item.id === bookId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            price: book.price,
            image: book.image,
            quantity: 1
        });
    }

    saveCart(cart);
    if (button) animateAddToCart(button);
    showToast(`Đã thêm "${book.title}" vào giỏ hàng!`, 'success');
}

/**
 * Xóa sách khỏi giỏ hàng
 */
function removeFromCart(bookId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== bookId);
    saveCart(cart);
    renderCart();
}

/**
 * Cập nhật số lượng
 */
function updateQuantity(bookId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === bookId);

    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(bookId);
            return;
        }
        saveCart(cart);
        renderCart();
    }
}

/**
 * Cập nhật số lượng hiển thị trên icon giỏ hàng
 */
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');

    cartCountElements.forEach(el => {
        el.textContent = totalItems;
    });
}

/**
 * Tính tổng tiền giỏ hàng
 */
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/**
 * Xóa toàn bộ giỏ hàng
 */
function clearCart() {
    localStorage.removeItem('suduCart');
    updateCartCount();
}

// ========== RENDER FUNCTIONS ==========

/**
 * Render danh sách sách nổi bật (trang chủ)
 */
function loadFeaturedBooks() {
    const container = document.getElementById('featured-books');
    if (!container) return;

    // Lấy 4 sách đầu tiên làm featured
    const featuredBooks = booksData.slice(0, 4);
    container.innerHTML = featuredBooks.map(book => createBookCard(book)).join('');
}

/**
 * Render tất cả sách (trang thư viện)
 */
function loadAllBooks(filter = 'all') {
    const container = document.getElementById('books-list');
    if (!container) return;

    let filteredBooks = booksData;

    if (filter !== 'all') {
        filteredBooks = booksData.filter(book => book.tags.includes(filter));
    }

    updateFilterCounts(filter);

    if (filteredBooks.length === 0) {
        container.innerHTML = '<p class="text-center text-muted">Không tìm thấy sách nào.</p>';
        return;
    }

    container.innerHTML = filteredBooks.map(book => createBookCard(book)).join('');
}

function getBookCounts() {
    const counts = {
        all: booksData.length,
        cothu: 0,
        hiem: 0,
        cam: 0
    };

    booksData.forEach(book => {
        if (Array.isArray(book.tags)) {
            if (book.tags.includes('cothu')) counts.cothu += 1;
            if (book.tags.includes('hiem')) counts.hiem += 1;
            if (book.tags.includes('cam')) counts.cam += 1;
        }
    });

    return counts;
}

function updateFilterCounts(activeCategory = 'all') {
    const counts = getBookCounts();
    const mapping = {
        all: 'count-all',
        cothu: 'count-cothu',
        hiem: 'count-hiem',
        cam: 'count-cam'
    };

    Object.keys(mapping).forEach(category => {
        const countElement = document.getElementById(mapping[category]);
        if (!countElement) return;
        countElement.textContent = `(${counts[category]})`;

        if (category === 'all' || category === activeCategory) {
            countElement.style.visibility = 'visible';
        } else {
            countElement.style.visibility = 'hidden';
        }
    });
}

/**
 * Tạo HTML cho một book card
 */
function createBookCard(book) {
    const tagsHTML = book.tags.map(tag => {
        let tagLabel = '';
        switch (tag) {
            case 'hiem': tagLabel = 'Hiếm'; break;
            case 'cothu': tagLabel = 'Cổ thư'; break;
            case 'cam': tagLabel = 'Cấm'; break;
            default: tagLabel = tag;
        }
        return `<span class="tag tag-${tag}">${tagLabel}</span>`;
    }).join('');

    const premiumBadge = book.isPremium ? '<span class="premium-badge">Premium</span>' : '';
    const lockedClass = book.isLocked ? 'locked' : '';
    const buttonDisabled = book.isLocked ? 'disabled' : '';

    return `
        <div class="book-card ${lockedClass} fade-in">
            ${premiumBadge}
            <div class="book-card-image">
                <a href="${getTemplatesPath('chi-tiet-sach.html')}?id=${book.id}">
                    <img src="${book.image}" alt="${book.title}" 
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22><rect fill=%22%232A2A4A%22 width=%22300%22 height=%22400%22/><text x=%22150%22 y=%22200%22 text-anchor=%22middle%22 fill=%22%235E1DAD%22 font-size=%2248%22>📖</text></svg>'">
                    <div class="book-card-overlay"></div>
                </a>
            </div>
            <div class="book-card-content">
                <h3 class="book-card-title">
                    <a href="${getTemplatesPath('chi-tiet-sach.html')}?id=${book.id}">${book.title}</a>
                </h3>
                <div class="book-tags">${tagsHTML}</div>
                <div class="book-card-price">${formatPrice(book.price)}</div>
                <div class="book-card-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${book.id}, this)" ${buttonDisabled}>
                        ${book.isLocked ? '🔒 Bị niêm phong' : '🛒 Thêm vào giỏ'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Render giỏ hàng
 */
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    const cartEmpty = document.getElementById('cart-empty');

    if (!cartContainer) return;

    const cart = getCart();

    if (cart.length === 0) {
        if (cartContainer) cartContainer.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'none';
        if (cartEmpty) cartEmpty.style.display = 'block';
        return;
    }

    if (cartContainer) cartContainer.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'block';
    if (cartEmpty) cartEmpty.style.display = 'none';

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item fade-in">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image"
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 120%22><rect fill=%22%232A2A4A%22 width=%22100%22 height=%22120%22/><text x=%2250%22 y=%2260%22 text-anchor=%22middle%22 fill=%22%235E1DAD%22 font-size=%2224%22>📖</text></svg>'">
            <div class="cart-item-info">
                <h3 class="cart-item-title">${item.title}</h3>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');

    // Update total
    const totalElement = document.getElementById('cart-total-price');
    if (totalElement) {
        totalElement.textContent = formatPrice(getCartTotal());
    }
}

/**
 * Render chi tiết sản phẩm
 */
function loadProductDetail() {
    const container = document.getElementById('product-detail-content');
    if (!container) return;

    // Lấy ID từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));

    const book = booksData.find(b => b.id === bookId);

    if (!book) {
        container.innerHTML = '<p class="text-center text-muted">Không tìm thấy sách.</p>';
        return;
    }

    // Nếu sách bị khóa và có câu hỏi, hiển thị câu hỏi
    if (book.isLocked && book.question) {
        selectedAnswer = -1; // Reset
        container.innerHTML = `
            <div class="question-gate">
                <h2 class="text-center">🔒 Cánh cửa tri thức bị khóa</h2>
                <p class="text-center mb-lg">"${book.question.text}"</p>
                <div class="question-options">
                    ${book.question.options.map((option, index) =>
            `<button class="btn btn-outline option-btn" onclick="selectOption(${index})">${option}</button>`
        ).join('')}
                </div>
                <div class="text-center mt-lg">
                    <button class="btn btn-primary confirm-btn" onclick="confirmAnswer(${book.id})" disabled>Xác nhận</button>
                </div>
                <p class="text-muted text-center mt-lg" style="font-size: 0.8rem;">
                    Chọn câu trả lời và nhấn xác nhận để mở khóa cuốn sách này.
                </p>
            </div>
        `;
        return;
    }

    // Hiển thị chi tiết sách bình thường
    const tagsHTML = book.tags.map(tag => {
        let tagLabel = '';
        switch (tag) {
            case 'hiem': tagLabel = 'Hiếm'; break;
            case 'cothu': tagLabel = 'Cổ thư'; break;
            case 'cam': tagLabel = 'Cấm'; break;
            default: tagLabel = tag;
        }
        return `<span class="tag tag-${tag}">${tagLabel}</span>`;
    }).join('');

    container.innerHTML = `
        <div class="product-container">
            <div class="product-image">
                <img src="../${book.image}" alt="${book.title}"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22><rect fill=%22%232A2A4A%22 width=%22400%22 height=%22500%22/><text x=%22200%22 y=%22250%22 text-anchor=%22middle%22 fill=%22%235E1DAD%22 font-size=%2272%22>📖</text></svg>'">
            </div>
            <div class="product-info">
                <h1 class="product-title">${book.title}</h1>
                <div class="book-tags mb-md">${tagsHTML}</div>
                <p class="product-description">${book.description}</p>
                <div class="product-price">${formatPrice(book.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-accent" onclick="addToCart(${book.id}, this)" ${book.isLocked ? 'disabled' : ''}>
                        ${book.isLocked ? '🔒 Sách bị niêm phong' : '🛒 Thêm vào giỏ hàng'}
                    </button>
                    <a href="gio-hang.html" class="btn btn-secondary">Xem giỏ hàng</a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Trả lời câu hỏi để mở khóa sách
 */
function answerQuestion(bookId, selectedIndex) {
    const book = booksData.find(b => b.id === bookId);
    if (!book || !book.question) return;

    if (selectedIndex === book.question.correct) {
        const user = getCurrentUser();
        if (user) {
            if (!Array.isArray(user.unlockedBooks)) {
                user.unlockedBooks = [];
            }
            if (!user.unlockedBooks.includes(book.id)) {
                user.unlockedBooks.push(book.id);
            }
            setCurrentUser(user);
        } else {
            book.isLocked = false;
        }
        showToast('Chúc mừng! Bạn đã mở khóa cuốn sách.', 'success');
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    } else {
        showToast('Câu trả lời không đúng. Hãy thử lại!', 'error');
    }
}

/**
 * Chọn đáp án
 */
function selectOption(index) {
    selectedAnswer = index;
    updateOptions();
}

/**
 * Cập nhật UI cho options
 */
function updateOptions() {
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, i) => {
        btn.classList.toggle('selected', i === selectedAnswer);
    });
    const confirmBtn = document.querySelector('.confirm-btn');
    if (confirmBtn) {
        confirmBtn.disabled = selectedAnswer === -1;
    }
}

/**
 * Xác nhận đáp án
 */
function confirmAnswer(bookId) {
    if (selectedAnswer !== -1) {
        answerQuestion(bookId, selectedAnswer);
    }
}

/**
 * Render checkout summary
 */
function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items');
    const totalElement = document.getElementById('checkout-total');

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        window.location.href = 'gio-hang.html';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.title} x${item.quantity}</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');

    if (totalElement) {
        totalElement.innerHTML = `
            <span>Tổng cộng:</span>
            <span>${formatPrice(getCartTotal())}</span>
        `;
    }
}

// ========== SEARCH FUNCTION ==========

/**
 * Tìm kiếm sách
 */
function searchBooks() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    if (query === '') {
        // Nếu đang ở trang thư viện, load lại tất cả
        if (document.getElementById('books-list')) {
            loadAllBooks();
        }
        return;
    }

    // Nếu không ở trang thư viện, chuyển đến trang thư viện với query
    if (!document.getElementById('books-list')) {
        window.location.href = `${getTemplatesPath('sach.html')}?search=${encodeURIComponent(query)}`;
        return;
    }

    // Tìm kiếm và hiển thị kết quả
    const results = booksData.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query)
    );

    const container = document.getElementById('books-list');

    if (results.length === 0) {
        container.innerHTML = `
            <div class="text-center text-muted" style="grid-column: 1/-1; padding: 3rem;">
                <p style="font-size: 3rem; margin-bottom: 1rem;">🔍</p>
                <p>Không tìm thấy sách với từ khóa "${query}"</p>
            </div>
        `;
        return;
    }

    container.innerHTML = results.map(book => createBookCard(book)).join('');
}

/**
 * Xử lý search từ URL parameter
 */
function handleSearchFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');

    if (searchQuery) {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = searchQuery;
            searchBooks();
        }
    }
}

// ========== FILTER FUNCTION ==========

/**
 * Lọc sách theo thể loại
 */
function filterBooks(category, event) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const button = event && (event.currentTarget || event.target) ? (event.currentTarget || event.target).closest('.filter-btn') : null;
    if (button) {
        button.classList.add('active');
    }

    loadAllBooks(category);
}

// ========== UTILITY FUNCTIONS ==========

/**
 * Format giá tiền VND
 */
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

/**
 * Hiển thị toast notification
 */
function showToast(message, type = 'success') {
    // Xóa toast cũ nếu có
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);

    // Auto hide
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

/**
 * Kiểm tra câu trả lời cổng tri thức
 */
function checkGateAnswer() {
    const answer = document.getElementById('gate-answer').value.trim().toLowerCase();

    // Các câu trả lời chấp nhận được
    const acceptedAnswers = ['có', 'yes', 'được', 'tôi có', 'i do', 'vâng', 'dạ'];

    if (acceptedAnswers.some(a => answer.includes(a))) {
        showToast('Cánh cửa tri thức đã mở! Bạn được phép đọc cuốn sách này.', 'success');
    } else {
        showToast('Câu trả lời chưa đúng. Hãy suy ngẫm thêm...', 'error');
    }
}

/**
 * Xử lý form checkout
 */
function handleCheckout(event) {
    event.preventDefault();

    const name = document.getElementById('checkout-name').value;
    const email = document.getElementById('checkout-email').value;

    if (!name || !email) {
        showToast('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }

    // Simulate checkout success
    clearCart();

    // Show success message
    const form = document.querySelector('.checkout-form');
    form.innerHTML = `
        <div class="success-message">
            <div class="success-icon">✓</div>
            <h2>Thanh toán thành công!</h2>
            <p class="text-muted">Cảm ơn ${name} đã đặt hàng.</p>
            <p class="text-muted">Chi tiết đơn hàng đã được gửi đến ${email}</p>
            <a href="../index.html" class="btn btn-primary mt-lg">Về trang chủ</a>
        </div>
    `;
}

/**
 * Xử lý form liên hệ
 */
function handleContactForm(event) {
    event.preventDefault();

    const name = document.getElementById('contact-name').value;

    // Show success message
    showToast(`Cảm ơn ${name}! Chúng tôi sẽ liên hệ sớm.`, 'success');

    // Reset form
    event.target.reset();
}

// ========== EVENT LISTENERS ==========

// Search on Enter key
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && e.target.id === 'search-input') {
        searchBooks();
    }
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
    initAuthUI();

    // Handle search from URL
    handleSearchFromURL();
});
