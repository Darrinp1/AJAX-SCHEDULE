const scheduleData = [
    {
      "name": "Psychology",
      "room": "Room A113",
      "teacher": "Mr. Walkiewicz",
      "days": ["A", "B", "C", "E", "F"]
    },
    {
      "name": "Creative Foods",
      "room": "Room B119",
      "teacher": "Mrs. Blatt",
      "days": ["A", "B", "D", "E", "F"]
    },
    {
      "name": "Quantitative Reasoning",
      "room": "Room B207",
      "teacher": "Mrs. Heaney",
      "days": ["A", "C", "D", "E", "G"]
    },
    {
      "name": "Health",
      "room": "Room A16",
      "teacher": "Mrs. Agibiti",
      "days": ["A", "B", "D", "E", "G"]
    },
    {
      "name": "English",
      "room": "Room A12",
      "teacher": "Mrs. Flug",
      "days": ["A", "C", "D", "F", "G"]
    },
    {
      "name": "Web Design",
      "room": "Room C104",
      "teacher": "Mrs. McDonald",
      "days": ["B", "C", "D", "F", "G"]
    },
    {
      "name": "Lab Forensic Science",
      "room": "Room B218",
      "teacher": "Mrs. Biedrawa",
      "days": ["B", "C", "E", "F", "G"]
    }
  ];
  
  // Function to filter classes for a specific day
  function getClassesForDay(day) {
    return scheduleData.filter(classInfo => classInfo.days.includes(day));
  }
  
  // Example usage: Get classes for 'A' day
  const aDayClasses = getClassesForDay('A');
  console.log(aDayClasses);
  