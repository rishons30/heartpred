import requests

# URL of your Flask server
base_url = 'http://127.0.0.1:5000/predict'

data = {
    'features': [0.6, 1, 0.3, 0.24, 0.36, 0, 0, 0.6, 0, 0.29, 0.5, 0, 0.67]
}

# Endpoints for each model
endpoints = {
    'Random Forest (GridSearchCV)': '/rf-gscv',
    'Random Forest (RandomizedSearchCV)': '/rf-rscv',
    'XGBoost': '/xgb'
}

# Store results
results = {}

# Send POST requests to each model endpoint
for model_name, endpoint in endpoints.items():
    url = base_url + endpoint
    response = requests.post(url, json=data)
    
    if response.status_code == 200:
        results[model_name] = response.json()
    else:
        results[model_name] = {"error": response.json().get("error", "Unknown error")}

# Print results
for model_name, result in results.items():
    print(f"{model_name}: {result}")

