import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { PUBLIC_TOKEN } from '$env/static/public';
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export async function getAIRecomendations(messages) {
    const client = ModelClient(endpoint, new AzureKeyCredential(PUBLIC_TOKEN));
    const response = await client.path("/chat/completions").post({
        body: {
            messages: messages,
            temperature: 1,
            top_p: 1,
            model: model,
        },
    });
    if (isUnexpected(response)) {
        throw response.body.error;
    }
    let aiResponse = response.body.choices[0].message.content;

    return `${aiResponse}`;
}