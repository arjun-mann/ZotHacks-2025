from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from get_exercises import get_exercises

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ExerciseRequest(BaseModel):
    weight: float
    height: float
    age: int
    sex: bool
    gym: str
    category: str
    available_days: list[str]
    exercise_days: int

@app.post("/exercises")
def generate_exercises(data: ExerciseRequest):
    try:
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
        return {"status": "success", "workout_plan": workout_plan}
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.get("/")
def root():
    return {"message": "FastAPI backend is running!"}
