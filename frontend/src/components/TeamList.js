import React, { useEffect, useState } from 'react';
import { getTeamMembers } from '../api/api.js';

const TeamList = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await getTeamMembers();
      setTeam(data);
    };
    fetchTeam();
  }, []);

  return (
    <div>
      <h2>Meet Our Team</h2>
      <ul>
        {team.map((member) => (
          <li key={member._id}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
