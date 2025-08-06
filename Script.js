document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            alert('Explore resources on renewable energy, sustainable practices, and advocacy!');
            // You could also redirect to another page or show a modal here
        });
    }
});
