<template>
<header class="header-2">
    <div class="page-header min-vh-75 relative" :style="{ 'background': 'linear-gradient(135deg, rgba(30, 42, 71, 0.75) 0%, rgba(30, 42, 71, 0.75) 100%), url(' + require('@/assets/images/home-page-background.jpg') + ')', 'background-size': 'cover', 'background-position': 'center' }">
        <!-- Background Logo Watermark -->
        <div class="background-logo-watermark">
            <img src="@/assets/images/pb-logo-new.svg" alt="PB Logo" class="logo-watermark">
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
    <section class="pt-3 pb-4" id="count-stats">
        <div class="container">
            <div class="row">
                <div class="col-12 z-index-2 border-radius-xl mt-7 mx-auto py-5 blur shadow-blur">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8 text-center px-3">
                            <img src="../assets/images/pavelbetiu.jpg" alt="Pavel Betiu" class="img-fluid border-radius-lg mb-4" style="max-width: 200px; height: auto; object-fit: cover;" />
                            <h1 class="text-gradient text-primary mb-3">Pavel Bețiu</h1>
                            <h4 class="text-muted mb-4">Associate Cloud Application Systems Engineer</h4>
                            <p class="lead text-dark mb-4">
                                Cloud applications engineer at Finastra with a Master's degree in Computer Science specializing in Graphics, Multimedia, and Virtual Reality. 
                                Experienced in complex web applications, machine learning technologies, and system architecture.
                            </p>
                            <div class="row mt-5">
                                <div class="col-6 col-md-3 mb-3">
                                    <h3 class="text-gradient text-primary">3+</h3>
                                    <h6 class="mt-2">Years Experience</h6>
                                </div>
                                <div class="col-6 col-md-3 mb-3">
                                    <h3 class="text-gradient text-primary">4</h3>
                                    <h6 class="mt-2">Professional Roles</h6>
                                </div>
                                <div class="col-6 col-md-3 mb-3">
                                    <h3 class="text-gradient text-primary">6+</h3>
                                    <h6 class="mt-2">Programming Languages</h6>
                                </div>
                                <div class="col-6 col-md-3 mb-3">
                                    <h3 class="text-gradient text-primary">2</h3>
                                    <h6 class="mt-2">Teaching Positions</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="d-flex justify-content-center mb-7 position-relative">
        <div class="container">
            <div class="row mb-6">
                <div class="row justify-content-center text-center my-sm-7">
                    <div class="col-12 col-lg-10">
                        <div class="row">
                            <div class="col-12 col-md-6 mb-4">
                                <a href="/about">
                                    <div class="page-header section-height-75 m-3 border-radius-xl move-on-hover" style="background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');">
                                        <span class="mask bg-gradient-dark"></span>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-10 my-auto mx-auto text-center">
                                                    <h3 class="text-white fadeIn2 fadeInBottom">About Me</h3>
                                                    <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Learn more about my journey, education, and passion for technology</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-12 col-md-6 mb-4">
                                <a href="/projects">
                                    <div class="page-header section-height-75 m-3 border-radius-xl move-on-hover" style="background-image: url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');">
                                        <span class="mask bg-gradient-dark"></span>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-10 my-auto mx-auto text-center">
                                                    <h3 class="text-white fadeIn2 fadeInBottom">My Projects</h3>
                                                    <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Explore my portfolio of software development and AI research projects</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10">
                    <h2 class="text-gradient text-primary text-center mb-5">Technical Skills</h2>
                    <div class="row">
                        <div class="col-12 col-sm-6 col-lg-6 mb-4">
                            <div class="skill-card card border-0 overflow-hidden position-relative">
                                <div class="skill-card-gradient" style="background: linear-gradient(135deg, #7928CA 0%, #FF0080 100%);"></div>
                                <div class="card-body text-center p-4 position-relative z-index-2">
                                    <div class="skill-icon-wrapper mb-4">
                                        <div class="skill-icon-bg" style="background: linear-gradient(135deg, #7928CA 0%, #FF0080 100%);"></div>
                                        <i class="fas fa-code text-white skill-icon"></i>
                                    </div>
                                    <h5 class="text-white mb-3 fw-bold">Full-Stack Development</h5>
                                    <p class="text-white-50 mb-0">Vue.js, React, Node.js, Python, TypeScript, Java</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6 mb-4">
                            <div class="skill-card card border-0 overflow-hidden position-relative">
                                <div class="skill-card-gradient" style="background: linear-gradient(135deg, #2152ff 0%, #21d4fd 100%);"></div>
                                <div class="card-body text-center p-4 position-relative z-index-2">
                                    <div class="skill-icon-wrapper mb-4">
                                        <div class="skill-icon-bg" style="background: linear-gradient(135deg, #2152ff 0%, #21d4fd 100%);"></div>
                                        <i class="fas fa-robot text-white skill-icon"></i>
                                    </div>
                                    <h5 class="text-white mb-3 fw-bold">Machine Learning & AI</h5>
                                    <p class="text-white-50 mb-0">NLP, Deep Learning, TensorFlow, PyTorch, Transformers</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6 mb-4">
                            <div class="skill-card card border-0 overflow-hidden position-relative">
                                <div class="skill-card-gradient" style="background: linear-gradient(135deg, #f46b45 0%, #eea849 100%);"></div>
                                <div class="card-body text-center p-4 position-relative z-index-2">
                                    <div class="skill-icon-wrapper mb-4">
                                        <div class="skill-icon-bg" style="background: linear-gradient(135deg, #f46b45 0%, #eea849 100%);"></div>
                                        <i class="fas fa-database text-white skill-icon"></i>
                                    </div>
                                    <h5 class="text-white mb-3 fw-bold">Data Engineering</h5>
                                    <p class="text-white-50 mb-0">SQL, MongoDB, Data Analysis, ETL Pipelines</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6 mb-4">
                            <div class="skill-card card border-0 overflow-hidden position-relative">
                                <div class="skill-card-gradient" style="background: linear-gradient(135deg, #17ad37 0%, #98ec2d 100%);"></div>
                                <div class="card-body text-center p-4 position-relative z-index-2">
                                    <div class="skill-icon-wrapper mb-4">
                                        <div class="skill-icon-bg" style="background: linear-gradient(135deg, #17ad37 0%, #98ec2d 100%);"></div>
                                        <i class="fas fa-cloud text-white skill-icon"></i>
                                    </div>
                                    <h5 class="text-white mb-3 fw-bold">Cloud & DevOps</h5>
                                    <p class="text-white-50 mb-0">AWS, Docker, CI/CD, Git, Linux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Professional Experience Section -->
    <section class="py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10">
                    <h2 class="text-gradient text-primary text-center mb-5">Professional Journey</h2>
                    <div class="row">
                        <div class="col-12 col-md-6 mb-4">
                            <div class="experience-card card border-0 overflow-hidden position-relative">
                                <div class="experience-card-bg" style="background: linear-gradient(135deg, #141e30 0%, #243b55 100%);"></div>
                                <div class="card-body p-4 position-relative z-index-2">
                                    <div class="experience-icon-wrapper mb-3">
                                        <div class="experience-icon-circle" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                                            <i class="fas fa-building text-white"></i>
                                        </div>
                                    </div>
                                    <h5 class="text-white mb-2 fw-bold">Finastra</h5>
                                    <h6 class="text-white-50 mb-3" style="font-size: 0.875rem;">Associate Cloud Application Systems Engineer</h6>
                                    <p class="text-white-50 mb-0" style="font-size: 0.875rem;">Developing and maintaining cloud-based applications, implementing modern architectures and CI/CD pipelines.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                            <div class="experience-card card border-0 overflow-hidden position-relative">
                                <div class="experience-card-bg" style="background: linear-gradient(135deg, #834d9b 0%, #d04ed6 100%);"></div>
                                <div class="card-body p-4 position-relative z-index-2">
                                    <div class="experience-icon-wrapper mb-3">
                                        <div class="experience-icon-circle" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                                            <i class="fas fa-chalkboard-teacher text-white"></i>
                                        </div>
                                    </div>
                                    <h5 class="text-white mb-2 fw-bold">Teaching Assistant</h5>
                                    <h6 class="text-white-50 mb-3" style="font-size: 0.875rem;">University Politehnica of Bucharest</h6>
                                    <p class="text-white-50 mb-0" style="font-size: 0.875rem;">Teaching courses in web development, databases, and computer science fundamentals.</p>
                                </div>
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
export default {
    name: 'home',
};
</script>

<style lang="scss" scoped>
.hero {
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
}

.hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
}

.subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
}

.button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;

    .button {
        margin-right: 50px;
        padding-left: 50px;
        padding-right: 50px;
    }

    .welcome {
        width: 400px;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
    }
}

.is-xl {
    font-size: 1.7rem;
}

.background-home-view {
    background-color: #f8f9fa;
    overflow-x: hidden;
}

.background-logo-watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    opacity: 0.5;
    pointer-events: none;
}

.logo-watermark {
    width: 350px;
    height: 350px;
    filter: brightness(1.8) drop-shadow(0 0 100px rgba(102, 126, 234, 0.6));
    animation: pulse-logo 4s ease-in-out infinite;
}

@keyframes pulse-logo {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.85;
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
    transform: translateY(-15px) scale(1.03);
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
    transform: translateY(-10px);
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

.row {
    margin-left: 0;
    margin-right: 0;
}
</style>
