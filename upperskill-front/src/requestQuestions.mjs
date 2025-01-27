import OpenAI from "openai";




const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser : true,
});

export default openai;