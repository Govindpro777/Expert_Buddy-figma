import React, { useState, useRef } from 'react';
import { X, Calendar as CalendarIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const [budget, setBudget] = useState(65);
  const [wordCount, setWordCount] = useState(1100);
  const [date, setDate] = useState<Date>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="fixed inset-0 bg-shadow-3xl flex items-center justify-center p-4 z-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto p-4 sm:p-6 relative overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">Welcome XpertBuddy</h1>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Title</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 sm:p-3"
                defaultValue="I need help in java tutors for online test"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Content</label>
              <textarea
                className="w-full border rounded-lg p-2 sm:p-3 h-24 sm:h-28"
                defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 15 characters</p>
            </div>

            {/* Attach File Button */}
            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
              />
              <div className="flex flex-col space-y-2">
                <button
                  onClick={handleAttachClick}
                  className="flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center mr-2">
                    <span className="text-white">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7l-5-5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <span className="text-sm sm:text-base">{fileName || "Attach a File"}</span>
                </button>
                {fileName && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{fileName}</span>
                    <button
                      onClick={handleRemoveFile}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Type and Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Type</label>
                <div className="relative">
                  <select className="w-full appearance-none border rounded-lg p-2 sm:p-3 pr-10 bg-white">
                    <option>Eassy</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <div className="relative">
                  <select className="w-full appearance-none border rounded-lg p-2 sm:p-3 pr-10 bg-white">
                    <option>Others</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Word Count and Deadline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="">
                <label className="block text-gray-700 font-medium mb-2">Numbers of Words</label>


                <div className="flex items-center justify-between border-2 border-gray-200 rounded-lg p-2">
                  <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                    -
                  </button>
                  <span className="mx-3 sm:mx-4 text-base sm:text-lg font-medium">{wordCount}</span>
                  <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                    +
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">4 pages</p>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Deadline</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="border rounded-lg p-2 sm:p-3 flex items-center cursor-pointer hover:bg-gray-50">
                      <span className="text-sm sm:text-base">
                        {date ? format(date, "PPP") : "Pick a date"}
                      </span>
                      <CalendarIcon className="ml-auto h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6 mt-4 md:mt-0 border-l-2 border-gray-200 p-4">
            {/* Budget */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Set an Approximate Budget</label>
              <div className="flex items-center border-2 border-gray-200 rounded-lg p-1">
                <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  -
                </button>
                <div className="flex-1 mx-3 sm:mx-4">
                  <div className="flex justify-between  ">
                    <div></div>
                    <div className="text-base sm:text-lg">$ {budget}</div>
                    <div></div>
                  </div>
                </div>
                <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  +
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            {/* Choose Expert Button */}
            <button className="w-full bg-purple-600 text-white rounded-full py-2 sm:py-3 font-medium text-sm sm:text-base">
              Choose An Expert
            </button>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4 mt-2 sm:mt-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="flex-shrink-0 text-lg sm:text-xl">📝</div>
                <div>
                  <h3 className="font-medium text-sm sm:text-base">Describe your project</h3>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="flex-shrink-0 text-lg sm:text-xl">👨‍💻</div>
                <div>
                  <h3 className="font-medium text-sm sm:text-base">Choose and Experts</h3>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="flex-shrink-0 text-lg sm:text-xl">💳</div>
                <div>
                  <div className="font-medium text-sm sm:text-base">Pay for the project.</div>
                  <p className="text-xs sm:text-sm text-gray-600">prepay 30% or full price</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="flex-shrink-0 text-lg sm:text-xl">📋</div>
                <div>
                  <h3 className="font-medium text-sm sm:text-base">Get your project done and get a 20-days warranty period</h3>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="flex-shrink-0 text-lg sm:text-xl">🤖</div>
                <div>
                  <div className="font-medium text-sm sm:text-base">AI Free</div>
                  <p className="text-xs sm:text-sm text-gray-600">Our Experts do not use ai in completing projects, and those verified by us have the <span className="text-purple-600">"AI Free"</span> badge.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="flex-shrink-0 text-lg sm:text-xl">🔒</div>
                <div>
                  <div className="font-medium text-sm sm:text-base">Payment Protection</div>
                  <p className="text-xs sm:text-sm text-gray-600">The deposit remains on your balance until your order is ready and you're satisfied.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;