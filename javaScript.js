// Elementos DOM
        const landingPage = document.getElementById('landingPage');
        const dashboard = document.getElementById('dashboard');
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const heroRegister = document.getElementById('heroRegister');
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const closeModalButtons = document.querySelectorAll('.close-modal');
        const switchToRegister = document.getElementById('switchToRegister');
        const switchToLogin = document.getElementById('switchToLogin');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const logoutBtn = document.getElementById('logoutBtn');
        const userName = document.getElementById('userName');
        const userCourse = document.getElementById('userCourse');

        // Abrir modais
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });

        registerBtn.addEventListener('click', () => {
            registerModal.style.display = 'flex';
        });

        heroRegister.addEventListener('click', () => {
            registerModal.style.display = 'flex';
        });

        // Alternar entre modais
        switchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'flex';
        });

        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });

        // Fechar modais
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                loginModal.style.display = 'none';
                registerModal.style.display = 'none';
            });
        });

        // Fechar modal ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
            if (e.target === registerModal) {
                registerModal.style.display = 'none';
            }
        });

        // Login
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulação de autenticação
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Em uma implementação real, aqui seria feita a validação com o backend
            if (email && password) {
                // Fechar modal
                loginModal.style.display = 'none';
                
                // Mostrar dashboard
                landingPage.style.display = 'none';
                dashboard.style.display = 'block';
                
                // Atualizar informações do usuário
                userName.textContent = "Carlos Mendes";
                userCourse.textContent = "Engenharia Informática - Universidade Amílcar Cabral";
                
                // Em uma implementação real, salvar token JWT etc.
                localStorage.setItem('userLoggedIn', 'true');
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });

        // Registro
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulação de registro
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const studentId = document.getElementById('registerStudentId').value;
            const university = document.getElementById('registerUniversity').value;
            const course = document.getElementById('registerCourse').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            // Validação básica
            if (password !== confirmPassword) {
                alert('As senhas não coincidem.');
                return;
            }
            
            if (name && email && studentId && university && course && password) {
                // Fechar modal
                registerModal.style.display = 'none';
                
                // Mostrar dashboard
                landingPage.style.display = 'none';
                dashboard.style.display = 'block';
                
                // Atualizar informações do usuário
                userName.textContent = name;
                
                // Obter nome da universidade
                const universitySelect = document.getElementById('registerUniversity');
                const universityName = universitySelect.options[universitySelect.selectedIndex].text;
                userCourse.textContent = `${course} - ${universityName}`;
                
                // Em uma implementação real, enviar dados para o backend
                localStorage.setItem('userLoggedIn', 'true');
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });

        // Logout
        logoutBtn.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja sair?')) {
                // Esconder dashboard
                dashboard.style.display = 'none';
                
                // Mostrar landing page
                landingPage.style.display = 'block';
                
                // Limpar dados de sessão
                localStorage.removeItem('userLoggedIn');
            }
        });

        // Verificar se o usuário já está logado (em uma implementação real)
        window.addEventListener('DOMContentLoaded', () => {
            const isLoggedIn = localStorage.getItem('userLoggedIn');
            
            if (isLoggedIn) {
                landingPage.style.display = 'none';
                dashboard.style.display = 'block';
            } else {
                landingPage.style.display = 'block';
                dashboard.style.display = 'none';
            }
        });

        // Navegação suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });