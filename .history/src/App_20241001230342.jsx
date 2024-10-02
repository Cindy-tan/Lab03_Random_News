import news_feed from './sample_news_stories.json';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <h1>News Stories</h1>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <h2>{story.title}</h2>
            <p>{story.description}</p>
            <a href={story.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

