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
        document.getElementById("zone-descriptions").innerHTML = "";
        return;
    }

    let zones = {
        "Zone 1 (50-60%)": { range: [Math.round(maxHR * 0.50), Math.round(maxHR * 0.60)], class: "zone1" },
        "Zone 2 (60-70%)": { range: [Math.round(maxHR * 0.60), Math.round(maxHR * 0.70)], class: "zone2" },
        "Zone 3 (70-80%)": { range: [Math.round(maxHR * 0.70), Math.round(maxHR * 0.80)], class: "zone3" },
        "Zone 4 (80-90%)": { range: [Math.round(maxHR * 0.80), Math.round(maxHR * 0.90)], class: "zone4" },
        "Zone 5 (90-100%)": { range: [Math.round(maxHR * 0.90), Math.round(maxHR * 1.00)], class: "zone5" }
    };

    let resultsHtml = "<h2>Heart Rate Zones</h2>";
    resultsHtml += "<table><tr><th>Zone</th><th>Heart Rate (bpm)</th></tr>";
    for (let zone in zones) {
        resultsHtml += `<tr class="${zones[zone].class}"><td>${zone}</td><td>${zones[zone].range[0]} - ${zones[zone].range[1]}</td></tr>`;
    }
    resultsHtml += "</table>";

    let descriptionsHtml = `
        <h3>HR Zone Descriptions</h3>
        <div class="zone-description"><strong>Zone 1 (50-60%):</strong> This is your recovery zone, ideal for warm-ups, cool-downs, and active recovery. Training here helps build endurance without stress.</div>
        <div class="zone-description"><strong>Zone 2 (60-70%):</strong> The endurance zone where fat is the primary fuel source. Great for long-distance training and improving aerobic efficiency.</div>
        <div class="zone-description"><strong>Zone 3 (70-80%):</strong> A balanced aerobic zone where you improve cardiovascular fitness and strength. Suitable for tempo runs and steady-state efforts.</div>
        <div class="zone-description"><strong>Zone 4 (80-90%):</strong> The threshold zone where lactic acid starts accumulating. Useful for improving speed and endurance in high-intensity workouts.</div>
        <div class="zone-description"><strong>Zone 5 (90-100%):</strong> Maximum effort zone for short bursts, sprints, and interval training. Helps develop top-end speed and anaerobic power.</div>
    `;

    document.getElementById("results").innerHTML = resultsHtml;
    document.getElementById("zone-descriptions").innerHTML = descriptionsHtml;
}
