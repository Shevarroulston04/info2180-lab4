document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search");

    button.addEventListener("click", () => {
        fetch("superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    });
});