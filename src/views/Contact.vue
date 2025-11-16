<template>
<header class="bg-gradient-dark">
    <div class="page-header min-vh-60 relative" :style="{ 'background-image': 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%), url(' + require('@/assets/img/curved-images/curved5-small.jpg') + ')', 'background-size': 'cover', 'background-position': 'center' }">
        <div class="container">
            <div class="row justify-content-center align-items-center" style="min-height: 60vh;">
                <div class="col-lg-8 text-center">
                    <i class="fas fa-envelope-open-text fa-4x text-white mb-4" style="opacity: 0.9;"></i>
                    <h1 class="text-white display-4 font-weight-bold mb-3">Let's Connect</h1>
                    <p class="text-white-50 lead mb-0">Open to discussing opportunities, collaborations, and innovative projects</p>
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
<section class="py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="row g-4">
                    <!-- Email Card -->
                    <div class="col-md-6">
                        <div class="contact-card h-100">
                            <div class="contact-icon-wrapper">
                                <div class="contact-icon bg-gradient-primary">
                                    <i class="fas fa-envelope fa-2x text-white"></i>
                                </div>
                            </div>
                            <h5 class="mt-4 mb-3">Email</h5>
                            <p class="text-muted mb-2">Preferred contact method</p>
                            <a href="mailto:betiupavel@gmail.com" class="contact-link">
                                betiupavel@gmail.com
                            </a>
                        </div>
                    </div>
                    
                    <!-- LinkedIn Card -->
                    <div class="col-md-6">
                        <div class="contact-card h-100">
                            <div class="contact-icon-wrapper">
                                <div class="contact-icon bg-gradient-info">
                                    <i class="fab fa-linkedin fa-2x text-white"></i>
                                </div>
                            </div>
                            <h5 class="mt-4 mb-3">LinkedIn</h5>
                            <p class="text-muted mb-2">Professional network</p>
                            <a href="https://www.linkedin.com/in/dumitru-pavel-betiu-015289208/" 
                               target="_blank" class="contact-link">
                                Dumitru Pavel Bețiu
                            </a>
                        </div>
                    </div>
                    
                    <!-- GitHub Card -->
                    <div class="col-md-6">
                        <div class="contact-card h-100">
                            <div class="contact-icon-wrapper">
                                <div class="contact-icon bg-gradient-dark">
                                    <i class="fab fa-github fa-2x text-white"></i>
                                </div>
                            </div>
                            <h5 class="mt-4 mb-3">GitHub</h5>
                            <p class="text-muted mb-2">Open source & projects</p>
                            <a href="https://github.com/PavelBetiu" 
                               target="_blank" class="contact-link">
                                @PavelBetiu
                            </a>
                        </div>
                    </div>
                    
                    <!-- Availability Card -->
                    <div class="col-md-6">
                        <div class="contact-card h-100">
                            <div class="contact-icon-wrapper">
                                <div class="contact-icon bg-gradient-success">
                                    <i class="fas fa-calendar-check fa-2x text-white"></i>
                                </div>
                            </div>
                            <h5 class="mt-4 mb-3">Availability</h5>
                            <p class="text-muted mb-2">Response time</p>
                            <p class="contact-link mb-0">
                                24-48 hours
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- CTA Section -->
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="cta-card text-center">
                            <img src="../assets/images/pavelbetiu.jpg" alt="Pavel Bețiu" 
                                 class="profile-image mb-4" />
                            <h3 class="mb-3">Ready to start a conversation?</h3>
                            <p class="text-muted mb-4 lead">
                                Whether you have a project in mind, need technical consultation, or just want to discuss technology and innovation, I'm here to help.
                            </p>
                            <div class="d-flex justify-content-center gap-3 flex-wrap">
                                <a href="mailto:betiupavel@gmail.com" 
                                   class="btn btn-primary btn-lg">
                                    <i class="fas fa-envelope me-2"></i> Send Email
                                </a>
                                <a href="https://www.linkedin.com/in/dumitru-pavel-betiu-015289208/" 
                                   target="_blank" class="btn btn-outline-primary btn-lg">
                                    <i class="fab fa-linkedin me-2"></i> Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Additional Info Section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="info-card text-center">
                            <i class="fas fa-graduation-cap fa-3x text-primary mb-3"></i>
                            <h6 class="mb-2">Education</h6>
                            <p class="text-sm text-muted mb-0">MSc Computer Science<br>UPB, Bucharest</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info-card text-center">
                            <i class="fas fa-briefcase fa-3x text-primary mb-3"></i>
                            <h6 class="mb-2">Current Role</h6>
                            <p class="text-sm text-muted mb-0">Associate Cloud Engineer<br>Finastra</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info-card text-center">
                            <i class="fas fa-code fa-3x text-primary mb-3"></i>
                            <h6 class="mb-2">Expertise</h6>
                            <p class="text-sm text-muted mb-0">Azure, DevOps<br>AI & Cloud Systems</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Contact'
};
</script>

<style lang="scss" scoped>
.contact-card {
    background: white;
    border-radius: 24px;
    padding: 2.5rem 2rem;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
    border: 1px solid rgba(0,0,0,0.05);
}

.contact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.contact-icon-wrapper {
    display: flex;
    justify-content: center;
}

.contact-icon {
    width: 90px;
    height: 90px;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.3);
    transition: all 0.4s ease;
}

.contact-card:hover .contact-icon {
    transform: translateY(-8px) rotate(5deg);
    box-shadow: 0 18px 50px rgba(102, 126, 234, 0.4);
}

.contact-link {
    color: #667eea;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
}

.contact-link:hover {
    color: #5568d3;
    transform: translateX(5px);
}

.cta-card {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    border-radius: 32px;
    padding: 4rem 3rem;
    border: 2px solid rgba(102, 126, 234, 0.1);
}

.profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(102, 126, 234, 0.2);
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.info-card {
    background: white;
    border-radius: 20px;
    padding: 2rem 1.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 35px rgba(0,0,0,0.1);
}

.min-vh-60 {
    min-height: 60vh;
}

@media (max-width: 768px) {
    .cta-card {
        padding: 3rem 2rem;
    }
    
    .contact-card {
        padding: 2rem 1.5rem;
    }
}
</style>
