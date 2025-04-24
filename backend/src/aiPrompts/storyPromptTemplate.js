const storyPromptTemplate = (userName, storyPrompt) => {
  const date = new Date();
  const prompt = `${userName} wants to achieve the following goal: "${storyPrompt}".

        Generate:
        1. A short motivational story.
        2. A JSON array of 30 achievable, goal-oriented tasks.
        3. Please keep in mind that today is ${date}, make the dueDate the future in the format: yyyy-MM-ddTHH:mm:ss
        4. Also for bonusPoints keep in mind that: (Someday=10, Focus=20, ASAP=35)
        5. Make the id = timestamp since 1.1.1970

        Respond with only raw JSON. Do not include markdown formatting.
        The JSON format should be with the following structure:
        {
        "story": "string",
        "tasks": [{
          "id": "number",
          "taskName": "string",
          "taskDueDate": "string",
          "taskDescription": "string",
          "taskPriority": "string (Someday, Focus, ASAP)",
          "bonusPoints": "number",
          "completed": false,
          "due": false
        }]
        }
        
        `;

  return prompt;
};

module.exports = storyPromptTemplate;
