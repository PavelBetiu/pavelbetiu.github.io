<template>
<header class="header-2">
    <div class="page-header min-vh-100 relative" :style="{ 'background': 'linear-gradient(135deg, rgba(30, 42, 71, 0.85) 0%, rgba(30, 42, 71, 0.85) 100%), url(' + require('@/assets/images/home-page-background.jpg') + ')', 'background-size': 'cover', 'background-position': 'center' }">
        <!-- Background Logo Watermark -->
        <div class="background-logo-watermark">
            <img src="@/assets/images/pb-logo-modern.svg" alt="PB Logo" class="logo-watermark">
        </div>
        
        <!-- Hero Content -->
        <div class="container">
            <div class="row justify-content-center align-items-center min-vh-100">
                <div class="col-lg-8 text-center">
                    <img src="../assets/images/pavelbetiu.jpg" alt="Pavel Bețiu" class="hero-profile-image mb-4" />
                    <h1 class="text-white display-3 font-weight-bold mb-3 hero-title">Pavel Bețiu</h1>
                    <h3 class="text-white-50 mb-4 hero-subtitle">Associate Cloud Application Systems Engineer</h3>
                    <p class="text-white opacity-8 lead mb-5 mx-auto" style="max-width: 600px;">
                        Cloud infrastructure specialist at Finastra with expertise in Azure, DevOps, and system architecture. 
                        Master's graduate in Computer Science from University Politehnica of Bucharest.
                    </p>
                    
                    <!-- Quick Stats -->
                    <div class="row justify-content-center g-4 mt-4">
                        <div class="col-6 col-md-3">
                            <div class="stat-card p-3">
                                <h2 class="text-gradient text-primary mb-0"><AnimatedCounter :end="3" suffix="+" /></h2>
                                <p class="text-white-50 mb-0 small">Years Experience</p>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="stat-card p-3">
                                <h2 class="text-gradient text-primary mb-0"><AnimatedCounter :end="15" suffix="+" /></h2>
                                <p class="text-white-50 mb-0 small">Projects Delivered</p>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="stat-card p-3">
                                <h2 class="text-gradient text-primary mb-0"><AnimatedCounter :end="4" /></h2>
                                <p class="text-white-50 mb-0 small">Professional Roles</p>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="stat-card p-3">
                                <h2 class="text-gradient text-primary mb-0"><AnimatedCounter :end="2" /></h2>
                                <p class="text-white-50 mb-0 small">Teaching Positions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="position-absolute w-100 z-index-1 bottom-0">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="moving-waves">
                    <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
                    <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
                    <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                    <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(248,249,250,0.95)" />
                </g>
            </svg>
        </div>
    </div>
