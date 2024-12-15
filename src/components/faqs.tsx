import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { ChevronDown } from "lucide-react";

const questions = [
    {
        id: 1,
        question: 'What is Stoqs?',
        answer: 'Stoqs is an innovative AI-driven platform designed to provide comprehensive and accurate financial insights. It uses advanced language models and multi-agent systems to interpret natural language queries and aggregate high-quality information from multiple trusted sources. '
    },
    {
        id: 2,
        question: 'How does Stoqs work?',
        answer: 'Stoqs operates by retrieving information from curated sources using language models as agents. It employs Retrieval Augmented Generation (RAG) to contextualize previous interactions, ensuring relevant and precise answers to user queries. '
    },
    {
        id: 3,
        question: 'Is Stoqs a financial advisor?',
        answer: 'No, Stoqs does not provide financial advice or asset purchase recommendations. Our platform is designed to provide accurate financial information to help users make informed decisions. '
    },
    {
        id: 4,
        question: 'Can I invest in stocks through Stoqs?',
        answer: 'No, Stoqs does not facilitate the purchase or sale of stocks. It is an informational platform that helps users understand financial data and market trends.'
    }, 
    {
        id: 5,
        question: 'Can I get information about non-listed companies?',
        answer: 'Stoqs primarily focuses on providing data about listed companies. Information on non-listed companies may be limited or unavailable.'
    }, 
    {
        id: 6,
        question: 'What is the limit on the number of companies I can inquire about?',
        answer: 'Users can inquire about a maximum of five companies (stocks) in a single conversation. '
    },
    {
        id: 7,
        question: 'Can I open multiple tabs for different stocks?',
        answer: 'Users can have up to five tabs open for different stocks in a single conversation.'
    },
    {
        id: 8,
        question: 'How reliable is the information provided by Stoqs?',
        answer: 'Stoqs consolidates data from multiple trusted and verified sources to ensure the information provided is accurate and reliable. However, users should always cross-check critical information from multiple sources before making any financial decisions. '
    },
    {
        id: 9,
        question: 'What types of financial insights does Stoqs provide?',
        answer: 'Stoqs provides a wide range of financial insights, including market trends, investment strategy evaluations, and financial performance metrics comparisons. '
    },
    {
        id: 10,
        question: 'How can Stoqs help with my financial research?',
        answer: 'Stoqs enhances financial research by organizing fragmented data into a unified framework, making it more accessible and accurate. This empowers users with the insights necessary for informed decision-making.'
    },
    {
        id: 11,
        question: 'Is Stoqs free to use?',
        answer: 'Stoqs is currently free to use. Moving forward, Stoqs will be free with limited features, with plans starting at $20/month.'
    }
]

const PrivacyQuestions = [
    {
        id: 1,
        question: 'How does Stoqs handle my personal data?',
        answer: 'Stoqs is committed to protecting your privacy. We follow strict data protection protocols to ensure that your personal information is safe and secure.'
    },
    {
        id: 2,
        question: 'Is my financial data safe with Stoqs',
        answer: 'Yes, Stoqs uses advanced security measures to protect your financial data. We prioritize the security and confidentiality of all user information.'
    }
]

const SupportQuestions = [
    {
        id: 1,
        question: 'How can I get support if I encounter an issue with Stoqs?',
        answer: 'If you encounter any issues or have questions, you can reach out to our support team through the contact form on our website or app. We are here to help!'
    },
    {
        id: 2,
        question: 'Can I suggest new features or improvements for Stoqs?',
        answer: 'Absolutely! We value user feedback and encourage you to share your suggestions for new features or improvements. Please contact us through our feedback form.'
    }
]

const LegalQuestions = [
    {
        id: 1,
        question: 'Does Stoqs provide financial advice?',
        answer: 'No, Stoqs does not provide financial advice, and the information on our platform should not be taken as such. Users are advised to consult with a professional financial advisor for personalized financial advice. '
    },
    {
        id: 2,
        question: 'Are the insights from Stoqs guaranteed to be accurate?',
        answer: 'While Stoqs strives to provide accurate and up-to-date information, we cannot guarantee the accuracy of all insights. Users should verify information independently and use it at their own risk. '
    }
]

