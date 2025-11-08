#quick-react/backend/get_exercises.py
import requests
import os
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_exercises(weight:float, height:float, age:int, gender:bool, gym: str, category:str)->str:
    """
    Takes in the desired type and difficulty, and then
    returns a dictionary of up to 5 suggested exercises that 
    match the given values. Each exercise is included with its
    name, type, equipment, difficulty, and instructions
    """

    gender="Male" if gender else "Female"

    API_KEY = "AIzaSyAyYfiRW4Yg6am_9m89S4XCArqpEOyZDh8"
    if not API_KEY:
        raise ValueError("GEMINI_API_KEY not set in environment variables")
    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"

    # Define the payload
    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": "Give me a workout schedule for the week with these attributes:"
                        f"Weight: {weight} pounds"
                        f"Height: {height} inches"
                        f"Ages {age} years"
                        f"Sex: {gender}"
                        f""

                    }
                ]
            }
        ]
    }

    # Set headers
    headers = {
        "x-goog-api-key": API_KEY,
        "Content-Type": "application/json"
    }

    # Send POST request
    response = requests.post(url, headers=headers, json=payload)

    # Check if request was successful
    if response.status_code == 200:
        data = response.json()
        # The structure of the response may vary; often the generated text is under 'candidates'
        generated_text = data["candidates"][0]["content"]["parts"][0]["text"]
        print(generated_text)

    else:
        print(f"Request failed with status code {response.status_code}")
        print(response.text)

if __name__ == "__main__":
    get_exercises()