</header>
<div class="background-home-view">
    <!-- Quick Navigation Cards -->
    <section class="py-5 section-gap home-nav-section">
        <div class="container">
            <div class="row g-3">
                <div class="col-12 col-md-4">
                    <a href="/about" class="text-decoration-none">
                        <div class="card nav-card h-100">
                            <div class="nav-card-wrapper">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="nav-card-img" alt="About Me">
                                <div class="nav-card-overlay"></div>
                                <div class="nav-card-content">
                                    <div class="nav-symbol nav-about mb-3" aria-hidden="true">
                                        <div class="symbol-glass"></div>
                                        <svg class="symbol-svg" viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                                            <defs>
                                                <linearGradient id="gradAbout" x1="0" y1="0" x2="1" y2="1">
                                                    <stop offset="0%" stop-color="#667EEA" />
                                                    <stop offset="100%" stop-color="#764BA2" />
                                                </linearGradient>
                                            </defs>
                                            <circle cx="24" cy="24" r="18" stroke="url(#gradAbout)" opacity="0.9" />
                                            <path d="M24 14c3.2 0 5.6 2.5 5.6 5.6 0 3.2-2.4 5.8-5.6 5.8s-5.6-2.6-5.6-5.8C18.4 16.5 20.8 14 24 14Z" stroke="#fff" />
                                            <path d="M14.5 34c2.6-4.2 7-6.4 9.5-6.4 2.6 0 7.2 2.2 9.5 6.4" stroke="#fff" opacity="0.85" />
                                            <circle cx="34" cy="16" r="3" fill="#fff" stroke="#764BA2" />
                                        </svg>
                                    </div>
                                    <h3 class="text-white mb-2">About Me</h3>
                                    <p class="text-white-50 mb-0">Journey, education & passion for technology</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="/projects" class="text-decoration-none">
                        <div class="card nav-card h-100">
                            <div class="nav-card-wrapper">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="nav-card-img" alt="My Projects">
                                <div class="nav-card-overlay"></div>
                                <div class="nav-card-content">
                                    <div class="nav-symbol nav-projects mb-3" aria-hidden="true">
                                        <div class="symbol-glass"></div>
                                        <svg class="symbol-svg" viewBox="0 0 48 48" fill="none" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                                            <defs>
                                                <linearGradient id="gradProjects" x1="0" y1="0" x2="1" y2="1">
                                                    <stop offset="0%" stop-color="#FF9966" />
                                                    <stop offset="100%" stop-color="#FF5E62" />
                                                </linearGradient>
                                            </defs>
                                            <rect x="10" y="10" width="10" height="10" rx="2" stroke="url(#gradProjects)" />
                                            <rect x="28" y="10" width="10" height="10" rx="2" stroke="url(#gradProjects)" />
                                            <rect x="10" y="28" width="10" height="10" rx="2" stroke="url(#gradProjects)" />
                                            <rect x="28" y="28" width="10" height="10" rx="2" stroke="url(#gradProjects)" />
                                            <path d="M20 15h8M20 33h8M15 20v8M33 20v8" stroke="#fff" opacity="0.85" />
                                            <circle cx="36" cy="12" r="3" fill="#fff" stroke="#FF5E62" />
                                        </svg>
                                    </div>
                                    <h3 class="text-white mb-2">My Projects</h3>
                                    <p class="text-white-50 mb-0">Software & AI research portfolio</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-4">
                    <a href="/contact" class="text-decoration-none">
                        <div class="card nav-card h-100">
                            <div class="nav-card-wrapper">
                                <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="nav-card-img" alt="Contact">
                                <div class="nav-card-overlay"></div>
                                <div class="nav-card-content">
                                    <div class="nav-symbol nav-contact mb-3" aria-hidden="true">
                                        <div class="symbol-glass"></div>
                                        <svg class="symbol-svg" viewBox="0 0 48 48" fill="none" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                                            <defs>
                                                <linearGradient id="gradContact" x1="0" y1="0" x2="1" y2="1">
                                                    <stop offset="0%" stop-color="#06BEB6" />
                                                    <stop offset="100%" stop-color="#48B1BF" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M8 14h32v20c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V14Z" stroke="url(#gradContact)" />
                                            <path d="M8 14l16 14 16-14" stroke="#fff" />
                                            <circle cx="36" cy="16" r="3" fill="#fff" stroke="#48B1BF" />
                                        </svg>
                                    </div>
                                    <h3 class="text-white mb-2">Contact Me</h3>
                                    <p class="text-white-50 mb-0">Let's connect & collaborate</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Technical Skills Section -->
    <section class="py-6 bg-light section-gap home-skills-section">
        <div class="container">
            <div class="text-center mb-4">
                <h2 class="text-gradient text-primary mb-2">Technical Expertise</h2>
                <p class="text-muted">Core competencies in cloud and software engineering</p>
            </div>
            <div class="row g-3">
                <div class="col-6 col-md-3">
                    <div class="skill-card-modern h-100">
                        <div class="skill-card-image" :style="{ 'background-image': 'url(https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }">
                            <div class="skill-overlay"></div>
                            <div class="skill-content">
                                <div class="skill-symbol skill-cloud mb-3" aria-hidden="true">
                                    <div class="symbol-glass"></div>
                                    <svg class="symbol-svg" viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                                        <defs>
                                            <linearGradient id="gradCloud" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stop-color="#4FACFE" />
                                                <stop offset="100%" stop-color="#00F2FE" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M30 34H18c-4.4 0-8-3.6-8-8 0-3.6 2.4-6.7 5.8-7.7C16.6 15.2 20 12 24.5 12c5.2 0 9.5 4 9.9 9.2 3.1.8 5.6 3.7 5.6 7.2 0 4-3.3 7.6-7.4 7.6Z" stroke="url(#gradCloud)" />
                                        <path d="M21 22h6M20 26h10" stroke="#fff" opacity="0.85" />
                                    </svg>
                                </div>
                                <h5 class="text-white mb-2 font-weight-bold">Cloud Infrastructure</h5>
                                <p class="text-white small mb-0" style="opacity: 0.9;">Azure · VMs · PaaS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="skill-card-modern h-100">
                        <div class="skill-card-image" :style="{ 'background-image': 'url(https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }">
                            <div class="skill-overlay"></div>
                            <div class="skill-content">
                                <div class="skill-symbol skill-devops mb-3" aria-hidden="true">
                                    <div class="symbol-glass"></div>
                                    <svg class="symbol-svg" viewBox="0 0 48 48" fill="none" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                                        <defs>
                                            <linearGradient id="gradDevOps" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stop-color="#667EEA" />
                                                <stop offset="100%" stop-color="#38B2AC" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="18" cy="18" r="7" stroke="url(#gradDevOps)" />
                                        <circle cx="30" cy="30" r="7" stroke="url(#gradDevOps)" />
                                        <path d="M23 23l2 2" stroke="#fff" />
                                        <path d="M14 18h8M26 30h8" stroke="#fff" opacity="0.85" />
                                    </svg>
                                </div>
                                <h5 class="text-white mb-2 font-weight-bold">DevOps & CI/CD</h5>
                                <p class="text-white small mb-0" style="opacity: 0.9;">Azure DevOps · Pipelines</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="skill-card-modern h-100">
                        <div class="skill-card-image" :style="{ 'background-image': 'url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }">
                            <div class="skill-overlay"></div>
                            <div class="skill-content">
                                <div class="skill-symbol skill-programming mb-3" aria-hidden="true">
                                    <div class="symbol-glass"></div>
                                    <svg class="symbol-svg" viewBox="0 0 48 48" fill="none" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                                        <defs>
                                            <linearGradient id="gradProg" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stop-color="#42E695" />
                                                <stop offset="100%" stop-color="#3BB2B8" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M18 16l-6 8 6 8" stroke="url(#gradProg)" />
                                        <path d="M30 16l6 8-6 8" stroke="url(#gradProg)" />
                                        <path d="M24 14l-3 20" stroke="#fff" opacity="0.85" />
                                    </svg>
                                </div>
                                <h5 class="text-white mb-2 font-weight-bold">Programming</h5>
                                <p class="text-white small mb-0" style="opacity: 0.9;">C/C++ · Java · Python</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="skill-card-modern h-100">
                        <div class="skill-card-image" :style="{ 'background-image': 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }">
                            <div class="skill-overlay"></div>
                            <div class="skill-content">
                                <div class="skill-symbol skill-ml mb-3" aria-hidden="true">
                                    <div class="symbol-glass"></div>
                                    <svg class="symbol-svg" viewBox="0 0 48 48" fill="none" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                                        <defs>
                                            <linearGradient id="gradML" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stop-color="#F6D365" />
                                                <stop offset="100%" stop-color="#FDA085" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M24 12c6.6 0 12 4.8 12 10.7 0 5.9-5.4 10.7-12 10.7S12 28.6 12 22.7C12 16.8 17.4 12 24 12Z" stroke="url(#gradML)" />
                                        <path d="M20 20c1.2-1.6 3.8-1.6 5 0M23 24h2M18 24h2M28 24h2" stroke="#fff" />
                                    </svg>
                                </div>
                                <h5 class="text-white mb-2 font-weight-bold">Machine Learning</h5>
                                <p class="text-white small mb-0" style="opacity: 0.9;">Computer Vision · AI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Professional Experience Section -->
    <section class="py-6 section-gap">
        <div class="container">
            <div class="text-center mb-4">
                <h2 class="text-gradient text-primary mb-2">Professional Journey</h2>
                <p class="text-muted">Building expertise in cloud infrastructure and software engineering</p>
            </div>
            <div class="row g-3">
                <!-- Finastra -->
                <div class="col-12 col-lg-6">
                    <div class="card modern-card h-100">
                        <div class="card-image-wrapper" style="height: 180px;">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="card-img-top" alt="Finastra">
                            <div class="card-overlay"></div>
                        </div>
                        <div class="card-body py-3">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title mb-1">Associate Cloud Application Systems Engineer</h5>
                                <span class="badge bg-success">Current</span>
                            </div>
                            <p class="text-muted mb-2"><strong>Finastra</strong> | June 2025 - Present</p>
                            <p class="card-text text-muted small">Managing Azure cloud infrastructure for core banking solutions and financial applications.</p>
                            <div class="mt-2">
                                <span class="badge bg-gradient-primary me-1">Azure</span>
                                <span class="badge bg-gradient-info me-1">Banking</span>
                                <span class="badge bg-gradient-dark">Cloud</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Teaching - Data Structures -->
                <div class="col-12 col-lg-6">
                    <div class="card modern-card h-100">
                        <div class="card-image-wrapper" style="height: 180px;">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="card-img-top" alt="Teaching">
                            <div class="card-overlay"></div>
                        </div>
                        <div class="card-body py-3">
                            <h5 class="card-title mb-1">Substitute Teaching Assistant</h5>
                            <p class="text-muted mb-2"><strong>Politehnica University of Bucharest</strong> | Feb 2024 - June 2024</p>
                            <p class="card-text text-muted small">Taught Data Structures and Algorithms to undergraduate students in Computer Science.</p>
                            <div class="mt-2">
                                <span class="badge bg-gradient-success me-1">Education</span>
                                <span class="badge bg-gradient-info me-1">Algorithms</span>
                                <span class="badge bg-gradient-warning">DSA</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Teaching - Programming -->
                <div class="col-12 col-lg-6">
                    <div class="card modern-card h-100">
                        <div class="card-image-wrapper" style="height: 180px;">
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="card-img-top" alt="Programming">
                            <div class="card-overlay"></div>
                        </div>
                        <div class="card-body py-3">
                            <h5 class="card-title mb-1">Substitute Teaching Assistant</h5>
                            <p class="text-muted mb-2"><strong>Politehnica University of Bucharest</strong> | Oct 2023 - Feb 2024</p>
                            <p class="card-text text-muted small">Instructed Computer Programming fundamentals to first-year engineering students.</p>
                            <div class="mt-2">
                                <span class="badge bg-gradient-success me-1">Education</span>
                                <span class="badge bg-gradient-primary me-1">Programming</span>
                                <span class="badge bg-gradient-info">C/C++</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Research Technology -->
                <div class="col-12 col-lg-6">
                    <div class="card modern-card h-100">
                        <div class="card-image-wrapper" style="height: 180px;">
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="card-img-top" alt="Research">
                            <div class="card-overlay"></div>
                        </div>
                        <div class="card-body py-3">
                            <h5 class="card-title mb-1">Systems Engineer</h5>
                            <p class="text-muted mb-2"><strong>Research Technology SRL</strong> | Oct 2022 - June 2024</p>
                            <p class="card-text text-muted small">Developed complex web applications and implemented ML-based solutions for research projects.</p>
                            <div class="mt-2">
                                <span class="badge bg-gradient-warning me-1">ML</span>
                                <span class="badge bg-gradient-primary me-1">Web Dev</span>
                                <span class="badge bg-gradient-info">Research</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import AnimatedCounter from '@/components/widgets/AnimatedCounter.vue';
export default {
    name: 'home',
    components: { AnimatedCounter }
};
</script>

<style lang="scss" scoped>
/* Hero Section */
.hero-profile-image {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid rgba(255,255,255,0.3);
    box-shadow: 0 15px 50px rgba(0,0,0,0.4);
    animation: float 3s ease-in-out infinite;
}

.hero-title {
    animation: fadeInUp 0.8s ease-out;
    text-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

.hero-subtitle {
    animation: fadeInUp 0.8s ease-out 0.2s both;
}

.stat-card {
    background: rgba(255,255,255,0.1);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: all 0.3s ease;
}

.stat-card:hover {
    background: rgba(255,255,255,0.15);
    transform: translateY(-5px);
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Spacing adjustments to prevent wave overlap and clipping on hover */
.page-header {
    padding-bottom: 90px; /* extra space so wave sits below stats comfortably */
}

.home-nav-section {
    padding-top: 2.25rem; /* slight extra breathing room above first row */
    padding-bottom: 2.25rem;
    overflow: visible; /* allow upward hover without clipping */
}

.home-skills-section {
    padding-top: 3rem; /* a bit more space separating nav from skills */
    padding-bottom: 3rem;
    overflow: visible;
}

/* Fine tune row gaps for airy feel without excessive whitespace */
.home-nav-section .row.g-3 { row-gap: 1.75rem; }
.home-skills-section .row.g-3 { row-gap: 1.75rem; }

@media (min-width: 992px) {
    .page-header { padding-bottom: 110px; }
    .home-nav-section { padding-top: 2.75rem; padding-bottom: 2.75rem; }
    .home-skills-section { padding-top: 3.5rem; padding-bottom: 3.5rem; }
}

/* Modern Cards */
.modern-card {
    border: none;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.modern-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

.card-image-wrapper {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.card-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.modern-card:hover .card-image-wrapper img {
    transform: scale(1.1);
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(20, 30, 50, 0.75) 0%, rgba(102, 126, 234, 0.75) 100%);
    transition: all 0.3s ease;
}

.modern-card:hover .card-overlay {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
}

.card-icon {
    transition: transform 0.3s ease;
    position: relative;
    z-index: 2;
}

.modern-card:hover .card-icon {
    transform: scale(1.15);
}

.modern-card .card-body {
    position: relative;
    z-index: 2;
}

/* Navigation Cards */
.nav-card {
    border: none;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.nav-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}

.nav-card-wrapper {
    position: relative;
    min-height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-card-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.nav-card:hover .nav-card-img {
    transform: scale(1.1);
}

.nav-card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(20, 30, 50, 0.88) 0%, rgba(102, 126, 234, 0.88) 100%);
    transition: all 0.3s ease;
}

.nav-card:hover .nav-card-overlay {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.92) 0%, rgba(118, 75, 162, 0.92) 100%);
}

.nav-card-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 2rem 1.5rem;
}

.nav-icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 3px solid rgba(255, 255, 255, 0.4);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
}

.nav-card:hover .nav-icon-circle {
    transform: scale(1.15) rotate(10deg);
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

/* Layered Icon Shell (replacement for IconOrb) */
/* New minimalist symbol styles */
.nav-symbol, .skill-symbol {
    position: relative;
    width: 86px;
    height: 86px;
    border-radius: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.18);
    box-shadow: 0 8px 28px rgba(0,0,0,0.25);
    transition: all .55s cubic-bezier(.175,.885,.32,1.275);
}
.skill-symbol { width:90px; height:90px; }

.symbol-glass { position:absolute; inset:0; border-radius:inherit; background:linear-gradient(145deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05)); mix-blend-mode: overlay; }
.symbol-svg { position:relative; width:62%; height:62%; filter:drop-shadow(0 4px 10px rgba(0,0,0,0.35)); }

.nav-card:hover .nav-symbol, .skill-card-modern:hover .skill-symbol {
    transform: translateY(-6px) scale(1.06);
    box-shadow: 0 14px 40px rgba(0,0,0,0.45);
    border-color: rgba(255,255,255,0.35);
}

.nav-about { background:linear-gradient(135deg,rgba(102,126,234,0.18),rgba(118,75,162,0.18)); }
.nav-projects { background:linear-gradient(135deg,rgba(255,153,102,0.18),rgba(255,94,98,0.18)); }
.nav-contact { background:linear-gradient(135deg,rgba(6,190,182,0.18),rgba(72,177,191,0.18)); }
.skill-cloud { background:linear-gradient(135deg,rgba(79,172,254,0.18),rgba(0,242,254,0.18)); }
.skill-devops { background:linear-gradient(135deg,rgba(102,126,234,0.18),rgba(56,178,172,0.18)); }
.skill-programming { background:linear-gradient(135deg,rgba(66,230,149,0.18),rgba(59,178,184,0.18)); }
.skill-ml { background:linear-gradient(135deg,rgba(246,211,101,0.18),rgba(253,160,133,0.18)); }

/* Decorative ring & glow */
.nav-icon-circle::after {
    content: "";
    position: absolute;
    inset: 4px;
    border: 2px solid rgba(255,255,255,0.35);
    border-radius: 50%;
    box-shadow: inset 0 0 12px rgba(255,255,255,0.3), 0 0 10px rgba(255,255,255,0.25);
    pointer-events: none;
}

/* Animated moving sheen */
.nav-icon-circle::before {
    content: "";
    position: absolute;
    top: -40%;
    left: -40%;
    width: 180%;
    height: 180%;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 60%);
    opacity: 0;
    transform: scale(0.6) rotate(0deg);
    transition: opacity 0.6s ease, transform 0.8s ease;
}

