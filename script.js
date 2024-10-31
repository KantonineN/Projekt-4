// script.js
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
    const chipContainer = document.querySelector('.chip-container');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                // Opret chip element
                const chip = document.createElement('div');
                chip.className = 'chip type-filled';
                chip.innerHTML = `
                    <div class="type-filled__label">
                        <div class="type-filled__label-wrapper">
                            <div class="type-filled__label2">${this.value}</div>
                        </div>
                    </div>
                    <div class="type-filled__chip-wrapper">
                        <button class="remove-chip">X</button> <!-- Knap til at fjerne chip -->
                    </div>
                `;
                chipContainer.appendChild(chip);

                // Tilføj event for at fjerne chip
                chip.querySelector('.remove-chip').addEventListener('click', function() {
                    chipContainer.removeChild(chip);
                    checkbox.checked = false; 
                });
            } else {
                
            }
        });
    });
});

