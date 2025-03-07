document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('lineChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['CAER', 'EMONExT', 'Our Method'],
                datasets: [{
                    label: 'Accuracy (%)',
                    data: [65, 72, 78],
                    borderWidth: 2,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
});
