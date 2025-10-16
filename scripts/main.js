// ===== ОСНОВНЫЕ ФУНКЦИИ ПОРТФОЛИО =====

// Данные проектов
const projectsData = {
    project1: {
        title: 'Личный сайт',
        description: 'Сайт-портфолио на HTML, CSS и Bootstrap с адаптивным дизайном. Включает в себя все необходимые разделы для представления навыков и проектов. Создан с использованием современных веб-технологий и лучших практик разработки.',
        image: 'https://via.placeholder.com/400x200/007bff/ffffff?text=Личный+сайт',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        liveUrl: 'https://example.com/project1',
        codeUrl: 'https://github.com/kuzkin-timofey/project1'
    },
    project2: {
        title: 'Todo приложение',
        description: 'Приложение для управления задачами с использованием JavaScript. Включает добавление, редактирование, удаление и фильтрацию задач. Использует LocalStorage для сохранения данных между сессиями.',
        image: 'https://via.placeholder.com/400x200/28a745/ffffff?text=Todo+приложение',
        technologies: ['JavaScript', 'LocalStorage', 'DOM', 'CSS'],
        liveUrl: 'https://example.com/project2',
        codeUrl: 'https://github.com/kuzkin-timofey/project2'
    },
    project3: {
        title: 'Интернет-магазин',
        description: 'Прототип интернет-магазина с корзиной товаров и фильтрацией. Создан с использованием React и современных веб-технологий. Включает управление состоянием, маршрутизацию и интеграцию с API.',
        image: 'https://via.placeholder.com/400x200/17a2b8/ffffff?text=Интернет-магазин',
        technologies: ['React', 'API', 'Redux', 'Node.js'],
        liveUrl: 'https://example.com/project3',
        codeUrl: 'https://github.com/kuzkin-timofey/project3'
    },
    project4: {
        title: 'Лендинг страница',
        description: 'Адаптивная лендинг страница для IT-компании. Включает современный дизайн и интерактивные элементы. Оптимизирована для поисковых систем и быстрой загрузки.',
        image: 'https://via.placeholder.com/400x200/ffc107/000000?text=Лендинг+страница',
        technologies: ['HTML', 'CSS', 'JavaScript', 'SEO'],
        liveUrl: 'https://example.com/project4',
        codeUrl: 'https://github.com/kuzkin-timofey/project4'
    },
    project5: {
        title: 'Игра "Змейка"',
        description: 'Классическая игра "Змейка" на чистом JavaScript. Включает систему очков, уровни сложности и сохранение рекордов. Использует Canvas API для отрисовки графики.',
        image: 'https://via.placeholder.com/400x200/6f42c1/ffffff?text=Игра+Змейка',
        technologies: ['JavaScript', 'Canvas', 'Game', 'HTML5'],
        liveUrl: 'https://example.com/project5',
        codeUrl: 'https://github.com/kuzkin-timofey/project5'
    },
    project6: {
        title: 'Чат приложение',
        description: 'Веб-чат с возможностью обмена сообщениями в реальном времени. Использует WebSocket для мгновенной доставки сообщений. Включает аутентификацию и комнаты для общения.',
        image: 'https://via.placeholder.com/400x200/dc3545/ffffff?text=Чат+приложение',
        technologies: ['React', 'WebSocket', 'Node.js', 'MongoDB'],
        liveUrl: 'https://example.com/project6',
        codeUrl: 'https://github.com/kuzkin-timofey/project6'
    },
    project7: {
        title: 'Блог платформа',
        description: 'Современная платформа для ведения блога с системой комментариев, тегами и поиском. Адаптивный дизайн и SEO оптимизация. Включает админ панель для управления контентом.',
        image: 'https://via.placeholder.com/400x200/20c997/ffffff?text=Блог+платформа',
        technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
        liveUrl: 'https://example.com/project7',
        codeUrl: 'https://github.com/kuzkin-timofey/project7'
    },
    project8: {
        title: 'Научный калькулятор',
        description: 'Продвинутый калькулятор с поддержкой тригонометрических функций, логарифмов и констант. Темная и светлая темы, история вычислений и экспорт результатов.',
        image: 'https://via.placeholder.com/400x200/fd7e14/ffffff?text=Калькулятор',
        technologies: ['JavaScript', 'Math.js', 'CSS Grid', 'LocalStorage'],
        liveUrl: 'https://example.com/project8',
        codeUrl: 'https://github.com/kuzkin-timofey/project8'
    },
    project9: {
        title: 'Погодное приложение',
        description: 'Приложение для отслеживания погоды с прогнозами на неделю. Геолокация, анимации и красивые иконки погоды. Поддержка множества городов и уведомлений.',
        image: 'https://via.placeholder.com/400x200/6c757d/ffffff?text=Погодное+приложение',
        technologies: ['React', 'API', 'Geolocation', 'Chart.js'],
        liveUrl: 'https://example.com/project9',
        codeUrl: 'https://github.com/kuzkin-timofey/project9'
    },
    project10: {
        title: 'Портфолио сайт',
        description: 'Креативный портфолио с анимациями и интерактивными элементами. Параллакс эффекты и плавные переходы между секциями. Оптимизирован для производительности.',
        image: 'https://via.placeholder.com/400x200/6610f2/ffffff?text=Портфолио+сайт',
        technologies: ['HTML', 'CSS', 'GSAP', 'Three.js'],
        liveUrl: 'https://example.com/project10',
        codeUrl: 'https://github.com/kuzkin-timofey/project10'
    },
    project11: {
        title: 'Игра "Память"',
        description: 'Классическая игра на запоминание карточек с таймером и счетчиком ходов. Различные уровни сложности и красивые анимации. Сохранение рекордов.',
        image: 'https://via.placeholder.com/400x200/e83e8c/ffffff?text=Игра+Память',
        technologies: ['JavaScript', 'CSS Animations', 'LocalStorage', 'Canvas'],
        liveUrl: 'https://example.com/project11',
        codeUrl: 'https://github.com/kuzkin-timofey/project11'
    },
    project12: {
        title: 'Админ панель',
        description: 'Полнофункциональная админ панель с дашбордом, таблицами данных, графиками и системой управления пользователями. Темная тема и адаптивный дизайн.',
        image: 'https://via.placeholder.com/400x200/198754/ffffff?text=Админ+панель',
        technologies: ['React', 'Redux', 'Chart.js', 'Material-UI'],
        liveUrl: 'https://example.com/project12',
        codeUrl: 'https://github.com/kuzkin-timofey/project12'
    }
};

