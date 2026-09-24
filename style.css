* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Georgia, 'Times New Roman', serif;
    background: #160b12;
    color: #fff5f7;
}


/* ================================= */
/* PANTALLA INICIAL */
/* ================================= */

.welcome {
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background:
        radial-gradient(
            circle at center,
            #4a1728 0%,
            #1d0b13 55%,
            #090509 100%
        );

    z-index: 1000;

    transition:
        opacity 1s ease,
        visibility 1s ease;
}

.welcome.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.welcome-content {
    text-align: center;

    animation: appear 1.5s ease;
}


/* ================================= */
/* OSITO */
/* ================================= */

.bear {
    width: min(250px, 65vw);

    display: block;

    margin: 0 auto 15px;

    animation: float 3s ease-in-out infinite;
}


/* ================================= */
/* TITULO */
/* ================================= */

.welcome h1 {
    font-size: clamp(2rem, 7vw, 4rem);

    margin-bottom: 10px;

    font-weight: normal;
}

.welcome p {
    opacity: 0.8;

    font-size: 1rem;

    margin-bottom: 25px;
}


/* ================================= */
/* CORAZÓN */
/* ================================= */

.heart-button {
    border: none;

    background: transparent;

    font-size: 4rem;

    cursor: pointer;

    filter: drop-shadow(
        0 0 15px rgba(255, 80, 120, 0.7)
    );

    transition:
        transform 0.3s ease,
        filter 0.3s ease;

    animation: heartbeat 1.5s infinite;
}

.heart-button:hover {
    transform: scale(1.2);

    filter: drop-shadow(
        0 0 30px rgba(255, 80, 120, 1)
    );
}

.start-text {
    display: block;

    margin-top: 5px;

    font-size: 0.8rem;

    opacity: 0.65;
}


/* ================================= */
/* CONTENIDO */
/* ================================= */

.main-content {
    min-height: 100vh;

    opacity: 0;

    transform: translateY(20px);

    transition:
        opacity 1.2s ease,
        transform 1.2s ease;
}

.main-content.visible {
    opacity: 1;

    transform: translateY(0);
}


/* ================================= */
/* HERO */
/* ================================= */

.hero {
    min-height: 80vh;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;

    padding: 40px 25px;

    background:
        linear-gradient(
            rgba(20, 7, 14, 0.3),
            rgba(20, 7, 14, 0.9)
        );
}

.small-title {
    letter-spacing: 4px;

    font-size: 0.75rem;

    opacity: 0.7;

    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(2.3rem, 8vw, 5rem);

    font-weight: normal;

    margin-bottom: 25px;
}

.hero-text {
    max-width: 600px;

    font-size: 1.2rem;

    line-height: 1.8;

    opacity: 0.85;
}


/* ================================= */
/* SECCIONES */
/* ================================= */

section:not(.welcome) {
    padding: 80px 20px;
}

section h2 {
    text-align: center;

    font-size: 2rem;

    font-weight: normal;

    margin-bottom: 30px;
}


/* ================================= */
/* FOTOS */
/* ================================= */

.memories {
    max-width: 1000px;

    margin: auto;
}

.photo-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(280px, 1fr));

    gap: 20px;
}

.photo-grid img {
    width: 100%;

    height: 400px;

    object-fit: cover;

    border-radius: 15px;

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.4);

    transition:
        transform 0.4s ease;
}

.photo-grid img:hover {
    transform: scale(1.02);
}


/* ================================= */
/* VIDEOS */
/* ================================= */

.video-section,
.external-video {
    text-align: center;

    max-width: 900px;

    margin: auto;
}

.video-section p,
.external-video p {
    opacity: 0.75;

    margin-bottom: 25px;
}

.main-video {
    width: 100%;

    max-width: 850px;

    border-radius: 15px;

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.5);
}


/* ================================= */
/* BOTÓN VIDEO */
/* ================================= */

.video-button {
    display: inline-block;

    padding: 15px 30px;

    border-radius: 50px;

    background: #8f2948;

    color: white;

    text-decoration: none;

    transition:
        transform 0.3s ease,
        background 0.3s ease;
}

.video-button:hover {
    transform: translateY(-3px);

    background: #b4375c;
}


/* ================================= */
/* FINAL */
/* ================================= */

.final-message {
    text-align: center;

    min-height: 70vh;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;
}

.final-message .heart {
    font-size: 3rem;

    margin-bottom: 20px;
}

.final-message p {
    line-height: 2;

    opacity: 0.8;

    margin-bottom: 30px;
}

.signature {
    font-size: 1.1rem;
}


/* ================================= */
/* ANIMACIONES */
/* ================================= */

@keyframes heartbeat {

    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.18);
    }

}

@keyframes float {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

}

@keyframes appear {

    from {
        opacity: 0;

        transform: translateY(20px);
    }

    to {
        opacity: 1;

        transform: translateY(0);
    }

}