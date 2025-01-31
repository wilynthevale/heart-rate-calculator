import tkinter as tk
from tkinter import messagebox

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

def on_calculate():
    try:
        thr = int(entry_thr.get())
        hr_zones = calculate_hr_zones(thr)
        result_text.set("\n".join([f"{zone}: {min_hr} - {max_hr} bpm" for zone, (min_hr, max_hr) in hr_zones.items()]))
    except ValueError:
        messagebox.showerror("Input Error", "Please enter a valid number for THR.")

# GUI Setup
root = tk.Tk()
root.title("Heart Rate Zone Calculator")

tk.Label(root, text="Enter your Threshold Heart Rate (THR) in bpm:").pack(pady=5)
entry_thr = tk.Entry(root)
entry_thr.pack(pady=5)

tk.Button(root, text="Calculate Zones", command=on_calculate).pack(pady=5)

result_text = tk.StringVar()
tk.Label(root, textvariable=result_text, justify="left").pack(pady=5)

root.mainloop()
