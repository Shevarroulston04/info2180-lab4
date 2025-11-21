window.onload = function () {
    const btn = document.getElementById("searchBtn");
    const input = document.getElementById("search");
    const resultDiv = document.getElementById("result");
    const resultTitle = document.getElementById("result-title");

    btn.addEventListener("click", function () {
        let query = input.value.trim();
        let url = "superheroes.php";

        if (query !== "") {
            url += `?query=${encodeURIComponent(query)}`;
        }

        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;

                resultTitle.style.display = "block";
                resultTitle.classList.add("show");
            })
            .catch(error => {
                resultDiv.innerHTML = "<p class='error'>Error fetching results.</p>";
                resultTitle.style.display = "block";
                resultTitle.classList.add("show");
            });
    });

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            btn.click();
        }
    });
};