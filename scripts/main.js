// ===== ОСНОВНЫЕ ФУНКЦИИ ПОРТФОЛИО =====

// Данные проектов
const projectsData = {
    project1: {
        title: 'Сайт для РТУ МИРЭА',
        description: 'Официальный сайт РТУ МИРЭА. Разработан с использованием современных веб-технологий и адаптивного дизайна для удобного просмотра на всех устройствах.',
        image: '../images/projects/project1.png',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        liveUrl: 'https://online-edu.mirea.ru/my/',
        codeUrl: 'https://online-edu.mirea.ru/my/courses.php'
    },
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
