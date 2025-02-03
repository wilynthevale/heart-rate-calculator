function toggleThreshold() {
    let ageInput = document.getElementById("age");
    let thresholdInput = document.getElementById("threshold");

    if (thresholdInput.value) {
        ageInput.disabled = true;
    } else {
        ageInput.disabled = false;
    }
}

function calculateZones() {
    let age = parseInt(document.getElementById("age").value);
    let threshold = parseInt(document.getElementById("threshold").value);
    let maxHR = threshold ? threshold : 220 - age;

    if (!maxHR || isNaN(maxHR)) {
        document.getElementById("results").innerHTML = "<p>Please enter a valid Age or Threshold HR.</p>";
        return;
    }

    let zones = {
        "Zone 1 (50-60%)": [Math.round(maxHR * 0.50), Math.round(maxHR * 0.60)],
        "Zone 2 (60-70%)": [Math.round(maxHR * 0.60), Math.round(maxHR * 0.70)],
        "Zone 3 (70-80%)": [Math.round(maxHR * 0.70), Math.round(maxHR * 0.80)],
        "Zone 4 (80-90%)": [Math.round(maxHR * 0.80), Math.round(maxHR * 0.90)],
        "Zone 5 (90-100%)": [Math.round(maxHR * 0.90), Math.round(maxHR * 1.00)]
    };

    let resultsHtml = "<table><tr><th>Zone</th><th>Heart Rate (bpm)</th></tr>";
    for (let zone in zones) {
        resultsHtml += `<tr><td>${zone}</td><td>${zones[zone][0]} - ${zones[zone][1]}</td></tr>`;
    }
    resultsHtml += "</table>";

    document.getElementById("results").innerHTML = resultsHtml;
}