// ===== ФУНКЦИИ МОДАЛЬНЫХ ОКОН =====

/**
 * Открывает модальное окно проекта
 * @param {string} projectId - ID проекта
 */
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) {
        console.error('Проект не найден:', projectId);
        return;
    }

    // Заполняем модальное окно данными
    document.getElementById('projectModalTitle').textContent = project.title;
    document.getElementById('projectModalImage').src = project.image;
    document.getElementById('projectModalImage').alt = project.title;
    document.getElementById('projectModalDescription').textContent = project.description;
    
    // Очищаем и заполняем технологии
    const technologiesContainer = document.getElementById('projectModalTechnologies');
    technologiesContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'badge bg-primary me-1 mb-1';
        badge.textContent = tech;
        technologiesContainer.appendChild(badge);
    });
    
    // Устанавливаем ссылки
    document.getElementById('projectModalLive').href = project.liveUrl;
    document.getElementById('projectModalCode').href = project.codeUrl;
    
    // Показываем модальное окно
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}

// ===== ФУНКЦИИ ФИЛЬТРАЦИИ ПРОЕКТОВ =====

/**
 * Фильтрует проекты по категории
 * @param {string} category - Категория для фильтрации
 */
function filterProjects(category) {
    const projectItems = document.querySelectorAll('.project-item');
    const filterButtons = document.querySelectorAll('.btn-group .btn');
    
    // Обновляем активную кнопку
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category || 
            (category === 'all' && btn.textContent === 'Все')) {
            btn.classList.add('active');
        }
    });
    
    // Фильтруем проекты
    projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.6s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}

// ===== ФУНКЦИИ ФОРМ =====

/**
 * Обработка отправки формы контактов
 */
function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Валидация формы
    if (!validateContactForm(form)) {
        return;
    }
    
    // Показываем индикатор загрузки
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Отправка...';
    submitBtn.disabled = true;
    
    // Имитация отправки (в реальном проекте здесь будет AJAX запрос)
    setTimeout(() => {
        // Сбрасываем форму
        form.reset();
        form.classList.remove('was-validated');
        
        // Восстанавливаем кнопку
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Показываем модальное окно успеха
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
        
        console.log('Форма отправлена:', Object.fromEntries(formData));
    }, 2000);
}

/**
 * Валидация формы контактов
 * @param {HTMLFormElement} form - Форма для валидации
 * @returns {boolean} - Результат валидации
 */
