import dynamo from "dynamo";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { formQuestions, dailySpending, discordId } = req.body;
  console.log(formQuestions, dailySpending, discordId);
  const formQuestionsArray = Object.entries(formQuestions).map(
    ([question, response]) => ({
      M: {
        question: { S: question },
        response: { N: String(response) },
      },
    })
  );

  const submission = {
    M: {
      date: { S: new Date().toISOString() },
      dailySpending: { N: String(dailySpending) },
      responses: { L: formQuestionsArray },
    },
  };

  const updateParams = {
    TableName: "MoniFlow",
    Key: {
      discordId: { S: discordId },
    },
    UpdateExpression:
      "SET submissions = list_append(if_not_exists(submissions, :empty_list), :submission)",
    ExpressionAttributeValues: {
      ":submission": { L: [submission] },
      ":empty_list": { L: [] },
    },
    ReturnValues: "ALL_NEW",
  };

  try {
    const updateResult = await dynamo.updateItem(updateParams).promise();
    console.log(updateResult);
    res.status(200).json(updateResult);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "An error occurred while updating the item." });
  }
};
