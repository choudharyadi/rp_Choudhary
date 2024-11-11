async function getData() {

    const response = await fetch("data/data.csv"); // move up two folders
    const data = await response.text();
   
    const trials = []; // x-axis labels
    const emoNextData = []; // y-axis global temps
    const caerData = []; // y-axis NH temps
    const thisStudyData = []; // y-axis SH temp values
   
    const table = data.split("\n").slice(1);
    console.log(table);
   
    table.forEach((row) => {
      const columns = row.split(","); // split row into columns using commas
      const trial = parseFloat(columns[0]); // assign year value
      trials.push(trial);
   
      const emoNextScore = parseFloat(columns[1]); // global temp values
      emoNextData.push(emoNextScore);
   
      const caerScore = parseFloat(columns[2]);
      caerData.push(caerScore);
   
      const thisStudyScore = parseFloat(columns[3]);
      thisStudyData.push(thisStudyScore);
      console.log(trial, emoNextScore, caerScore, thisStudyScore);
    });
   
    return { trials, emoNextData, caerData, thisStudyData }; // return multiple values as an object
  }
   
  async function createChart() {
    const data = await getData(); // wait for getData to send formatted data to create chart
    const lineChart = document.getElementById("lineChart");
    const degreeSymbol = String.fromCharCode(176);
   
    const myChart = new Chart(lineChart, {
        type: 'line',
        data: {
            labels: data.trials,
            datasets: [
                {
                    label: 'EMONeXT',
                    data: data.emoNextData,
                    fill: false,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    tension: 0.1,
                    pointRadius: 4
                },
                {
                    label: 'CAER',
                    data: data.caerData,
                    fill: false,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    tension: 0.1,
                    pointRadius: 4
                },
                {
                    label: 'This Study',
                    data: data.thisStudyData,
                    fill: false,
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 2,
                    tension: 0.1,
                    pointRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Trial #',
                        font: {
                            size: 14
                        }
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: '#ddd'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Score',
                        font: {
                            size: 14
                        }
                    },
                    min: 0,
                    max: 100,
                    ticks: {
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: '#ddd'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Performance Comparison Across Trials',
                    font: {
                        size: 20
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
  }
   
  createChart();