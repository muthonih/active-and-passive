document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', function() {
            const id = dropdown.id.replace('q', '');
            const validation = document.getElementById(`val${id}`);
            const selectedOption = dropdown.value;
            const correctAnswer = answers[id - 1];
            
            if (selectedOption === '') {
                validation.innerHTML = '';
            } else if (selectedOption === correctAnswer) {
                validation.innerHTML = '<span class="correct">&#10004;</span>';
            } else {
                validation.innerHTML = '<span class="incorrect">&#10006;</span>';
            }
        });
    });
});

const answers = ['active', 'passive', 'active', 'passive', 'active', 'passive', 'passive', 'active', 'passive', 'active'];
