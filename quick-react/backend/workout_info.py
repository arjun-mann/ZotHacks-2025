from fastapi import FastAPI
from pathlib import Path
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import json
import get_exercises

app = FastAPI()

# Allow React app (running on localhost:3000) to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Function to grab workout info for a given day

def get_workout_days(schedule_json: Dict[str, Any]) -> List[str]:
    return list(schedule_json.keys())

def get_workout_for_day(schedule_json: Dict[str, Any], day: str) -> List[Dict[str, Any]]:
    for entry in schedule_json.get("schedule", []):
        if entry.get("day", "").lower() == day.lower():
            return entry.get("workout", [])
    return []

if __name__=="__main__":
    info = get_exercises.get_exercises(150, 70, 18, True, "Pippin", "Cardio", ["Monday", "Tuesday", "Wednesday"], 2)
    print(get_workout_days(info))