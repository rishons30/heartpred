from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load models
model_rf_gscv = joblib.load('random_forest_model_GridSearchCV.pkl')
model_rf_rscv = joblib.load('random_forest_model_RandomizedSearchCV.pkl')
model_xgb = joblib.load('xgboost_model.pkl')

# Define a function to make predictions
def make_prediction(model, features):
    prediction_proba = model.predict_proba(features)
    if prediction_proba[0][1] > 0.5:
        result = "Heart disease detected"
    else:
        result = "No heart disease detected"
    return result, prediction_proba[0][1]

# Define routes
@app.route('/predict/rf-gscv', methods=['POST'])
def predict_rf_gscv():
    try:
        data = request.get_json(force=True)
        features = np.array(data['features']).reshape(1, -1)
        result, probability = make_prediction(model_rf_gscv, features)
        return jsonify({"prediction": result, "probability": probability})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/predict/rf-rscv', methods=['POST'])
def predict_rf_rscv():
    try:
        data = request.get_json(force=True)
        features = np.array(data['features']).reshape(1, -1)
        result, probability = make_prediction(model_rf_rscv, features)
        return jsonify({"prediction": result, "probability": probability})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/predict/xgb', methods=['POST'])
def predict_xgb():
    try:
        data = request.get_json(force=True)
        features = np.array(data['features']).reshape(1, -1)
        result, probability = make_prediction(model_xgb, features)
        return jsonify({"prediction": result, "probability": probability})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)

