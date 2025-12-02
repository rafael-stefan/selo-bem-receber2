// Menu Mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Dados das Empresas
const empresas = [
    {
        nome: "TechSolutions",
        setor: "Tecnologia",
        cidade: "São Paulo",
        dataCertificacao: "2024-01-15",
        logoImg: "img-icon/1 - Rancho das videiras.png"
    },
    {
        nome: "Recanto do Cedro",
        setor: "Turismo",
        cidade: "Birigui",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/2 - Recanto do Cedro.png"
    },
    {
        nome: "Café & Cia do Lago",
        setor: "Alimentação",
        cidade: "Araçatuba",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/3 - Café & Cia do Lago.png"
    },
    {
        nome: "Pousada Vale do Buriti",
        setor: "Turismo",
        cidade: "Buritama",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/4 - Pousada Vale do Buriti.png"
    },
    {
        nome: "Bar e Cozinha Dona Sinhá",
        setor: "Alimentação",
        cidade: "Penápolis",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/5 - Bar e Cozinha Dona Sinhá.avif"
    },
    {
        nome: "Estalagem Campo Verde",
        setor: "Turismo",
        cidade: "Guararapes",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/6 - Estalagem Campo Verde.jpg"
    },
    {
        nome: "Restaurante Tacho Caipira",
        setor: "Alimentação",
        cidade: "Birigui",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/7 - Restaurante Tacho Caipira.jpg"
    },
    {
        nome: "Rancho Morada do Sol",
        setor: "Turismo",
        cidade: "Araçatuba",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/8 - Rancho Morada do Sol.jfif.jpg"
    },
    {
        nome: "Taberna do Cedrinho",
        setor: "Alimentação",
        cidade: "Glicério",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/9 - Taberna do Cedrinho.png"
    },
    {
        nome: "Doce Encanto Panificadora & Café",
        setor: "Alimentação",
        cidade: "Birigui",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/10 - Doce Encanto Panificadora & Café.png"
    },
    {
        nome: "Eco Pousada Raízes da Mata",
        setor: "Turismo",
        cidade: "Coroados",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/11 - Eco Pousada Raízes da Mata.png"
    },
    {
        nome: "Bar da Praça Central",
        setor: "Alimentação",
        cidade: "Araçatuba",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/12 - Bar da Praça Central.png"
    },
    {
        nome: "Restaurante Sabor da Roça",
        setor: "Alimentação",
        cidade: "Piacatu",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/13 - Restaurante Sabor da Roça.webp"
    },
    {
        nome: "Hotel Jardim Imperial",
        setor: "Turismo",
        cidade: "Birigui",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/14 - Hotel Jardim Imperial.jpg"
    },
    {
        nome: "Rancho Ponte do Cedro",
        setor: "Turismo",
        cidade: "Buritama",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/15 - Rancho Ponte do Cedro.webp"
    },
    {
        nome: "Cantina Dom Ambrósio",
        setor: "Alimentação",
        cidade: "Penápolis",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/16 - Cantina Dom Ambrósio.jpg"
    },
    {
        nome: "Empório Sabores do Interior",
        setor: "Varejo",
        cidade: "Araçatuba",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/17 - Empório Sabores do Interior.jpg"
    },
    {
        nome: "Hostel Caminhos do Tietê",
        setor: "Turismo",
        cidade: "Buritama",
        dataCertificacao: "2025-09-18",
        logoImg: "img-icon/18 - Hostel Caminhos do Tietê.jpg"
    }
];

// Função para formatar data
function formatarData(data) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                   'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const d = new Date(data);
    return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}

