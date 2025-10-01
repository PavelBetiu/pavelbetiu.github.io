<template>
<header class="bg-gradient-dark">
    <div class="page-header min-vh-75">
        <span class="mask bg-gradient-info" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved5-small.jpg') + ')' }"></span>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center mx-auto my-auto">
                    <h1 :class="$style['title']">My Projects</h1>
                    <p :class="['lead mb-4', $style['sub-title']]">A showcase of my work in AI, web development, and research</p>
                </div>
            </div>
        </div>
        <div class="position-absolute w-100 z-index-1 bottom-0">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="moving-waves">
                    <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40)" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(39,234,245,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,215,0,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(180, 9, 254, 0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                    <use xlink:href="#gentle-wave" x="48" y="16" :fill="bg_color" />
                </g>
            </svg>
        </div>
    </div>
</header>
<div :class="$style['body']">
<section class="py-5 position-relative">
    <div class="container">
        <div class="row">
            <!-- Featured Projects -->
            <div class="col-12 mb-5">
                <h3 class="text-gradient text-primary text-center mb-4">Featured Projects</h3>
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="card shadow-lg h-100">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-brain text-primary fa-2x me-3"></i>
                                    <h5 class="text-primary mb-0">ReaderbBench NLP Platform</h5>
                                </div>
                                <p class="text-sm mb-3">
                                    Contributing to a comprehensive platform for text analysis, reading comprehension assessment, 
                                    and educational technologies using state-of-the-art NLP techniques.
                                </p>
                                <div class="mb-3">
                                    <span class="badge bg-gradient-primary me-1">Vue.js</span>
                                    <span class="badge bg-gradient-secondary me-1">Python</span>
                                    <span class="badge bg-gradient-success me-1">NLP</span>
                                    <span class="badge bg-gradient-info me-1">Machine Learning</span>
                                </div>
                                <a href="https://readerbench.com" target="_blank" class="btn btn-outline-primary btn-sm">
                                    <i class="fas fa-external-link-alt me-1"></i> View Project
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 mb-4">
                        <div class="card shadow-lg h-100">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-code text-primary fa-2x me-3"></i>
                                    <h5 class="text-primary mb-0">Personal Portfolio Website</h5>
                                </div>
                                <p class="text-sm mb-3">
                                    A modern, responsive portfolio website built with Vue.js 3 and TypeScript, 
                                    showcasing my projects, skills, and professional journey.
                                </p>
                                <div class="mb-3">
                                    <span class="badge bg-gradient-primary me-1">Vue.js 3</span>
                                    <span class="badge bg-gradient-secondary me-1">TypeScript</span>
                                    <span class="badge bg-gradient-success me-1">Responsive Design</span>
                                    <span class="badge bg-gradient-info me-1">GitHub Pages</span>
                                </div>
                                <a href="https://github.com/pavelbetiu/pavelbetiu.github.io" target="_blank" class="btn btn-outline-primary btn-sm">
                                    <i class="fab fa-github me-1"></i> View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Academic & Research Projects -->
            <div class="col-12 mb-5">
                <h3 class="text-gradient text-primary text-center mb-4">Academic & Research Projects</h3>
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card shadow-lg h-100">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-language text-primary fa-2x me-3"></i>
                                    <h5 class="text-primary mb-0">Text Analysis Tools</h5>
                                </div>
                                <p class="text-sm mb-3">
                                    Development of advanced text analysis tools for sentiment analysis, 
                                    readability assessment, and linguistic feature extraction.
                                </p>
                                <div class="mb-3">
                                    <span class="badge bg-gradient-primary me-1">Python</span>
                                    <span class="badge bg-gradient-secondary me-1">NLTK</span>
                                    <span class="badge bg-gradient-success me-1">spaCy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 mb-4">
                        <div class="card shadow-lg h-100">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-robot text-primary fa-2x me-3"></i>
                                    <h5 class="text-primary mb-0">ML Model Training</h5>
                                </div>
                                <p class="text-sm mb-3">
                                    Training and fine-tuning transformer models for various NLP tasks 
                                    including text classification and information extraction.
                                </p>
                                <div class="mb-3">
                                    <span class="badge bg-gradient-primary me-1">PyTorch</span>
                                    <span class="badge bg-gradient-secondary me-1">Transformers</span>
                                    <span class="badge bg-gradient-success me-1">BERT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 mb-4">
                        <div class="card shadow-lg h-100">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-chart-bar text-primary fa-2x me-3"></i>
                                    <h5 class="text-primary mb-0">Data Visualization</h5>
                                </div>
                                <p class="text-sm mb-3">
                                    Interactive dashboards and visualizations for research data analysis 
                                    and presentation of experimental results.
                                </p>
                                <div class="mb-3">
                                    <span class="badge bg-gradient-primary me-1">D3.js</span>
                                    <span class="badge bg-gradient-secondary me-1">Chart.js</span>
                                    <span class="badge bg-gradient-success me-1">Vue.js</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Web Development Projects -->
            <div class="col-12">
                <h3 class="text-gradient text-primary text-center mb-4">Web Development Projects</h3>
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="card shadow-lg h-100">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-globe text-primary fa-2x me-3"></i>
                                    <h5 class="text-primary mb-0">Full-Stack Web Applications</h5>
                                </div>
                                <p class="text-sm mb-3">
                                    Development of complete web applications with modern frontend frameworks 
                                    and robust backend APIs for various use cases.
                                </p>
                                <div class="mb-3">
                                    <span class="badge bg-gradient-primary me-1">Vue.js</span>
                                    <span class="badge bg-gradient-secondary me-1">Node.js</span>
                                    <span class="badge bg-gradient-success me-1">Express</span>
                                    <span class="badge bg-gradient-info me-1">MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 mb-4">
                        <div class="card shadow-lg h-100">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-mobile-alt text-primary fa-2x me-3"></i>
                                    <h5 class="text-primary mb-0">Responsive UI/UX Design</h5>
                                </div>
                                <p class="text-sm mb-3">
                                    Creating responsive, user-friendly interfaces with modern design principles 
                                    and accessibility best practices.
                                </p>
                                <div class="mb-3">
                                    <span class="badge bg-gradient-primary me-1">CSS3</span>
                                    <span class="badge bg-gradient-secondary me-1">Bootstrap</span>
                                    <span class="badge bg-gradient-success me-1">Responsive Design</span>
                                    <span class="badge bg-gradient-info me-1">Figma</span>
                                </div>
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

<script setup lang="ts">
import { ref } from 'vue';

const bg_color = ref('#f8f9fa');
</script>

<style module>
.body {
    background-color: v-bind(bg_color);
}

.title {
    color: whitesmoke;
    text-shadow: 3px 3px 4px black;
}

.sub-title {
    color: whitesmoke;
    text-shadow: 4px 4px 5px black;
}
</style>
