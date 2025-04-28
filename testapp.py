import requests

# URL of your Flask server
url = 'http://127.0.0.1:5000/predict'

# High risk feature values
data = {
    'features': [0.6, 1, 0.3, 0.24, 0.36, 0, 0, 0.6, 0, 0.29, 0.5, 0, 0.67]
}



# (normalized values: high age, male, bad chest pain, high BP, high cholesterol, high sugar, abnormal ECG, low heart rate, exercise angina, high oldpeak, flat slope, major vessels, thal defect)

# Send POST request
response = requests.post(url, json=data)

# Print response
print(response.json())