interface FAQComponentProps {
    question: {
        id: number;
        question: string;
        answer: string;
    };
    index: number;
}

export const FAQComponent: React.FC<FAQComponentProps> = (props) => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const { question, index } = props;
    return (
        <div key={question.id} className='mb-4 last:mb-0'>
            <button
                className='flex flex-col backdrop-blur justify-between w-full py-3 lg:py-7 px-6 lg:px-10 bg-[#091015] rounded-xl md:rounded-2xl border border-[#B9C3CB80] text-[#97A5B7] text-sm md:text-lg'
                style={{
                    background: 'linear-gradient(91deg, rgba(23, 47, 69, 0.60) -4.26%, rgba(0, 0, 0, 0.00) 107.01%)'
                }}
                onClick={() => setActiveQuestion(index === activeQuestion ? null : index)}
            > 
                <div className='flex justify-between items-center w-full'>
                    <p className='text-[#99A9B2] text-left'>{question.question}</p>
                    <ChevronDown size={24} className={`text-white transition transform ${index === activeQuestion ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                    {index === activeQuestion && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        className='mt-2 rounded-lg'>
                            <p className='text-[#97A5B7] text-sm md:text-base text-left'>{question.answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    )
}


const FAQs = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <>
        <div className='pt-14 px-4 lg:px-[228px] pb-[77px] text-white'>
            <div className='flex justify-between'>
                <img src="/src/assets/faqbg.svg" alt='bg' className='hidden lg:block absolute w-screen left-0 top-80' />
                <div className="flex items-center font-noto">
                    <a href='/'>
                        <h1 className="mr-[11px] text-[13px]">S T O Q S</h1>
                    </a>
                    <span className="grid px-3 place-content-center rounded-full text-center tracking-normal text-[12px] font-semibold border-2 text-[#2493C2]/30 border-[#2493C2]/30">
                        BETA
                    </span>
                </div>
                <ul className='hidden lg:flex gap-16 text-[#9BA2A5] font-noto '>
                    <li><a href="https://eikasialabs.com/blogs/research/" target='_blank'>Research</a></li>
                    <li><a href="https://eikasialabs.com" target='_blank'>About</a></li>
                    <a href='/faq' target='_blank'>FAQs</a>
                    <li className='text-[#139AC5]'>Try Stoqs</li>
                </ul>
            </div>
            <div className='flex flex-col items-center mt-32 font-geistregular'>
                <h3 className='text-[1.75rem] lg:text-[43px] leading-tight textgradient text-center'>Some questions you might have?</h3>
                <p className='text-center w-[261px] lg:w-[546px] font-noto text-[#97A5B7] mt-5 text-sm md:text-lg'>Here are some frequently asked questions. <br />
                If you have any further queries, you can contact us.</p>
            </div>
            <div className='mt-20'>
                {questions.map((question, index) => (
                    <FAQComponent key={question.id} question={question} index={index} />
                ))}
            </div>
            <h4 className='pt-24 text-xl lg:text-[32px]'>Privacy and Security </h4>
            <div className='mt-5'>
                {PrivacyQuestions.map((question, index) => (
                    <FAQComponent key={question.id} question={question} index={index} />
                ))}
            </div>
            <h4 className='pt-24 text-xl lg:text-[32px]'>Support and Contact</h4>
            <div className='mt-5'>
                {SupportQuestions.map((question, index) => (
                    <FAQComponent key={question.id} question={question} index={index} />
                ))}
            </div>
            <h4 className='pt-24 text-xl lg:text-[32px]'>Legal and Compliance</h4>
            <div className='mt-5'>
                {LegalQuestions.map((question, index) => (
                    <FAQComponent key={question.id} question={question} index={index} />
                ))}
            </div>
        </div>
        {/* <CTA />
        <Footer /> */}
    </>
  )
}

export default FAQs