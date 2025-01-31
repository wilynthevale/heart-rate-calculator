from flask import Flask, render_template, request

app = Flask(__name__)

def calculate_hr_zones(thr):
    """
    Calculate heart rate training zones based on Threshold Heart Rate (THR).
    """
    zones = {
        "Zone 1 (Easy)": (0, int(thr * 0.85)),
        "Zone 2 (Light Aerobic)": (int(thr * 0.85), int(thr * 0.89)),
        "Zone 3 (Moderate Aerobic)": (int(thr * 0.90), int(thr * 0.94)),
        "Zone 4 (Threshold)": (int(thr * 0.95), int(thr * 0.99)),
        "Zone 5 (Above Threshold)": (int(thr * 1.00), "Above"),
    }
    return zones

@app.route('/', methods=['GET', 'POST'])
def index():
    hr_zones = None
    if request.method == 'POST':
        try:
            thr = int(request.form['thr'])
            hr_zones = calculate_hr_zones(thr)
        except ValueError:
            hr_zones = "Invalid input. Please enter a valid number."
    return render_template('index.html', hr_zones=hr_zones)

if __name__ == '__main__':
    app.run(debug=True)
