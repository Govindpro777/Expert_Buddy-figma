import React, { useState } from 'react';
import { ChevronRight, FileText, Calendar, User, Send, Paperclip, Smile, Phone, Video, MoreVertical } from 'lucide-react';
import crown from "@/public/Vector.png";
import Image from 'next/image';
import img1 from "@/public/Group 316127895.png";
import img2 from "@/public/Group 316127895 (3).png";
import img3 from "@/public/Group 316127895 (2).png";
import img4 from "@/public/Group 316128051@3x.png";
import img5 from "@/public/Group 316128066@3x.png";

const ProjectSelectionInterface = () => {
    const [projectType, setProjectType] = useState('');
    const [projectSubject, setProjectSubject] = useState('');
    const [deadline, setDeadline] = useState('');
    const [message, setMessage] = useState('');
    
    const experts = [
        {
            name: 'Peruvian Deep S.',
            rating: 4.8,
            completedProjects: 85,
            price: 50,
            avatar: img1
        },
        {
            name: 'Aspen Stanton',
            rating: 4.5,
            completedProjects: 72,
            price: 50,
            avatar: img2
        },
        {
            name: 'Jakob Terff',
            rating: 4.7,
            completedProjects: 93,
            price: 50,
            avatar: img3
        }
    ];
    
    const [messages, setMessages] = useState([
        {
            sender: 'Zain Stanton',
            text: 'Welcome to ExpertBuddy! Ready to tackle your assignment together? I can help you with your student Jordan OMG thank you!! This projectile motion physics homework from Mr. Garcia class (1/13/24) 👀',
            time: '5:00 PM',
            avatar: img1
        },
        {
            sender: 'You',
            text: 'Problem #14 says a ball has 25m height and 15 m/s initial velocity but I need velocity for my physics lab report',
            time: '6:00 PM',
            avatar: img2
        },
        {
            sender: 'Zain Stanton',
            text: 'We\'ve got this physics assignment covered! Remember Newton\'s equations from Chapter 3?',
            time: '6:06 PM',
            avatar: img1
        },
        {
            sender: 'Zain Stanton',
            text: 'Wait, that makes sense with our kinematics homework! So v²=2gh for calculating the peak height?',
            time: '6:08 PM',
            avatar: img1
        }
    ]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([
                ...messages,
                {
                    sender: 'You',
                    text: message,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    avatar: img2
                }
            ]);
            setMessage('');
        }
    };

    return (
        <div className="bg-[#f1efeb] min-h-screen pb-12">
            <div className="flex items-center justify-center mb-12 mt-16">
                <div className="relative">
                    <Image src={crown} alt="Crown" className="absolute -top-8 -left-7" />
                    <h2 className="text-2xl md:text-3xl font-bold text-center">
                        How It Works
                    </h2>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto gap-8">
                {/* Left Column - Step 1 */}
                <div className="w-full lg:w-1/2 h-[540px] bg-white rounded-3xl overflow-hidden shadow-lg">
                    <div className="p-8">
                        <div className="flex items-start mb-4">
                            <div className="flex-shrink-0 mr-4">
                                <div className="rounded-xl border-2 border-purple-600 p-2 text-center">
                                    <div className="text-sm text-purple-600 font-semibold">Step</div>
                                    <div className="text-3xl text-purple-600 font-bold">01</div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-1">Fill in a brief</h2>
                                <p className="text-gray-600 text-sm">Tell us what you need help with, describe your project requirements, and set the deadline.</p>
                            </div>
                        </div>

                        <button className="bg-gray-900 text-white py-3 px-6 rounded-full font-medium my-4">
                            Get Started
                        </button>

                        <div className="mt-4">
                            <Image 
                                src={img5} 
                                width={400} 
                                height={320}
                                alt="Project form illustration" 
                                className="rounded-xl w-full" 
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column - Step 2 */}
                <div className="w-full lg:w-1/2 h-[540px] bg-white rounded-3xl overflow-hidden shadow-lg">
                    <div className="p-8">
                        <div className="flex items-start mb-4">
                            <div className="flex-shrink-0 mr-4">
                                <div className="rounded-xl border-2 border-purple-600 p-2 text-center">
                                    <div className="text-sm text-purple-600 font-semibold">Step</div>
                                    <div className="text-3xl text-purple-600 font-bold">02</div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-1">Choose an expert</h2>
                                <p className="text-gray-600 text-sm">Receive offers from those who can help with assignments, compare their ratings, and pick the best one for your task.</p>
                            </div>
                        </div>

                        <button className="bg-gray-900 text-white py-3 px-6 rounded-full font-medium my-4">
                            Get Started
                        </button>

                        <div className="mt-6">
                            <Image 
                                src={img4} 
                                width={400} 
                                height={320}
                                alt="Expert selection illustration" 
                                className="rounded-xl w-full" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 3 - Full Width */}
            <div className="w-full max-w-5xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-3xl overflow-hidden shadow-lg p-8">
                <div>
                    <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 mr-4">
                            <div className="rounded-xl border-2 border-purple-600 p-2 text-center">
                                <div className="text-sm text-purple-600 font-semibold">Step</div>
                                <div className="text-3xl text-purple-600 font-bold">03</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-1">Get It Done On Time</h2>
                            <p className="text-gray-600 text-sm">Chat with the expert directly, discuss your project in detail, and get professional academic assistance by the deadline.</p>
                        </div>
                    </div>

                    <button className="bg-gray-900 text-white py-3 px-6 rounded-full font-medium mb-6">
                        Get Started
                    </button>
                </div>

                <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <div className="bg-white p-3 border-b">
                        <div className="flex items-center">
                            <Image 
                                src={img1} 
                                alt="Zain Stanton" 
                                width={40} 
                                height={40} 
                                className="rounded-full mr-3" 
                            />
                            <div>
                                <div className="flex items-center">
                                    <h3 className="font-semibold text-sm">Zain Stanton</h3>
                                    <div className="ml-2 flex space-x-1">
                                        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-xs">🇺🇸</div>
                                        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-xs">⭐</div>
                                        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-xs">🔍</div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">15 Year Of Exp. Overall</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 h-64 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start mb-3 ${msg.sender === 'You' ? 'justify-end' : ''}`}>
                                {msg.sender !== 'You' && (
                                    <Image 
                                        src={msg.avatar} 
                                        alt={msg.sender} 
                                        width={32} 
                                        height={32} 
                                        className="rounded-full mr-2 flex-shrink-0" 
                                    />
                                )}
                                <div className={`rounded-2xl p-2 max-w-[80%] text-xs ${
                                    msg.sender === 'You' 
                                        ? 'bg-purple-50 mr-2' 
                                        : 'bg-gray-200'
                                }`}>
                                    <p>{msg.text}</p>
                                    <div className="text-right text-gray-500 text-xs mt-1">{msg.time}</div>
                                </div>
                                {msg.sender === 'You' && (
                                    <Image 
                                        src={msg.avatar} 
                                        alt={msg.sender} 
                                        width={32} 
                                        height={32} 
                                        className="rounded-full flex-shrink-0" 
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="p-2 border-t bg-white">
                        <div className="flex items-center bg-white rounded-full border">
                            <input
                                type="text"
                                placeholder="Write a Message..."
                                className="flex-grow p-2 px-4 rounded-full text-sm outline-none"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button 
                                className="ml-2 mr-1 text-purple-600 bg-purple-100 rounded-full p-2"
                                onClick={handleSendMessage}
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSelectionInterface;
