import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="md:max-w-6xl mx-auto py-16 space-y-10">
          <h2 className="text-4xl font-bold text-white text-center">About</h2>

          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="space-y-6 text-gray-300 leading-relaxed text-md">
              <div>
                <h3 className="text-xl font-bold text-white">Ariestio Dava Pratama – Data Scientist</h3>
                <p className="mt-2 leading-relaxed text-gray-300">
                    I&#39;m an Informatics Engineering student with a strong interest in data.
                    Whether it&#39;s numbers, text, or visuals, I enjoy turning raw data into something meaningful.
                </p>
                <p className="mt-2 leading-relaxed text-gray-300">
                    My passion for data started from my love for math and statistics, which eventually led me to explore the field of data science.
                    I especially enjoy working with Python, Machine Learning, Deep Learning especially focusing on Natural Language Processing.
                </p>
                <p className="mt-2 leading-relaxed text-gray-300">
                    Along the way, I&#39;ve become comfortable using libraries and tools like Tensorflow, Pandas, Scikit-Learn, Matplotlib, and more.
                    I like exploring data, discovering patterns, and turning them into insights that matter.
                </p>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] md:aspect-square rounded-lg overflow-hidden border-4 border-emerald-400  shadow-xl">
              <Image
                src="/aries.JPG"
                alt="Foto Aries"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
    );
}
