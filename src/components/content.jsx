import React from "react";

function Content({ posts }) {
  return (
    <main>
      <p>
        <h3>This is main content</h3>
        <ul>
          {posts.map((val, idx) => (
            <li key={idx}>
              Title: {val.title} <br />
              Body: {val.body} <br /> <br />
            </li>
          ))}
        </ul>
      </p>
    </main>
  );
}

export default Content;
