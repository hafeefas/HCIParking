function goBack() {
            window.history.back();
        }
        
var isEditing = true; 

function toggleEditMode() {
    var editButton = document.querySelector('.edit-button');
    var nameInput = document.getElementById('nameInput');
    var addressInput = document.getElementById('addressInput');
    var accessibilityInput = document.getElementById('accessibilityInput');

    if (!isEditing) {
        document.getElementById('displayName').innerText = nameInput.value;
        document.getElementById('displayAddress').innerText = addressInput.value;
        document.getElementById('displayAccessibility').innerText = accessibilityInput.value;
    }

    var displayStyle = isEditing ? 'inline-block' : 'none';

    nameInput.style.display = displayStyle;
    addressInput.style.display = displayStyle;
    accessibilityInput.style.display = displayStyle;

    document.getElementById('displayName').style.display = isEditing ? 'none' : 'inline-block';
    document.getElementById('displayAddress').style.display = isEditing ? 'none' : 'inline-block';
    document.getElementById('displayAccessibility').style.display = isEditing ? 'none' : 'inline-block';

    editButton.innerText = isEditing ? 'Confirm Changes' : 'Edit';

    isEditing = !isEditing;
}