.nav-card:hover .nav-icon-circle::before {
    opacity: 1;
    transform: scale(1) rotate(25deg);
}

/* Specific gradient backgrounds for navigation icons */
.nav-icon-about {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.nav-icon-projects {
    background: linear-gradient(135deg, #ff9966 0%, #ff5e62 100%);
}

.nav-icon-contact {
    background: linear-gradient(135deg, #06beb6 0%, #48b1bf 100%);
}

.nav-card:hover .nav-icon-about,
.nav-card:hover .nav-icon-projects,
.nav-card:hover .nav-icon-contact {
    filter: brightness(1.15) saturate(1.15);
}

/* Icon Styling */
.icon-wrapper {
    display: flex;
    justify-content: center;
}

.icon-bg {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
}

.modern-card:hover .icon-bg {
    transform: translateY(-8px) rotate(5deg);
    box-shadow: 0 15px 40px rgba(0,0,0,0.25);
}

/* Background */
.background-home-view {
    background-color: #f8f9fa;
    overflow-x: hidden;
}

/* Extra vertical rhythm between homepage sections */
.section-gap {
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
}

@media (min-width: 992px) {
    .section-gap {
        margin-top: 3.5rem;
        margin-bottom: 3.5rem;
    }
}

/* Slightly larger padding utility (py-6) */
.py-6 {
    padding-top: 4.5rem !important;
    padding-bottom: 4.5rem !important;
}

.background-logo-watermark {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    opacity: 0.06;
    pointer-events: none;
}

.logo-watermark {
    width: 550px;
    height: 550px;
    filter: brightness(1.3) drop-shadow(0 0 60px rgba(102, 126, 234, 0.3));
    animation: pulse-logo 8s ease-in-out infinite;
}

@keyframes pulse-logo {
    0%, 100% {
        transform: scale(1) rotate(0deg);
        opacity: 0.06;
    }
    50% {
        transform: scale(1.05) rotate(2deg);
        opacity: 0.09;
    }
}

/* Modern Skill Cards */
.skill-card {
    height: 100%;
    border-radius: 20px !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.skill-card-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    transition: all 0.4s ease;
    z-index: 1;
}

.skill-card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.skill-card:hover .skill-card-gradient {
    opacity: 0.95;
}

.skill-icon-wrapper {
    position: relative;
    display: inline-block;
}

.skill-icon-bg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    transition: all 0.4s ease;
    animation: float 3s ease-in-out infinite;
}

.skill-card:hover .skill-icon-bg {
    transform: scale(1.15) rotate(10deg);   
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.skill-icon {
    font-size: 48px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}

.skill-card:hover .skill-icon {
    transform: translate(-50%, -50%) scale(1.1) rotate(-10deg);
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

/* Modern Experience Cards */
.experience-card {
    height: 100%;
    border-radius: 20px !important;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    overflow: hidden;
}

.experience-card-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    transition: all 0.3s ease;
    z-index: 1;
}

.experience-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.experience-card:hover .experience-card-bg {
    opacity: 0.9;
}

.experience-icon-wrapper {
    display: flex;
    align-items: center;
}

.experience-icon-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.experience-card:hover .experience-icon-circle {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.experience-icon-circle i {
    font-size: 32px;
}

.z-index-2 {
    z-index: 2;
}

/* Modern Skill Cards with Images */
.skill-card-modern {
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.skill-card-image {
    background-size: cover;
    background-position: center;
    min-height: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s ease;
}

.skill-card-modern:hover .skill-card-image {
    transform: scale(1.05);
}

.skill-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(20, 30, 50, 0.85) 0%, rgba(102, 126, 234, 0.85) 100%);
    transition: all 0.4s ease;
}

.skill-card-modern:hover .skill-overlay {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
}

.skill-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 1.5rem;
}

.skill-icon-circle {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border: 3px solid rgba(255, 255, 255, 0.3);
}

.skill-card-modern:hover .skill-icon-circle {
    transform: scale(1.2) rotate(360deg);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.5);
}

/* Old skill card styles - keep for fallback */
.skill-card-image-old {
    background-size: cover;
    background-position: center;
    min-height: 220px;
    border-radius: 20px !important;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.skill-card-image-old:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 50px rgba(0,0,0,0.25);
}

.badge-icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(6px);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.25);
    margin-bottom: 14px;
}

