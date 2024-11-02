document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('animate-btn');
    const section = document.getElementById('animated-section');

    button.addEventListener('click', function () {
        section.classList.toggle('hidden');
        section.style.animation = 'slideIn 1s forwards';
    });

    const css = `
        .hidden {
            display: none;
        }
        #animated-section {
            margin: 20px;
            padding: 20px;
            background-color: #1b1f3b;
            border-radius: 8px;
            color: #03e9f4;
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
});

