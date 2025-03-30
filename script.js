//your JS code here. If required.
const checkboxes = document.querySelectorAll('.toggle');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
        
        if (checkedCheckboxes.length > 2) {
            // Uncheck the last checked checkbox
            checkedCheckboxes[0].checked = false;
        }
    });
});