import { GoogleGenerativeAI } from "@google/generative-ai";
import { generate } from "random-words";

export const translate = async (req, res) => {
  try {
    const { word } = req.body;
    if (!word) {
      return res.status(401).json({
        message: "You forget to send the word",
        success: false,
      });
    } else {
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      const prompt = `Give me translation of ${word} in german with its meaning in json format`;
      const result = await model.generateContent(prompt);
      const jsonString = result.response.text().match(/({.*})/s)[0];
      return res.status(200).json(JSON.parse(jsonString));
    }
  } catch (error) {
    console.log(error);
  }
};
export const random = async (req, res) => {
  try {
    const word = generate();
    // console.log(word)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `Give me maximum 2 translation of ${word} in german and return the english,german word with its meaning in json format`;
    const result = await model.generateContent(prompt);
    // console.log(result.response.text())
    const jsonString = result.response.text().match(/(\[.*\])/s)[0]
    return res.status(200).json(JSON.parse(jsonString));

  } catch (error) {
    console.log(error);
  }
};
