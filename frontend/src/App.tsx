import { useEffect, useState } from "react";
import teamsJson from "./CollegeBasketballTeams.json"; // Import JSON correctly
import "./App.css";

// Define the Team interface
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    try {
      console.log("Raw teamsJson:", teamsJson); // Debugging log

      // Extract the "teams" array from the JSON file
      if (teamsJson.teams && Array.isArray(teamsJson.teams)) {
        setTeams(teamsJson.teams);
      } else {
        console.error(
          "Error: teamsJson.teams is missing or not an array",
          teamsJson
        );
      }
    } catch (error) {
      console.error("Error processing teamsJson:", error);
    }
  }, []);

  return (
    <>
      <div>
        <h1>
          Welcome to our NCAA Basketball Info Page! Get Prepared to Tackle March
          Madness!
        </h1>
      </div>

      {/* Show loading message if teams are not loaded */}
      {teams.length === 0 ? (
        <p>Loading teams...</p>
      ) : (
        <div className="team-container">
          {teams.map((team, index) => (
            <div key={index} className="team-card">
              <h2>{team.school}</h2>
              <p>
                <strong>Mascot:</strong> {team.name}
              </p>
              <p>
                <strong>Location:</strong> {team.city}, {team.state}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
