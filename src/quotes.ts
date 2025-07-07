export const quotes = [
  { topic: "inspiration", text: "The best way to get started is to quit talking and begin doing." },
  { topic: "inspiration", text: "Don't let yesterday take up too much of today." },
  { topic: "inspiration", text: "It's not whether you get knocked down, it's whether you get up." },
  { topic: "wisdom", text: "Knowing yourself is the beginning of all wisdom." },
  { topic: "wisdom", text: "The only true wisdom is in knowing you know nothing." },
  { topic: "wisdom", text: "Turn your wounds into wisdom." },
  { topic: "discipline", text: "Self discipline is not just something that happens once and you are done. It's a practice" },
  { topic: "discipline", text: "Motivation gets you going but discipline keeeps you growing."},
  { topic: "discipline", text: "Discipline acts as a bridge betweens goals and accomplishment."},
  { topic: "discipline", text: "Discipline never let you feel bored but always makes ready for the next task."}

]
// Export unique topics
export const topics = [...new Set(quotes.map(q => q.topic))]
