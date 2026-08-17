const storyPromptTemplate = (userName, storyPrompt) => {
  const date = new Date();
  const prompt = `${userName} wants to achieve the following goal: "${storyPrompt}".

        Generate:
        1. A short motivational story.
        2. A JSON array of 50 achievable, goal-oriented tasks in 5 chapters.
        3. Please keep in mind that today is ${date}, make the dueDate the future in the format: yyyy-MM-ddTHH:mm:ss
        4. Also for bonusPoints keep in mind that: (Someday=10, Focus=20, ASAP=35)
        5. Make the id = timestamp since 1.1.1970
        6. Make the storyTitle consist of max. 3 words

        Respond with only raw JSON. Do not include markdown formatting.
        The JSON format should be with the following structure:
        {
        "storyTitle": "string",
        "storyText": "string",
        "chapters": [{
          "chapterName": "string"
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
        }]
        }

        Only respond if the user's goal is meaningful, achievable, and respectful. 
        If the goal is silly, offensive, or not serious, reply with:
        {
          "error": "This prompt does not appear to be a serious or constructive goal."
        }
        
        `;

  return prompt;
};

module.exports = storyPromptTemplate;
