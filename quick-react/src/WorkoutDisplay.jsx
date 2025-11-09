import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, ListGroup, Alert } from "react-bootstrap";

function WorkoutDisplay() {
  const location = useLocation();
  const {
    weight,
    height,
    age,
    sex,
    gym,
    category,
    available_days
  } = location.state || {}; // <-- destructure all input from previous page

  const [workoutPlan, setWorkoutPlan] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/exercises", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            weight: weight,
            height: height,
            age: age,
            sex: sex,
            gym: gym,
            category: category,
            available_days: available_days
          }),
        });

        const data = await response.json();

        if (data.status === "success") {
          setWorkoutPlan(data.workout_plan);
        } else {
          setError(data.message || "Failed to fetch workout plan.");
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error fetching workout plan.");
        setLoading(false);
      }
    };

    if (weight && height && age && available_days) {
      fetchWorkout();
    } else {
      setLoading(false);
      setError("No input data received.");
    }
  }, [weight, height, age, sex, gym, category, available_days]);

  if (loading)
    return (
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div
          style={{
            fontSize: "3rem",
            animation: "spin 1s linear infinite",
          }}
        >
          🏋️
        </div>
        <p className="mt-3">Generating your workout...</p>

        {/* CSS animation */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );

  if (error)
    return (
      <Alert variant="danger" className="mt-5 text-center">
        {error}
      </Alert>
    );

  if (!workoutPlan || Object.keys(workoutPlan).length === 0)
    return (
      <Alert variant="warning" className="mt-5 text-center">
        No workout plan available.
      </Alert>
    );

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Weekly Workout Plan</h1>
      <div className="row">
        {Object.entries(workoutPlan).map(([day, exercises]) => (
          <div className="col-md-6 mb-4" key={day}>
            <Card>
              <Card.Header
                className={
                  exercises[0].exercise === "Rest" ? "bg-secondary text-white" : ""
                }
              >
                {day}
              </Card.Header>
              <ListGroup variant="flush">
                {exercises.map((ex, index) => (
                  <ListGroup.Item
                    key={index}
                    className={ex.exercise === "Rest" ? "text-muted" : ""}
                  >
                    {ex.exercise} — Reps: {ex.reps} — Sets: {ex.sets}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutDisplay;
