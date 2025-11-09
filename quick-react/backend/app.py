from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from get_exercises import get_exercises

# Create the FastAPI app
app = FastAPI()

# Allow your React frontend to communicate with this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http:localhost:5174/"],  # for testing; replace with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the expected structure of the incoming JSON
class ExerciseRequest(BaseModel):
    weight: float
    height: float
    age: int
    sex: bool
    gym: str
    category: str
    available_days: list[str]
    exercise_days: int

# Define the route for generating exercises
@app.post("/exercises")
def generate_exercises(data: ExerciseRequest):
    try:
        # Call your get_exercises function
        workout_plan = get_exercises(
            weight=data.weight,
            height=data.height,
            age=data.age,
            sex=data.sex,
            gym=data.gym,
            category=data.category,
            available_days=data.available_days,
            exercise_days=data.exercise_days,
        )

        # Return the generated workout plan as JSON
        return {"status": "success", "workout_plan": workout_plan}

    except Exception as e:
        # Handle any errors gracefully
        return {"status": "error", "message": str(e)}

# Optional root route for testing
@app.get("/")
def root():
    return {"message": "FastAPI backend is running!"}