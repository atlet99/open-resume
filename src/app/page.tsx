import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./home/Hero'), { ssr: false });
const Steps = dynamic(() => import('./home/Steps'), { ssr: false });
const Features = dynamic(() => import('./home/Features'), { ssr: false });
const Testimonials = dynamic(() => import('./home/Testimonials'), { ssr: false });
const QuestionsAndAnswers = dynamic(() => import('./home/QuestionsAndAnswers'), { ssr: false });

export default function Home() {
    return (
        <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
            <Hero />
            <Steps />
            <Features />
            <Testimonials />
            <QuestionsAndAnswers />
        </main>
    );
}
