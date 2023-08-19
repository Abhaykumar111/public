document.addEventListener("DOMContentLoaded", function() {
    const shortenBtn = document.getElementById("shortenBtn");
    const longUrlInput = document.getElementById("longUrl");
    const shortenedUrlOutput = document.getElementById("shortenedUrl");

    shortenBtn.addEventListener("click", async function() {
        const longUrl = longUrlInput.value;
        const accessToken = "d0dc61022c1088d46ebde9a607c3a3a258afddea"; // Replace with your Bitly access token

        try {
            const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    long_url: longUrl
                })
            });

            const data = await response.json();
            const shortenedUrl = data.id;

            shortenedUrlOutput.textContent = `Shortened URL: ${shortenedUrl}`;
        } catch (error) {
            shortenedUrlOutput.textContent = "Error occurred while shortening the URL.";
            console.error(error);
        }
    });
});
