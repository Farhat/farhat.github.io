document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('animate-btn');
    const section = document.getElementById('animated-section');

    button.addEventListener('click', function () {
        section.classList.toggle('hidden');
        section.style.animation = 'slideIn 1s forwards';
    });

    // Add custom CSS for the section animations
    const css = `
        .hidden {
            display: none;
        }
        #animated-section {
            margin-top: 20px;
            padding: 20px;
            color: #8af4ff;
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
});

