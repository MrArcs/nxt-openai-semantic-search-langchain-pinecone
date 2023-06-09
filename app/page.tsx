'use client';
import { useState } from 'react';

export default function Home() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    async function createIndexAndEmbeddings() {
        try {
            const result = await fetch('/api/setup', {
                method: 'POST'
            });
            const json = await result.json();
            console.log('result: ', json);
        } catch (err) {
            console.log('err:', err);
        }
    }
    async function sendQuery() {
        if (!query) return;
        setResult('');
        setLoading(true);
        try {
            const result = await fetch('/api/read', {
                method: 'POST',
                body: JSON.stringify(query)
            });
            const json = await result.json();
            setResult(json.data);
            setLoading(false);
        } catch (err) {
            console.log('err:', err);
            setLoading(false);
        }
    }
    return (
        <main>
            <div className="nebulosa-pink"></div>
            <div className="nebulosa-pink-2"></div>
            <div className="nebulosa-1"></div>
            <div className="nebulosa-2"></div>
            <div className="nebulosa-3"></div>
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col h-96 w-full items-center justify-center sm:justify-start sm:items-start p-2 sm:p-10">
                    <p className="text-gray-400 font-medium text-lg sm:text-4xl mb-6 ">
                        Enhance user experiences with
                    </p>
                    <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[3rem] sm:text-8xl text-center sm:text-left">
                        OpenAI Semantic Search
                    </h1>
                    <p
                        className="text-white/50 font-medium leading-7 text-sm p-4 sm:text-base sm:p-0 sm:w-2/3 sm:mt-6 sm:leading-10
                    "
                    >
                        By providing them with more relevant results, which can
                        lead to increased satisfaction and loyalty.
                    </p>
                </div>
                <div className="h-96 w-full bg-chrome">3</div>
            </div>
        </main>
    );
}

{
    /* <input
                    className="text-black px-2 py-1"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className="px-7 py-1 rounded-2xl bg-white text-black mt-2 mb-2"
                    onClick={sendQuery}
                >
                    Ask AI
                </button>
                {loading && <p>Asking AI ...</p>}
                {result && <p>{result}</p>}
                {/* consider removing this button from the UI once the embeddings are created ... */
}
// <button onClick={createIndexAndEmbeddings}>
//     Create index and embeddings
// </button> */}
