function showForm(formId) {
    // Remove "active" class from all forms
    document.querySelectorAll(".form-box").forEach(form => {
        form.classList.remove("active");
    });

    // Add "active" class to the selected form
    document.getElementById(formId).classList.add("active");
}
