#quick-react/backend/get_exercises.py
import requests
import os
import json
from dotenv import load_dotenv

def get_exercises(weight: float, height: float, age: int, sex: bool, gym: str, category: str, available_days: list[str]) -> dict:
    """
    Takes in the specified parameters, and then returns
    a suggested work out for the week in the form of a
    single string in the style of a json. (sex parameter
    is 0 for female and 1 for male)
    """

    load_dotenv()

    sex=1 if sex else 0

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
                        f"Sex: {sex}"
                        f"Gym: {gym}"
                        f"Exercise Category: {category}"
                        f"Days of the week available to exercise on: {available_days}"
                        "For each day, specify what exercises to do, how many reps, and how many sets"
                        "Include a single rest day and only one rest day"
                        "Don't include any intro at the beginning. Only include the schedule, nothing extra"
                        "Assume the day starts on Sunday. For each day, indicate what day of the week it is"
                        "When picking an exercise, select ones that are likely to be known, nothing exotic."
                        "Consider the gym being used, and so only select well known exercises or machines"
                        "that would be available in that facility. Try to not give long names and only use"
                        "already existing and commonly known exercises"
                        "Give output in the form of a json file. Do not say ```json at the beginning and do"
                        "not say ``` at the end. Start with a { and end with a } without anything in between"
                        "except the intended schedule in the form of a json. Each entry should represent a day,"
                        "and in that day a workout, and in that workout each exercise with the traits"
                        "exercise, reps, and sets in that order. Do not include anything before or after the starting and"
                        "ending curly braces. For the rest day, exercise is Rest, reps and sets are both N/A. Consider"
                        "only which days are available. A"
                        "day that is not specified as being available can be selected as a rest day, but if so then do"
                        "not include that day in the output. Only include days that are included in the available days."
                        "Prioritize using a day that is not included in the specified available days as the rest day rather"
                        "than one of the workout days"

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
        return json.loads(generated_text)

    else:
        return f"Request failed with status code {response.status_code}"

#Used for testing
if __name__=="__main__":
    weekly_plan=get_exercises(165,73,21,1,"UCI ARC","General Workout",["Sunday","Tuesday","Thursday","Saturday"],3)

    print(weekly_plan)
    
    #for day, exercises in weekly_plan.items():
        #print(f"--- {day} ---")
        #for ex in exercises:
            #print(f"{ex['exercise']} | Reps: {ex['reps']} | Sets: {ex['sets']}")
            #print()