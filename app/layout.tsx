import Header from './components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'OpenAI Semantic Search',
    description: 'AI Semantic Search with Pinecone, Langchain, & ChatGPT'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
