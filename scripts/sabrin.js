// Vælg alle elementer med klassen 'chipCheckbox'
const checkboxes = document.querySelectorAll('.chipCheckbox');

// Find containeren til chipsene
const chipContainer = document.getElementById('chipContainer');

// Gennemgå alle checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        
        if (this.checked) {
            // Opret en ny chip
            const chip = document.createElement('div');
            chip.className = 'chip__filled';
            chip.innerHTML = `
                  <div class="chip__filled__label">
                    <div class=".chip__filled__label__wrapper">
                        <div class="type-filled__label2">${this.getAttribute('data-name')}</div>
                    </div>
                </div>
                <div class="type-filled__chip-wrapper">
                    <!-- Tilføjet krydsikon til chippen for at muliggøre fjernelse -->
                    <svg class="type-filled__cross" focusable="false" aria-hidden="true">
                        <use xlink:href="#cross"></use>
                    </svg>
                </div>
            `;

            // Tilføj chippen til chipContainer-elementet
            chipContainer.appendChild(chip);

            // Find cross icon i chippen
            const crossIcon = chip.querySelector('.type-filled__cross');
            crossIcon.addEventListener('click', () => {
                
                chipContainer.removeChild(chip);
                
                checkbox.checked = false;
            });

        } else {
            // Hvis checkboxen bliver afmarkeret
            const chips = chipContainer.getElementsByClassName('chip');
            for (let i = 0; i < chips.length; i++) {
                // Hvis chippen matcher checkboxens navn
                if (chips[i].querySelector('.chip__filled__label2').textContent === this.getAttribute('data-name')) {
                    chipContainer.removeChild(chips[i]);
                    break;
                }
            }
        }
    });
});