import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
// @ts-ignore
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

export async function analyze(document: Buffer) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  const data = {
    inlineData: {
      data: document.toString("base64"),
      mimeType: "image/png",
    },
  };
  const prompt = `Check if the document is one of the valid types: ${valid_docs.join(
    ", "
  )}. Your response must be a valid format without additional characters. For example, if valid: {"flag":false, "description": //describe the document
}. If invalid: {"flag":true, "description": //describe the document} - The Data:`;
  console.log(prompt);

  let response;
  try {
    const result = await model.generateContent([prompt, data]);
    response = result.response;
    console.log(response.text());

    console.log(JSON.parse(response.text()));
    return JSON.parse(response.text());
  } catch (error) {
    console.log(error);
    return { flag: true };
  }
}

const valid_docs = ["Medical Documents"];