.badge-icon i {
    color: #fff;
    font-size: 24px;
}

/* Stats blur card */
.stats-blur-card {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.35);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

.profile-photo {
    max-width: 200px;
    height: auto;
    object-fit: cover;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

/* Image-based experience cards */
.experience-card-image {
    background-size: cover;
    background-position: center;
    min-height: 240px;
    border-radius: 20px !important;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.experience-card-image:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 50px rgba(0,0,0,0.25);
}

/* Responsive improvements */
@media (max-width: 991px) {
    .navbar-brand span {
        font-size: 0.9rem;
    }
    
    .page-header {
        min-height: 50vh !important;
    }
    
    .logo-watermark {
        width: 280px;
        height: 280px;
    }
    
    h1 {
        font-size: 2rem !important;
    }
    
    h4 {
        font-size: 1.1rem !important;
    }
    
    .lead {
        font-size: 1rem !important;
    }
}

@media (max-width: 767px) {
    .navbar {
        margin: 1rem !important;
        padding: 0.5rem 1rem !important;
    }
    
    .navbar-brand img {
        width: 28px !important;
        height: 28px !important;
        margin-right: 8px !important;
    }
    
    .navbar-brand span {
        font-size: 0.85rem !important;
    }
    
    .page-header {
        min-height: 40vh !important;
    }
    
    .logo-watermark {
        width: 220px;
        height: 220px;
    }
    
    .mt-7 {
        margin-top: 3rem !important;
    }
    
    h1 {
        font-size: 1.75rem !important;
    }
    
    h2 {
        font-size: 1.5rem !important;
    }
    
    h4 {
        font-size: 1rem !important;
    }
    
    h5 {
        font-size: 0.95rem !important;
    }
    
    h6 {
        font-size: 0.8rem !important;
    }
    
    .lead {
        font-size: 0.95rem !important;
    }
    
    .text-sm {
        font-size: 0.75rem !important;
    }
    
    .card-body {
        padding: 1rem !important;
    }
    
    .icon-shape {
        width: 50px !important;
        height: 50px !important;
    }
    
    .icon-shape i {
        font-size: 22px !important;
    }
    
    .blur {
        padding: 2rem 1rem !important;
    }
    
    .container-fluid {
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
    
    .section-height-75 {
        min-height: 200px !important;
    }
}

@media (max-width: 575px) {
    .navbar-brand span {
        display: none;
    }
    
    .logo-watermark {
        width: 180px;
        height: 180px;
    }
    
    h1 {
        font-size: 1.5rem !important;
    }
    
    h3 {
        font-size: 1.25rem !important;
    }
    
    .col-6 h6 {
        font-size: 0.7rem !important;
    }
    
    .icon-shape {
        width: 45px !important;
        height: 45px !important;
    }
    
    .icon-shape i {
        font-size: 20px !important;
    }
}

/* Prevent horizontal scroll */
body, html {
    overflow-x: hidden;
    max-width: 100%;
}

.container-fluid, .container {
    overflow-x: hidden;
}
</style>
