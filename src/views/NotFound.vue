<template>
<div class="error-page">
    <header class="header-2">
        <div class="page-header min-vh-100 relative" style="background: linear-gradient(135deg, rgba(30, 42, 71, 0.95) 0%, rgba(50, 30, 71, 0.95) 100%);">
            <div class="background-logo-watermark">
                <img src="@/assets/images/pb-logo-modern.svg" alt="PB Logo" class="logo-watermark-404">
            </div>
            
            <div class="container">
                <div class="row justify-content-center align-items-center min-vh-100">
                    <div class="col-lg-7 text-center">
                        <div class="error-content">
                            <div class="error-icon mb-4">
                                <i class="fas fa-search text-white opacity-8" style="font-size: 120px;"></i>
                            </div>
                            <h1 class="error-code text-white display-1 mb-3">404</h1>
                            <h2 class="text-white mb-4">Oops! Page Not Found</h2>
                            <p class="text-white opacity-8 lead mb-5 mx-auto" style="max-width: 500px;">
                                It seems you're looking for a page that doesn't exist or has been moved. 
                                Don't worry, I can help you find what you're looking for!
                            </p>
                            
                            <!-- Navigation Options -->
                            <div class="row g-3 justify-content-center mb-5">
                                <div class="col-auto">
                                    <a href="/" class="btn btn-white btn-lg shadow-lg">
                                        <i class="fas fa-home me-2"></i>
                                        Back Home
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="/projects" class="btn btn-outline-white btn-lg">
                                        <i class="fas fa-code me-2"></i>
                                        View Projects
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="/contact" class="btn btn-outline-white btn-lg">
                                        <i class="fas fa-envelope me-2"></i>
                                        Contact
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Quick Search Suggestions -->
                            <div class="suggestions-box p-4 border-radius-lg">
                                <h5 class="text-white mb-3">Quick suggestions:</h5>
                                <div class="d-flex flex-wrap justify-content-center gap-2">
                                    <a href="/about" class="badge bg-white text-dark px-3 py-2 text-decoration-none">
                                        <i class="fas fa-user me-1"></i> About Me
                                    </a>
                                    <a href="/projects" class="badge bg-white text-dark px-3 py-2 text-decoration-none">
                                        <i class="fas fa-folder me-1"></i> Projects
                                    </a>
                                    <a href="/contact" class="badge bg-white text-dark px-3 py-2 text-decoration-none">
                                        <i class="fas fa-phone me-1"></i> Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Animated Waves -->
            <div class="position-absolute w-100 z-index-1 bottom-0">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="moving-waves">
                        <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.10)" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.08)" />
                        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.06)" />
                        <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.04)" />
                    </g>
                </svg>
            </div>
        </div>
    </header>
</div>
</template>

<script>
export default {
    name: 'NotFound',
    mounted() {
        document.title = '404 - Page Not Found | Pavel Bețiu';
    }
};
</script>

<style lang="scss" scoped>
.error-page {
    overflow-x: hidden;
}

.error-content {
    animation: fadeInUp 0.8s ease-out;
}

.error-code {
    font-size: 160px;
    font-weight: 900;
    line-height: 1;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
    0%, 100% {
        filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.6));
    }
    50% {
        filter: drop-shadow(0 0 40px rgba(118, 75, 162, 0.8));
    }
}

.error-icon {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.suggestions-box {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
}

.badge {
    transition: all 0.3s ease;
    cursor: pointer;
}

.badge:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.btn-white {
    background: white;
    color: #344767;
    font-weight: 600;
}

.btn-white:hover {
    background: #f8f9fa;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.btn-outline-white {
    border: 2px solid white;
    color: white;
    font-weight: 600;
}

.btn-outline-white:hover {
    background: white;
    color: #344767;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.background-logo-watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    opacity: 0.05;
    pointer-events: none;
}

.logo-watermark-404 {
    width: 600px;
    height: 600px;
    filter: brightness(1.5);
    animation: rotate-pulse 20s linear infinite;
}

@keyframes rotate-pulse {
    0%, 100% {
        transform: rotate(0deg) scale(1);
        opacity: 0.05;
    }
    50% {
        transform: rotate(180deg) scale(1.1);
        opacity: 0.08;
    }
}

/* Responsive */
@media (max-width: 767px) {
    .error-code {
        font-size: 100px;
    }
    
    .error-icon i {
        font-size: 80px !important;
    }
    
    h2 {
        font-size: 1.5rem;
    }
    
    .btn-lg {
        font-size: 0.9rem;
        padding: 0.75rem 1.5rem;
    }
    
    .logo-watermark-404 {
        width: 400px;
        height: 400px;
    }
}

/* Waves Animation */
.moving-waves > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}
.moving-waves > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}
.moving-waves > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}
.moving-waves > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}
.moving-waves > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}
@keyframes move-forever {
    0% {
        transform: translate3d(-90px,0,0);
    }
    100% { 
        transform: translate3d(85px,0,0);
    }
}
</style>
