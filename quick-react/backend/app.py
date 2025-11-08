from flask import Flask, request, jsonify
from flask_cors import CORS
from get_exercises import get_exercises

app = Flask(__name__)
CORS(app)  # allow requests from frontend (React)

# POST route for frontend to call
@app.route("/exercises", methods=["POST"])
def exercises():
    data = request.get_json()
    weight = data.get("weight")
    height = data.get("height")
    age = data.get("age")
    sex = data.get("sex")
    gym = data.get("gym")
    category = data.get("category")
    available_days = data.get("available_days", [])
    exercise_days = data.get("exercise_days", 0)
    
    plan = get_exercises(weight, height, age, sex, gym, category, available_days, exercise_days)
    return plan

if __name__ == "__main__":
    app.run(debug=True)
