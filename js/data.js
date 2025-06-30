// js/data.js

const authors = [
    {
        id: 1,
        name: "Your Name", // Replace with actual name
        bio: "A passionate writer and developer exploring various topics and sharing insights with the world. Loves coding, coffee, and creating.",
        photoUrl: "https://via.placeholder.com/100x100.png?text=Author", // Using a placeholder URL
        socialLinks: {
            twitter: "https://twitter.com/yourusername",
            linkedin: "https://linkedin.com/in/yourusername",
            github: "https://github.com/yourusername"
        }
    }
];

const categories = [
    { id: "cat1", name: "Technology" },
    { id: "cat2", name: "Travel" },
    { id: "cat3", name: "Personal Growth" }
];

const posts = [
    {
        id: "post1",
        title: "Getting Started with Modern JavaScript",
        content: `
            <p>JavaScript has come a long way. Modern JavaScript (ES6+) offers a plethora of features that make development more efficient and enjoyable.</p>
            <p>Key features include:</p>
            <ul>
                <li>Arrow Functions</li>
                <li>Classes</li>
                <li>Modules</li>
                <li>Promises and Async/Await</li>
                <li>Destructuring</li>
                <li>Template Literals</li>
            </ul>
            <p>In this post, we'll take a brief look at each of these and how they can improve your code. For example, arrow functions provide a concise syntax for writing function expressions: <code>const add = (a, b) => a + b;</code></p>
            <p>Stay tuned for more in-depth articles on each topic!</p>
        `,
        excerpt: "A brief introduction to the key features of modern JavaScript (ES6+) that can enhance your development workflow.",
        featuredImage: "https://via.placeholder.com/800x400.png?text=Modern+JavaScript", // Placeholder image
        publishDate: "2024-03-10",
        categoryId: "cat1",
        authorId: 1,
        tags: ["javascript", "es6", "web development", "programming"]
    },
    {
        id: "post2",
        title: "My Journey to the Mountains",
        content: `
            <p>Last summer, I embarked on an unforgettable journey to the serene landscapes of the Himalayas. The crisp air, towering peaks, and the warmth of the local culture were truly breathtaking.</p>
            <img src="https://via.placeholder.com/600x350.png?text=Mountain+Scenery" alt="Mountain Scenery" style="width:100%; border-radius: 5px; margin-bottom: 15px;">
            <p>One of the highlights was a trek to a remote village, where I experienced a way of life vastly different from my own. The simplicity and connection to nature were profound.</p>
            <p>This trip wasn't just about sightseeing; it was a journey of self-discovery and a reminder of the beauty that exists beyond our daily routines. I highly recommend everyone to take such a trip at least once.</p>
        `,
        excerpt: "Recounting a memorable trip to the mountains, filled with adventure, breathtaking views, and personal reflections.",
        featuredImage: "https://via.placeholder.com/800x400.png?text=Mountain+Journey", // Placeholder image
        publishDate: "2024-02-20",
        categoryId: "cat2",
        authorId: 1,
        tags: ["travel", "adventure", "nature", "mountains", "reflection"]
    },
    {
        id: "post3",
        title: "The Power of Habit",
        content: `
            <p>Habits shape our lives more than we realize. Understanding how to build good habits and break bad ones is a cornerstone of personal growth.</p>
            <p>James Clear's "Atomic Habits" offers fantastic insights into this. The idea of making small, incremental changes (1% better each day) can lead to remarkable results over time.</p>
            <h3>Key Takeaways:</h3>
            <ul>
                <li>Make it Obvious</li>
                <li>Make it Attractive</li>
                <li>Make it Easy</li>
                <li>Make it Satisfying</li>
            </ul>
            <p>Applying these principles can help in various aspects of life, from productivity to health and well-being.</p>
        `,
        excerpt: "Exploring the importance of habits in personal development and how small, consistent changes can lead to significant outcomes.",
        featuredImage: "https://via.placeholder.com/800x400.png?text=Power+of+Habit", // Placeholder image
        publishDate: "2024-01-15",
        categoryId: "cat3",
        authorId: 1,
        tags: ["personal development", "habits", "productivity", "self-improvement"]
    },
    {
        id: "post4",
        title: "Understanding CSS Grid",
        content: `
            <p>CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.</p>
            <p>Unlike Flexbox, which is largely a one-dimensional system, Grid is two-dimensional. This means it can handle both columns and rows, making it suitable for page layouts as well as smaller components.</p>
            <pre><code>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
            </code></pre>
            <p>This example creates a three-column track grid. The <code>fr</code> unit allows you to set the size of a track as a fraction of the free space of the grid container.</p>
            <p>Grid is a powerful tool in a web developer's arsenal, and mastering it can significantly simplify layout tasks.</p>
        `,
        excerpt: "A beginner-friendly overview of CSS Grid Layout, explaining its core concepts and how it simplifies building complex web layouts.",
        featuredImage: "https://via.placeholder.com/800x400.png?text=CSS+Grid", // Placeholder image
        publishDate: "2024-03-01",
        categoryId: "cat1",
        authorId: 1,
        tags: ["css", "web design", "layout", "css grid", "front-end"]
    }
];

// To make data accessible in app.js if not using ES6 modules immediately
window.blogData = {
    authors,
    categories,
    posts
};
