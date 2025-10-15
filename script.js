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
        logo: "TS"
    },
    {
        nome: "Restaurante Sabor & Arte",
        setor: "Alimentação",
        cidade: "Rio de Janeiro",
        dataCertificacao: "2024-02-20",
        logo: "SA"
    },
    {
        nome: "Clínica Bem Estar",
        setor: "Saúde",
        cidade: "Belo Horizonte",
        dataCertificacao: "2024-01-10",
        logo: "BE"
    },
    {
        nome: "Moda & Estilo",
        setor: "Varejo",
        cidade: "São Paulo",
        dataCertificacao: "2024-03-05",
        logo: "ME"
    },
    {
        nome: "Colégio Excelência",
        setor: "Educação",
        cidade: "Brasília",
        dataCertificacao: "2024-02-28",
        logo: "CE"
    },
    {
        nome: "Salão Beleza Pura",
        setor: "Beleza",
        cidade: "Curitiba",
        dataCertificacao: "2024-03-10",
        logo: "BP"
    },
    {
        nome: "Viagens & Aventura",
        setor: "Turismo",
        cidade: "Florianópolis",
        dataCertificacao: "2024-01-25",
        logo: "VA"
    },
    {
        nome: "Consultoria Empresarial Pro",
        setor: "Serviços",
        cidade: "São Paulo",
        dataCertificacao: "2024-02-15",
        logo: "CE"
    },
    {
        nome: "Supermercado Bom Preço",
        setor: "Varejo",
        cidade: "Porto Alegre",
        dataCertificacao: "2024-03-01",
        logo: "BP"
    },
    {
        nome: "Café & Cia",
        setor: "Alimentação",
        cidade: "Salvador",
        dataCertificacao: "2024-02-10",
        logo: "CC"
    },
    {
        nome: "TechStart Inovação",
        setor: "Tecnologia",
        cidade: "Campinas",
        dataCertificacao: "2024-03-12",
        logo: "TS"
    },
    {
        nome: "Centro Médico Vida Saudável",
        setor: "Saúde",
        cidade: "Recife",
        dataCertificacao: "2024-01-30",
        logo: "VS"
    },
    {
        nome: "Academia Fit & Forma",
        setor: "Serviços",
        cidade: "Fortaleza",
        dataCertificacao: "2024-02-22",
        logo: "FF"
    },
    {
        nome: "Livraria Conhecimento",
        setor: "Varejo",
        cidade: "Brasília",
        dataCertificacao: "2024-03-08",
        logo: "LC"
    },
    {
        nome: "Hotel Maravilha",
        setor: "Turismo",
        cidade: "Rio de Janeiro",
        dataCertificacao: "2024-01-18",
        logo: "HM"
    },
    {
        nome: "Pizzaria Italiana",
        setor: "Alimentação",
        cidade: "São Paulo",
        dataCertificacao: "2024-02-05",
        logo: "PI"
    },
    {
        nome: "Instituto de Idiomas Global",
        setor: "Educação",
        cidade: "São Paulo",
        dataCertificacao: "2024-02-25",
        logo: "IG"
    },
    {
        nome: "Spa Relax Total",
        setor: "Beleza",
        cidade: "Florianópolis",
        dataCertificacao: "2024-03-15",
        logo: "RT"
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
                <div class="company-logo">${empresa.logo}</div>
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
