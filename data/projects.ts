export const projects = [
  {
    title: "BAPAGO",
    image: "Bapago Home.png",
    period: "April 2025 - June 2025",
    description: [
      "A restaurant discovery web application featuring a swipeable, card-based interface integrated with the Yelp API to help users explore nearby dining options in an intuitive and engaging way.",
      "Within a collaborative team environment, primary responsibility included designing and implementing the MySQL database schema and building the backend API to manage restaurant data, user preferences, and interaction history.",
      "Token-based authentication was implemented to securely handle user sessions and protect sensitive user data, ensuring proper access control across the application. Frontend interactions were integrated with backend services to support real-time updates, favorites, and personalized experiences, contributing to a scalable and maintainable full-stack architecture.",
    ],
    techs: ["MySQL", "React", "Bun", "Tailwind CSS", "TypeScript", "Yelp API"],
  },

  {
    title: "Chess Game",
    image: "Chess Game.png",
    period: "April 2025",
    description: [
      "A terminal-based chess game written in C that fully implements standard chess rules, including check and checkmate detection, castling, pawn promotion, and legal move validation.",
      "The game logic is organized into modular functions, each responsible for handling specific rule sets and game states such as move generation, board updates, and rule enforcement.",
      "Special conditions including check, promotion, and castling are explicitly validated to ensure that all player moves conform to official chess rules, emphasizing structured program design, careful state management, and defensive handling of edge cases.",
    ],
    techs: ["C", "Software Development", "Make"],
  },

  {
    title: "GOOD-VIBE CLOCK",
    image: "GOOD-VIBE-CLOCK.png",
    period: "April 2025",
    description: [
      "An embedded systems project built with an ESP32 microcontroller, OLED display, and DFPlayer Mini audio module that functions as an interactive talking clock.",
      "The system supports two user-controlled modes via physical buttons: a compliment mode that selects a stored compliment, displays it on the OLED screen, and plays a corresponding audio file through a speaker, and a time mode that retrieves, displays, and speaks the current time.",
      "The project required integrating multiple peripherals, handling button input logic, managing display updates, and synchronizing audio playback, demonstrating practical embedded programming and hardware–software integration.",
    ],
    techs: ["Arduino", "C++", "Hardware Design", "Gemini API"],
  },

  {
    title: "JJOA",
    image: "JJOA.png",
    period: "July 2025 - August 2025",
    description: [
      "JJOA is a full-stack e-commerce web application featuring separate user and administrator interfaces designed to support the complete online shopping workflow.",
      "The frontend was built using React to provide a responsive and interactive user experience, allowing customers to browse clothing items, add products to their cart, and complete the checkout process.",
      "A Node.js backend with MongoDB was implemented to manage product data, user accounts, orders, and transaction records. After purchase completion, order receipts are generated and stored, enabling administrators to view orders, update order statuses, and manage fulfillment actions.",
    ],
    techs: ["MongoDB", "JavaScript", "React", "CSS", "Node.js"],
    link: "https://my-shopping-mall-shopinity.netlify.app/",
  },

  {
    title: "MIRAEJIDO",
    image: "MIRAEJIDO.png",
    period: "August 2025",
    description: [
      "MIRAEJIDO is an AI-powered resume builder designed to help users review, refine, and improve resumes through intelligent feedback and automated enhancements.",
      "Resume content can be uploaded or entered directly and is analyzed using an AI model to suggest improvements in clarity, structure, and wording, with support for exporting polished resumes as PDF files.",
      "The application was built using a React and TypeScript frontend with Tailwind CSS, alongside a Node.js and MongoDB backend. The Gemini API was integrated to perform resume analysis and content improvement.",
    ],
    techs: [
      "MongoDB",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Gemini API",
    ],
    link: "https://dreammap-fe.netlify.app/",
  },

  {
    title: "DRONE PROJECT",
    image: "drone.jpg",
    period: "August 2025 - Present",
    description: [
      "A quadcopter drone built from the ground up under the guidance of the EECS 195 course at UC Irvine, providing hands-on experience with hardware integration and flight system configuration.",
      "The project involved assembling the drone and connecting core components such as the flight controller, radio receiver, and Wi-Fi module using soldered connections and pin interfaces. Communication between the drone and ground station was established, and firmware settings and flight parameters were configured using Mission Planner.",
      "Full sensor and transmitter calibration was performed to ensure stable and safe flight operation. Ongoing work includes integrating a Raspberry Pi to enable higher-level control using Python scripts, with the long-term goal of incorporating AI-driven control and autonomy.",
    ],
    techs: [],
  },

  {
    title: "Zottars",
    image: "zottars.png",
    period: "August 2025 - Present",
    description: [
      "Zottars is an ongoing robotics project focused on the design, construction, and control of a physical robotic system.",
      "The project involves developing the mechanical structure, electrical system, and supporting software required to operate and coordinate the robot as an integrated whole. On the mechanical side, contributed to the iterative design and refinement of the robot’s sub-arm mechanism, focusing on alignment checks, mechanical stability, and functional integration.",
      "On the software side, motor control was implemented using C to directly manage actuator behavior at a low level, while Python was used to develop higher-level control logic and hardware interfaces for coordinating system movements. YOLO-based computer vision was integrated to provide visual perception, with detected information connected to a chatbot that interprets and describes the robot’s surroundings. Future work focuses on transitioning toward AI-driven autonomous control.",
    ],
    techs: ["C", "Python", "Motor Control", "YOLO", "Robotics Systems"],
  },

  {
    title: "MAROOM",
    image: "maroom.png",
    period: "August 2025 - Present",
    description: [
      "MAROOM is a mobile application designed to help users personalize interior spaces through AI-driven furniture recommendations and an intuitive swipe-based interface.",
      "The app allows users to browse furniture items using a card-style interaction, making discovery natural and engaging while maintaining a clean, modern user experience.",
      "My responsibility is building frontend using React Native with TypeScript, following a modular and scalable architecture with smooth animations, gesture-based interactions, responsive layouts, and room layout visualization to help users understand how selected items fit within their space.",
    ],
    techs: ["React native", "Expo", "TypeScript", "Feature Sliced Design"],
  },
];
