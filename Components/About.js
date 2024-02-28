import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Recipe App</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Welcome to our Recipe App, where culinary creativity meets the power of React! We've crafted a delightful experience for all food enthusiasts, bringing you a diverse collection of mouthwatering recipes from various categories.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold mb-4">Key Features</h3>
          <ul className="list-disc pl-6">
            <li className="mb-2">Explore a Variety of Categories: Discover a wide range of recipes categorized by cuisine, dietary preferences, and more.</li>
            <li className="mb-2">Ingredients and Instructions: Each recipe comes with a detailed list of ingredients and step-by-step instructions, ensuring a seamless cooking experience.</li>
            <li className="mb-2">Rich Multimedia Content: Immerse yourself in the culinary journey with vibrant images, cooking videos, and engaging content.</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold mb-4">Built with React Goodness</h3>
          <p className="text-lg text-gray-700 mb-6">
            Our Recipe App is not just about delicious dishes; it's also a showcase of advanced React concepts and best practices. Here are some key technical highlights:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Higher Order Components (HOCs): Employing HOCs for reusable and extensible components across the app.</li>
            <li className="mb-2">Context API: Utilizing the Context API to manage global state, ensuring seamless data flow between components.</li>
            <li className="mb-2">Custom Hooks: Implementing custom hooks to encapsulate and share logic, promoting clean and modular code.</li>
            <li className="mb-2">Responsive Design: Creating a user-friendly experience with a responsive layout for various screen sizes.</li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for joining us on this culinary adventure! Whether you're a seasoned chef or just starting your cooking journey, our Recipe App is here to inspire and guide you. Happy cooking!
        </p>
      </div>
    </section>
  );
};

export default About;