function validateContactForm(form) {
    let isValid = true;
    
    // Валидация имени
    const nameField = form.querySelector('#contactName');
    if (!nameField.value.trim()) {
        nameField.classList.add('is-invalid');
        isValid = false;
    } else {
        nameField.classList.remove('is-invalid');
        nameField.classList.add('is-valid');
    }
    
    // Валидация email
    const emailField = form.querySelector('#contactEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailField.value.trim() || !emailRegex.test(emailField.value)) {
        emailField.classList.add('is-invalid');
        isValid = false;
    } else {
        emailField.classList.remove('is-invalid');
        emailField.classList.add('is-valid');
    }
    
    // Валидация сообщения
    const messageField = form.querySelector('#contactMessage');
    if (!messageField.value.trim()) {
        messageField.classList.add('is-invalid');
        isValid = false;
    } else {
        messageField.classList.remove('is-invalid');
        messageField.classList.add('is-valid');
    }
    
    // Валидация согласия
    const agreementField = form.querySelector('#contactAgreement');
    if (!agreementField.checked) {
        agreementField.classList.add('is-invalid');
        isValid = false;
    } else {
        agreementField.classList.remove('is-invalid');
        agreementField.classList.add('is-valid');
    }
    
    form.classList.add('was-validated');
    return isValid;
}

/**
 * Обработка отправки формы дневника
 */
function handleDiaryFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Создаем новую запись в дневнике
    const newEntry = {
        title: formData.get('entryTitle'),
        date: formData.get('entryDate'),
        description: formData.get('entryDescription'),
        status: formData.get('entryStatus')
    };
    
    // Добавляем запись в timeline
    addDiaryEntry(newEntry);
    
    // Сбрасываем форму
    form.reset();
    
    // Показываем уведомление
    showNotification('Запись добавлена в дневник!', 'success');
    
    console.log('Новая запись дневника:', newEntry);
}

/**
 * Добавляет новую запись в дневник
 * @param {Object} entry - Данные записи
 */
function addDiaryEntry(entry) {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.setAttribute('data-status', entry.status);
    
    const statusClass = entry.status === 'completed' ? 'bg-success' : 
                       entry.status === 'in-progress' ? 'bg-warning' : 'bg-secondary';
    const statusText = entry.status === 'completed' ? 'Завершено' : 
                      entry.status === 'in-progress' ? 'В процессе' : 'Запланировано';
    
    timelineItem.innerHTML = `
        <div class="timeline-marker ${statusClass}">
            <i class="bi bi-${entry.status === 'completed' ? 'check' : 'clock'}"></i>
        </div>
        <div class="timeline-content">
            <h6 class="timeline-title">${entry.title}</h6>
            <p class="timeline-text text-muted">${new Date(entry.date).toLocaleDateString('ru-RU')}</p>
            <span class="badge bg-${entry.status === 'completed' ? 'success' : 
                                   entry.status === 'in-progress' ? 'warning' : 'secondary'}">${statusText}</span>
        </div>
    `;
    
    // Добавляем анимацию
    timelineItem.style.animation = 'slideInRight 0.6s ease-out';
    
    // Вставляем в начало timeline
    timeline.insertBefore(timelineItem, timeline.firstChild);
}

// ===== УТИЛИТАРНЫЕ ФУНКЦИИ =====

/**
 * Показывает уведомление
 * @param {string} message - Текст уведомления
 * @param {string} type - Тип уведомления (success, error, info, warning)
 */
function showNotification(message, type = 'info') {
    // Создаем контейнер для уведомлений, если его нет
    let container = document.getElementById('notifications-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notifications-container';
        container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999;';
        document.body.appendChild(container);
    }
    
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show`;
    notification.style.cssText = 'min-width: 300px; margin-bottom: 10px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    container.appendChild(notification);
    
    // Автоматически удаляем через 5 секунд
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

/**
 * Плавная прокрутка к элементу
 * @param {string} elementId - ID элемента
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Инициализация анимаций при скролле
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ =====

document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем анимации
    initScrollAnimations();
    
    // Обработчики форм
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    const diaryForm = document.getElementById('diaryForm');
    if (diaryForm) {
        diaryForm.addEventListener('submit', handleDiaryFormSubmit);
    }
    
    // Обработчики кнопок фильтрации
    document.querySelectorAll('.btn-group .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.textContent.toLowerCase();
            if (category === 'все') {
                filterProjects('all');
            } else {
                filterProjects(category);
            }
        });
    });
    
    // Обработчики ссылок с плавной прокруткой
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });
    
    // Инициализация tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Инициализация popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    
    console.log('Портфолио инициализировано успешно!');
});

// ===== ОБРАБОТКА ОШИБОК =====

window.addEventListener('error', function(e) {
    console.error('Ошибка JavaScript:', e.error);
    showNotification('Произошла ошибка. Пожалуйста, обновите страницу.', 'error');
});

// ===== ЭКСПОРТ ДЛЯ ГЛОБАЛЬНОГО ИСПОЛЬЗОВАНИЯ =====
window.openProjectModal = openProjectModal;
window.filterProjects = filterProjects;