// Função para renderizar empresas
function renderizarEmpresas(empresasParaRenderizar) {
    const grid = document.getElementById('companiesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!grid) return;
    
    if (empresasParaRenderizar.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = empresasParaRenderizar.map(empresa => `
        <div class="company-card">
            <div class="company-header">
                <div class="company-logo">
                    <img src="${empresa.logoImg}" alt="Logo ${empresa.nome}" onerror="this.style.display='none'">
                </div>
                <div class="company-info">
                    <h3>${empresa.nome}</h3>
                    <div class="company-sector">${empresa.setor}</div>
                </div>
            </div>
            <div class="company-details">
                <div class="company-detail">
                    <span>📍</span>
                    <span>${empresa.cidade}</span>
                </div>
                <div class="company-detail">
                    <span>📅</span>
                    <span>Certificada em ${formatarData(empresa.dataCertificacao)}</span>
                </div>
            </div>
            <div class="badge">
                <span>✓</span>
                <span>Selo Bem Receber</span>
            </div>
        </div>
    `).join('');
}

// Função para filtrar e ordenar empresas
function filtrarEmpresas() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const sortValue = document.getElementById('sortSelect')?.value || 'name-asc';
    const sectorFilter = document.getElementById('sectorFilter')?.value || '';
    
    let empresasFiltradas = [...empresas];
    
    // Filtrar por busca
    if (searchTerm) {
        empresasFiltradas = empresasFiltradas.filter(empresa => 
            empresa.nome.toLowerCase().includes(searchTerm) ||
            empresa.setor.toLowerCase().includes(searchTerm) ||
            empresa.cidade.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filtrar por setor
    if (sectorFilter) {
        empresasFiltradas = empresasFiltradas.filter(empresa => 
            empresa.setor === sectorFilter
        );
    }
    
    // Ordenar
    empresasFiltradas.sort((a, b) => {
        switch(sortValue) {
            case 'name-asc':
                return a.nome.localeCompare(b.nome);
            case 'name-desc':
                return b.nome.localeCompare(a.nome);
            case 'sector':
                return a.setor.localeCompare(b.setor);
            case 'certified-date':
                return new Date(b.dataCertificacao) - new Date(a.dataCertificacao);
            default:
                return 0;
        }
    });
    
    renderizarEmpresas(empresasFiltradas);
}

// Event listeners para filtros
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const sectorFilter = document.getElementById('sectorFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filtrarEmpresas);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filtrarEmpresas);
    }
    
    if (sectorFilter) {
        sectorFilter.addEventListener('change', filtrarEmpresas);
    }
    
    // Renderizar empresas iniciais
    if (document.getElementById('companiesGrid')) {
        renderizarEmpresas(empresas);
    }
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Pegar valores do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            empresa: document.getElementById('empresa').value,
            mensagem: document.getElementById('mensagem').value
        };
        
        // Simular envio (aqui você integraria com um backend)
        console.log('Dados do formulário:', formData);
        
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
        
        // Limpar formulário
        contactForm.reset();
    });
}

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada para cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card, .company-card, .module-card, .benefit-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Slideshow
(function() {
    const images = [
        'images/brotas-1.jpg',
        'images/Selo-Bem-Receber-3.jpeg',
        'images/SebraeSP_Sacolas-1_p17120_thumb_resized.webp'
    ];

    const intervalMs = 5000; // tempo entre trocas
    const preloadTimeoutMs = 6000; // máximo para aguardar carregamento das imagens

    function createSlides(container, imagePaths) {
        imagePaths.forEach((src, idx) => {
            const slide = document.createElement('div');
            slide.className = 'slide' + (idx === 0 ? ' active' : '');
            slide.style.backgroundImage = `url('${src}')`;
            slide.style.backgroundSize = 'cover';
            slide.style.backgroundPosition = 'center';
            container.appendChild(slide);
        });
    }

    function preload(paths) {
        const loaders = paths.map(src => new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve({ src, status: 'loaded' });
            img.onerror = () => resolve({ src, status: 'error' });
            img.src = src;
        }));
        return Promise.all(loaders);
    }

    function initHeroSlideshow(containerId, imagePaths, interval) {
        const container = document.getElementById(containerId);
        if (!container || !imagePaths.length) return;

        // Cria slides imediatamente para iniciar o download das imagens
        createSlides(container, imagePaths);

        const slides = container.querySelectorAll('.slide');
        let current = 0;
        let intervalHandle = null;

        // Aguarda preload (até um timeout) antes de iniciar as trocas
        const preloadPromise = preload(imagePaths);
        const timeoutPromise = new Promise(resolve => setTimeout(resolve, preloadTimeoutMs, 'timeout'));

        Promise.race([preloadPromise, timeoutPromise]).then(() => {
            // start slideshow loop
            intervalHandle = setInterval(() => {
                const next = (current + 1) % slides.length;

                // Add active to next first to create crossfade
                slides[next].classList.add('active');

                // remove active from current after a short delay so both overlap (crossfade)
                setTimeout(() => {
                    slides[current].classList.remove('active');
                    current = next;
                }, 120); // 60ms é suficiente para evitar flicker; ajuste se necessário
            }, interval);
        }).catch(() => {
            // fallback: iniciar mesmo em caso de erro
            intervalHandle = setInterval(() => {
                const next = (current + 1) % slides.length;
                slides[next].classList.add('active');
                setTimeout(() => {
                    slides[current].classList.remove('active');
                    current = next;
                }, 60);
            }, interval);
        });

        // opcional: expor uma forma de parar o slideshow se necessário
        return {
            stop() {
                if (intervalHandle) clearInterval(intervalHandle);
            }
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => initHeroSlideshow('heroSlideshow', images, intervalMs));
    } else {
        initHeroSlideshow('heroSlideshow', images, intervalMs);
    }
})();
