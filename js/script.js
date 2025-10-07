
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            const heroGrid = document.querySelector('.hero-grid');
            if (heroGrid) {
                heroGrid.style.transform = `translateY(${scrolled * 0.5}px)`;
            }

            // Apply parallax to entire groups
            document.querySelectorAll('.parallax-group').forEach((group, index) => {
                const rect = group.getBoundingClientRect();
                const groupTop = rect.top + scrolled;
                const groupProgress = (scrolled - groupTop + window.innerHeight) / (window.innerHeight + rect.height);

                if (groupProgress > 0 && groupProgress < 1) {
                    const speed = 0.15;
                    const yPos = -(groupProgress * 100 * speed);
                    group.style.transform = `translateY(${yPos}px)`;
                }
            });

            document.querySelectorAll('.value-card, .vertical-card, .privilege-card, .journey-step, .opportunity-card, .team-card').forEach((card, index) => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (cardTop < windowHeight * 0.8) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });

        window.addEventListener('load', () => {
            document.querySelectorAll('.value-card, .vertical-card, .privilege-card, .journey-step, .opportunity-card, .team-card').forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease ' + (index * 0.1) + 's';
            });

            // Set dynamic year in footer
            const yearElement = document.getElementById('current-year');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }

            window.dispatchEvent(new Event('scroll'));
        });
