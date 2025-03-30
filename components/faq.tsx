"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import crown from "@/public/Vector.png"
import Image from "next/image"

const faqs = [
  {
    question: "Can you help me with my homework in less than 24 hours?",
    answer:
      "Our name 24HourAnswers means you can submit work 24 hours a day - it doesn't mean we can help you master what you need to know in 24 hours. If you make arrangements in advance, and if you are a very fast learner, then yes, we may be able to help you achieve your goals in 24 hours. Remember, high quality, customized help that's tailored around the needs of each individual student takes time to achieve. You deserve nothing less than the best, so give us the time we need to give you the best.",
  },
  {
    question: "Can you help me with my exam/quiz/test?",
    answer:
      "Yes, we can help you with your exam/quiz/test. We have experts who are experts in their field and they can help you with your exam/quiz/test. We can help you with your exam/quiz/test in less than 24 hours.",
  },
  {
    question: "How much will it cost?",
    answer:
      "Appointy offers various pricing plans starting from free basic matching to premium subscriptions with additional features. Expert fees vary based on their expertise and experience.",
  },
  {
    question: "What kind of payments do you accept?",
    answer:
      "Yes, we can help you with your exam/quiz/test. We have experts who are experts in their field and they can help you with your exam/quiz/test. We can help you with your exam/quiz/test in less than 24 hours.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-[#f5f3ef]">
      <div className="container mx-auto px-4">
       
        <div className="flex items-center justify-center mb-12">
        <div className="relative">
            <Image src={crown} alt="Crown" className="absolute -top-8 -left-7" />
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-[#16192c]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#a414d5]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#a414d5]" />
                )}
              </button>

              {openIndex === index && <div className="px-6 pb-4 text-[#6b7b93]">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

